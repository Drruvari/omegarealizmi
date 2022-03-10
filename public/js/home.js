const blogSection = document.querySelector('.blogs-section');

db.collection('blogs')
  .orderBy('publishedAt', 'desc')
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split('/').pop())) {
        createBlog(blog);
      }
    });
  });

const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
    <div class="blog-card">
    <h1 class="blog-title">${data.title.substring(0, 10) + '...'}</h1>
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <p class="blog-overview">${data.article.substring(0, 40) + '...'}</p>
 
        <a href="/${blog.id}" class="read-button btn-1 hover-slide-right">
         <span>Lexo</span>
        </a>
    </div>
    `;
};
