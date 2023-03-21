import '../../component/app-bar';
import '../../component/detail-wrapper';
import RestaurantSource from '../../data/restaurant-source';
import API_ENDPOINT from '../../global/api-endpoint';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <app-bar></app-bar>
    <detail-wrapper></detail-wrapper>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantObject = await RestaurantSource.detailRestaurant(url.id);
    const { restaurant } = restaurantObject;
    const restaurantContainer = document.querySelector('#resto-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    const formReview = document.querySelector('.post-review');
    formReview.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputName = document.getElementById('name');
      const inputReview = document.getElementById('review');

      try {
        const response = await fetch(API_ENDPOINT.REVIEW, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: url.id,
            name: inputName.value,
            review: inputReview.value,
          }),
        });

        const responseJson = await response.json();
        this.afterRender(responseJson);
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default Detail;