import { loadVideos } from './main.js';

document.querySelector('.js-youtube-logo')
  .addEventListener('click', () => {
    loadVideos();
  });