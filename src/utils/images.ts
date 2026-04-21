import { ImageSourcePropType } from 'react-native';

type ImageMap = {
  LOGO: ImageSourcePropType;
  LOGO2: string;
};

const IMG: ImageMap = {
  LOGO: require('../3665969.png'),
  LOGO2: 'https://i.ytimg.com/vi/gmkp0W-sEao/maxresdefault.jpg',
};

export default IMG;
