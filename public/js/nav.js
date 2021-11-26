let ul = document.querySelector('.link-container');

auth.onAuthStateChanged((user) => {
  if (user) {
    // user is loggin
    ul.innerHTML += `
        <li class="nav-item link-item">
            <a class="nav-link active" aria-current="page" href="/admin" class="link">Dashboard</a>
        </li>
        <li class="nav-item link-item">
            <a class="nav-link active" aria-current="page" href="#" onClick="logoutUser()" class="link">Logout</a>
        </li>
        `;
  } else {
    // no one is logged in
    ul.innerHTML += `
    <li class="nav-item link-item">
        <a class="nav-link active" aria-current="page" href="/admin" class="link">Login</a>
    </li>
    `;
  }
});
