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
            output.innerHTML += `${fileInput[i].name} Added `;            
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
    setTimeout(()=>{
        createObjectFromArray();                
        addLabelList();
    },1000); 
}


createObjectFromArray = ()=>{
    // console.log("create object");
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
        copyArray = mainArray.slice(0);
        console.log(mainArray);
        // console.log(copyArray);
}





viewData = (sliceMainArray)=>{
    document.getElementById("tableContainer").style.display = "";
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
        if (typeof sliceMainArray != 'undefined'){
            for(var i=0;i< sliceMainArray[j].length;i++){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(sliceMainArray[j][i]));
                tr.appendChild(td);
                tr.setAttribute("class",copyArray[j].country + " "+ copyArray[j].indicator.replace(/ /g,"_"));
                td.setAttribute("nowrap","nowrap");             
            }
        }else {
            for(var i=0;i< copyArray[j].data.length;i++){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(copyArray[j].data[i]));
                tr.appendChild(td);
                tr.setAttribute("class",copyArray[j].country + " "+ copyArray[j].indicator.replace(/ /g,"_"));
                td.setAttribute("nowrap","nowrap");             
            }
        }
       
    }
}else {
    output.innerHTML = "Please select other files";
}
    // viewOutput = false;
}


addLabelList = () => {
    var countrySub = document.getElementById("countrySub");
    if (countrySub){
        document.getElementById("countrySub").remove();
    }
    var nchild = document.getElementById("countriesUl");
    var newCountry = document.createElement("li");
    var countryDiv = document.createElement("div");
    newCountry.setAttribute("id","countrySub");
    console.log(outarray);
    outarray.forEach(({name,data})=>{
        var newLabel = document.createElement("label");
        var checkInput = document.createElement("input");
        checkInput.setAttribute("type","checkbox");
        checkInput.setAttribute("value",name);
        var dataId = data.split(",");
        checkInput.setAttribute("id",name);
        checkInput.setAttribute("name","countries");
        checkInput.setAttribute("onclick",`onCheckCountry(this.id,'${dataId.splice(0,1)}')`);
        newLabel.appendChild(checkInput);
        newLabel.appendChild(document.createTextNode(name));
        countryDiv.appendChild(newLabel);
        checkInput.setAttribute("checked","true");
    });
    newCountry.appendChild(countryDiv);
    nchild.insertBefore(newCountry,nchild.childNodes[2]);
    document.getElementById("countrySub").style.display = "none";
}


onCheckCountry = (checkid,className)=>{
    if (document.getElementById(checkid).checked){

        var countryClass = document.getElementsByClassName(className);
        for (var i=0; i<countryClass.length;i++){
            countryClass[i].style.display = "";
        }
    }else {
        console.log(className);

        var countryClass = document.getElementsByClassName(className);
        for (var i=0; i<countryClass.length;i++){
            countryClass[i].style.display = "none";
        }
    }
}
   

onClickFilter = (value,id)=>{
    console.log(value + " " + id);
    var checkIndicator = document.getElementById(id).checked;
    if (checkIndicator){
        var countryClass = document.getElementsByClassName(value);
        for (var i=0; i<countryClass.length;i++){
            countryClass[i].style.display = "";
        }
    }else {
        var countryClass = document.getElementsByClassName(value);
        for (var i=0; i<countryClass.length;i++){
            countryClass[i].style.display = "none";
        }
    }
}


onFilterColumns = ()=>{
    var slider1 = document.getElementById("sliderValue").innerHTML;
    var slider2 = document.getElementById("sliderValue2").innerHTML;
    var startPos = slider1 - 1961;
    var endPos =  55-(2016 - slider2);
    var sliceMainArray=[];
    var mainIndicator = headerArray.slice(0,3);
    if (slider1 < slider2){
        var header = headerArray.slice(startPos+3,endPos+4);
        for (var j=0; j<copyArray.length;j++){
            let copyArraySlice = copyArray[j].data.slice(startPos+3,endPos+4);
            sliceMainArray.push([copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]);
            // console.log(copyArraySlice);
        }
    }else {
        var header = headerArray.slice(endPos+3,startPos+4);
        for (var j=0; j<copyArray.length;j++){
            let copyArraySlice = copyArray[j].data.slice(endPos+3,startPos+4);
            sliceMainArray.push([copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]);
            // console.log(copyArraySlice);
        }
    }


    console.log(sliceMainArray);
    // console.log(headerArray);
    headerCreate([...mainIndicator,...header]);
    viewData(sliceMainArray);




}


