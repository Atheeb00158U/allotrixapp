import {createHeroSection} from "./landingPage/home.js";
import {whyChooseContainer} from "./landingPage/whyAllotrix.js";
import {features} from "./landingPage/features.js";
import {pricing} from "./landingPage/pricing.js";
import {lifeTimeOffer} from "./landingPage/lifeTimeOffer.js";
import {footer} from "./landingPage/footer.js";
import {showLoadingScreen, hideLoadingScreen, createLoadingScreen} from "./loadingPage.js";
import {testimonials} from "./testimonials.js";
import { faqsPage } from "./faqs.js";
import {downloadPage} from "./download.js";
import {createPopup, clearCookie} from "./account.js";
import{firebaseConfig} from "./firebaseConfig.js"
import{getCookie} from "./renderer.js"
import{partners} from "./landingPage/partners.js"


export{
    createHeroSection,
    whyChooseContainer,
    features,
    createPopup,
    showLoadingScreen,
    hideLoadingScreen,
    createLoadingScreen,
    pricing,
    lifeTimeOffer,
    footer,
    testimonials,
    faqsPage,
    downloadPage,
    firebaseConfig,
    getCookie,
    clearCookie,
    partners,  
}