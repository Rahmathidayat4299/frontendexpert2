class SearchWrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="content-wrapper">
        <div class="container">
          <div class="heading">
            <h1 class="title-heading">Explore Restaurant</h1>
          </div>
  
          <div class="btn-wrapper">
            <div class="input-group">
              <input type="text" class="form-control input-keyword" placeholder="Search Restaurant.." required>
              <button class="search-button" type="button">Search</button>
            </div>
          </div>
  
          <div class="gallery-item" id="resto-item"></div>
  
        </div>
      </div>
      `;
  }
}

customElements.define("search-wrapper", SearchWrapper);
