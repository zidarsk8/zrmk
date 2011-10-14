function drawGraph(){
		
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
							text: 'heat transfer'
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
						data: [5, 0]
					},{
						name: 'roof',
						data: [5, 0]
					},{
						name: 'wall',
						data: [5, 0]
					},{
						name: 'window',
						data: [5, 0]
					}, {
						name: 'floor',
						data: [4, 0]
					}, {
						name: 'passive solar',
						data: [0, 2]
					}, {
						name: 'internal heat',
						data: [0, 13]
					}, {
						name: 'energy neaded for heating',
						data: [0, 44]
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
						text: 'energy need for heating '
					},
			
					xAxis: {
						categories: ['heat losses', 'heat gaines']
					},
			
					yAxis: {
						allowDecimals: false,
						min: 0,
						title: {
							text: 'heat transfer'
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
						data: [5, 0]
					},{
						name: 'roof',
						data: [5, 0]
					},{
						name: 'wall',
						data: [5, 0]
					},{
						name: 'window',
						data: [5, 0]
					}, {
						name: 'floor',
						data: [4, 0]
					}, {
						name: 'passive solar',
						data: [0, 2]
					}, {
						name: 'internal heat',
						data: [0, 13]
					}, {
						name: 'energy neaded for heating',
						data: [0, 44]
					}]
				});
				
				
			});
				
}

