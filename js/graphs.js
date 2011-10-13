function drawGraph(){
	
	heat_losses = new Array(
		   	 [[14,44,26],'heat losses']
	);	

	$('#graph_0').jqBarGraph({
	  	 data: heat_losses,
	  	 colors: ['#242424','#437346','#97D95C'] ,
	   legends: ['ads','leads','google ads'],
	   legend: true
	});
	
	heat_gains = new Array(
		   	 [[14,44,26],'heat gains']
	);	

	$('#graph_1').jqBarGraph({
	  	 data: heat_gains,
	  	 colors: ['#242424','#437346','#97D95C'] ,
	   legends: ['ads','leads','google ads'],
	   legend: true
	});
	
	
	energy_need = new Array(
		   	 [[14,44,26],'heat gains']
	);	

	$('#graph_2').jqBarGraph({
	  	 data: energy_need,
	  	 colors: ['#242424','#437346','#97D95C'] ,
	   legends: ['ads','leads','google ads'],
	   legend: true
	});
	
	energy_carriers = new Array(
		   	 [[14,44,26],'energy carriers']
	);	

	$('#graph_3').jqBarGraph({
	  	 data: energy_need,
	  	 colors: ['#242424','#437346','#97D95C'] ,
	   legends: ['ads','leads','google ads'],
	   legend: true
	});
	
	primary_energy = new Array(
		   	 [[14,44,26],'primary energy']
	);	

	$('#graph_4').jqBarGraph({
	  	 data: energy_need,
	  	 colors: ['#242424','#437346','#97D95C'] ,
	   legends: ['ads','leads','google ads'],
	   legend: true
	});

	
}

drawGraph();
