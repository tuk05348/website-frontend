const apiURL = "https://l1m3x0q9m3.execute-api.us-east-1.amazonaws.com/prod/visitorcount/"

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

async function updateCount(){
    let res = await fetchData()
    let count = res["visitor-count"]
    document.getElementById("visitor-counter").innerHTML += "<p><b>" + count + "</b></p>"
}