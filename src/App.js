import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner'
import Skill from './Components/Skill';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skill></Skill>
    </div>
  );
}

export default App;
