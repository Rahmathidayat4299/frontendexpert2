class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowDOM
      .querySelector(".drawer-icon")
      .addEventListener("click", () => {
        this.toggleDrawer();
      });
    const hamburgerButtonElement = document.querySelector("#hamburger");
    const drawerElement = document.querySelector("#drawer-icon");
    const mainElement = document.querySelector("main");

    hamburgerButtonElement.addEventListener("click", (event) => {
      drawerElement.classList.toggle("open");
      event.stopPropagation();
    });

    mainElement.addEventListener("click", (event) => {
      drawerElement.classList.remove("open");
      event.stopPropagation();
    });
  }
  // method toggleDrawer() akan mengubah class dari elemen .nav-menu menjadi .show
  // yang akan menampilkan menu navigasi pada layar mobile. Method addEventListener()
  toggleDrawer() {
    const navMenu = this.shadowDOM.querySelector(".nav-menu");
    navMenu.classList.toggle("show");
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        
        .container * {
          display: flex;
          min-height: 44px;
          min-width: 44px;
          box-sizing: border-box;
        }
          :host {
            display: block;
            width: 100%;
            background-color: cornflowerblue;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            padding: 20px;
          }
         
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          
          .nav-menu {
            display: flex;
            list-style: none;
            display: flex;
            min-height: 44px;
            min-width: 44px;
          }
          .nav-menu li {
            margin-right: 20px;
          }
          .nav-menu li:last-child {
            margin-right: 0;
          }
          .nav-menu a {
            color: white;
            text-decoration: none;
            font-weight :bold;
            min-height: 44px;
            min-width: 44px;

          }
          .nav-menu a:hover {
            text-decoration: none;
            position: relative;
            transition: all 0.3s ease-in-out;
          }
          
          .nav-menu a:hover::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: white;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }
          
          .nav-menu a:hover::before {
            transform: scaleX(1);
          }
          
          .drawer-icon {
            display: none;
            cursor: pointer;
          }
          @media screen and (max-width: 600px) {
            .nav-menu {
              display: none;
              
            }
            .drawer-icon {
              display: block;
            }
          }
          .logo{
            justify-content: start;
            font-weight :bold;

          }
          .logo img {
            height: 30px;

          }

          /* Tampilkan menu navigasi pada layar mobile */
          .nav-menu.show {
            display: block;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            padding: 16px;
            background-color:#E7AB9A ;
            ;
            z-index: 1;
          }
          .nav-menu.show li {
            margin-bottom: 16px;
            min-height: 44px;
            min-width: 44px;
          }
  
          /* Animasi ketika menu navigasi ditampilkan */
          @keyframes slideIn {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .nav-menu.show li {
            animation: slideIn 0.5s forwards;
            animation-delay: calc(var(--i) * 0.1s);
          }
  
          /* Tambahkan class active pada icon hamburger saat menu navigasi ditampilkan */
          .drawer-icon.active {
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
          }

          /* Media query untuk layar dengan lebar 600px atau kurang */
@media (max-width: 600px) {
  .drawer-icon {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    background-color: transparent;
    z-index: 2;
    cursor: pointer;
  }
  .icon-bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .icon-bar:first-child {
    margin-top: 0;
  }
  .drawer-icon.active .icon-bar:nth-child(2) {
    opacity: 0;
  }
  .drawer-icon.active .icon-bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .drawer-icon.active .icon-bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
<div class="container">
  <div class="logo">RESTAURANT PADANG 🥘</div>
  <nav>
    <ul class="nav-menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="#">Favorite</a></li>
      <li><a href="https://www.linkedin.com/in/rahmat-hidayat-a19419136/">About Us</a></li>
    </ul>
  </nav>
  <a class="drawer-icon" id ="hamburger" href="#">&#9776;</a>
</div>

        
      `;
  }
}

customElements.define("app-bar", AppBar);
