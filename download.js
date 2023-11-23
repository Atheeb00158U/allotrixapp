const workingContainer = document.querySelector('#working-container');

import { getCookie } from "./index.js";
import { createPopup } from "./account.js";

export function downloadPage(){

    const downloadContainer = document.createElement("div");
    downloadContainer.className = "download-container";

    const downloadHeadingContainer = document.createElement("div");
    downloadHeadingContainer.className = "download-heading-container";

    const downloadHeading1 = document.createElement("div");
    downloadHeading1.className = "download-heading";
    downloadHeading1.textContent = "Download the future of"

    const downloadHeading2 = document.createElement("div");
    downloadHeading2.className = "download-heading";
    downloadHeading2.textContent = "MUN Automation";
    downloadHeading2.style.color = "rgba(239, 64, 54, 1)";
    downloadHeading2.style.fontWeight = "bold";

    downloadHeadingContainer.appendChild(downloadHeading1);
    downloadHeadingContainer.appendChild(downloadHeading2);
    downloadContainer.appendChild(downloadHeadingContainer)

    const downloadButtonContainer = document.createElement("div");
    downloadButtonContainer.className = "download-button-container";


    const windowsDownloadButton = document.createElement("button");
    windowsDownloadButton.className = "btn";
    windowsDownloadButton.textContent = "Windows";

    const macDownloadButton = document.createElement("button");
    macDownloadButton.className = "btn";
    macDownloadButton.textContent = "Mac";



    downloadButtonContainer.appendChild(windowsDownloadButton);
    downloadButtonContainer.appendChild(macDownloadButton);
    downloadContainer.appendChild(downloadButtonContainer);


    const tutorialHeadingContainer = document.createElement("div");
    tutorialHeadingContainer.className = "subheading";
    tutorialHeadingContainer.textContent = "Download Tutorial"



    const tutorialContainer = document.createElement("div");
    tutorialContainer.className = "tutorial-container";

    const videoId = "NDDFezF7OTA"
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    // iframe.src = `https://www.youtube.com/embed/${videoId}?si=sumERDAjpyNA32_S`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    tutorialContainer.appendChild(iframe);

    const contactMessage = document.createElement("div");
    contactMessage.className = "download-page-contact-message"
    contactMessage.innerHTML = "<p>Still having trouble downloading?? <a href='mailto:allotrixapp@gmail.com'> Contact us </a></p>"

    
    workingContainer.appendChild(downloadContainer)

    tutorialContainer.appendChild(contactMessage)


    workingContainer.appendChild(tutorialHeadingContainer)
    workingContainer.appendChild(tutorialContainer)


    windowsDownloadButton.addEventListener("click", () => {

        // Displaying user's email to check if logged in or not
        const rememberMeCookie = getCookie("rememberMe");
        const localRememberData = JSON.parse(rememberMeCookie);

        // Popup container
        const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        // Popup element
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        // Popup Heading - {Heading, Close Btn}
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        // Heading Text
        const heading = document.createElement('h2');
        heading.textContent = 'Download Allotrix';
      
        // Popup close button
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        // Popup content section
        const popupContent = document.createElement('div');
        popupContent.classList.add('pop-up-content');

        // Shows if user is logged in or not - {accountName, login btn}
        const loggedInContainer = document.createElement('div');
        loggedInContainer.classList.add('logged-in-container');

        // Shows email of user if exists otherwise shows "USER NOT LOGGED IN"
        const accountName = document.createElement('p');
        accountName.textContent = localRememberData ? localRememberData.email : "USER NOT LOGGED IN";
        accountName.classList.add('account-name');

        // Login button that directs to login popup createPopup() if no user exists
        const loginBtn = document.createElement('button');
        loginBtn.textContent = localRememberData ? "Logged in" : "Login";
        loginBtn.disabled = localRememberData ? true : false;
        loginBtn.style.backgroundColor = localRememberData ? "#4E9C00" : "#EF4036";
        loginBtn.onclick = createPopup;
        loginBtn.classList.add('login-btn');

        // Dropdown list to select a software pricing plan
        const dropDown = document.createElement('select');
        dropDown.classList.add('download-dropdown');
        const downloadOptions = ["Standard (Free)", "Premium", "Premium +"];
        downloadOptions.forEach((option) => {
            const downloadOption = document.createElement('option');
            downloadOption.textContent = option;
            downloadOption.value = option;
            dropDown.appendChild(downloadOption);
        });

        const downloadSoftware = () => {
            // Define download btn function 🤡
        }

        const contactSales = () => {
            // Define contact sales btn function 🤡
        }

        // Download Button for {Standard (Free)}
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('download-btn');
        downloadBtn.textContent = 'Download';
        downloadBtn.disabled = localRememberData ? false : true;
        // downloadBtn.onclick = downloadSoftware; 🤡

        // Contact Sales Button for {Premium and Premium +}
        const contactSalesBtn = document.createElement('button');
        contactSalesBtn.classList.add('download-btn');
        contactSalesBtn.textContent = 'Contact Sales';
        contactSalesBtn.disabled = localRememberData ? false : true;
        contactSalesBtn.style.display = "none";
        // contactSales.onclick = contactSales; 🤡

        dropDown.addEventListener('change', function () {
            if (dropDown.value === "Premium") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
            } else if (dropDown.value === "Premium +") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
            } else {
                downloadBtn.style.display = "block";
                contactSalesBtn.style.display = "none";
            }
        });

        // Appending all elements to their respective parent containers
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        loggedInContainer.appendChild(accountName);
        loggedInContainer.appendChild(loginBtn);
        popupContent.appendChild(loggedInContainer);
        popupContent.appendChild(dropDown);
        popupContent.appendChild(downloadBtn);
        popupContent.appendChild(contactSalesBtn);
        popupContainer.appendChild(popup);
      
        // Appending the parent container to document
        document.body.appendChild(popupContainer);

        // Displaying the popup
        popupContainer.classList.remove('hidden');

        // Removing the popup during CLOSE
        closeButton.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
        });
      
    });

    
    macDownloadButton.addEventListener("click", ()=>{
        
        // Displaying user's email to check if logged in or not
        const rememberMeCookie = getCookie("rememberMe");
        const localRememberData = JSON.parse(rememberMeCookie);

        // Popup container
        const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        // Popup element
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        // Popup Heading - {Heading, Close Btn}
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        // Heading Text
        const heading = document.createElement('h2');
        heading.textContent = 'Download Allotrix';
      
        // Popup close button
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        // Popup content section
        const popupContent = document.createElement('div');
        popupContent.classList.add('pop-up-content');

        // Shows if user is logged in or not - {accountName, login btn}
        const loggedInContainer = document.createElement('div');
        loggedInContainer.classList.add('logged-in-container');

        // Shows email of user if exists otherwise shows "USER NOT LOGGED IN"
        const accountName = document.createElement('p');
        accountName.textContent = localRememberData ? localRememberData.email : "USER NOT LOGGED IN";
        accountName.classList.add('account-name');

        // Login button that directs to login popup createPopup() if no user exists
        const loginBtn = document.createElement('button');
        loginBtn.textContent = localRememberData ? "Logged in" : "Login";
        loginBtn.disabled = localRememberData ? true : false;
        loginBtn.style.backgroundColor = localRememberData ? "#4E9C00" : "#EF4036";
        loginBtn.onclick = createPopup;
        loginBtn.classList.add('login-btn');

        // Dropdown list to select a software pricing plan
        const dropDown = document.createElement('select');
        dropDown.classList.add('download-dropdown');
        const downloadOptions = ["Standard (Free)", "Premium", "Premium +"];
        downloadOptions.forEach((option) => {
            const downloadOption = document.createElement('option');
            downloadOption.textContent = option;
            downloadOption.value = option;
            dropDown.appendChild(downloadOption);
        });

        const downloadSoftware = () => {
            // Define download btn function 🤡
        }

        const contactSales = () => {
            // Define contact sales btn function 🤡
        }

        // Download Button for {Standard (Free)}
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('download-btn');
        downloadBtn.textContent = 'Download';
        downloadBtn.disabled = localRememberData ? false : true;
        // downloadBtn.onclick = downloadSoftware; 🤡

        // Contact Sales Button for {Premium and Premium +}
        const contactSalesBtn = document.createElement('button');
        contactSalesBtn.classList.add('download-btn');
        contactSalesBtn.textContent = 'Contact Sales';
        contactSalesBtn.disabled = localRememberData ? false : true;
        contactSalesBtn.style.display = "none";
        // contactSales.onclick = contactSales; 🤡

        dropDown.addEventListener('change', function () {
            if (dropDown.value === "Premium") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
            } else if (dropDown.value === "Premium +") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
            } else {
                downloadBtn.style.display = "block";
                contactSalesBtn.style.display = "none";
            }
        });

        // Appending all elements to their respective parent containers
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        loggedInContainer.appendChild(accountName);
        loggedInContainer.appendChild(loginBtn);
        popupContent.appendChild(loggedInContainer);
        popupContent.appendChild(dropDown);
        popupContent.appendChild(downloadBtn);
        popupContent.appendChild(contactSalesBtn);
        popupContainer.appendChild(popup);
      
        // Appending the parent container to document
        document.body.appendChild(popupContainer);

        // Displaying the popup
        popupContainer.classList.remove('hidden');

        // Removing the popup during CLOSE
        closeButton.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
        });
    });
}