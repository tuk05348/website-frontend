/*
Simple JavaScript function using event delegation on the side navigation bar to highlight clicked sections
and let the user know what section they clicked on by adding an underline to its text/anchor link
*/
let sidenav = document.getElementById('sidenav'); //get sidenav element
let nav_list = document.querySelectorAll('.sidenav > ul > li'); //select all list elements inside sidenav
let nav_array = [...nav_list]; //convert selection to an array using spread operator

//Add event listener to sidenav, use event object to listen for click event on child elements of sidenav
sidenav.addEventListener('click', (e) => {
    let highlight = e.target.closest('li'); //use closest to get click event on list item or anchor link inside it
    if(highlight){ //if what was clicked was a list event, add css style to highlight element to user
        highlight.classList.add('highlight');
    }
    let exclude = nav_array.filter(element => element != highlight); //get all other list elements not the clicked one
    exclude.forEach(element => { //clear the highlight on those other items so only one highlight is applied at a time
        element.classList.remove('highlight')
    });
});
