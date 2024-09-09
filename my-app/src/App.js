import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import NavBarChild from './components/NavBarChild';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Content />
      <NavBarChild />
      <NavBarForm />
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;