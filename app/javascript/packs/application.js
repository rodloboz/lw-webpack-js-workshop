import 'bootstrap';
import './application.css';
import { loadDynamicBannerText } from '../components/banner.js';


const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
}
