import './App.css';
import Waves from './components/Waves';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Themes from './components/Themes';
import Loading from './components/Loading';
import {useState} from 'react';
import Contacts from './components/Contacts';

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
        <Contacts/>
      </>
  );
}

export default App;
