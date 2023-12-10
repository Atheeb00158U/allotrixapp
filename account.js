import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage, ref as sRef, getDownloadURL} from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js';


import {hideLoadingScreen, showLoadingScreen, getCookie} from "./index.js";

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




export async function createPopup(){

    const rememberMeCookie = getCookie("rememberMe");
    const localRememberData = JSON.parse(rememberMeCookie);
    
    if (rememberMeCookie) {
        const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
    
        const popup = document.createElement('div');
        popup.classList.add('popup-logged-in');


    
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
    
        const heading = document.createElement('h2');
        heading.textContent = 'Allotrix Account';
    
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
    
        const popupContent = document.createElement('div');
        popupContent.innerHTML = "";
        popupContent.id = "pop-up-content";
        popupContent.classList.add('pop-up-content');
    
        // Append the elements to build the structure
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popupContainer.appendChild(popup);
    
        // Add the popup to the document body
        document.body.appendChild(popupContainer);
    
        // Show the popup by removing the 'hidden' class
        popupContainer.classList.remove('hidden');
    
        closeButton.addEventListener('click', () => {
            const popupContent = document.getElementById("pop-up-content");
            popupContent.innerHTML = "";
            popupContainer.classList.add('hidden');
        });
    
        const imageDiv = document.createElement("img");
        imageDiv.src = "./assets/greenTick.png";
        imageDiv.style.height = "75px";
        imageDiv.style.width = "75px";
        imageDiv.style.marginTop = "30px";
    
        const emailText = document.createElement("h2");
        emailText.textContent = localRememberData.email;
        emailText.style.fontFamily = "Poppins, sans-serif";
        emailText.style.marginTop = "-20px";
        emailText.classList.add('loggedInPopupEmailText');
        emailText.style.fontWeight = "lighter";

        const loggedinStatus = document.createElement("div");
        loggedinStatus.style.display = "flex";
        loggedinStatus.style.gap = "6px";
        loggedinStatus.style.marginTop = "-20px";
    
        const loggedinStatusText = document.createElement("p");
        loggedinStatusText.textContent = 'Logged in'
        loggedinStatusText.style.fontFamily = "Poppins, sans-serif";
    
        const loggedinStatusColor = document.createElement("div");
        loggedinStatusColor.style.backgroundColor = "#4E9C00";
        loggedinStatusColor.style.height = "25px";
        loggedinStatusColor.style.width = "30px";
        loggedinStatusColor.style.borderRadius = "3px";
    
        loggedinStatus.appendChild(loggedinStatusText);
        loggedinStatus.appendChild(loggedinStatusColor);
    
        const logOutBtn = document.createElement("button");
        logOutBtn.classList.add('download-btn');
        logOutBtn.textContent = "Log Out";
        logOutBtn.style.marginTop = "-30px";
    
        popupContent.appendChild(imageDiv)
        popupContent.appendChild(emailText)
        popupContent.appendChild(loggedinStatus)
        popupContent.appendChild(logOutBtn)
    
        logOutBtn.addEventListener("click", async (e) => {
            e.preventDefault()
            const userId = auth.currentUser.uid;
            const userDocRef = doc(usersCollection, userId);
    
            await updateDoc(userDocRef, { loggedIn: false });
            showLoadingScreen();
            try {
                signOut(auth)
                    .then(async () => {
                        clearCookie("rememberMe");
    
                        const popupContent = document.getElementById("pop-up-content");
                        popupContent.innerHTML = "";
                        popupContainer.classList.add('hidden');
    
                        console.log("Sign-out successful");
                    })
                    .catch((error) => {
                        console.log("logout error: ", error);
                    });
            } catch (error) {
                console.error(error)
            } finally {
                hideLoadingScreen();
            }
        })
    
    

    }else{
     
    //create pop up
    const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        const heading = document.createElement('h2');
        heading.textContent = 'Allotrix Account';
      
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        const popupContent = document.createElement('div');
        popupContent.innerHTML= ""
        popupContent.id = "pop-up-content";
        popupContent.classList.add('content');
      
        // Append the elements to build the structure
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popupContainer.appendChild(popup)
      
        // Add the popup to the document body
        document.body.appendChild(popupContainer);
      
        // Show the popup by removing the 'hidden' class
        popupContainer.classList.remove('hidden');


        closeButton.addEventListener('click', () => {

            const popupContent = document.getElementById("pop-up-content");
            popupContent.innerHTML=""
            popupContainer.classList.add('hidden');


          });

          loginpage()
          //loginPage

          function loginpage(){

            const mainContent = document.createElement('div');
            mainContent.id = "main-content";
            mainContent.classList.add('main-content');

            const loginForm = document.createElement('div');
            loginForm.classList.add('login_form');

            const formContainer = document.createElement('div');
            formContainer.classList.add('container-fluid');

            const formHeading = document.createElement('h2');
            formHeading.innerHTML = 'Log In to <b style = "color: #EF4036;">Allotrix<b>';

            const emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.name = 'email';
            emailInput.id = 'email_id';
            emailInput.placeholder = 'Email ID';
            emailInput.classList.add('form__input');

            const passwordContainer = document.createElement('div');
            passwordContainer.classList.add('password-container');

            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');

            const showPassword = document.createElement('button');
            showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>`
            showPassword.classList.add('show-password');
            let loginPasswordState = 0;
            showPassword.addEventListener('click', () => {
                if(loginPasswordState == 0) {
                    passwordInput.type = 'text';
                    showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>`;
                    loginPasswordState = 1;
                } else {
                    passwordInput.type = 'password';
                    showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>`
                    loginPasswordState = 0;
                }
            });

            passwordContainer.append(passwordInput, showPassword);

            const rememberMeContainer = document.createElement('div');
            rememberMeContainer.style.display = "flex";
            rememberMeContainer.style.alignItems = "center";
            rememberMeContainer.style.justifyContent = "center";
            rememberMeContainer.style.width = "50%";

            const rememberMeCheckbox = document.createElement('input');
            rememberMeCheckbox.type = 'checkbox';
            rememberMeCheckbox.name = 'remember me';
            rememberMeCheckbox.id = 'remember_me';

            const rememberMeLabel = document.createElement('label');
            rememberMeLabel.setAttribute('for', 'remember_me');
            rememberMeLabel.textContent = 'Remember Me';

            rememberMeContainer.appendChild(rememberMeLabel);
            rememberMeContainer.appendChild(rememberMeCheckbox);

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit';
            submitButton.classList.add('btn');

            formContainer.appendChild(formHeading);
            formContainer.appendChild(emailInput);
            formContainer.appendChild(passwordContainer);
            formContainer.appendChild(rememberMeContainer);
            formContainer.appendChild(submitButton);




            
            submitButton.addEventListener('click', async (event) => {
            

                const email = emailInput.value;
                const password = passwordInput.value;
        
            
                if (email && password) {
        
                    const previousErrorMessages = document.querySelectorAll('.error-msg-container');
                    previousErrorMessages.forEach((errorMsg) => {
                      errorMsg.remove();
                    });
        
                
                    showLoadingScreen()
                    try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password)
                    
                        const userId = userCredential.user.uid;
                    
        
                        await updateDoc(doc(usersCollection, userId), { loggedIn: true });
        
                        console.log("User signed up successfully!");
        
                        // Updating Firestore and CRED.JSON loggedIn field
                        const local_remember = {
                            "email": email,
                            "password": password
                        }
        
                        if(userId){
                            let rememberMeChecked = document.getElementById('remember_me').checked;
                            if (rememberMeChecked) {                        
                                const cookieValue = JSON.stringify(local_remember);
    
                                document.cookie = `rememberMe=${encodeURIComponent(cookieValue)}; expires=365; path=/`;
                                console.log("cookie set")
                            }

                        }
                    
                       
        
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
                            }finally{

                       //finally
                       const popupContent = document.getElementById("pop-up-content");
                       popupContent.innerHTML=""
                       popupContainer.classList.add('hidden');
                        

                            }
                        }
        
        
                    }  catch (error) {
                        displayError("Email doesn't exist or is incorrect, please create an account.", popupContent)
                        console.error("Error signing up:", error);
                    }finally{
                        hideLoadingScreen()
                    }
        
                } else {
                    displayError("Please enter email and password", popupContent)
                }
            });
            
            
            const noAccountText = document.createElement('p');
            noAccountText.innerHTML = `Don't have an account? <a href="#" class="no-account">Register Here</a>`;
            noAccountText.addEventListener("click",()=>{
                popupContent.innerHTML="";
                signupPage();
            })
            
            


            formContainer.appendChild(noAccountText);
            loginForm.appendChild(formContainer);
            mainContent.appendChild(loginForm);
            popupContent.appendChild(mainContent);

          }


          //signup page 
          
          function signupPage(){

            const mainContent = document.createElement('div');
            mainContent.id = "main-content"
            mainContent.classList.add('main-content');
            
        
            
            const loginForm = document.createElement('div');
            loginForm.classList.add('col-md-8', 'col-xs-12', 'col-sm-12', 'login_form');
            
            const formContainer = document.createElement('div');
            formContainer.classList.add('container-fluid');
            
            const formHeading = document.createElement('h2');
            formHeading.innerHTML = 'Sign Up with <b style = "color: #EF4036;">Allotrix<b>';
            
            formContainer.appendChild(formHeading);
            
            const usernameInput = document.createElement('input');
            usernameInput.type = 'text';
            usernameInput.name = 'username';
            usernameInput.id = 'username';
            usernameInput.placeholder = 'Username';
            usernameInput.classList.add('form__input');

            const emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.name = 'email';
            emailInput.id = 'email_id';
            emailInput.placeholder = 'Email ID';
            emailInput.classList.add('form__input');
            
            const passwordContainer = document.createElement('div');
            passwordContainer.classList.add('password-container');

            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');

            const showPassword = document.createElement('button');
            showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>`
            showPassword.classList.add('show-password');
            let loginPasswordState = 0;
            showPassword.addEventListener('click', () => {
                if(loginPasswordState == 0) {
                    passwordInput.type = 'text';
                    showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>`;
                    loginPasswordState = 1;
                } else {
                    passwordInput.type = 'password';
                    showPassword.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>`
                    loginPasswordState = 0;
                }
            });

            passwordContainer.append(passwordInput, showPassword);


            const rememberMeContainer = document.createElement('div');
            rememberMeContainer.style.display = "flex";
            rememberMeContainer.style.alignItems = "center";
            rememberMeContainer.style.justifyContent = "center";
            rememberMeContainer.style.width = "50%";



            const rememberMeCheckbox = document.createElement('input');
            rememberMeCheckbox.type = 'checkbox';
            rememberMeCheckbox.name = 'remember me';
            rememberMeCheckbox.id = 'remember_me';
            
            const rememberMeLabel = document.createElement('label');
            rememberMeLabel.setAttribute('for', 'remember_me');
            rememberMeLabel.textContent = 'Remember Me!';

            rememberMeContainer.appendChild( rememberMeLabel);
            rememberMeContainer.appendChild(rememberMeCheckbox)

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit';
            submitButton.classList.add('btn');
            
          
            formContainer.appendChild(usernameInput);
            formContainer.appendChild(emailInput);
            formContainer.appendChild(passwordContainer);
            formContainer.appendChild(rememberMeContainer);
            formContainer.appendChild(submitButton);

            submitButton.addEventListener('click', async (event) => {
            
                event.preventDefault();

                   const name = usernameInput.value;
                   const email = emailInput.value;
                   const password = passwordInput.value;
           
               
        
                if (email && name && password) {
        
                    const previousErrorMessages = document.querySelectorAll('.error-msg-container');
                    previousErrorMessages.forEach((errorMsg) => {
                      errorMsg.remove();
                    });
        
                    const userData = {
                        name,
                        email,
                        password,
                        loggedIn: false,
                        subscriptionPurchased: false,
                        trial: true,
                        html: "",
                        version: 1
                    };
        
                    showLoadingScreen();
                    try {
                        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    
                        const userId = userCredential.user.uid;
                    
                        await setDoc(doc(usersCollection, userId), userData);
                    
                        console.log("User signed up successfully!");
        
                        // Updating Firestore and CRED.JSON loggedIn field
                        await updateDoc(doc(usersCollection, userId), { loggedIn: true });
        
                        const local_remember = {
                            "email": email,
                            "password": password
                        }
        
                        
                        if(userId){
                            let rememberMeChecked = document.getElementById('remember_me').checked;
                            if (rememberMeChecked) {                        
                                const cookieValue = JSON.stringify(local_remember);
    
                                // Set the cookie
                                document.cookie = `rememberMe=${encodeURIComponent(cookieValue)}; expires=365;  path=/`;
                                console.log("cookie set")
                            }

                        }
                    
                       
                        
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
                            finally{
                                //finally
                        const popupContent = document.getElementById("pop-up-content");
                        popupContent.innerHTML=""
                        popupContainer.classList.add('hidden');

                            }
                        }
        
                        
                    
        
                        
                        
        
                    }  catch (error) {        
                        displayError("Email already in Use. Please log in.", popupContent)
                        console.error("Error signing up:", error);
                    }finally {
                        hideLoadingScreen();            
                    }
            
                } else {
                    //const signUpContainer = document.getElementById("login-container")
                    displayError("Can't leave any feild empty!", signUpContainer)
            
                }
            });
            
            
            const noAccountText = document.createElement('p');
            noAccountText.innerHTML = `Already have an account? <a href="#" class="no-account">Login Here</a>`;

            noAccountText.addEventListener("click",()=>{
                popupContent.innerHTML="";
                loginpage();
            })
            
            formContainer.appendChild(noAccountText);
            loginForm.appendChild(formContainer);
            mainContent.appendChild(loginForm);
            popupContent.appendChild(mainContent);
          }


}


function displayError(txt, container) {   
    const msgContainer = document.createElement('div');
    msgContainer.className = 'error-msg-container';
    const errorMessage = document.createTextNode(txt);
    msgContainer.appendChild(errorMessage);
    msgContainer.style.color = "red";
  
    container.appendChild(msgContainer);
    console.log(txt)
  };
}


export function clearCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
