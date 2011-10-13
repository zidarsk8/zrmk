

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function roundTo(num, dec) {
	return  Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}

function CreateKeyValueTableView(objArray, theme, enableHeader) {
    // set optional theme parameter
    if (theme === undefined) {
        theme = 'mediumTable'; //default theme
    }
 
    if (enableHeader === undefined) {
        enableHeader = false; //default enable headers
    }
 
    var str = '<table class="' + theme + '">';
 
    // table head
    if (enableHeader) {
        str += '<thead><tr>';
        for (var index in array[0]) {
            str += '<th scope="col">' + index + '</th>';
        }
        str += '</tr></thead>';
    }
 
    // table body
    str += '<tbody>';
    var count = 0
    for (var i in objArray){
        str += (count++ % 2 == 0) ? '<tr class="alt">' : '<tr>';
        str += '<td>' + i + '</td><td>' + objArray[i] + '</td>';
        str += '</tr>';
	}
    str += '</tbody>'
    str += '</table>';
    return str;
}
 
// This function creates a details view table with column 1 as the header and column 2 as the details
// Parameter Information
// objArray = Anytype of object array, like JSON results
// theme (optional) = A css class to add to the table (e.g. <table class="<theme>">
// enableHeader (optional) = Controls if you want to hide/show, default is show
function CreateDetailView(objArray, theme, enableHeader) {
    // set optional theme parameter
    if (theme === undefined) {
        theme = 'mediumTable';  //default theme
    }
 
    if (enableHeader === undefined) {
        enableHeader = true; //default enable headers
    }
 
    // If the returned data is an object do nothing, else try to parse
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
 
    var str = '<table class="' + theme + '">';
    str += '<tbody>';
 
    for (var i = 0; i < array.length; i++) {
        var row = 0;
        for (var index in array[i]) {
            str += (row % 2 == 0) ? '<tr class="alt">' : '<tr>';
 
            if (enableHeader) {
                str += '<th scope="row">' + index + '</th>';
            }
 
            str += '<td>' + array[i][index] + '</td>';
            str += '</tr>';
            row++;
        }
    }
    str += '</tbody>'
    str += '</table>';
    return str;
}


function checkDuplicateIds(){
	// Warning Duplicate IDs
	$('[id]').each(function(){
	  	var ids = $('[id=\''+this.id+'\']');
	  	if(ids.length>1 && ids[0]==this){
	  		console.warn('Multiple IDs #'+this.id);
	  		return;
	  	}
	});
	console.log('No multiple IDs');
}
	
function addS(key,val){
	if (typeof val != 'undefined' && val !=""){
		sData[curDataSet][key]=val;
	}
}


function calcSData(){
	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	var sumA = 0;
	var sumAll = 0
	for (var i in fields){
		addS('U_Refurbished_'+fields[i],(1.0/((1.0/(sData[curDataSet]['U_'+fields[i]]*1)))) );
		
		if (isNumber(sData[curDataSet]['A_'+fields[i]])){
			sumA += (sData[curDataSet]['A_'+fields[i]]*1);
		}
		
		var rowResult = (sData[curDataSet]['b_Transmission_'+fields[i]]*1)*(sData[curDataSet]['A_'+fields[i]]*1)*(sData[curDataSet]['U_Refurbished_'+fields[i]]*1);
		if (isNumber(rowResult)){
			addS('Result_'+fields[i], rowResult);
			sumAll += rowResult;
		}
		
		addS('sum_a_env',sumA);
		
		var sumRes_h = sumA*sData[curDataSet]['delta_U_ThermalBridging'];
		addS('Result_h_tr_tb', sumRes_h);
		
		console.log(sumAll);
		addS('h_tr', sumRes_h+sumAll);
	}
	
	
	
}

function fillDataSet(){
	
	calcSData();
	for (var i in sData[curDataSet]){
		if (isNumber(sData[curDataSet][i])){
			sData[curDataSet][i] = roundTo(sData[curDataSet][i],3);
		}
		$("[id$="+i+"]").val(sData[curDataSet][i]);
	}
}



























