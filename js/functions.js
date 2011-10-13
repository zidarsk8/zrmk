

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
	  		//console.warn('Multiple IDs #'+this.id);
	  	}
	});
}
	
function addS(key,val){
	if (typeof val != 'undefined' && val !=""){
		sData[cur][key]=val;
	}
}


function calcSData(){
	var sumA = 0;
	var sumAll = 0
	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		addS('U_Refurbished_'+fields[i],(1.0/((1.0/(sData[cur]['U_'+fields[i]]*1)))) );
		
		if (isNumber(sData[cur]['A_'+fields[i]])){
			sumA += (sData[cur]['A_'+fields[i]]*1);
		}
		
		var rowResult = (sData[cur]['b_Transmission_'+fields[i]]*1)*(sData[cur]['A_'+fields[i]]*1)*(sData[cur]['U_Refurbished_'+fields[i]]*1);
		if (isNumber(rowResult)){
			addS('Result_'+fields[i], rowResult);
			sumAll += rowResult;
		}
		
		addS('sum_a_env',sumA);
		
		var sumRes_h = sumA*sData[cur]['delta_U_ThermalBridging'];
		addS('Result_h_tr_tb', sumRes_h);
		
		addS('h_tr', sumRes_h+sumAll);
		
		
	}
	addS('w_k', sData[cur]['c_p_air']*1*(sData[cur]['n_air_use']*1+sData[cur]['n_air_infiltration']*1)*sData[cur]['A_C_Ref']*sData[cur]['h_room']);
	
	addS('k_d_a', (sData[cur]['theta_i']*1-sData[cur]['Theta_e']*1)*sData[cur]['HeatingDays']);
	
	
	var gl1 = isNumber(sData[cur]['g_gl_n_Window_1']) ? 1*sData[cur]['g_gl_n_Window_1'] : 0;
	var a1 = isNumber(sData[cur]['A_Window_1']) ? 1*sData[cur]['A_Window_1'] : 0;
	var gl2 = isNumber(sData[cur]['g_gl_n_Window_1']) ? 1*sData[cur]['g_gl_n_Window_1'] : 0;
	var a2 = isNumber(sData[cur]['A_Window_2']) ? 1*sData[cur]['A_Window_2'] : 0;

	addS('g_gl_n', ((gl1*a1)+(gl2*a2))/(a1+a2));
	
	var solarSum = 0;
	var fields = new Array('Horizontal','East','South','West','North');
	for (var i in fields){
		var solar = sData[cur]['F_sh_vert']*1 * (1-sData[cur]['F_f']*1) * sData[cur]['F_w'] * sData[cur]['g_gl_n'] * sData[cur]['A_Window_'+fields[i]] * sData[cur]['I_Sol_'+fields[i]];
		addS('result_solar_'+fields[i], solar );
		if (isNumber(solar)){
			solarSum += solar*1;
		}
	}
	addS('result_solar', solarSum);
	
	addS('k_k_h_a', 0.024* sData[cur]['k_d_a']);
	
	addS('total_heat_transfer', (sData[cur]['h_tr']*1 + sData[cur]['w_k']*1) * sData[cur]['F_red_temp'] * sData[cur]['k_k_h_a'] );

	addS('q_int', 0.024 * sData[cur]['phi_int'] * sData[cur]['HeatingDays'] * sData[cur]['A_C_Ref'] );

	addS('t_const_building', sData[cur]['c_m'] * sData[cur]['A_C_Ref'] / (sData[cur]['h_tr']*1 + sData[cur]['w_k']*1) );

	addS('parameter', 0.8 + sData[cur]['t_const_building']*1 / 30 );

	addS('heat_balance',  ( sData[cur]['q_int']*1 + sData[cur]['result_solar']*1 ) / sData[cur]['total_heat_transfer']*1 );

	//=(1-AD262^N265)/(1-AD262^(N265+1))
	addS('gain_utilisation',  (1 - Math.pow( sData[cur]['heat_balance'],sData[cur]['parameter'] ) ) / 
							  (1 - Math.pow( sData[cur]['heat_balance'],sData[cur]['parameter']*1+1 ) ));
	//g_h_nd = total_heat_transfer-gain_utilisation*(result_solar+q_int)	
	addS('g_h_nd', sData[cur]['total_heat_transfer']*1 - sData[cur]['gain_utilisation']*1 * (sData[cur]['result_solar']*1 + sData[cur]['q_int']*1) );
	
	
	console.log(sData);
}


function fillDataSet(){
	$('input').val("");
	calcSData();
	for (var i in sData[cur]){
		if (isNumber(sData[cur][i])){
			sData[cur][i] = roundTo(sData[cur][i],3);
		}
		$("[id="+i+"]").val(sData[cur][i]);
	}
}



























