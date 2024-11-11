export default class ToggleElement {
    constructor() {
      this.isNavOpen = false;
    }
  
    toggleNav() {
    const nav = document.querySelector('.nav');
      if (nav) {
        if (this.isNavOpen) {
          nav.classList.add('open');
        } else {
          nav.classList.remove('open');
        }
        this.isNavOpen = !this.isNavOpen; 
      }
    }
  }