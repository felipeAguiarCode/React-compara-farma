import { LoginForm } from '../../components';
import './Login-page.css'

function LoginPage() {

  return (

    <div className="wrapper fadeInDown">
      <div id="formContent">

        <header className="fadeIn first">
          <h2 className="active"> COMPARA FARMA</h2>
        </header>

        <LoginForm />

        <footer id="formFooter">
          <a className="underlineHover" href="#">Esqueceu sua senha ?
          </a>
        </footer>

      </div>
    </div>
  )
}

export default LoginPage;