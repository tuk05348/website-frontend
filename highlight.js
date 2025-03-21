let sidenav = document.getElementById('sidenav');
let nav_list = document.querySelectorAll('.sidenav > p, .sidenav > ul > li');
console.log(nav_list);
let nav_array = [...nav_list];

sidenav.addEventListener('click', (e) => {
    let tab = e.target.closest('li');
    tab.classList.add('tab');
    let exclude = nav_array.filter(element => element != tab);
    exclude.forEach(element => {
        element.classList.remove('tab')
    });
});

/*function highlight(id) {
    let tab = document.getElementById(id)
    let list = document.getElementById("List")
    let prev = list.querySelector(".tab")
    if(prev !== null){
        prev.classList.remove("tab")
    }
    if(tab.id !== "Top-Anchor"){
        tab.classList.add("tab")
    }
}*/