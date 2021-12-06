let ul = document.querySelector('.link-container');

auth.onAuthStateChanged((user) => {
  if (user.uid === 'BlypPsRXN2TKFTv7w0ZS0II6fg13') {
    ul.innerHTML += `
      <li id="editor"><a href="/editor"><span>Shkruaj dicka</span></a></li>
    `;
  }
});

auth.onAuthStateChanged((user) => {
  if (!user) {
    ul.innerHTML += `
       <li><a href="/admin"><span>Hyr</span></a></li>
    `;
  }
});

auth.onAuthStateChanged((user) => {
  if (user) {
    ul.innerHTML += `
      <li><a href="/" onClick="logoutUser()"><span>Dil</span></a></li>
    `;
  }
});

// <li><a href="#" onClick="logoutUser()"><span>Dil</span></a></li>
// <li id="editor"><a href="/editor"><span>Shkruaj dicka</span></a></li>
// <li><a href="/admin"><span>Hyr</span></a></li>

// ul.innerHTML += ` `;

// user.uid === 'BlypPsRXN2TKFTv7w0ZS0II6fg13'
