// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleSwitch = document.querySelector('#toggle');
toggleSwitch.addEventListener('change', switchTheme);



function switchTheme(event) {
  

  if (event.target.checked) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');

  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } 
}


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

const readLocalStorage = function () {
  const data = localStorage.getItem('blogData');
  console.log('read storage', data);
  if (!data) {
    return [];
  }
  return data;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (data) {
  const blogItems = readLocalStorage();
  blogItems.push(data);
  localStorage.setItem('blogData', JSON.stringify(blogItems));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

