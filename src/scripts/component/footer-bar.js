class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :host {
    display: block;
    width: 100%;
    background-color: #E7AB9A;
    color: white;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    left: 0;
  }
  h2 {
    padding: 16px;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 16px;
  }
  a {
    display: block;
    padding: 16px;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    background-color: white;
    color:#E7AB9A ;
    
  }
  footer-bar {
    position: relative;
    bottom: 0;
  }
  footer-bar p {
    text-align: center;
  }

</style>
        
        <p>Copyright © 2023 - Rahmat Hidayat</p>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
