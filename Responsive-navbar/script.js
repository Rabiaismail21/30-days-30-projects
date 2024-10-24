let toggleBtn = document.querySelector('.toggle-menu');
let listContainer = document.querySelector('.list-container');

toggleBtn.addEventListener('click', () => {
    listContainer.classList.toggle('show');
})