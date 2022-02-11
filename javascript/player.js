function loadInfo() {
    // Sets data to be a value we stored in parserRoster and imgurl as well
    let data = JSON.parse(sessionStorage.getItem("data2"));
    console.log(data);

    //Changes the html elements on the players page to be the value we stored
    document.getElementById("pname").innerHTML = data[0];
    document.getElementById("page").innerHTML = "Age: " + data[1];
    document.getElementById("pheight").innerHTML = "Height: " + data[2];

    let imgurl = sessionStorage.getItem("imgurl");

    console.log(imgurl);

    let path = "/imgs/player" + imgurl + ".png";

    var myImg = document.getElementById("playerimg"); // Stores the element in a variable


    myImg.setAttribute('src', path); // adds a src attribute (with the value path) to myImg
}