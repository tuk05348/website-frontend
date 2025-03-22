//url to the backend visitor count API, would prefer not to hard code it
const apiURL = "https://l1m3x0q9m3.execute-api.us-east-1.amazonaws.com/prod/visitorcount/"

//simple function to make GET request to API and also do error handling
async function fetchData() {
    const request = new Request(apiURL)
    try {
        const response = await fetch(request);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
}

//simple function to update visitor count HTML element with the visitor count fetched from the API
// local storage is used to save the previous count and ensure a smooth transition when new count is retrieved
async function updateCount(){
    let stored_count = localStorage.getItem("stored_count"); //get stored count before new count is fetched
    document.getElementById("visitor-counter").innerHTML = stored_count;
    let res = await fetchData(); //fetch new count
    let count = res["visitor-count"];
    localStorage.setItem("stored_count", count); //set stored count to the new count
    document.getElementById("visitor-counter").innerHTML = count; //display new count
}

window.addEventListener("DOMContentLoaded", function(){updateCount();})