'use strict';
import { listImages } from '../main';

const PIXABAY_KEY = '47506069-50a24acca197abc732faaa7f2';
const URL_PIXABAY = 'https://pixabay.com/api/';

export function fetchPixabay(term) {
  const params = new URLSearchParams({
    key: PIXABAY_KEY,
    q: term,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  listImages.innerHTML = '<div div class="loader" ></div>';

  return fetch(`https://pixabay.com/api/?${params}`).then(resolve => {
    if (!resolve.ok) {
      throw new Error(resolve.statusText);
    }
    listImages.innerHTML = '';
    return resolve.json();
  });
}
