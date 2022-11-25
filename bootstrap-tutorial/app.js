const title = "Join the thousands of artist with a head start"
let caption = "Sign up"

document.getElementById("title").innerHTML = title
document.getElementById("caption").innerHTML = caption


function returnQuantity() {

    const numOfDays = Number.parseInt(document.getElementById('days').value)
    let fruits = Number.parseInt(document.getElementById('fruit').value)

    let totalFruits = 0

    for (let i = 0; i < numOfDays; i++) {
        totalFruits += fruits
        if (i == 2) {
            alert('Number of fruit on 3rd day is : ' + totalFruits)
        }
    }
    alert('Total fruit on 5th day is : ' + totalFruits)

}









