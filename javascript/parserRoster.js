function parse(pn) {
    let data1;
    let x =3;
    let data2 = [];
    // Gets the txt file to parse
    fetch('/javascript/data.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        // Parses the .txt file line by line and stores each line in an array
        data1 = data.split(/\r\n|\n/);
        for(var line = 0; line < line.length-1; line++){
            console.log(line + " --> "+ line[line]);
        }
        console.log(pn);

        let j = 0;

        // Transfers the data we want from data1 to data2 based on pn
        for (let i = pn; i < data1.length; i++) {
            console.log(i);
            data2[j] = data1[i];
            j++;
        }

        console.log(data2);
        
        // Alternative way to do it using queries
        // location.href = "/players.html?name="+data1[1];

        // Stores the information in the sessionstorage so it can be used across multiple pages
        sessionStorage.setItem("data2", JSON.stringify(data2));

        var imgurl;

        // imgurl will become useful later but it is a symbol to identify images to be put in the page
        if (pn == 0) {
            imgurl = 0;
        } else {
            imgurl = pn/3;
        }

        sessionStorage.setItem("imgurl", imgurl);
        location.href = "/players.html";

    });
}

// Query Method, not used here


/*
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
 }

function getqueryparams() {
    let name = get("name");
    document.getElementById("pname").innerHTML = name;
}
*/