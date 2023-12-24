
function stickynavbar() {
  if (window.scrollY >= document.querySelector('.nav_section').offsetTop) {    
    document.querySelector('.nav_section').classList.add('sticky');
  } else {
    document.querySelector('.nav_section').classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);