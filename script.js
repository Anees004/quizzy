let dropdownTimer;

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(dropdownTimer);
  dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
  dropdownTimer = setTimeout(() => {
    dropdownContent.style.display = 'none';
  }, 180); 
});


// ...for subdrop..

const subdropdown = document.querySelector('.sub-dropdown');
const subdropdownContent = document.querySelector('.sub-dropdown-content');

subdropdown.addEventListener('mouseenter', () => {
  clearTimeout(dropdownTimer);
  subdropdownContent.style.display = 'block';
});

subdropdown.addEventListener('mouseleave', () => {
  subdropdownTimer = setTimeout(() => {
    subdropdownContent.style.display = 'none';
  }, 180); // set the timeout to 2 seconds (2000 milliseconds)
});