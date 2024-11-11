import  ToggleElement from "../../utils/toggleElement.js"; 

export default class HeaderComponent {
  constructor() {
    this.isNavOpen = false;
    this.toggle = new ToggleElement(); 
    this.render();
}

    render() {
   
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'header';

    const logoFigure = document.createElement('figure');
    logoFigure.className = 'header__logo';

    const logoImg = document.createElement('img');
    logoImg.className = 'logo';
    logoImg.src = '../../images/banner/drofarmaptekanamyslow.webp';
    logoImg.alt = 'Logo'; 

    logoFigure.appendChild(logoImg);

    const navContainer = document.createElement('div');
    navContainer.className = 'header__navigation';

    const hamburgerButton = document.createElement('button');
    hamburgerButton.className = 'hamburger';
    hamburgerButton.innerHTML = '<i class="fas fa-bars fa-lg hamburger__icon"></i>';
    hamburgerButton.onclick = () => this.toggle.toggleNav(); 

    const headlineDiv = document.createElement('div');
    headlineDiv.className = 'headline';
    headlineDiv.innerHTML = `<h3>Apteka Non-Stop 2<br>Jelcz-Laskowice</h3>`;

    const nav = document.createElement('nav');
    nav.className = 'nav';

    const navMenu = document.createElement('ul');
    navMenu.className = 'nav__menu menu';

    const menuItems = [
      { text: 'Strona główna', href: '#main' },
      { text: 'Kontakt', href: '#contact' },
      { text: 'Praca', href: '/' },
    ];

    menuItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'menu__item';

      const link = document.createElement('a');
      link.className = 'link';
      link.href = item.href;
      link.textContent = item.text;

      li.appendChild(link);
      navMenu.appendChild(li);
    });

    const closeButton = document.createElement('button');
    closeButton.className = 'nav__button close';
    closeButton.innerHTML = '<i class="fa-solid fa-xmark nav__button__icon"></i>';
    closeButton.onclick = () => this.toggle.toggleNav(); 

    nav.appendChild(navMenu);
    nav.appendChild(closeButton);

    navContainer.appendChild(hamburgerButton);
    navContainer.appendChild(headlineDiv);
    navContainer.appendChild(nav);

    header.appendChild(logoFigure);
    header.appendChild(navContainer);

    document.body.prepend(header);
  }
}