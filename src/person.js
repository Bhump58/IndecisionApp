export const isAdult = (age) => {
  if(age >= 18 ) {
    return 'This person is an adult';
  } else {
    return 'This person is not an adult';
  }
};

export const canDrink = (age) => {
  if(age >= 21) {
    return true;
  } else {
    return 'You are not old enough kid';
  }
};

const isSenior = (age) => age >= 65;

export default isSenior;
