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
      swapLoadingIconForNewImage();
    })
    .catch(err => {
      swapLoadingIconForNewImage();
      console.error(err);
    });
});

function getRandomDogImage() {
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const imgUrl = JSON.parse(xhr.response).message;
          resolve(imgUrl);
        } else {
          reject('Error retrieving dog, so much sad...');
        }
      } 
    };

    xhr.open('GET', 'https://dog.ceo/api/breed/pug/images/random');
    xhr.send();

  });
}

function swapLoadingIconForNewImage() {
  setTimeout(() => {
    loadingIcon.classList.add('hidden');
    figure.classList.remove('hidden');
  }, 1200);
}