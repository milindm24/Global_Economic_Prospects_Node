expandCountries = () => {
    countryList = !countryList;
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


expandCharts = ()=>{
    chartList = !chartList;
    if (chartList){
        document.getElementById("chartSubType").style.display = "";
        document.getElementById("arrow-chart").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("chartSubType").style.display = "none";
        document.getElementById("arrow-chart").style.transform = "rotate(90deg)";        
    }
}


onfilterRows = ()=>{
    rowList = !rowList;
    if (rowList){
        document.getElementById("rowFilter").style.display = "";
        document.getElementById("arrow-filter").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("rowFilter").style.display = "none";
        document.getElementById("arrow-filter").style.transform = "rotate(90deg)";        
    }
}


expandStats = ()=>{
    statsList = !statsList;
    if (statsList){
        document.getElementById("statsSub").style.display = "";
        document.getElementById("arrow-stats").style.transform = "rotate(270deg)";
    }else {
        document.getElementById("statsSub").style.display = "none";
        document.getElementById("arrow-stats").style.transform = "rotate(90deg)";        
    }
}

