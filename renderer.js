import {
  createHeroSection,
  whyChooseContainer,
  features,
  testimonials,
  pricing,
  lifeTimeOffer,
  footer,
  downloadPage,
  partners,
  createPopup,
} from "./index.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage, ref as sRef, getDownloadURL} from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js';


import {hideLoadingScreen, showLoadingScreen, } from "./index.js";

const firebaseConfig = {
    apiKey: "AIzaSyDymSv7NIZufePM27ZXVf97KDdwb9QxY8s",
    authDomain: "mun-automator.firebaseapp.com",
    projectId: "mun-automator",
    storageBucket: "mun-automator.appspot.com",
    messagingSenderId: "536970944281",
    appId: "1:536970944281:web:c82c6174ef9a816124af88",
    measurementId: "G-B7EDJMNPHV"
  };


const App =  initializeApp(firebaseConfig);
const auth = getAuth(App);
const db = getFirestore(App);
const usersCollection = collection(db, "users");
const storage = getStorage(App)

const navbar = document.getElementById('navbar');
const workingContainer = document.querySelector('#working-container');
const mobileNav = document.getElementById("mobile-menu-button");
const navItems = document.getElementsByClassName("nav-item");

const mobileWidth = window.innerWidth < 500;
if(mobileWidth) {
  for (const navItem of navItems) {
    navItem.addEventListener('click', () => {
      if (state === 1) {
        navbar.style.width = '100%';
        state = 0;
      } else {
        navbar.style.width = '0%';
        state = 1;
      }
    })
  }
}

// Nav items
const home = document.getElementById("homepage");
const updates = document.getElementById("updates");
const sponsorship = document.getElementById("sponsorship");
const testimonial = document.getElementById("nav-testimonials");
const faqs = document.getElementById("faqs");
const download = document.getElementById("download");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  workingContainer.innerHTML = "";
  loadLandingPage();


  const rememberMeCookie = getCookie("rememberMe");
  if (rememberMeCookie) {

    const localRememberData = JSON.parse(rememberMeCookie);
  
  
    console.log("Email:", localRememberData.email);
    console.log("Password:", localRememberData.password);

    loginOnLoad();


    async function loginOnLoad(){

      try {
        const userCredential = await signInWithEmailAndPassword(auth, localRememberData.email, localRememberData.password);
    
        const userId = userCredential.user.uid;
    
  
        await updateDoc(doc(usersCollection, userId), { loggedIn: true });
  
        console.log("User signed up successfully!");

        const USER = await auth.currentUser;
        if (USER) {
            const UID = USER.uid;
            const userDocRef = doc(db, "users", UID);
            const storageRef = sRef(storage, `${UID}/pfp.png`) 
            const userDoc = await getDoc(userDocRef);
            const userData = userDoc.data();
  
            try {
                const downloadURL = await getDownloadURL(storageRef);
  
                if (storageRef && downloadURL) {
                    const pfp = document.getElementById("account");
                    pfp.style.backgroundImage = `url(${downloadURL})`;
                
  
                }
            } catch (error) {
                console.error("Error fetching profile picture:", error);
            }
        }

        
  
    }  catch (error) {
        console.error("Error signing up:", error);
    }

    }

 
    }
  else{
    console.log("remember me cookie not found ")
  }
});

home.addEventListener("click", () => {
  console.log("Home clicked");
  workingContainer.innerHTML = "";
  loadLandingPage();
});

testimonial.addEventListener("click", () => {
  console.log("Testimonial clicked");
  //workingContainer.innerHTML = "";
  //testimonials();
});






download.addEventListener("click", () => {
  console.log("download clicked");
  workingContainer.innerHTML = "";
  downloadPage();
});

let state = 1;

mobileNav.addEventListener("click", (event) => {
  event.stopPropagation();

  if (state === 1) {
    navbar.style.width = '100%';
    state = 0;
  } else {
    navbar.style.width = '0%';
    state = 1;
  }
});

document.body.addEventListener("click", (event) => {
  const isNavbarClick = navbar.contains(event.target);
  const isMobileNavClick = mobileNav.contains(event.target);
  
  if (!isNavbarClick && !isMobileNavClick && state === 0) {
    navbar.style.width = '0%';
    state = 1;
  }
});


const accountButton = document.getElementById("account")

    accountButton.addEventListener("click", ()=>{
      createPopup();

    })



// Responsive Nav




async function loadLandingPage() {
  createHeroSection();
  whyChooseContainer();
  features();
  //partners();
  pricing();
  lifeTimeOffer();
  footer();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}


