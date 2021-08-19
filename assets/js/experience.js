// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Wazirx ",
    cardImage: "assets/images/experience-page/wrx.jpg",
    description: "Wazirx Warrior",
  },
  {
    title: "VoluntHere",
    cardImage: "https://img1.wsimg.com/isteam/ip/c9ef595f-c690-4269-8c8c-d2e4c48ee238/VoluntHere_logo-removebg-preview.png/:/rs=w:400,cg:true,m",
    description: "Outreach Associate",
  },
  {
    title: "NSS",
    cardImage: "https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg",
    description: "State level NSS volunter",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="title">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
