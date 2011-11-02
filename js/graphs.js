function drawGraph(){
	calculateGraphData();
	
	var cd = sData[cur];
	var rt = 'chart_1_container_0';
	var chart;
	var vent = roundTo(cd['variant'] * cd['graph_q_ve'],2);
	var roof = roundTo(cd['variant'] * cd['graph_q_T_Sum_Roof'],2);
	var wall = roundTo(cd['variant'] * cd['graph_q_T_Sum_Wall'],2);
	var floor = roundTo(cd['variant'] * cd['graph_q_T_Sum_Floor'],2);
	var window = roundTo(cd['variant'] * cd['graph_q_T_Sum_Window'],2);
	
	var pasiveSolar = roundTo(cd['variant'] * cd['graph_eta_h_gn'] * cd['graph_q_sol'],2);
	var internalHeat = roundTo(cd['variant'] * cd['graph_eta_h_gn'] * cd['graph_q_int'],2);
	var energyNeaded = roundTo(cd['variant'] * cd['graph_q_H_nd'],2);
	
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
				data: [vent, 0]
			},{
				name: 'roof',
				data: [roof, 0]
			},{
				name: 'wall',
				data: [wall, 0]
			},{
				name: 'window',
				data: [window, 0]
			}, {
				name: 'floor',
				data: [floor, 0]
			}, {
				name: 'passive solar',
				data: [0, pasiveSolar]
			}, {
				name: 'internal heat',
				data: [0, internalHeat]
			}, {
				name: 'energy neaded for heating',
				data: [0, energyNeaded]
			}]
		});
		
	});
	
}

