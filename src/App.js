import './App.css';
import Waves from './components/Waves';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Themes from './components/Themes';
import Loading from './components/Loading';
import {useState} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }
  , 3000);
  return (
      <>
        {loading?<Loading/>:""}
        <Waves/>
        <Skills/>
        <Projects/>
      </>
  );
}

export default App;
