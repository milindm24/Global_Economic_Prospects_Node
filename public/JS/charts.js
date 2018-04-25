onViewChart = (chartType="bar")=>{
    var dataset = [];
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

    for(var i=0; i<copyArray.length; i++){
        dataset.push
    }

    copyArray.forEach(element => {
        dataset.push({
            label: element.indicator,
            data: element.data.slice(3)
        });
    });
    new ViewChart(dataset, chartType);
}


class ViewChart{

    constructor(dataset,type){
        document.getElementById("tableContainer").style.display = "none";
        var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: headerArray.slice(3),
            datasets: dataset
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


