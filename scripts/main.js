import { videos } from '../data/videos.js'

export function loadVideos() {
  let videosHTML = '';

  videos.forEach((video) => {
    videosHTML += `
      <div class="video-preview">
        <div class="thumbnail-row">
          <a href="${video.videoLink}">
            <img class="thumbnail" src="${video.videoThumbnail}">
          </a>
          <div class="video-time">${video.videoLength}</div>
        </div>

        <div class="video-details-grid">
          <div class="channel-picture">
            <div class="profile-picture-container">
              <a href="${video.channelLink}">
                <img class="profile-picture" src="${video.profilePicture}">
              </a>

              <div class="channel-picture-tooltip">
                <img src="${video.profilePicture}">

                <div class="channel-info">
                  <p class="name">${video.channelName}</p>
                  <p class="subscribers">${video.subscribers} Subscribers</p>
                </div>
              </div>
            </div>
          </div>

          <div class="video-info">
            <p class="video-title">
              <a class="video-link" href="${video.videoLink}">
                ${video.title}
              </a>
            </p>

            <p class="video-author">
              <a href="${video.channelLink}">
                ${video.channelName}
              </a>
            </p>

            <p class="video-stats">
              ${video.videoViews} &#183; ${video.timeDuration}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-video-grid')
    .innerHTML = videosHTML;
}

loadVideos();