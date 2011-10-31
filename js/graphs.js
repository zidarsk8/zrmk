function drawGraph(){
	var cd = sData[cur];
	var s1v1 = cd['g_H_nd']*1/cd['A_C_Ref']*1;
	var s1v2 = cd['g_W_nd']*1/cd['A_C_Ref']*1;
	var s2v1 = cd['g_W_nd']*1/cd['A_C_Ref']*1;
	
	var rt = 'chart_1_container_0';
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
	
			chart: {
				renderTo: rt,
				defaultSeriesType: 'column'
			},
	
			title: {
				text: 'energy need for heating '
			},
	
			xAxis: {
				categories: ['heat losses', 'heat gaines']
			},
	
			yAxis: {
				allowDecimals: false,
				min: 0,
				title: {
					text: 'heat transfer during heating season [kWh/(m2a)]'
				}
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
					stacking: 'normal'
				}
			},
	
			series: [{
				name: 'ventilation',
				data: [cd['q_ve'], 0]
			},{
				name: 'roof',
				data: [cd['q_T_Sum_Roof'], 0]
			},{
				name: 'wall',
				data: [cd['q_T_Sum_Wall'], 0]
			},{
				name: 'window',
				data: [cd['q_T_Sum_Window'], 0]
			}, {
				name: 'floor',
				data: [cd['q_T_Sum_Floor'], 0]
			}, {
				name: 'passive solar',
				data: [0, cd['q_int']*1/cd['A_C_Ref']]
			}, {
				name: 'internal heat',
				data: [0, cd['q_sol']*1/cd['A_C_Ref']]
			}, {
				name: 'energy neaded for heating',
				data: [0, cd['q_H_nd']*1/cd['A_C_Ref']]
			}]
		});
		
		
	});
			
	var rt = 'chart_2_container_0';
		var chart;
		$(document).ready(function() {
			chart = new Highcharts.Chart({
		
				chart: {
					renderTo: rt,
					defaultSeriesType: 'column'
				},
		
				title: {
					text: 'Primary energy demand '
				},
		
				xAxis: {
					categories: ['energy need', 'energy carriers', 'primary energy']
				},
		
				yAxis: {
					allowDecimals: false,
					min: 0,
					title: {
						text: 'energy use [kWh/(m2a)]'
					}
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
						stacking: 'normal'
					}
				},
		
			    series: [
			    {
					name: 'Domestic hot water',
					data: [s1v1, 0, 0]
				},{
					name: 'Space heating',
					data: [s1v1, 0, 0]
				},{
					name: 'Fossil fuels',
					data: [s2v1, 0, 0]
				}
				]
			});
			
			
		});
			
}

