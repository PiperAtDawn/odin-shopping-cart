import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';
import { ItemsProvider } from './context/ItemsContext';

const App: React.FC = () => {

  return (
    <ItemsProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
