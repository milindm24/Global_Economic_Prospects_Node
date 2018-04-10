// retrieveName = ()=>{
//     return Object.keys(fileInput).map((file) => {
//         return fileInput[file].name;
//     });
// }

// onChooseFile = () =>{
//     fileInput = document.getElementById("csv").files;
//     inputNames = retrieveName();
//     console.log(inputNames);
// }

onAddFiles = () => {
    var fileInput = document.getElementById("csv").files;
    let i = 0;
    output = document.getElementById("out");
    inputNames = Object.keys(fileInput).map((file) => {
        return fileInput[file].name;
    });

    loadMultiple = () =>{  setInterval(() => { //function to retreive and render data in html file
        let reader = new FileReader();
        if (i < fileInput.length ) {
            reader.addEventListener("load", () => {         
                outarray.push({ name: fileInput[i].name, data: reader.result });
                viewOutput += reader.result;
                console.log(outarray);
                i++;
                console.log(i);
                console.log(fileInput.length);
            }, false);
            reader.readAsBinaryString(fileInput[i]);
            console.log(fileInput[i].name);
            output.innerHTML += `${fileInput[i].name} Added ` ;  
            if (i === fileInput.length){
                clearInterval(loadMultiple);            
            }          
        }
    }, 500);
}
   
    if (outarray.length > 0){
     names = outarray.map(({name})=> name );         
    }
    console.log(inputNames);
    if (names.length>0){

        let matchFound = inputNames.filter((name)=>{
            return names.includes(name);
        });
            if (matchFound.length>0){
                output.innerHTML = `${matchFound} already loaded` ;
            } else {
                loadMultiple();
            }
          
    }else {
         loadMultiple();
    }      
}


viewData = ()=>{
    var splitted = viewOutput.split("\n");
    let splittedChildComma = [];
    // console.log(count);
    splitted.forEach((splittedChild)=>{
        splittedChildComma.push(splittedChild.split(","));
    });
    console.log(splittedChildComma);
    var tbdy = document.createElement('tbody');
    document.getElementById("myTable").appendChild(tbdy);    
    for (var j=0; j<splittedChildComma.length;j++){
    // var count = document.getElementById("myTable").rows.length;  
    var tr = document.createElement('tr');    
    tbdy.appendChild(tr);
    // var row = document.getElementById("myTable").createTHead().insertRow(count);
    for(var i=0;i<splittedChildComma[0].length;i++){
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(splittedChildComma[j][i]));
        tr.appendChild(td);
        td.setAttribute("nowrap","nowrap");                
        // row.insertCell(i).innerHTML = splittedChildComma[j][i];
    }
}
    // document.getElementById('out').innerHTML = viewOutput;
}





