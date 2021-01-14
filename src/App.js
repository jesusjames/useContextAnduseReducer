import './App.css';
import { LoginProvider } from './context/Login';
import { LoginContainer } from './components/LoginContainer';

function App() {
  return (
    <LoginProvider>
      <LoginContainer/>
    </LoginProvider>
  );
}

export default App;
