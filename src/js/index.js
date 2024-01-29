alert('still in refactoring - mess in code')
import './styles/reset/reset.css'
import './styles/style.css'

import logoImage from '../images/banner/drofarmaptekanamyslow.webp'
import drug from '../images/leki.webp';

export const images = {
    logo:logoImage,
    heroBacground: drug
}
export default images

const logo = document.querySelector('.logo')
logo.setAttribute('src', images.logo);

const heroDrug = document.querySelector('.hero');
heroDrug.style.backgroundImage = `url(${images.heroBacground})`;















