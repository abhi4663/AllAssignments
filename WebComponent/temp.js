fetch('./index.html')
  .then((res) => res.text())
  .then((data) => demo(data));
console.log(data);
function demo(data) {
  let template = document.createElement('template');
  template.innerHTML = data;

  class UserCard extends HTMLElement {
    constructor() {
      super();

      this.showInfo = true;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
      this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
      this.showInfo = !this.showInfo;

      const info = this.shadowRoot.querySelector('.info');
      const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

      if (this.showInfo) {
        info.style.display = 'block';
        toggleBtn.innerText = 'Hide Info';
      } else {
        info.style.display = 'none';
        toggleBtn.innerText = 'Show Info';
      }
    }

    connectedCallback() {
      this.shadowRoot
        .querySelector('#toggle-info')
        .addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
      this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
  }

  window.customElements.define('user-card', UserCard);
}
