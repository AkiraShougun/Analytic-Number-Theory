window.onload = function(){

  
  const navbar = document.querySelector('.nav-section')
  
  function stickynavbar() {
    if (window.scrollY >= document.querySelector('.nav-section').offsetTop) {    
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');    
    }
  }
  window.addEventListener('scroll', stickynavbar);
}