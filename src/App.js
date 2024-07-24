import './App.css';
import Nav from './components/Nav/Nav';
import Boards from './components/Boards/Boards';
import CustomTable from './components/CustomTable/CustomTable';
import SearchAdd from './components/SearchAdd/SearchAdd';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="app-container">
      <div className="menu-container">
        <Menu/>
      </div>
      <div className="content-container">
        <Nav/>
        <Boards/>
        <SearchAdd/>
        <CustomTable/>
      </div>
    </div>
  );
}

export default App;
