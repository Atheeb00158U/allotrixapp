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
        popup.classList.add('popup');
        popup.style.height = "50%";
        popup.style.width = "50%";

    
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
<<<<<<< HEAD
        emailText.style.marginTop = "-20px";
        emailText.classList.add('loggedInPopupEmailText');
=======
        emailText.style.fontWeight = "lighter";
        emailText.style.marginTop = "-20px";
>>>>>>> 392eaa824c4e8d26371e359a28b205200ae8a4ac
    
        const loggedinStatus = document.createElement("div");
        loggedinStatus.style.display = "flex";
        loggedinStatus.style.gap = "6px";
        loggedinStatus.style.marginTop = "-20px";
    
        const loggedinStatusText = document.createElement("p");
        loggedinStatusText.textContent = 'Logged in'
        loggedinStatusText.style.fontFamily = "Poppins, sans-serif";
    
        const loggedinStatusColor = document.createElement("div");
        loggedinStatusColor.style.backgroundColor = "#4E9C00";
        loggedinStatusColor.style.height = "auto";
        loggedinStatusColor.style.width = "30px";
        loggedinStatusColor.style.borderRadius = "3px";
    
        loggedinStatus.appendChild(loggedinStatusText);
        loggedinStatus.appendChild(loggedinStatusColor);
    
        const logOutBtn = document.createElement("button");
        logOutBtn.classList.add('download-btn');
        logOutBtn.textContent = "Log Out";
        logOutBtn.style.marginTop = "-10px";
    
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
            mainContent.classList.add('row', 'main-content', 'bg-success', 'text-center');

            const loginForm = document.createElement('div');
            loginForm.classList.add('col-md-8', 'col-xs-12', 'col-sm-12', 'login_form');

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

            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');

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
            formContainer.appendChild(passwordInput);
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
            mainContent.classList.add('row', 'main-content', 'bg-success', 'text-center');
            
        
            
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
            
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');


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
            formContainer.appendChild(passwordInput);
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
