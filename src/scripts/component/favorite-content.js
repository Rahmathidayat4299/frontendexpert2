class FavoriteContent extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="favorite-wrapper">
        <div class="container">
          <div class="heading">
            <h1 class="title-heading">Favorite Restaurant</h1>
            <p class="sub-heading">Your Favorite Restaurant</p>
          </div>
  
          <div class="gallery-item" id="resto-item"></div>
  
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('favorite-content', FavoriteContent);