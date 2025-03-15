function highlight(id) {
    var tab = document.getElementById(id)
    var list = document.getElementById("List")
    var prev = list.querySelector(".tab")
    if(prev !== null){
        prev.classList.remove("tab")
    }
    tab.classList.add("tab")
}