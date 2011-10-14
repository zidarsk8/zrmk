function drawGraph(){
	
	heat_losses = new Array(
		   	 [[getS('q_T_Sum_Floor'),getS('q_T_Sum_Window'),getS('q_T_Sum_Wall'),getS('q_T_Sum_Roof') || 0,getS('q_ve') || 0],'heat losses']
	);	
	$('#graph_0').empty();
	$('#graph_0').jqBarGraph({
	  	 data: heat_losses,
	  	 colors: ['#00ff00','#993300','#00ccff', '#ff0000', '#000080'] ,
	   legends: ['transmission losses floor','transmission losses window','transmission losses wall', 'transmission losses roof', 'ventilation losses'],
	   legend: true,
	   showValues: false
	});
	
	heat_gains = new Array(
		   	 [[14,44,26],'heat gains']
	);	
	$('#graph_1').empty();
	$('#graph_1').jqBarGraph({
	  	 data: heat_gains,
	  	 colors: ['#ff9900','#008000','#ffff00'] ,
	   legends: ['energy need for heating','usable internal heat load','usable solar heat load'],
	   legend: true,
	   showValues: false
	});
	
	
	energy_need = new Array(
		   	 [[14,44],'heat gains']
	);	
	$('#graph_2').empty();
	$('#graph_2').jqBarGraph({
	  	 data: energy_need,
	  	 colors: ['#ffcd9c','#ff9900'] ,
	   legends: ['domestic hot water','space heating'],
	   legend: true,
	   showValues: false
	});
	
	energy_carriers = new Array(
		   	 [[14,44,26],'energy carriers']
	);	
	$('#graph_3').empty();
	$('#graph_3').jqBarGraph({
	  	 data: energy_carriers,
	  	 colors: ['#840909','#cce6ff','#078407', '#ffff06', '#151515', '#fefbf5'] ,
	   legends: ['fossil fuels','distinct heating','bio mass', 'electricity', 'other', 'produced electricity'],
	   legend: true,
	   showValues: false
	});
	
	primary_energy = new Array(
		   	 [[14,44],'primary energy']
	);	
	$('#graph_4').empty();
	$('#graph_4').jqBarGraph({
	  	 data: primary_energy,
	  	 colors: ['#eaeaea','#808080'] ,
	   legends: ['primary energy for hot water','primary energy for heating'],
	   legend: true,
	   showValues: false
	});

	
}

drawGraph();
