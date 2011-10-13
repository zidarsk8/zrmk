function drawGraph(){
	
	arrayOfData = new Array(
	    [[30,44,26],'2007'],
	    [[18,38,38],'2008'],
	    [[24,32,57],'2009']
	);
	$('#graph_0').jqBarGraph({ data: arrayOfData }); 

	
}

drawGraph();
