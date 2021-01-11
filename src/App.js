import './App.css';
import { LoginContext } from './context/Login';
import { LoginContainer } from './components/LoginContainer';

function App() {
  return (
    <LoginContext>
      <LoginContainer/>
    </LoginContext>
  );
}

export default App;
