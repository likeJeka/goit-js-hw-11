import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('input'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
const lightbox = new SimpleLightbox('.gallery a');

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.searchQuery.value.trim();

  if (!value) {
    iziToast.show({
      message: 'Enter the value',
      color: 'red',
    });
    refs.galleryEl.innerHTML = ''; 
    return;
  }

  showLoader();
  getImages(value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
        });
        refs.galleryEl.innerHTML = ''; 
        return;
      }
      refs.galleryEl.innerHTML = '';
      const markup = renderImages(data.hits);
      refs.galleryEl.insertAdjacentHTML('beforeend', markup);

      lightbox.refresh();
    })
    .catch(error => {
      console.log('Error fetching images:', error);
    })
    .finally(() => {
      hideLoader();
    });
});

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}
