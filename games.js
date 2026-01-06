
const games = [
{name:"INA777",domain:"h5.in858.win",link:"https://h5.in858.win/?id=MTcxMDQ5NTI="},
{name:"Y89",domain:"h5.zues188.co",link:"https://h5.zues188.co/?id=MjA5NzIxNjc="},
{name:"SATU777",domain:"h5.sasafun.fun",link:"https://h5.sasafun.fun/?id=NTExNTMzMTY="},
{name:"8768",domain:"h5.8768f.com",link:"https://h5.8768f.com/?id=NTQ2MDQzMzcz"},
{name:"TT789",domain:"h5.y239.com",link:"https://h5.y239.com/?id=NTQzMDE0NTMw"},
{name:"KETUA",domain:"h5.ketua7.com",link:"https://h5.ketua7.com/?id=NTA0ODg4Mjc5"},
{name:"AYUWIN",domain:"h5.ayuwin.win",link:"https://h5.ayuwin.win/?id=OTk4ODI5NjQw"},
{name:"RP777",domain:"h5.we878.fun",link:"https://h5.we878.fun/?id=MTAwNzkxNzQ="}
];

const container = document.getElementById("games");

games.forEach(g => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.onclick = () => window.open(g.link, "_blank");

  const img = document.createElement("img");
  img.src = "https://www.google.com/s2/favicons?sz=64&domain=" + g.domain;
  img.onerror = () => img.src = "https://via.placeholder.com/64?text=GAME";

  const name = document.createElement("span");
  name.textContent = g.name;

  card.appendChild(img);
  card.appendChild(name);
  container.appendChild(card);
});
