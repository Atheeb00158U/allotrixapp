const workingContainer = document.querySelector('#working-container');


export function footer(){



    const footer = document.createElement('section');
    footer.classList.add('contact');
    
    const html = `
    <h2>Contact <span style="color: #EF4036;">Us</span></h2>
      <form action="/" method="post">
        <div class="name-email">
          <input type="text" name="name" placeholder="Name">
          <input type="email" name="email" placeholder="Email">
        </div>
        <textarea name="message" cols="30" rows="6" placeholder="Message"></textarea>
        <button>Submit</button>
      </form>


    `
    
  
    footer.innerHTML = html
    workingContainer.appendChild(footer)
 
    
  
  




}
