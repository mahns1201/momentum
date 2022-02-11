// const images = ['https://source.unsplash.com/random/'];
// const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');

bgImage.src = `https://source.unsplash.com/random/`;
document.body.appendChild(bgImage);
