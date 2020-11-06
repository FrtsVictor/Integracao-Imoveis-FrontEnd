import img1 from '../../assets/random/1.jpg';
import img2 from '../../assets/random/2.jpg';
import img3 from '../../assets/random/3.jpg';
import img4 from '../../assets/random/4.jpg';
import img5 from '../../assets/random/5.jpg';
import img6 from '../../assets/random/6.jpg';
import img7 from '../../assets/random/7.jpg';
import img8 from '../../assets/random/8.jpg';
import img9 from '../../assets/random/9.jpg';

const houseImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

export const RandomImg = () => {
  const rand = Math.floor(Math.random() * 9);
  return houseImages[rand];
};
