

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function roundTo(num, dec) {
	return  Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}

function round(val){
	return Math.round(val*10)/10;
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
    str += '</tbody>';
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
	if (typeof val != 'undefined' ){ // && val !=""      lol  0 ==""
		sData[cur][key]=val;
	}
}
function getS(key){
	return sData[cur][key] || 0;
}


function calcSData(){

	var cd = sData[cur];
	var sumA = 0;
	var sumAll = 0;
	var sumRes_h = 0;
	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		addS('U_Refurbished_'+fields[i],(1.0/((1.0/(cd['U_'+fields[i]]*1)))) );
		
		if (isNumber(cd['A_'+fields[i]])){
			sumA += (cd['A_'+fields[i]]*1);
		}
		
		var rowResult = (cd['b_Transmission_'+fields[i]]*1)*(cd['A_'+fields[i]]*1)*(cd['U_Refurbished_'+fields[i]]*1);
		if (isNumber(rowResult)){
			addS('Result_'+fields[i], rowResult);  //TODO: remove this line after new sheets work
			addS('H_Transmission_'+fields[i], rowResult);
			sumAll += rowResult;
		}
		
		addS('sum_a_env',sumA);  //TODO: remove this line after new sheets work
		addS('A_envelope',sumA);
		
		sumRes_h = sumA*cd['delta_U_ThermalBridging'];
		
		
	}

	addS('Result_h_tr_tb', sumRes_h); //TODO: remove this line after new sheets work
	addS('H_tr_tb', sumRes_h); //TODO: remove this line after new sheets work


	addS('h_tr', sumRes_h+sumAll); //TODO: remove this line after new sheets work
	addS('H_tr', sumRes_h+sumAll);

	addS('H_ve', cd['c_p_air']*1*(cd['n_air_use']*1+cd['n_air_infiltration']*1)*cd['A_C_ref']*cd['h_room']);
	
	addS('acc_diff', (cd['theta_i']*1-cd['Theta_e']*1)*cd['HeatingDays']);
	
	
	var gl1 = isNumber(cd['g_gl_n_Window_1']) ? 1*cd['g_gl_n_Window_1'] : 0;
	var a1 = isNumber(cd['A_Window_1']) ? 1*cd['A_Window_1'] : 0;
	var gl2 = isNumber(cd['g_gl_n_Window_1']) ? 1*cd['g_gl_n_Window_1'] : 0;
	var a2 = isNumber(cd['A_Window_2']) ? 1*cd['A_Window_2'] : 0;
	var ggln = ((gl1*a1)+(gl2*a2))/(a1+a2);

	addS('g_gl_n', ggln );
	console.log(gl1,a1,gl2,a2,ggln,cd['g_gl_n']);
	
	var solarSum = 0;
	var fields = new Array('Hor','East','South','West','North');
	for (var i in fields){
		var solar = cd['F_sh_vert']*1 * (1-cd['F_f']*1) * cd['F_w'] * cd['g_gl_n'] * cd['A_Window_'+fields[i]] * cd['I_Sol_'+fields[i]];
		addS('Q_sol_'+fields[i], solar );
		if (isNumber(solar)){
			solarSum += solar*1;
		}
	}
	addS('Q_sol', solarSum);
	
	addS('acc_diff_x', 0.024* cd['acc_diff']);
	
	addS('Q_ht', (cd['h_tr']*1 + cd['H_ve']*1) * cd['F_red_temp'] * cd['acc_diff_x'] );

	addS('Q_int', 0.024 * cd['phi_int'] * cd['HeatingDays'] * cd['A_C_ref'] );

	addS('Tau', cd['c_m'] * cd['A_C_ref'] / (cd['h_tr']*1 + cd['H_ve']*1) );

	addS('a_H', 0.8 + cd['Tau']*1 / 30 );

	addS('Y_h_gn',  ( cd['Q_int']*1 + cd['Q_sol']*1 ) / cd['Q_ht']*1 );

	//=(1-AD262^N265)/(1-AD262^(N265+1))
	addS('n_h_gn',  (1 - Math.pow( cd['Y_h_gn'],cd['a_H'] ) ) / 
							  (1 - Math.pow( cd['Y_h_gn'],cd['a_H']*1+1 ) ));
	//g_h_nd = Q_ht-n_h_gn*(result_solar+Q_int)	
	addS('g_h_nd', cd['Q_ht']*1 - cd['n_h_gn']*1 * (cd['result_solar']*1 + cd['Q_int']*1) );
	
	//=AD236*$Z$244*$V$244/$AD$211
	addS('q_ve', round(cd['H_ve']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']) || 0);
	
	//=AD231*$Z$244*$V$244/$AD$211
	addS('q_tr', getS('h_tr')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	
	//=AD229*$Z$244*$V$244/$AD$211
	addS('q_T_ThermalBridging', getS('Result_h_tr_tb')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	
	//=AD218*$Z$244*$V$244/$AD$211
	addS('q_T_Roof_1', getS('Result_Roof_1')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));

	//=AD219*$Z$244*$V$244/$AD$211
	addS('q_T_Roof_2', getS('Result_Roof_2')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	
	//=(1+AB$177/(AB$179-AB$177))*(AB166+AB167)
	addS('q_T_Sum_Roof', round(1+getS('q_T_ThermalBridging')/(getS('q_tr')-getS('q_T_ThermalBridging'))*(getS('q_T_Roof_1')+getS('q_T_Roof_2'))) || 0);
	
	
	//=AD220*$Z$244*$V$244/$AD$211
	addS('q_T_Wall_1', getS('Result_Wall_1')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('q_T_Wall_2', getS('Result_Wall_2')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('q_T_Wall_3', getS('Result_Wall_3')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('Code_BuildingVariant', cd['Code_Building']);
	
	
	if (typeof cd['Tab_System_H'] != 'undefined' && typeof cd['Tab_System_W'] != 'undefined' && typeof cd['Tab_System_Vent'] != 'undefined'){
		addS('Code_SystemType', cd['Tab_System_H']['Code_SysH']+'.'+cd['Tab_System_W']['Code_SysW']+'.'+cd['Tab_System_Vent']['Code_SysVent']+'.<gen>');
	}
	
	//TODO: fix this
	for(var i in data['Tab_System_WD']){
		//console.log(data['Tab_System_WD_view'][i]['Code_SysW'],cd['Code_SysW_D']);
		if (data['Tab_System_WD_view'][i]['Code_SysW'] == cd['Code_SysW_D']){
			addS('q_d_w', data['Tab_System_WD_view'][i]['q_d_w']);
		}
	}
		
	
	//=(1+AB$177/(AB$179-AB$177))*(AB168+AB169+AB170)
	addS('q_T_Sum_Wall', round(1+getS('q_T_ThermalBridging')/(getS('q_tr')-getS('q_T_ThermalBridging'))*(getS('q_T_Wall_1')+getS('q_T_Wall_2')+getS('q_T_Wall_3'))) || 0)
	
	
	//=AD220*$Z$244*$V$244/$AD$211
	addS('q_T_Window_1', getS('Result_Window_1')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('q_T_Window_2', getS('Result_Window_2')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('q_T_Door_1', getS('Result_Door_1')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	
	//=(1+AB$177/(AB$179-AB$177))*(AB173+AB174+AB175)
	addS('q_T_Sum_Window', round(1+getS('q_T_ThermalBridging')/(getS('q_tr')-getS('q_T_ThermalBridging'))*(getS('q_T_Window_1')+getS('q_T_Window_2')+getS('q_T_Door_1'))) || 0)
	

	addS('q_T_Floor_1', getS('Result_Floor_1')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));
	addS('q_T_Floor_2', getS('Result_Floor_2')*getS('acc_diff_x')*getS('F_red_temp')/getS('A_C_ref'));

	
	//=(1+AB$177/(AB$179-AB$177))*(AB173+AB174+AB175)
	addS('q_T_Sum_Floor', round(1+getS('q_T_ThermalBridging')/(getS('q_tr')-getS('q_T_ThermalBridging'))*(getS('q_T_Floor_2')+getS('q_T_Floor_1'))) || 0);
	
	addS('Q_sol', round(getS('result_solar')/getS('A_C_ref')));
	addS('eta_h_gn', getS('g_h_nd'));
	
	addS('Q_int_g', getS('Q_int')/getS('A_C_ref'));
	
	addS('Q_H_nd', getS('Q_ht')-getS('n_h_gn')*(getS('Q_sol')+getS('Q_int')));
	
	calculateSideValues();
}

function calculateSideValues(){
	var cd = sData[cur];
	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		
		addS('AHL_Transmission_'+fields[i], cd["H_Transmission_"+fields[i]]*cd["acc_diff_x"]*cd["F_red_temp"]/cd["A_C_ref"]);
		addS('HTC_Transmission_'+fields[i], cd["H_Transmission_"+fields[i]]/cd["A_C_ref"]);
		
	}

	addS('AHL_H_tr_tb', cd["H_tr_tb"]*cd["acc_diff_x"]*cd["F_red_temp"]/cd["A_C_ref"]);
	addS('HTC_H_tr_tb', cd["H_tr_tb"]/cd["A_C_ref"]);
	
	addS('AHL_H_tr', cd["H_tr"]*cd["acc_diff_x"]*cd["F_red_temp"]/cd["A_C_ref"]);
	addS('HTC_H_tr', cd["H_tr"]/cd["A_C_ref"]);
	
	addS('AHL_H_ve', cd["H_ve"]*cd["acc_diff_x"]*cd["F_red_temp"]/cd["A_C_ref"]);
	addS('HTC_H_ve', cd["H_ve"]/cd["A_C_ref"]);
	
	addS('AHL_Q_ht', cd["Q_ht"]/cd["A_C_ref"]);
	addS('HTC_Q_ht', cd["HTC_H_ve"]+cd["HTC_H_tr"]);
	
	

	var fields = new Array('Hor','East','South','West','North');
	for (var i in fields){
		addS('AHL_Q_sol_'+fields[i], cd['Q_sol_'+fields[i]]/cd["A_C_ref"]);
	}
	
	addS('AHL_Q_sol', cd["Q_sol"]/cd["A_C_ref"]);

	addS('AHL_Q_int', cd["Q_int"]/cd["A_C_ref"]);
	
	addS('AHL_Q_H_nd', cd["Q_H_nd"]/cd["A_C_ref"]);
	
}

function fillDataSet(){
	var cd = sData[cur];
	//console.log(sData);
	$('input').val("");
	$('#SelectedBuildingHolder').html('');

	if ( typeof cd['Code_Building'] == 'undefined' || cd['Code_Building'] == ""){
		
		toggleStuff($('#button_toggle_bsc')[0] ,true);
		toggleStuff($('#button_toggle_btc')[0] ,false);
		return;
	}
	
	calcSData();
	for (var i in cd){
		if (isNumber(cd[i])){
			cd[i] = roundTo(cd[i],2);
		}
		if (!isNaN(cd[i])){
			$("[id="+i+"]").val(cd[i]);
			if(cd[i] > 0){
				$("[id="+i+"]").html(cd[i]);
			}
		}
	}
	
	$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+getS('imageSrc')+'" width="'+getS('imageWidth')+'" height="'+getS('imageHeight')+'" />')
	
	
	$('option').removeAttr('selected');
	$("[id='"+cd['Code_SysW']+"']").removeAttr('selected').attr('selected','selected').change();
	$("[id='"+cd['Code_SysH']+"']").removeAttr('selected').attr('selected','selected').change();
	$("[id='"+cd['Code_SysVent']+"']").removeAttr('selected').attr('selected','selected').change();

	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		var name = (""+getS('Name_Picture_Construction')).substring(0,(""+getS('Name_Picture_Construction')).length-3)+'png';
		$('#image_'+getS('Code_'+fields[i])).attr('src','images/SIpng/'+name);
		$("[id='"+fields[i]+'_'+getS('Code_'+fields[i])+"']").removeAttr('selected').attr('selected','selected').change();
	}
	console.log(cur,cd);
	
	$('#enfh').html(roundTo(getS('Q_ht')*1/getS('A_C_ref')*1,0));
	console.log(getS('q_H_nd'),getS('A_C_ref'));
	drawGraph();
}



























