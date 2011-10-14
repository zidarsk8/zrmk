function drawGraph(){
	
	
	
	
	chart1 = new Highcharts.Chart({
	      chart: {
	         renderTo: 'graph_0',
	         defaultSeriesType: 'column'
	      },
	      title: {
	         text: 'Energy need for heating'
	      },
	      xAxis: {
	         categories: ['Heat losses', 'Heat gains']
	      },
	      yAxis: {
	         min: 0,

	         title: {
	            text: 'Heat transfer during heating season [kWh/m2a]'
	         },
	         stackLabels: {
	            enabled: true,
	            style: {
	               fontWeight: 'bold',
	               color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	            }
	         }
	      },
	      legend: {
	         align: 'center',
	         x: 20,
	         verticalAlign: 'top',
	         y: 20,
	         floating: true,
	         backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
	         borderColor: '#CCC',
	         borderWidth: 1,
	         shadow: false
	      },
	      tooltip: {
	         formatter: function() {
	            return '<b>'+ this.x +'</b><br/>'+
	                this.series.name +': '+ this.y +'<br/>'+
	                'Total: '+ this.point.stackTotal;
	         }
	      },
	      plotOptions: {
	         column: {
	            stacking: 'normal',
	            dataLabels: {
	               enabled: false,
	               color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	            }
	         }
	      },
	       series: [{
	         name: 'ventilation losses',
	         data: [getS('q_ve'), 0]
	      }, {
	         name: 'transmission losses roof',
	         data: [getS('q_T_Sum_Roof'), 0]
	      }, {
	         name: 'transmission losses wall',
	         data: [getS('q_T_Sum_Wall'), 0]
	      }, {
	         name: 'transmission losses window',
	         data: [getS('q_T_Sum_Window'), 0]
		  }, {
	         name: 'transmission losses floor',
	         data: [getS('q_T_Sum_Floor'), 0]
		  },{
			 name: 'usable solar heat load',
			 data: [0, round(getS('q_sol')*getS('eta_h_gn'))]
		  },
		  {
		     name: 'usable internal heat load',
		     data: [0, round(getS('q_int_g')*getS('eta_h_gn'))]
		  },{
		     name: 'energy need for heating',
		     data: [0, round(getS('q_H_nd'))]
		  }]
	   });
	
	chart2 = new Highcharts.Chart({
	      chart: {
	         renderTo: 'graph_1',
	         defaultSeriesType: 'column'
	      },
	      title: {
	         text: 'Primary energy demand'
	      },
	      xAxis: {
	         categories: ['Energy need', 'Energy carriers', 'Primary energy']
	      },
	      yAxis: {
	         min: 0,
	         max: 500,
	         title: {
	            text: 'Energy use [kWh/m2a]'
	         },
	         stackLabels: {
	            enabled: true,
	            style: {
	               fontWeight: 'bold',
	               color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	            }
	         }
	      },
	      legend: {
	         align: 'center',
	         x: 20,
	         verticalAlign: 'top',
	         y: 20,
	         floating: true,
	         backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
	         borderColor: '#CCC',
	         borderWidth: 1,
	         shadow: false
	      },
	      tooltip: {
	         formatter: function() {
	            return '<b>'+ this.x +'</b><br/>'+
	                this.series.name +': '+ this.y +'<br/>'+
	                'Total: '+ this.point.stackTotal;
	         }
	      },
	      plotOptions: {
	         column: {
	            stacking: 'normal',
	            dataLabels: {
	               enabled: false,
	               color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	            }
	         }
	      },
	       series: [{
	         name: 'domestic hot water',
	         data: [getS('q_ve'), 0, 0]
	      }, {
	         name: 'space heating',
	         data: [getS('q_T_Sum_Roof'), 0, 0]
	      }, {
	         name: 'fossil fuels',
	         data: [0, getS('q_T_Sum_Wall'), 0]
	      }, {
	         name: 'distinct heating',
	         data: [0, getS('q_T_Sum_Window'), 0]
		  }, {
	         name: 'bio mass',
	         data: [0, getS('q_T_Sum_Floor'), 0]
		  },{
	         name: 'electricity',
	         data: [0, getS('q_T_Sum_Floor'), 0]
		  },{
	         name: 'other',
	         data: [0, getS('q_T_Sum_Floor'), 0]
		  },{			  
			 name: 'produced electricity',
			 data: [0, 2, 0]
		  },
		  {
		     name: 'primary energy for hot water',
		     data: [0,0, 1]
		  },{
		     name: 'primary energy for heating',
		     data: [0, 0, 3]
		  }]
	   });
	
}

drawGraph();
