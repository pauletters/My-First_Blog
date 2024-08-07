// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');
const postError = document.querySelector('#no-posts');


 if (backButton) {
  backButton.addEventListener('click', function() {
  redirectPage('index.html');
});
}
// TODO: Create a function that builds an element and appends it to the DOM

function renderBlogList() {
  
  const blogData = localStorage.getItem('blogData');
  console.log('render stuff', blogData);
  const parent = document.querySelector('#card-parent');
  
  if (blogData && blogData.length !== 0){
    let parsedData = JSON.parse(blogData);
  
    for (let i = 0; i < blogData.length; i++) {
      console.log('loop');
      let cardContent = `
        <h2><span id="title">${parsedData[i].title}</span></h2>
        <blockquote id="content">${parsedData[i].content}</blockquote>
        <p>Posted by <span id="username">${parsedData[i].username}</span></p>
      `;
      let article = document.createElement('article');
      article.innerHTML = cardContent;
      article.setAttribute('data-index', i);
      article.classList.add('card');
      parent.appendChild(article);
      
    }
    
  } else {
    window.onload = 
     noPosts();
  }

}

function noPosts() {
    postError.textContent = 'No Blog posts yet...';
}

renderBlogList();

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

