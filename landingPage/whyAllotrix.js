
const workingContainer = document.querySelector('#working-container');

export function whyChooseContainer(){


    //heading
    const subheading = document.createElement('h6');
    subheading.classList.add('subheading');
    subheading.id = 'why-choose-allotrix';
    subheading.textContent = 'Why Choose Allotrix?';

    const paragraph = document.createElement('p');
    paragraph.classList.add('why-choose-head');
    paragraph.textContent = 'The most comprehensive automation tool made for MUN';

    const whyChoose = document.createElement('div');
    whyChoose.classList.add('why-choose');


    whyChoose.appendChild(subheading);
    whyChoose.appendChild(paragraph);

    //content

    workingContainer.appendChild(whyChoose);

    function createWhyChooseItem(imageSrc, title, description) {
        const item = document.createElement('article');
        item.classList.add('why-choose-item');
      
        const head = document.createElement('div');
        head.classList.add('head');
      
        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'im';
      
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
      
        head.appendChild(image);
        head.appendChild(titleElement);
      
        const aside = document.createElement('aside');
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        aside.appendChild(descriptionElement);
      
        item.appendChild(head);
        item.appendChild(aside);
      
        return item;
      }
      
      function createWhyChooseSection() {


        const whyChooseContainer = document.createElement('div');
        whyChooseContainer.classList.add('why-choose-container');

        const backgroundText = document.createElement("h1");
        backgroundText.classList.add("background-text");
        backgroundText.textContent = "allotrix";
    
        
    
        whyChooseContainer.appendChild(backgroundText);
      
        whyChooseContainer.appendChild(createWhyChooseItem(
          'https://i.postimg.cc/05WMPgsW/im1.png',
          'Eliminate Errors',
          'Efficiently and rapidly allocate precise and high-quality assignments in a matter of seconds.'
        ));
      
        whyChooseContainer.appendChild(createWhyChooseItem(
          'https://i.postimg.cc/SRvJr9dF/im2.png',
          'Save Money & Time',
          'Streamline your registration, processing, and allotment, saving time and enhancing delegate satisfaction.'
        ));
      
        whyChooseContainer.appendChild(createWhyChooseItem(
          'https://i.postimg.cc/J4syhT71/im3.png',
          'Best Delegate Experience',
          'Allotrix allows delegates to select their desired countries for a more engaging debate experience.'
        ));
      
        whyChooseContainer.appendChild(createWhyChooseItem(
          'https://i.postimg.cc/ncNX9vMq/im4.png',
          'Get Insights',
          'Allotrix provides detailed insights into your tournament data, so you can make informed decisions about future events.'
        ));

       whyChoose.appendChild(whyChooseContainer)

      
        return whyChoose;
      }



      
      // Append the section to the working container
      workingContainer.appendChild(createWhyChooseSection());


    


}

