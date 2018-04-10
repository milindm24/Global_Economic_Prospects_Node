var data = fetch('./CSV/header.csv')
.then(response => response.text())
.then(text => {
    header = text.split(",");
    var thead = document.createElement('thead');
    let tr = document.createElement('tr');  
    thead.appendChild(tr);
    document.getElementById("myTable").appendChild(thead);  
    for(var i=0;i<header.length;i++){
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(header[i]));
        tr.appendChild(th);
        th.setAttribute("nowrap","nowrap");        
    }
});




