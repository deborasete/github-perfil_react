import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import './App.css'

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
      <label htmlFor="githubUser" className="label">Digite um usuário do GitHub e pressione Enter:</label>
      <input id="githubUser" className="inputField" type="text"  placeholder="Ex: deborasete" onKeyDown={(e) => {
        if (e.key === "Enter") {
          setNomeUsuario(e.target.value);
        }
      }} 
      />

      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  );  
}

export default App
