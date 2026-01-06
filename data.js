const games = [
  {name:"INA777", link:"https://h5.in858.win/?id=MTcxMDQ5NTI%3D"},
  {name:"Y89", link:"https://h5.zues188.co/?id=MjA5NzIxNjc%3D"},
  {name:"SATU777", link:"https://h5.sasafun.fun/?id=NTExNTMzMTY%3D"},
  {name:"DAY777", link:"https://h5.day787.fun/?id=OTcwMTE5MjMz"},
  {name:"GF777", link:"https://h5.see789.fun/?id=ODMwMTk5MzU2"},
  {name:"DAN777", link:"https://h5.dan777e.com/?id=MjY4MDYyMDcy"},
  {name:"KETUA", link:"https://h5.ketua7.com/?id=NTA0ODg4Mjc5"},
  {name:"33ZK", link:"https://h5.338zk.com/?id=MjM0NTMxNDcx"},
  {name:"AYUWIN", link:"https://h5.ayuwin.win/?id=OTk4ODI5NjQw"},
  {name:"RP777", link:"https://h5.we878.fun/?id=MTAwNzkxNzQ%3D"}
];

const grid = document.getElementById("gameGrid");

games.forEach(g=>{
  const domain = new URL(g.link).origin;
  const favicon = domain + "/favicon.ico";

  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${favicon}" onerror="this.src='https://via.placeholder.com/72'">
    <h3>${g.name}</h3>
    <a class="btn-play" href="${g.link}" target="_blank">Mulai Bermain</a>
  `;
  grid.appendChild(card);
});
