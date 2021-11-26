let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');
const blogSection = document.querySelector('.blogs-section');

auth.onAuthStateChanged((user) => {
  if (user) {
    login.style.display = 'none';
  } else {
    setupLoginButton();
  }
});

const setupLoginButton = () => {
  ui.start('#loginUI', {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectURL) {
        return false;
      },
    },
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  });
};

// fetch user written blogs

const getUserWrittenBlogs = () => {
  db.collection('blogs')
    .where('author', '==', auth.currentUser.email.split('@')[0])
    .get()
    .then((blogs) => {
      blogs.forEach((blog) => {
        createBlog(blog);
      });
    })
    .catch((error) => {
      console.log('Error getting blogs');
    });
};

const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 10) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 40) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
};
console.log(createBlog());
