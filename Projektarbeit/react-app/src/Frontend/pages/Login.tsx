import '../css/App.css';
import JWT from '../molecules/JWTButton';
import LoginForm from '../organisms/LoginForm';

function Login() {
  return (
    <div className="App">
      <LoginForm/>
      <JWT/>
    </div>
  );
}
export default Login;
