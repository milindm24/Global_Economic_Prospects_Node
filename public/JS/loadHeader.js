var headerArray;

var data = fetch('./CSV/header.csv')
.then(response => response.text())
.then(text => {
    headerArray = text.split(",");
    headerCreate(headerArray);
});


headerCreate = (header)=>{
    if (document.getElementById("tableHead")){
        document.getElementById("tableHead").remove();
    }
    var thead = document.createElement('thead');
    let tr = document.createElement('tr');  
    thead.appendChild(tr);
    thead.setAttribute("id","tableHead");
    document.getElementById("myTable").appendChild(thead);  
    for(var i=0;i<header.length;i++){
        var th = document.createElement('th');
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(header[i]));
        th.appendChild(td);
        tr.appendChild(th);
        th.setAttribute("nowrap","nowrap");        
    }
}




