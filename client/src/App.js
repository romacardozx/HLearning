import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />
     
    </div>
  );
}

export default App;
