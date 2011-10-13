

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
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
	addS('U_Refurbished_Roof_1',(1.0/((1.0/(sData[curDataSet]['U_Roof_1']*1)))) );
	addS('U_Refurbished_Roof_2',(1.0/((1.0/(sData[curDataSet]['U_Roof_2']*1)))) );
	addS('U_Refurbished_Wall_1',(1.0/((1.0/(sData[curDataSet]['U_Wall_1']*1)))) );
	addS('U_Refurbished_Wall_2',(1.0/((1.0/(sData[curDataSet]['U_Wall_2']*1)))) );
	addS('U_Refurbished_Wall_3',(1.0/((1.0/(sData[curDataSet]['U_Wall_3']*1)))) );
	addS('U_Refurbished_Floor_1',(1.0/((1.0/(sData[curDataSet]['U_Floor_1']*1)))) );
	addS('U_Refurbished_Floor_2',(1.0/((1.0/(sData[curDataSet]['U_Floor_2']*1)))) );
	addS('U_Refurbished_Window_1',(1.0/((1.0/(sData[curDataSet]['U_Window_1']*1)))) );
	addS('U_Refurbished_Window_2',(1.0/((1.0/(sData[curDataSet]['U_Window_2']*1)))) );
	addS('U_Refurbished_Door_1',(1.0/((1.0/(sData[curDataSet]['U_Door_1']*1)))) );
}

function fillDataSet(){
	
	calcSData();
	for (var i in sData[curDataSet]){
		console.log(sData[curDataSet][i]);
		$("[id$="+i+"]").val(sData[curDataSet][i]);
	}
}



























