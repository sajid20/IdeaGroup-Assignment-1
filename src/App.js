// import logo from './logo.svg';
import "./App.css";
import DenseAppBar from "./components/AppBar";
import HomePage from "./components/HomePage";
import Parent from "./components/Parent";
import About from "./components/About";
// import Accounts from "./components/Accounts";
// import TabScrollButton from '@mui/material/TabScrollButton';

function App() {

  return (
    <div className="App">
      <DenseAppBar />
      <HomePage />
      <Parent/>
      <About />
      
   
    </div>
  );
}

export default App;
