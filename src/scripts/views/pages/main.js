/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
import "../../component/search-wrapper";
import "../../component/HeroElement";
import RestaurantSource from "../../data/restaurant-source";
import CONFIG from "../../global/config";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Main = {
  async render() {
    return `
    <hero-element></hero-element>
    <search-wrapper></search-wrapper>
    // <testimonial-bar></testimonial-bar>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.mainRestaurants();
    const restaurantsContainer = document.querySelector("#resto-item");
    console.log(restaurants);

    restaurantsContainer.innerHTML = "";
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });

    async function showRestaurant(keyword) {
      const response = await fetch(CONFIG.SEARCH_RESTAURANT + keyword);
      const responseJson = await response.json();
      return responseJson.restaurants;
    }

    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", async () => {
      const inputKeyword = document.querySelector(".input-keyword");
      const searchRestaurants = await showRestaurant(inputKeyword.value);
      restaurantsContainer.innerHTML = "";
      searchRestaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    });
  },
};

export default Main;
