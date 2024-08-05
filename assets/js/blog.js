// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');

 if (backButton) {
  backButton.addEventListener('click', function() {
  redirectPage('index.html');
});
}
// TODO: Create a function that builds an element and appends it to the DOM
function renderBlogList() {
  // const blogData = JSON.parse(localStorage.getItem(['username', 'title', 'content']));
  
  const blogData = readLocalStorage();
  console.log('render stuff', blogData);
  

  if (blogData.length !== 0){
    const parsedData = JSON.parse(blogData);

    for (let i = 0; i < blogData.length; i++) {
      const blog = blogData[i];
      document.querySelector('.card').innerHTML = `
    
      <h2><span id="title">${parsedData.title}</span></h2>
      <blockquote id="content">${parsedData.content}</blockquote>
      <p>Posted by <span id="username">${parsedData.username}</span></p>
    `;
      let article = document.createElement('card');
      article.setAttribute('data-index', i);
      // card.appendChild(article);

      
    }
    
  } else {
    noPosts();
  }

}

function noPosts() {
    alert('No Blog posts yet...')
}

renderBlogList();

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

