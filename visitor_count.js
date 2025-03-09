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
async function updateCount(){
    let res = await fetchData()
    let count = res["visitor-count"]
    document.getElementById("visitor-counter").innerHTML += "<p><b>" + count + "</b></p>"
}

window.addEventListener("DOMContentLoaded", function(){updateCount();})