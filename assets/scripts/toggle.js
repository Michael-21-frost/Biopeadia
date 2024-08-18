document.addEventListener('DOMContentLoaded', () => {

  
  let toggleBtn = document.getElementById('toggle-btn');
  let body = document.body;
  let darkMode = localStorage.getItem('dark-mode');
  
  const enableDarkMode = () =>{
     toggleBtn.classList.replace('fa-sun', 'fa-moon');
     body.classList.add('dark');
     localStorage.setItem('dark-mode', 'enabled');
  }
  
  const disableDarkMode = () =>{
     toggleBtn.classList.replace('fa-moon', 'fa-sun');
     body.classList.remove('dark');
     localStorage.setItem('dark-mode', 'disabled');
  }
  
  if(darkMode === 'enabled'){
     enableDarkMode();
  }
  
  if (toggleBtn) {
    toggleBtn.onclick = (e) =>{
       darkMode = localStorage.getItem('dark-mode');
       if(darkMode === 'disabled'){
          enableDarkMode();
       }else{
          disableDarkMode();
       }
    }
  }
  
  let profile = document.querySelector('.header .flex .profile');
  
  let userBtn = document.querySelector('#user-btn');
  if (userBtn) {
    userBtn.onclick = () =>{
       if (profile) {
         profile.classList.toggle('active');
       }
       if (search) {
         search.classList.remove('active');
       }
    }
  }
  
  let search = document.querySelector('.header .flex .search-form');
  
  let searchBtn = document.querySelector('#search-btn');
  if (searchBtn) {
    searchBtn.onclick = () =>{
       if (search) {
         search.classList.toggle('active');
       }
       if (profile) {
         profile.classList.remove('active');
       }
    }
  }
  
  let sideBar = document.querySelector('.side-bar');
  
  let menuBtn = document.querySelector('#menu-btn');
  if (menuBtn) {
    menuBtn.onclick = () =>{
       if (sideBar) {
         sideBar.classList.toggle('active');
       }
       body.classList.toggle('active');
    }
  }
  
  let closeBtn = document.querySelector('#close-btn');
  if (closeBtn) {
    closeBtn.onclick = () =>{
       if (sideBar) {
         sideBar.classList.remove('active');
       }
       body.classList.remove('active');
    }
  }
  
  window.onscroll = () =>{
     if (profile) {
       profile.classList.remove('active');
     }
     if (search) {
       search.classList.remove('active');
     }
  
     if(window.innerWidth < 1200){
        if (sideBar) {
          sideBar.classList.remove('active');
        }
        body.classList.remove('active');
     }
  }
});
