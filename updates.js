const workingContainer = document.querySelector('#working-container');

const updates = [
  {
    "date": "2024-01-20",
    "title": "Double Delegation Allotment",
    "body": "Double the diplomacy, double the challenges, and double the fun. Allotrix is integrating double delegation allotments feature soon!"
  },
  {
    "date": "2024-02-14",
    "title": "AI-Powered Committee Allotment",
    "body": "Introducing cutting-edge AI integration! Simply provide the agenda and committee size, and our advanced algorithm will craft a meticulously curated list of countries, complete with a pertinency split. Experience the power of intelligent committee composition effortlessly."
  },
  {
    "date": "2024-02-15",
    "title": "Effortless Reallotment",
    "body": "Say goodbye to hours of navigation and hard work! With just a few clicks, reallotment becomes a breeze. Enjoy the convenience of swift and efficient changes, ensuring your MUN logistics are in perfect sync."
  },
  {
    "date": "2024-02-16",
    "title": "Live Updating Screen for OC Teams",
    "body": "Enhance your conference management with a live updating screen! The Organizing Committee (OC) team can now track countries being claimed and those still available in real-time. Currently available for sponsorship, this feature adds a dynamic layer to your event coordination."
  },
  {
    "date": "2024-02-17",
    "title": "Automated Agenda Suggestions",
    "body": "Allotrix goes beyond allotment! Our platform now suggests engaging and relevant agendas based on current global issues, historical data, and trending topics. Empower your Delegate Affairs team with smart agenda creation tools."
  },
  {
    "date": "2024-02-18",
    "title": "Comprehensive Analytics and Stats",
    "body": "Dive into more detailed analytics and stats! Gain insights into delegate participation, engagement, and committee dynamics. This feature equips your team with valuable data for informed decision-making and future conference planning."
  }
];

export const updatesPage = () => {

    const updatesHeading = document.createElement("h1");
    updatesHeading.className = "testimonial-heading";
    updatesHeading.classList.add('updates-heading');
    updatesHeading.textContent = " Exciting Upcoming Updates on Allotrix!";
    workingContainer.appendChild(updatesHeading);

    const updatesContainer = document.createElement("section");
    updatesContainer.className = "updates-container";
    updatesContainer.style.width = "100%";

    updatesContainer.innerHTML = updates.map((update) => (
        `
            <article class="updates-item">
                <h2>${update.date}</h2>
                <h3>${update.title}</h3>
                <p>${update.body}</p>
            </article>
        `
    )).join('');

    workingContainer.appendChild(updatesContainer);
};