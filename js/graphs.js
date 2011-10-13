function drawGraph(){
	
	heat_losses = new Array(
		   	 [[14,44,26,32,32],'heat losses']
	);	

	$('#graph_0').jqBarGraph({
	  	 data: heat_losses,
	  	 colors: ['#00ff00','#993300','#00ccff', '#ff0000', '#000080'] ,
	   legends: ['transmission losses floor','transmission losses window','transmission losses wall', 'transmission losses roof', 'ventilation losses'],
	   legend: true
	});
	
	heat_gains = new Array(
		   	 [[14,44,26],'heat gains']
	);	

	$('#graph_1').jqBarGraph({
	  	 data: heat_gains,
	  	 colors: ['#ff9900','#008000','#ffff00'] ,
	   legends: ['energy need for heating','usable internal heat load','usable solar heat load'],
	   legend: true
	});
	
	
	energy_need = new Array(
		   	 [[14,44],'heat gains']
	);	

	$('#graph_2').jqBarGraph({
	  	 data: energy_need,
	  	 colors: ['#ffcd9c','#ff9900'] ,
	   legends: ['domestic hot water','space heating'],
	   legend: true
	});
	
	energy_carriers = new Array(
		   	 [[14,44,26],'energy carriers']
	);	

	$('#graph_3').jqBarGraph({
	  	 data: energy_carriers,
	  	 colors: ['#840909','#cce6ff','#078407', '#ffff06', '#151515', '#fefbf5'] ,
	   legends: ['fossil fuels','distinct heating','bio mass', 'electricity', 'other', 'produced electricity'],
	   legend: true
	});
	
	primary_energy = new Array(
		   	 [[14,44],'primary energy']
	);	

	$('#graph_4').jqBarGraph({
	  	 data: primary_energy,
	  	 colors: ['#eaeaea','#808080'] ,
	   legends: ['primary energy for hot water','primary energy for heating'],
	   legend: true
	});

	
}

drawGraph();
