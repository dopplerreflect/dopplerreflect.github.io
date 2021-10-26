import './App.css';
import DRLogo from './dr-logo.svg';
import Title from './title-filter.svg';
function App() {
  return (
    <div className="App">
      <header>
        <img id="logo" src={DRLogo} />
        <img id="title" src={Title} />
      </header>
      <main>
        <h1>About</h1>
        <p>
          Hello, I'm <strong>doppler</strong>, aka David Rose.
        </p>
        <p>
          When I'm not teaching people to skydive or filming someone's first
          tandem skydive, I enjoy creating visual art with code.
        </p>
        <p>
          This website will serve as a showcase for some of my work. In the
          future, I hope to share the work via physical media such as on
          jerseys, canvas, decals, etc.
        </p>
      </main>
    </div>
  );
}

export default App;
