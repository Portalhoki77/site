
const games = [
{name:"INA777",domain:"h5.in858.win",link:"https://h5.in858.win/?id=MTcxMDQ5NTI="},
{name:"Y89",domain:"h5.zues188.co",link:"https://h5.zues188.co/?id=MjA5NzIxNjc="},
{name:"SATU777",domain:"h5.sasafun.fun",link:"https://h5.sasafun.fun/?id=NTExNTMzMTY="},
{name:"TT789",domain:"h5.y239.com",link:"https://h5.y239.com/?id=NTQzMDE0NTMw"},
{name:"KETUA",domain:"h5.ketua7.com",link:"https://h5.ketua7.com/?id=NTA0ODg4Mjc5"}
];

const wrap = document.getElementById("games");

games.forEach(g => {
  const card = document.createElement("div");
  card.className = "game-card";

  const icon = document.createElement("img");
  icon.className = "game-icon";
  icon.src = "https://www.google.com/s2/favicons?sz=128&domain=" + g.domain;

  const info = document.createElement("div");
  info.className = "game-info";

  const title = document.createElement("div");
  title.className = "game-title";
  title.textContent = g.name;

  const btn = document.createElement("div");
  btn.className = "play-btn";
  btn.textContent = "Mulai Bermain";
  btn.onclick = () => window.open(g.link, "_blank");

  info.appendChild(title);
  info.appendChild(btn);

  card.appendChild(icon);
  card.appendChild(info);
  wrap.appendChild(card);
});
