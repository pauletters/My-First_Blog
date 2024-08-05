// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');


backButton.addEventListener('click', function() {
  redirectPage('index.html');
});

// TODO: Create a function that builds an element and appends it to the DOM
function renderBlogList() {
  // const blogData = JSON.parse(localStorage.getItem(['username', 'title', 'content']));
  
  const blogData = readLocalStorage();
  console.log('render shit', blogData);

  // for (let i = 0; i < todos.length; i++) {
  //   const todo = todos[i];

  //   const li = document.createElement('li');
  //   li.textContent = todo;
  //   li.setAttribute('data-index', i);

  //   const button = document.createElement('button');
  //   button.textContent = 'Complete ✔️';

  //   li.appendChild(button);
  //   todoList.appendChild(li);
  // }
  

  // for (let i = 0; i < blogData.length; i++) {
  //   const blogData = blogData[i];

  //   const article = document.createElement('article');
  //   article.setAttribute('data-index', i);
  //   blogData.appendchild(article);
  // }

  if (blogData.length !== 0){
    const parsedData = JSON.parse(blogData);
    document.querySelector('.card').innerHTML = `
    
      <h2><span id="title">${parsedData.title}</span></h2>
      <blockquote id="content">${parsedData.content}</blockquote>
      <p>Posted by <span id="username">${parsedData.username}</span></p>
    `;
    
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

// const blogPost = {
//   username: username.value,
//   title: title.value,
//   content: content.value.trim(),
// };