const workingContainer = document.querySelector('#working-container');


export function lifeTimeOffer(){

    const lifeTimeOff = document.createElement('section');
    lifeTimeOff.classList.add("life-access");
    
    const html = `
    <div class="life-access-container">
    <h3>For Life-time Unlimited Access to Allotrix, With no recurring Fees. Click here to <span style="font-weight: bold; color: #EF4036;">Try it out for Free!</span></h3>
   
     <a href='mailto:allotrixapp@gmail.com' style="color: white;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
  </div>`
  
    lifeTimeOff.innerHTML = html
    workingContainer.appendChild(lifeTimeOff);


 

}
