import HeaderComponent from "./components/layout/Header.js"; 

document.addEventListener('DOMContentLoaded', () => {
  new App();
});

export default class App {
  constructor() {
    this.render();
  }

  render() {
    const app = document.querySelector('.app');
    if (!app) return;
    const header = new HeaderComponent();
    app.appendChild(header);
  }
}