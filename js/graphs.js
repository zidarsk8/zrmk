function drawGraph(){
	
	arrayOfDataMulti = new Array(
	    [[30,44,26],'2007'],
	    [[18,38,38],'2008'],
	    [[24,32,57],'2009']
	);
	
	$('#graph_0').jqBarGraph({
	   data: arrayOfDataMulti,
	   colors: ['#242424','#437346','#97D95C'],
		width: 260, // default width of your graph
		height: 400, //default height of your graph
	}); 
	
	console.log('draw graph');
}

drawGraph();
