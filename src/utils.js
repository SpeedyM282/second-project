const CATS_NAMES = [
  'Kitty', 'Whiskers', 'Felix', 'Oscar',
  'Smudge', 'Fluffy', 'Angel', 'Lady',
  'Lucky', 'Luna', 'Nala', 'Oliver',
  'Ollie', 'Leo', 'Simba', 'Luna',
  'Milo', 'Tigger', 'Max', 'Lola',
  'Bella', 'Java', 'Sushi', 'Kit Kat'
];

function randomInt() {
  return Math.floor(Math.random() * (255 + 1));
}

function getColor() {
  const r = randomInt();
  const g = randomInt();
  const b = randomInt();
  return `rgb(${r},${g},${b})`;
}

function getName() {
  return CATS_NAMES[Math.floor(Math.random() * CATS_NAMES.length)];
}

function getAge() {
  return (Math.random() * 15).toFixed(0);
}


export { getName, getColor, getAge };