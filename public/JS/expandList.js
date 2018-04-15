expandCountries = () => {
    countryList = !countryList;
    // console.log(inputNames);
    if (countryList){
        document.getElementById("countrySub").style.display = "";
        document.getElementById("arrow").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("countrySub").style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(90deg)";        
    }
}


expandSliders = ()=>{
    sliderList = !sliderList;
    if (sliderList){
        document.getElementById("slider").style.display = "";
        document.getElementById("arrow-slider").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("slider").style.display = "none";
        document.getElementById("arrow-slider").style.transform = "rotate(90deg)";        
    }
}