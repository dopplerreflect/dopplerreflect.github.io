import Cardioid from './Cardioid.svg';
import CornerReflector from './CornerReflector.svg';
import DRLogo from './DRLogo.svg';
import Elliptical from './Elliptical.svg';
import Epicycloid from './Epicycloid.svg';
import MaurerRose from './MaurerRose-n5-d143.svg';
import SpiralStar from './SpiralStar.svg';
import StarMandala from './StarMandala.svg';
import BlueprintStarMandala from './BlueprintStarMandala.svg';
import FlowerOfLife from './FlowerOfLife.svg';
import FlowerOfLife2 from './FlowerOfLife2.svg';
import FlowerOfLifeWithCode from './FlowerOfLifeWithCode.png';
import HexSunflower from './HexSunflower.svg';
import Metatron from './Metatron.svg';
import Tesseract from './Tesseract.svg';
import StainedGlass from './StainedGlass.png';
import YinYangThang from './YinYangThang.svg';
import StarsStarsStars from './StarsStarsStars.svg';
import VenusOrbits from './VenusOrbits.svg';

import Title from '../title-filter-e.svg';

export type ImageDetail = {
  src: string;
  title: string;
  desc: string;
};
type ImageList = ImageDetail[];

const images: ImageList = [
  {
    src: DRLogo,
    title: 'DR Logo',
    desc: 'Stylized D and R constructed on a pentagram.',
  },
  {
    src: SpiralStar,
    title: 'SpiralStar',
    desc: 'Lots of stars. And the golden ratio. And spirals. And gradients. This is the basis for a small batch of jerseys I have on order.',
  },
  {
    src: BlueprintStarMandala,
    title: 'Blueprint',
    desc: 'Mandala built on a blueprint of rings spaced on golden divisions.',
  },
  {
    src: Metatron,
    title: "Metatron's Cube",
    desc: 'A sacred geometry figure.',
  },
  {
    src: StainedGlass,
    title: 'Stained Glass',
    desc: 'Translucent image simulating stained glass.',
  },
  {
    src: StarsStarsStars,
    title: 'Nested Pentagrams',
    desc: 'More Phi magic: The regular 5-pointed star and the Golden Proportion is truly magical.',
  },
  {
    src: YinYangThang,
    title: 'Yin Yang Thang',
    desc: 'Yin and Yang getting a bit out of balance, yet maintaining some semblance of symmetry.',
  },
  {
    src: StarMandala,
    title: 'Star Mandala',
    desc: 'Mandala drawn with quadratic bezier curves using rings spaced according to golden ratio as a guide.',
  },
  {
    src: Epicycloid,
    title: 'Epicycloid',
    desc: 'From Wikipedia: "In geometry, an epicycloid is a plane curve produced by tracing the path of a chosen point on the circumference of a circle—called an epicycle—which rolls without slipping around a fixed circle"',
  },
  {
    src: HexSunflower,
    title: 'Hexagon Sunflower',
    desc: 'Sunflower pattern made with hexagons',
  },
  {
    src: FlowerOfLife,
    title: 'Flower of Life',
    desc: 'Flower of Life mandala.',
  },
  {
    src: FlowerOfLife2,
    title: 'Flower of Life 2',
    desc: 'A complete rewrite of the previous Flower of Life drawing, with better masking for transparency.',
  },
  {
    src: FlowerOfLifeWithCode,
    title: 'Flowe of Life With Code',
    desc: 'Flower of Life, with a screenshot of some of the code that generated it as a background.',
  },
  {
    src: CornerReflector,
    title: 'Corner Reflector',
    desc: 'Divide the sides of square into golden sections and bounce a line from a corner off of it, and add some translucent colors.',
  },
  {
    src: Tesseract,
    title: 'Tesseract',
    desc: 'A 2-D representation of a 4-D cube.',
  },
  {
    src: VenusOrbits,
    title: 'Venus Orbits',
    desc: "For every eight orbits Earth makes around the Sun, Venus makes thirteen. If you were to periodically draw a line between the two planets over a thirteen year timeframe, you'd get this.",
  },
  {
    src: Cardioid,
    title: 'Cardioid',
    desc: 'Colored dots arranged in a <a href="https://en.wikipedia.org/wiki/Cardioid" target="_blank">Cardioid</a> pattern.',
  },
  {
    src: MaurerRose,
    title: 'Maurer Rose',
    desc: `I don't really know a way to succinctly explain this. See the Wikipedia article for <a href="https://en.wikipedia.org/wiki/Maurer_rose" target="_blank">Maurer Rose</a>.`,
  },
  {
    src: Elliptical,
    title: 'Elliptical',
    desc: `Choose a point within (or outiside of) a circle and draw rays from that point to the edge of the circle. Rotate each ray at its midpoint 90 degrees. The resulting lines create overlap to create an ellipse with the circle's midpoint and the chosen point as its focal points. This is that, five times.`,
  },
  {
    src: Title,
    title: 'dopplerreflect Title',
    desc: 'Image for the header of this site. I tried to incorporate a blue and red blur behind the text, because... doppler shift.',
  },
];

export { images };
