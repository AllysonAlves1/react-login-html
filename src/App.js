import myimg from './assets/foto-digital.png';
import './styles.css';

function App() {
  return (
    <main className="login__container">
      <div className="img__container">
        <img src={myimg} className="img" alt="pessoa no notebook com uma digital sobre a imagem" />
      </div>
      <form method="post" className="login__form">
        <div className="form__content">
          <h2 className="login__title">Login</h2>
          <div className="user__inputs">
            <div>
              <h3>Email</h3>
              <input placeholder="Digite seu email" text="Email" type="text" className="user__input" />
            </div>
            <div>
              <h3>Senha</h3>
              <input placeholder="Digite sua senha" text="Senha" type="password" className="user__input" />
            </div>
            <button type="submit" className="button">
              Acessar
            </button>
          </div>
        </div>
      </form>
    </main >
  );
}

export default App;
