document.addEventListener('DOMContentLoaded', () => {
 document.addEventListener('keyup', () => {

const getSearchBar =  document.querySelector('#searchBar');
const getAllList =  document.querySelectorAll('.list');
const Error = document.querySelectorAll('.error');

getSearchBar.addEventListener('keyup', e => {
   getAllList.forEach(list => {
       if (list.innerText.toLowerCase().includes(
           e.target.value.toLowerCase())) {
           list.style.display = 'block';
           return list;
       }
       else {
           list.style.display = "none";
        
           
   

       }
   });
});
});
});
