let ul = document.querySelector('.link-container');

auth.onAuthStateChanged((user) => {
  if (user) {
    // user is loggin
    ul.innerHTML += `
      <li><a href="/admin"><span>Faqja juaj</span></a></li>
      <li><a href="#" onClick="logoutUser()"><span>Dil</span></a></li>
      `;
  } else {
    // no one is logged in
    ul.innerHTML += `
    <li><a href="/admin"><span>Hyr</span></a></li>
    `;
  }
});
