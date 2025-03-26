# GitHub User Repositories Viewer

This is a React application that allows users to search for a GitHub user by their username and view their public repositories. The application uses the GitHub API to fetch and display repositories of the entered user.
- You can visit the live site here: https://github-perfil-react-five.vercel.app/
  
![image](https://github.com/user-attachments/assets/778ecd6f-89f0-478b-8532-113d946913dd)

## Features

- **Search GitHub Users**: Enter a GitHub username and press Enter to see the repositories associated with that user.
- **Error Handling**: If the user doesn't exist, an error message will be displayed.
- **Loading State**: While fetching data, a loading message is shown.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Technologies Used

- **React**: For building user interface. It is used to create the components and manage the state of the app.
- **Vite**: It is used to bundle the application and serve it in development mode.
- **CSS Modules**: A way to locally scope CSS styles, used for the styling components.
- **Fetch API**: The built-in JavaScript API to fetch data from the GitHub API.
- **Hooks**: React hooks (`useState`, `useEffect`) to manage state and side effects in the app.

## How It Works

1. The user enters a GitHub username in the input field and presses Enter.
2. The `ReposList` component fetches the public repositories of the user from GitHub using the API endpoint `https://api.github.com/users/{username}/repos`.
3. If the user is found, the repositories are displayed in a list. Each repository shows the name, programming language, and a link to visit it on GitHub.
4. If the user is not found or there is an error fetching the repositories, an error message is displayed.
5. The app also handles loading states while waiting for the API response.

## Installation

To get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/deborasete/github-perfil_react.git

2. Navigate to the project folder:
   ```bash
   cd github-user-repo-viewer

3. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

## Developed by:  


- LinkedIn: [Debora Sete](https://www.linkedin.com/in/debora-sete/)
- Email: [sete.debora@gmail.com](mailto:sete.debora@gmail.com)
