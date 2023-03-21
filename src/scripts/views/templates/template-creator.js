/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
      alt="${restaurant.name}" />
    <div class="card-body">
      <h2 class="title">${restaurant.name}</h2>
      <div class="card-info">
        <div class="place-info">
          <i class='bx bxs-map' style='color:#B0B0B0'></i>
          <p class="icon-info">${restaurant.city}</p>
        </div>
        <div class="rating-info">
          <i class='bx bxs-star' style='color:#FFD700'></i>
          <p class="icon-info">${restaurant.rating}</p>
        </div>
      </div>
      <p class="description">${restaurant.description}</p>
      <button onclick="document.location='${`/#/detail/${restaurant.id}`}'" >Lihat Selengkapnya</button>
    </div>
  </div>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="heading-details">
    <div class="pic-detail">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
        alt="${restaurant.name}" />
    </div>
    <div class="desc-details">
      <div class="head-detail">
        <h1 class="title">${restaurant.name}</h1>
      </div>
      <div class="info-details">
        <div class="city-info">
          <i class="bx bxs-city"></i>
          <p>${restaurant.city}</p>
        </div>
        <div class="address-info">
          <i class="bx bxs-map"></i>
          <p>${restaurant.address}</p>
        </div>
        <div class="rating-info">
          <i class="bx bxs-star" style="color: #ffd700"></i>
          <p>${restaurant.rating}</p>
        </div>
      </div>
      <div class="restaurant-description">
        <h2>Deskripsi</h2>
        <p>${restaurant.description}</p>
      </div>
      <div class="category-details">
        <div class="category-item">
          ${restaurant.categories.map((m) => `<p>${m.name}</p>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <div class="menu-details">
    <h3>Menu</h3>
    <div class="item-details">
      <div class="menu-col-1">
        <h4>Makanan</h4>
        ${restaurant.menus.foods
    .map(
      (m) => `<ol class="eat-menu">
          <li class="eat-item">${m.name}</li>
        </ol>`,
    )
    .join('')}
      </div>
      <div class="menu-col-2">
        <h4>Minuman</h4>
        ${restaurant.menus.drinks
    .map(
      (m) => `<ol class="eat-menu">
          <li class="eat-item">${m.name}</li>
        </ol>`,
    )
    .join('')}
        
      </div>
    </div>
  </div>

  <div class="review-details">
    <h3>Review</h3>
    <div class="customer-details">
    ${restaurant.customerReviews
    .map(
      (m) => `<div class="view-details">
        <div class="profile-details">
          <div class="picture-details">
            <img src="../public/profiles/user.png" alt="${m.name}" />
          </div>
          <div class="user-details">
            <h4>${m.name}</h4>
            <p>${m.date}</p>
          </div>
        </div>
        <div class="comment-details">
          <p>${m.review}</p>
        </div>
        <div class="comment-interaction">
          <a href="#" class="comment-reply-link">Balas</a>
          <button class="comment-share-btn">Bagikan</button>
        </div>
      </div>`,
    )
    .join('')}
      </div>
      <div class="customer-review">
        <h4>Leave a Reply</h4>
        <form method="post"
          class="post-review">
          <p class="text-heading">Name</p>
          <input type="text" id="name" required />
          <p class="text-heading heading-2">Comment</p>
          <textarea
            name="review"
            id="review"
            cols="45"
            rows="8"
            maxlength="65525"
            required
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class='bx bx-heart' style='color:#ff498b' aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class='bx bxs-heart' style='color:#ff498b' ></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};