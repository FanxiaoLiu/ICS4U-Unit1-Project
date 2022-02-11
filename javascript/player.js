function loadInfo() {
    let data = JSON.parse(sessionStorage.getItem("data2"));
    console.log(data);
    document.getElementById("pname").innerHTML = data[0];
    document.getElementById("page").innerHTML = "Age: " + data[1];
    document.getElementById("pheight").innerHTML = "Height: " + data[2];

    let imgurl = sessionStorage.getItem("imgurl");

    console.log(imgurl);

    let path = "/imgs/player" + imgurl + ".png";

    var myImg = document.getElementById("playerimg"); // creates a new img element


    myImg.setAttribute('src', path); // adds a src attribute (with the value myPath) to myImg
}