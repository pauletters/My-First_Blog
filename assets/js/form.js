// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function(event) {
  event.preventDefault();
  const blogData = {
   username: document.querySelector('#username').value,
   title: document.querySelector('#title').value,
   content: document.querySelector('#content').value,
  };

  if (username && title && content) { 
    localStorage.setItem('blogData', JSON.stringify(blogData));
    redirectPage('blog.html');
    console.log(submit);
  }

  if (!username || !title || !content) {
    alert('Please complete the form');
    console.log(error);
  }
  console.log('form submitted');
});


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
