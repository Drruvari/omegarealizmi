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
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 10) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 40) + '...'}</p>
 
        <a href="/${blog.id}" class="read-button btn-2 hover-slide-right">
         <span>Lexo</span>
        </a>
    
    </div>
    `;
};
