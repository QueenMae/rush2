document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icons li');
    
 icons.forEach(icon => {
        icon.addEventListener('click', function () {
   alert('Fonctionnalité à venir !');
  this.style.color = '#ff5a5f';
  setTimeout(() => {
                this.style.color = '#888';
   }, 300);
   });
 });
});
