expandCountries = () => {
    countryList = !countryList;
    console.log(inputNames);
    if (countryList){
        document.getElementById("countrySub").style.display = "";
        document.getElementById("arrow").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("countrySub").style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(90deg)";        
    }
}