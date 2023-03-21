class HeroElement extends HTMLElement {
    constructor() {
      super();
      this.image = this.getAttribute('image') || '';
      this.shadowDOM = this.attachShadow({mode: 'open'});
      this.render();
    }
  
    connectedCallback() {
      window.addEventListener('resize', this.render.bind(this));
    }
  
    disconnectedCallback() {
      window.removeEventListener('resize', this.render.bind(this));
    }
  
    get heroImage() {
      return `
        background-image: url('${this.image}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
      `;
    }
  
    render() {
      const screenWidth = window.innerWidth;
      let heroHeight = '100vh';
  
      if (screenWidth >= 1200) {
        heroHeight = 'calc(100vh - 64px)';
      }
  
      this.shadowDOM.innerHTML = `
        <style>
          :host {
            display: block;
            position: relative;
            height: ${heroHeight};
            overflow: hidden;
          }
          .hero-image {
            ${this.heroImage}
          }
        </style>
  
        <div class="hero-image"></div>
      `;
    }
  }
  
  customElements.define('hero-element', HeroElement);