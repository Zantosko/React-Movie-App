import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/SiteNav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <SiteNav className="Navbar"/>
      <Main className="Main"/>
    </div>
  );
}

export default App;
