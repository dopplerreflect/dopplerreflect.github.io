import './App.css';
import DRLogo from './dr-logo.svg';
import CloseButton from './close-button.svg';
import Title from './title-filter-e.svg';
import { images, ImageDetail } from './images/index';
import { SocialIcon } from 'react-social-icons';
const sanitize = (s: string): string => s.replace(/[^\w]/g, '').toLowerCase();

const hideImageDetails = (): void =>
  document
    .querySelectorAll('.Detail')
    .forEach(d => d.classList.remove('visible'));

const displayImageDetails = (image: ImageDetail) => {
  hideImageDetails();
  const detailsDiv = document.querySelector(`.Detail#${sanitize(image.title)}`);
  detailsDiv?.classList.add('visible');
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.code === 'Escape') hideImageDetails();
};

document.addEventListener('keydown', handleKeyPress);

function App() {
  return (
    <div className="App">
      <header>
        <img id="logo" src={DRLogo} />
        <img id="title" src={Title} />
      </header>
      <main>
        <section id="Gallery">
          {images.map(image => (
            <div className="Image" key={image.src}>
              <img src={image.src} onClick={() => displayImageDetails(image)} />
              <ImageDetailCard image={image} />
            </div>
          ))}
        </section>
        <section id="About">
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
        </section>
        <section id="Connect">
          <h1>Connect</h1>
          <SocialIcon
            target="_blank"
            bgColor="hsl(225, 100%, 20%)"
            fgColor="hsl(45, 100%, 50%)"
            url="https://facebook.com/doppler"
          />
          <SocialIcon
            target="_blank"
            bgColor="hsl(225, 100%, 20%)"
            fgColor="hsl(45, 100%, 50%)"
            url="https://twitter.com/dopplerreflect"
          />
          <SocialIcon
            target="_blank"
            bgColor="hsl(225, 100%, 20%)"
            fgColor="hsl(45, 100%, 50%)"
            url="https://github.com/dopplerreflect/"
          />
          <SocialIcon
            target="_blank"
            bgColor="hsl(225, 100%, 20%)"
            fgColor="hsl(45, 100%, 50%)"
            url="https://www.instagram.com/dopplerreflect/"
          />
          <SocialIcon
            target="_blank"
            bgColor="hsl(225, 100%, 20%)"
            fgColor="hsl(45, 100%, 50%)"
            url="mailto:doppler@gmail.com"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
type ImageDetailProps = {
  image: ImageDetail;
};
const ImageDetailCard = ({ image }: ImageDetailProps) => (
  <div className="Detail" id={sanitize(image.title)}>
    <h1>{image.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: image.desc }} />
    <img src={image.src} />
    <img
      src={CloseButton}
      className="CloseButton"
      onClick={() => hideImageDetails()}
    />
  </div>
);
