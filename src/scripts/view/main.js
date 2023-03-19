import data from "../../DATA.json";

const main = () => {
  let restaurantElement = "";

  data.restaurants.forEach((resto) => {
    restaurantElement += `
      
    <style>
   
    </style>
        <section tabindex="0" class="box">
            <img tabindex="0" src="${resto.pictureId}" alt="${resto.name} Image">
            <p tabindex="0" class="info">${resto.city} <b>(${resto.rating})🌟</b></p>
            <h3 tabindex="0" class="title">${resto.name}</h3>
            <p tabindex="0">${resto.description}</p>
        </section>`;
  });

  document.querySelector(".wrapper").innerHTML = restaurantElement;
};

export default main;
