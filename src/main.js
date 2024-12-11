'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPixabay } from './js/pixabay-api';
import { createMarkupPixabay, iziToastCondition } from './js/render-functions';

const form = document.querySelector('.form-search-img');
export const listImages = document.querySelector('.gallery');

form.addEventListener('submit', handleSearchImages);
function handleSearchImages(event) {
  event.preventDefault();

  if (!event.target.elements.titleImage.value.trim()) {
    return;
  }
  //   listImages.innerHTML = '';
  console.log('Everything will be normal');
  fetchPixabay(event.target.elements.titleImage.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToastCondition();
      } else {
        listImages.insertAdjacentHTML(
          'beforeend',
          createMarkupPixabay(data.hits)
        );
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: '250',
          className: 'wrapper',
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log('Success');
    });
}
