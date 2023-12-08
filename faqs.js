const workingContainer = document.querySelector('#working-container');

const questions = [
    {
      "question": "What is Allotrix?",
      "answer": "Allotrix is a software which automates your allotments according to the preferred committees and countries, also by taking into account the MUN experience of the individual while allotting. Allotrix uses a sophisticated algorithm to make accurate allotments, even for large MUNs with thousands of delegates.",
      "collapse": "collapseOne"
    },
    {
      "question": "Why should I choose Allotrix?",
      "answer": "Allotrix uses its advanced software to efficiently and rapidly allocate precise, high-quality assignments in seconds, thus eliminating humane errors. Allotrix streamlines your registration, processing, and allotment, saving time and enhancing delegate satisfaction. Moreover, Allotrix provides detailed insights into your tournament data, so you can make informed decisions about future events.",
      "collapse": "collapseTwo"
    },
    {
      "question": "Can I customize the allotment criteria in Allotrix to suit the specific needs of our MUN conference?",
      "answer": "Allotrix is a smart customisable software, where every part of the allotment software can be customised to the preference of the institutions.",
      "collapse": "collapseThree"
    },
    {
      "question": "I've configured the application, but there seems to be an issue with the dashboard.",
      "answer": "Please attempt to upload a profile picture in PNG format and then retry.",
      "collapse": "collapseFour"
    },
    {
      "question": "How user-friendly is Allotrix for conference organizers and delegates?",
      "answer": "Allotrix is a fully customisable software, where institutions and individuals can customize everything on the software down to the mere basics. Starting from the very ground level of the amount of experience for a specific world level of allotment, to customized emails that are sent to delegates with our Premium + offer, Users can customize the allotment standards and system to their institution’s needs.",
      "collapse": "collapseFive"
    },
    {
      "question": "What security measures are in place to protect delegate information and the integrity of the allotment process?",
      "answer": "No forms of personal information will be taken during the allotment process. Every basic information will stay confidential within the institution and the delegate applying for the event. Since the software code is confidential as well, The Institution cannot manually allow anyone in any country with our smart software.",
      "collapse": "collapseSix"
    },
    {
      "question": "Can I have a trial version before I purchase it?",
      "answer": "A free version of Allotrix is available at https://allotrix.com/#, Where you can avail the basic benefits of the software and test it out for yourself.",
      "collapse": "collapseSeven"
    },
    {
      "question": "What types of payment do you accept?",
      "answer": "We accept all sorts of payments, which can be discussed while buying the software. This includes Google Pay, Paytm, Net Transfer, Bank Transfer and a lot more.",
      "collapse": "collapseEight"
    },
    {
      "question": "Why is Allotrix better than Manual allotment?",
      "answer": "Allotrix is an automated software which uses its smart technology to make sure manual errors do not take place. Our quick servers also ensure that the allotments can be given out every second, making it far easier for the user and the delegate to give out and receive the allotments. No more manual emails, as emails are also automated by Allotrix.",
      "collapse": "collapseNine"
    },
    {
      "question": "Can Allotrix integrate with other platforms used by MUN organizers?",
      "answer": "Yes, Allotrix's tech team is available 24/7 to address your needs. A minor setup adjustment can enable automation on any platform.",
      "collapse": "collapseTen"
    },
    {
      "question": "Can Allotrix provide insights or analytics on the allotment process for post-conference evaluation?",
      "answer": "Allotrix has an innovative system that stores data and allows the user/buyer to evaluate and analyze at any point in time. This includes the allotments, availability period, Number of delegates and much more.",
      "collapse": "collapseEleven"
    },
    {
      "question": "How frequently does Allotrix update its algorithms to adapt to changing trends and preferences in the MUN community?",
      "answer": "Allotrix is equipped with an algorithm that adapts to the majority of trends. However, in the case of significant changes, the Allotrix tech team values feedback and promptly incorporates it into their implementation process.",
      "collapse": "collapseTwelve"
    },
    {
      "question": "What feedback mechanisms are in place for delegates and organizers to provide input on the allotment process?",
      "answer": "There is a dedicated feedback form available on the Allotrix website, designed for both delegates and organizers to easily provide input on the allotment process.",
      "collapse": "collapseThirteen"
    }
  ]
  
  

export const faqsPage = () => {
    const faqsHeading = document.createElement("h1");
    faqsHeading.className = "testimonial-heading";
    faqsHeading.textContent = "Frequently Asked Questions";
    workingContainer.appendChild(faqsHeading);

    const faqsContainer = document.createElement("section");
    faqsContainer.style.width = "100%";

    const accordionContainer = document.createElement('div');
    accordionContainer.id = "accordionExample";
    accordionContainer.className = "accordion";
    accordionContainer.classList.add('faqs-container');

    faqsContainer.appendChild(accordionContainer);
    workingContainer.appendChild(faqsContainer);

    accordionContainer.innerHTML = 
        questions.map((question) => (
            `
            <div class="accordion-item" style="background-color: #242529; color: white;">
                <h2 class="accordion-header" style="background-color: #242529; color: white;">
                <button style="background-color: #242529; color: white; font-weight: lighter;" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${question.collapse}" aria-expanded="false" aria-controls=${question.collapse}>
                    ${question.question}
                </button>
                </h2>
                <div id=${question.collapse} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="font-weight: lighter;">
                    ${question.answer}
                </div>
                </div>
            </div>
            `
        )).join('');
}