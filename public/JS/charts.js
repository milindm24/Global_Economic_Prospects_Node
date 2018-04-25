onViewChart = (chartType="bar")=>{
    var dataset = [];
    var data=[];
    var indicators = ['Exports of goods and services (% of GDP)',
    'Exports of goods and services (annual % growth)',
    'Exports of goods and services (current US$)',
    'GDP (current US$)',
    'GDP growth (annual %)',
    'GDP per capita (current US$)',
    'GDP per capita growth (annual %)',
    'GNI growth (annual %)',
    'GNI per capita growth (annual %)',
    'Imports of goods and services (% of GDP)',
    'Imports of goods and services (annual % growth)',
    'Imports of goods and services (current US$)'
    ];

    randomcolor = (chartType) =>{
        var R = Math.floor(Math.random() * 255);
        var G = Math.floor(Math.random() * 255);
        var B = Math.floor(Math.random() * 255);
        var fillPattern = `rgb(${R},${G},${B})`;
        var fillPatternLine =  `rgba(${R},${G},${B},0.2)` ;
        console.log(fillPattern);
        if (chartType === "line" || chartType ==="radar")
        return fillPatternLine;
        else
        return fillPattern
    }

    var divEle = document.getElementById("myChartDiv");
    divEle.innerHTML = '';
    
    for (var j=0; j<indicators.length;j++){
        data.push({indicator: indicators[j],data: []});
        for(var i=0; i<copyArray.length; i++){
            if (indicators[j]===copyArray[i].indicator)
            data[0].data.push({
                label: copyArray[i].country,
                data: copyArray[i].data.slice(3)
                , backgroundColor: randomcolor(chartType)
            });
        }
        new ViewChart(data, chartType);
        data = [];
    }

}


class ViewChart{

    constructor(dataset,type){
        document.getElementById("tableContainer").style.display = "none";
        var divEle = document.getElementById("myChartDiv");
        var ctx = document.createElement("canvas");
        ctx.setAttribute("id",dataset[0].indicator.replace(/ /g,"_"));
        divEle.appendChild(ctx);
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: headerArray.slice(3),
            datasets: dataset[0].data
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    }

}


