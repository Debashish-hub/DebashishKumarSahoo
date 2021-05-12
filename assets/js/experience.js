// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "VoluntHere",
    cardImage: "https://media-exp1.licdn.com/dms/image/C4D0BAQEGOXgetkVM2Q/company-logo_200_200/0/1606904688873?e=1628121600&v=beta&t=ucmLAt6j8V9fcJciraeF3dckBkm-9xrnivD5bIv6mnU",
    description: "Outreach Associate",
  },
  {
    title: "AICRA",
    cardImage: "https://pbs.twimg.com/profile_images/496182757286895616/OOH3jarn.png",
    description: "Student Ambassador",
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
