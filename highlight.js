let sidenav = document.getElementById('sidenav');
let nav_list = document.querySelectorAll('.sidenav > ul > li');
console.log(nav_list);
let nav_array = [...nav_list];

sidenav.addEventListener('click', (e) => {
    let highlight = e.target.closest('li');
    if(highlight){
        highlight.classList.add('highlight');
    }
    let exclude = nav_array.filter(element => element != highlight);
    exclude.forEach(element => {
        element.classList.remove('highlight')
    });
});
