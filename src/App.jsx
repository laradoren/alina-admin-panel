import { useContext } from "react";
import "./App.module.css";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AuthForm from "./components/AuthForm/AuthForm";
import GlobalContext from "./context/GlobalContext";

function App() {
  const { currentUser } = useContext(GlobalContext);
  return (
    <div className="App">
      {currentUser.token ? <AdminPanel /> : <AuthForm />}
      
    </div>
  );
}

export default App;
