

Highcharts.getJSON('https://raw.githubusercontent.com/mc265/wood-agglomerates/main/wood%20agglomerates.json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

	
	// the button handler
document.getElementById('button').addEventListener('click', () => {
	    if (chart.series.length === 1) {
        chart.addSeries({
            data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
        });
    }
});
	
    // Create the chart
    Highcharts.stockChart('container', {
       
      rangeSelector: {
    //buttons: [ {
     //   type: 'year',
      //  count: 5,
       // text: '5years'
  //  },  {
      //  type: 'year',
      //  count: 10,
     //   text: '10years'
   // }, {
    //    type: 'all',
    //    text: 'All'
  //  }]
enabled:false
},

        title: {
            text: 'Export of key wood products over time. Press the name of any wood product at bottom to see it displayed.  Grab the edges of the bottom bar to shrink and expand the years displayed in the main graph'
        },
	     subtitle: {
        text: 'Data Source: <a href="https://www.fao.org/faostat/en/#data/FO">FAOSTAT forestry</a>.',
        align: 'left'
    },
    
       xAxis: {
            type: 'date ',
            title: {
            enabled: true,
            text: 'Year'
            }
        },
         yAxis: {
          title:{
            enabled:true,
            text: 'tonnes'
          }
        },
         
        
        series: [{
            name: 'Wood pellets and other agglomerates',
            data: formattedData,
            tooltip: {
                valueDecimals: 0,
               valueSuffix: 'tonnes'
            }
	
        }]
    });
});

