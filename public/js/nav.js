let ul = document.querySelector('.link-container');

auth.onAuthStateChanged((user) => {
  if (
    user.uid === 'BWH9dx1umQR2tCNItk7XirsyaoX2' &&
    'rGtnLPbE2FYnFkeggzUcydN3qTt1'
  ) {
    ul.innerHTML += `
      <li id="editor"><a href="/editor"><span>Shkruaj dicka</span></a></li>
      <li><a href="/admin"><span>Të gjitha</span></a></li>
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
