const workingContainer = document.querySelector('#working-container');

import { getCookie, showLoadingScreen } from "./index.js";
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
    contactMessage.innerHTML = "<p style='text-align: center; margin: 20px; font-family: Poppins, sans-serif'>Still having trouble downloading?? <a href='mailto:allotrixapp@gmail.com?subject=Issues%20in%20Downloading%20Software'> Contact us </a></p>"

    
    workingContainer.appendChild(downloadContainer)

    tutorialContainer.appendChild(contactMessage)


    workingContainer.appendChild(tutorialHeadingContainer)
    workingContainer.appendChild(tutorialContainer)

    const downloadFunction = (path, name) => {
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

        // Main content section
        const mainContent = document.createElement('div');
        mainContent.classList.add('main-content');
      
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
        loginBtn.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
            createPopup();
        });
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

        // Download Button for {Standard (Free)}
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('download-btn');
        downloadBtn.textContent = 'Download';
        downloadBtn.disabled = localRememberData ? false : true;
        downloadBtn.addEventListener('click', () => {
            const download = document.createElement('a');
            download.href = path;
            download.download = name;
            document.body.appendChild(download);
            download.click();
            document.body.removeChild(download);
            showLoadingScreen();

            const downloading = document.createElement('div');
            downloading.innerText = "Your application is being downloaded . . .";
            downloading.classList.add('downloading');
            downloadBtn.remove();
            popupContent.append(downloading);
            dropDown.disabled = true;
        }); 

        // Contact Sales Button for {Premium and Premium +}
        const contactSalesBtn = document.createElement('a');
        contactSalesBtn.classList.add('download-btn');
        contactSalesBtn.textContent = 'Contact Sales';
        contactSalesBtn.disabled = localRememberData ? false : true;
        contactSalesBtn.style.display = "none";

        dropDown.addEventListener('change', function () {
            if (dropDown.value === "Premium") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
                contactSalesBtn.href = `mailto:allotrixapp@gmail.com?subject=${encodeURIComponent("Regarding Premium Purchase")}`;
            } else if (dropDown.value === "Premium +") {
                downloadBtn.style.display = "none";
                contactSalesBtn.style.display = "block";
                contactSalesBtn.href = `mailto:allotrixapp@gmail.com?subject=${encodeURIComponent("Regarding Premium + Purchase")}`;
            } else {
                downloadBtn.style.display = "block";
                contactSalesBtn.style.display = "none";
            }
        });

        // Appending all elements to their respective parent containers
        popupHeader.append(heading, closeButton);
        popup.appendChild(popupHeader);
        loggedInContainer.append(accountName, loginBtn);
        popupContent.append(loggedInContainer, dropDown, downloadBtn, contactSalesBtn);
        mainContent.appendChild(popupContent);
        popup.appendChild(mainContent);
        popupContainer.appendChild(popup);
      
        // Appending the parent container to document
        document.body.appendChild(popupContainer);

        // Displaying the popup
        popupContainer.classList.remove('hidden');

        // Removing the popup during CLOSE
        closeButton.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
        });
    }


    windowsDownloadButton.addEventListener("click", () => downloadFunction("https://drive.google.com/uc?export=download&id=17YxNy8z6JaOsgeogv-pYY7l_OzqV-BW3", "Allotrix Setup 1.0.0.exe"));
    macDownloadButton.addEventListener("click", () => downloadFunction("https://drive.google.com/uc?export=download&id=1I6jXDEwVwgsRV0KEuJhn4BzvPU8djvDI", "Allotrix-1.0.0-arm64.dmg"));
}