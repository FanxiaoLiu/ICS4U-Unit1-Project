function parse(pn) {
    let data1;
    let x =3;
    let data2 = [];
    fetch('/javascript/data.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        data1 = data.split(/\r\n|\n/);
        for(var line = 0; line < line.length-1; line++){
            console.log(line + " --> "+ line[line]);
        }
        console.log(pn);

        let j = 0;

        for (let i = pn; i < data1.length; i++) {
            console.log(i);
            data2[j] = data1[i];
            j++;
        }

        console.log(data2);
        
        
        // location.href = "/players.html?name="+data1[1];
        sessionStorage.setItem("data2", JSON.stringify(data2));

        var imgurl;

        if (pn == 0) {
            imgurl = 0;
        } else {
            imgurl = pn/3;
        }

        sessionStorage.setItem("imgurl", imgurl);
        location.href = "/players.html";

    });
}

function parse1() {
    let results = function1();
    console.log(results);
    let temp = results[1];

    document.getElementById("pname").innerHTML = results[1];
    location.href = "/players.html";
}

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
 }

function getqueryparams() {
    let name = get("name");
    document.getElementById("pname").innerHTML = name;
}