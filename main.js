const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener('click', () => {
  getRandomDogImage()
    .then(imgUrl => {
      img.src = imgUrl;
    })
    .catch(console.error);
});

function getRandomDogImage() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      const imgUrl = JSON.parse(this.response).message;
      resolve(imgUrl);
    });
    xhr.open('GET', 'https://dog.ceo/api/breed/pug/images/random');
    xhr.send();
  });
}