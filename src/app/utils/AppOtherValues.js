export const MAX_SCREEN_MOBILE_WIDTH = 890;

const randomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start));
}

export function getRandomLogoForWishCard() {
  const logos = [
    require('../assets/kid.png'),
    require('../assets/family.png'),
    require('../assets/family_2.png'),
    require('../assets/family_3.png'),
    require('../assets/lunar_celebrate_1.png'),
    require('../assets/family_4.png'),
    require('../assets/couple.png'),
    require('../assets/lunar_celebrate_2.png'),
    require('../assets/lunar_celebrate_3.png'),
    require('../assets/lunar_celebrate_4.png'),
    require('../assets/couple_2.png'),
    require('../assets/kid_2.png'),
  ];
  return logos[randomNumber(0, logos.length)];
}