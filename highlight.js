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

/*function highlight(id) {
    let highlight = document.getElementById(id)
    let list = document.getElementById("List")
    let prev = list.querySelector(".highlight")
    if(prev !== null){
        prev.classList.remove("highlight")
    }
    if(highlight.id !== "Top-Anchor"){
        highlight.classList.add("highlight")
    }
}*/