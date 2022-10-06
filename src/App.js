import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main data={props.data} />
      </div>
    </BrowserRouter>
  );
}

export default App;
