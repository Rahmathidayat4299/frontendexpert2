import data from "../../DATA.json";

const main = () => {
  let restaurantElement = "";

  data.restaurants.forEach((resto) => {
    restaurantElement += `
      
    <style>
   
    </style>
        <section class="box">
            <img src="${resto.pictureId}" alt="${resto.name} Image">
            <p class="info">${resto.city} <b>(${resto.rating})🌟</b></p>
            <h3 class="title">${resto.name}</h3>
            <p>${resto.description}</p>
        </section>`;
  });

  document.querySelector(".wrapper").innerHTML = restaurantElement;
};

export default main;
