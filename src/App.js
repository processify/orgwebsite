import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './AppRouter';
import Layout from './components/Layout';

function App() {
  return (
   
    <div className="App">
     <Router>
      <Layout>
        <AppRouter/>
      </Layout>
      </Router>
    </div>
   
  );
}

export default App;
