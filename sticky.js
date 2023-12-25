window.onload = function(){

  
  const navbar = document.querySelector('.nav_section')
  
  function stickynavbar() {
    if (window.scrollY >= document.querySelector('.nav_section').offsetTop) {    
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');    
    }
  }
  window.addEventListener('scroll', stickynavbar);
}