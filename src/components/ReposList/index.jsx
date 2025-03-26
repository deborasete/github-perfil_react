import { useEffect, useState } from "react";
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [ocorreuErro, setOcorreuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setOcorreuErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Usuário não encontrado');
            }
            return res.json()
        })
        .then(resJson => {
            setTimeout(() => {
                setRepos(resJson);
                setEstaCarregando(false)
            }, 3000)
        })
        .catch(e => {
            setOcorreuErro(true);
            setEstaCarregando(false);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando && <h1>Carregando...</h1>}
            {ocorreuErro && <h2 style={{ color: 'red' }}>Usuário não encontrado, tente novamente.</h2>}
            {!estaCarregando && !ocorreuErro && repos.length > 0 && (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} 
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} 
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;