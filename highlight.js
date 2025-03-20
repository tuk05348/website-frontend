function highlight(id) {
    let tab = document.getElementById(id)
    let list = document.getElementById("List")
    let prev = list.querySelector(".tab")
    if(prev !== null){
        prev.classList.remove("tab")
    }
    if(tab.id !== "Top_Anchor"){
        tab.classList.add("tab")
    }
}