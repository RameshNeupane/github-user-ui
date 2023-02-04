import "./App.css";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";
import UsernameForm from "./components/UsernameForm";

const App = () => {
  return (
    <div className="App">
      <UsernameForm />
      <div className="main">
        <Profile />
        <RepoList />
      </div>
    </div>
  );
};

export default App;
