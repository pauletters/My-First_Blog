// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
const error = document.querySelector('#error');

const readLocalStorage = function () {
  const data = JSON.parse (localStorage.getItem('blogData'));
  console.log('read storage', data);
  if (!data) {
    return [];
  }
  return data;
};

const initialData = readLocalStorage();

if (form) {
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  if (username && title && content) { 
    const blogData = {
      username: username,
      title: title,
      content: content
    };

    initialData.push(blogData);
    console.log('initialData', initialData);
    localStorage.setItem('blogData', JSON.stringify(initialData));
    redirectPage('blog.html');
    console.log(submit);
  } else {
    error.textContent = 'Please complete the form';
  }
});
}
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
