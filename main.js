const button = document.querySelector('button');
const img = document.querySelector('img');
const figure = document.querySelector('figure');
const loadingIcon = document.querySelector('.annoying-dog');

button.addEventListener('click', () => {
  figure.classList.add('hidden');
  loadingIcon.classList.remove('hidden');
  getRandomDogImage()
    .then(imgUrl => {
      img.src = imgUrl;
      setTimeout(() => {
        loadingIcon.classList.add('hidden');
        figure.classList.remove('hidden');
      }, 1200);
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