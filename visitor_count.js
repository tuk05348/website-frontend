const apiURL = "https://l1m3x0q9m3.execute-api.us-east-1.amazonaws.com/prod/visitorcount/"

async function fetchData(input) {
    const request = new Request(apiURL, input)
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

async function getData() {
    let read = {
        method: "POST",
        body: JSON.stringify(
            { operation: "read", payload: {Key: {"visitor-count-id" : "1"}}})
    }
    res = await fetchData(read)
    if("Item" in res){
        return parseInt(res["Item"]["number"])
    }
    else{
        return "Unavailable"
    }
}

async function putData() {
    let post = {
        method: "POST",
        body: JSON.stringify(
            {
                operation: "create",
                payload: {
                  Item: {
                    "visitor-count-id": "1",
                    "number": 0
                  }
                }
            })
        }
    output = await fetchData(post)
}

async function updateData(newCount) {
    let update = {
        method: "POST",
        body: JSON.stringify({
            operation: "update",
            payload: {
                Key: {
                    "visitor-count-id": "1"
                },
                UpdateExpression: "SET #num = :newNum",
                ExpressionAttributeNames: {
                    "#num": "number"
                },
                ExpressionAttributeValues: {
                    ":newNum": newCount
                }
            }
        })
    }
    output = await fetchData(update)
}

async function updateCount(){
    let count = await getData()
    if(count === "Unavailable"){
        await putData()
        count = 0
    }
    count += 1
    await updateData(count)
    document.getElementById("visitor-counter").innerHTML += "<p><b>" + count + "</b></p>"
}