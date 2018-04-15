onChooseFile = () =>{
    output.innerHTML = "";
    fileInput = document.getElementById("csv").files;
    inputNames = Object.keys(fileInput).map((file) => {
        return fileInput[file].name;
    }); 
    output.innerHTML = inputNames + ' selected';
}

onAddFiles = () => {
    output.innerHTML = "";    
    loadMultiple = (i) => {  //function to retreive and render data in html file
        let reader = new FileReader();
        if (i < fileInput.length ) {
            reader.addEventListener("load", () => {         
                outarray.push({ name: fileInput[i].name, data: reader.result });
                viewOutput = true;                
        }, false);
            reader.readAsBinaryString(fileInput[i]);
            output.innerHTML += `${fileInput[i].name} Added ` ;            
        }
    }
   
    if (outarray.length > 0){
     names = outarray.map(({name})=> name );         
    }
    if (names.length>0){

        let matchFound = inputNames.filter((name)=>{
            return names.includes(name);
        });
            if (matchFound.length>0){
                output.innerHTML = `${matchFound} already loaded` ;
            } else {
                if (fileInput){
                    for (var j = 0; j < fileInput.length ;j++){
                        loadMultiple(j);
                    }
                }
                else{
                    output.innerHTML = "Please select a file";
                }
            }
          
    }else {
        if (fileInput){
            for (var j = 0; j < fileInput.length ;j++){
                loadMultiple(j);
            }              
        }
        else{
            output.innerHTML = "Please select a file";
        }
    }
    addLabelList();
}


createObjectFromArray = ()=>{
    console.log("create object");
    let splittedChildComma = [];
    var legends = [];
    var dataObject;
    var count = 0;
    outarray.forEach(({name,data})=>{
            var splitted = data.split("\n");
            splitted.forEach((splittedChild)=>{
                    splittedChildComma.push({name , data: splittedChild.split(",")});
                    });
                });
    for(var i=0;i<splittedChildComma.length;i++){
            legends.push({
                name: splittedChildComma[i].name,
                country: splittedChildComma[i].data[0],
            indicator: splittedChildComma[i].data[2],
            data: splittedChildComma[i].data});
        }
        mainArray = legends;
        copyArray = mainArray;
        console.log(copyArray);
}



// viewData = ()=>{
//     if (viewOutput !== ""){
//         // console.log(viewOutput);
//         var splitted = viewOutput.split("\n");
//         let splittedChildComma = [];
//         splitted.forEach((splittedChild)=>{
//             splittedChildComma.push(splittedChild.split(","));
//         });
//         var tbdy = document.createElement('tbody');
//         document.getElementById("myTable").appendChild(tbdy);    
//         for (var j=0; j<splittedChildComma.length;j++){
//         var tr = document.createElement('tr');    
//         tbdy.appendChild(tr);
//         for(var i=0;i<splittedChildComma[0].length;i++){
//             var td = document.createElement('td');
//             td.appendChild(document.createTextNode(splittedChildComma[j][i]));
//             tr.appendChild(td);
//             td.setAttribute("nowrap","nowrap");                
//         }
//     }
//     // document.getElementById("myTable").tHead.style.position = "fixed";
// }else {
//     output.innerHTML = "Please select other files";
// }
//     viewOutput = "";
// }



viewData = ()=>{
    createObjectFromArray();
    var tableVar = document.getElementById("tableBody");
    if (viewOutput){
        if(tableVar){
            tableVar.parentNode.removeChild(tableVar);
        }
        var tbdy = document.createElement('tbody');
        tbdy.setAttribute("id","tableBody");
        document.getElementById("myTable").appendChild(tbdy);    
        for (var j=0; j<copyArray.length;j++){
        var tr = document.createElement('tr');    
        tbdy.appendChild(tr);
        for(var i=0;i<copyArray[j].data.length;i++){
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(copyArray[j].data[i]));
            tr.appendChild(td);
            td.setAttribute("nowrap","nowrap");             
        }
    }
}else {
    output.innerHTML = "Please select other files";
}
    viewOutput = false;
}


addLabelList = () => {
    var nchild = document.getElementById("countriesUl");
    var newCountry = document.createElement("li");
    var countryDiv = document.createElement("div");
    newCountry.setAttribute("id","countrySub");
    inputNames.forEach((name)=>{
        var newLabel = document.createElement("label");
        var checkInput = document.createElement("input");
        checkInput.setAttribute("type","checkbox");
        newLabel.appendChild(checkInput);
        newLabel.appendChild(document.createTextNode(name));
        countryDiv.appendChild(newLabel);
        checkInput.setAttribute("checked","true");
    });
    newCountry.appendChild(countryDiv);
    nchild.insertBefore(newCountry,nchild.childNodes[2]);
    console.log("expand countries clicked");
    document.getElementById("countrySub").style.display = "none";
}




