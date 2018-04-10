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
                viewOutput += reader.result;
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
                    for (var j = 0; j < fileInput.length ;j++)
                    loadMultiple(j);
                }
                else{
                    output.innerHTML = "Please select a file";
                }
            }
          
    }else {
        if (fileInput){
            for (var j = 0; j < fileInput.length ;j++)
            loadMultiple(j);
        }
        else{
            output.innerHTML = "Please select a file";
        }
    }
}


viewData = ()=>{
    if (viewOutput !== ""){
        var splitted = viewOutput.split("\n");
        let splittedChildComma = [];
        splitted.forEach((splittedChild)=>{
            splittedChildComma.push(splittedChild.split(","));
        });
        var tbdy = document.createElement('tbody');
        document.getElementById("myTable").appendChild(tbdy);    
        for (var j=0; j<splittedChildComma.length;j++){
        var tr = document.createElement('tr');    
        tbdy.appendChild(tr);
        for(var i=0;i<splittedChildComma[0].length;i++){
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(splittedChildComma[j][i]));
            tr.appendChild(td);
            td.setAttribute("nowrap","nowrap");                
        }
    }
}else {
    output.innerHTML = "Please select other files";
}
    viewOutput = "";
}





