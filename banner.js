window.onload = function setWidth(){
    let sidebar = document.getElementById("sidebar")
    var spacer = document.getElementById("spacer")
    spacer.style.width = sidebar.clientWidth
}