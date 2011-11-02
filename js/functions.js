
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNumber(n){
	return isNumber(n) ? n*1 : 0;
}

function roundTo(num, dec) {
	return  Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}

function addS(key,val){
	if (typeof val != 'undefined' ){
		sData[cur][key]=val;
	}
}

function CreateKeyValueTableView(objArray, theme, enableHeader) {
	theme = theme === undefined ? 'mediumTable' : theme; //default theme
	var str = '<table class="' + theme + '">';
	var count = 0
	for (var i in objArray){
		str += (count++ % 2 == 0) ? '<tr class="alt">' : '<tr>';
		str += '<td>' + i + '</td><td>' + objArray[i] + '</td>';
		str += '</tr>';
	}
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

function calcSData(){

	var cd = sData[cur];
	var sumA = 0;
	var sumAll = 0;
	var sumRes_h = 0;
	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		//TODO: fix refurbished formula
		addS('U_Refurbished_'+fields[i],(1.0 / ((1.0/(cd['U_'+fields[i]]*1))+getNumber(cd['R_Add_UnheatedSpace_'+fields[i]])) ) );

		sumA += isNumber(cd['A_'+fields[i]]) ? (cd['A_'+fields[i]]*1) : 0;

		var rowResult = (cd['b_Transmission_'+fields[i]]*1)*(cd['A_'+fields[i]]*1)*(cd['U_Refurbished_'+fields[i]]*1);
		if (isNumber(rowResult)){
			addS('H_Transmission_'+fields[i], rowResult);
			sumAll += rowResult;
		}
	}
	sumRes_h = sumA*cd['delta_U_ThermalBridging'];

	addS('A_envelope',	sumA);
	addS('H_tr_tb', 	sumRes_h);
	addS('H_tr', 		sumRes_h+sumAll);
	addS('H_ve', 		cd['c_p_air']*1*(cd['n_air_use']*1+cd['n_air_infiltration']*1)*cd['A_C_ref']*cd['h_room']);
	addS('acc_diff', 	(cd['theta_i']*1-cd['Theta_e']*1)*cd['HeatingDays']);
	addS('g_gl_n', 		((getNumber(cd['g_gl_n_Window_1'])*getNumber(cd['A_Window_1']))+(getNumber(cd['g_gl_n_Window_2'])*getNumber(cd['A_Window_2'])))
			/ (getNumber(cd['A_Window_1'])+getNumber(cd['A_Window_2'])) );

	addS('A_Window_Hor', cd['A_Window_Horizontal']);
	var solarSum = 0;
	var fields = new Array('Hor','East','South','West','North');
	for (var i in fields){
		var solar = cd['F_sh_vert']*1 * (1-cd['F_f']*1) * cd['F_w'] * cd['g_gl_n'] * cd['A_Window_'+fields[i]] * cd['I_Sol_'+fields[i]];
		addS('Q_sol_'+fields[i], solar);
		solarSum += getNumber(solar);
	}

	addS('Q_sol', 				solarSum);
	addS('acc_diff_x', 			0.024* cd['acc_diff']);
	addS('Q_ht', 				(cd['H_tr']*1 + cd['H_ve']*1) * cd['F_red_temp'] * cd['acc_diff_x'] );
	addS('Q_int',		 		0.024 * cd['phi_int'] * cd['HeatingDays'] * cd['A_C_ref'] );
	addS('Tau', 				cd['c_m'] * cd['A_C_ref'] / (cd['H_tr']*1 + cd['H_ve']*1) );
	addS('a_H', 				0.8 + cd['Tau']*1 / 30 );
	addS('Y_h_gn',  			( cd['Q_int']*1 + cd['Q_sol']*1 ) / cd['Q_ht']*1 );
	addS('n_h_gn',  			(1 - Math.pow( cd['Y_h_gn'],cd['a_H'] ) ) / (1 - Math.pow( cd['Y_h_gn'],cd['a_H']*1+1 ) ));
	addS('g_h_nd', 				cd['Q_ht']*1 - cd['n_h_gn']*1 * (cd['result_solar']*1 + cd['Q_int']*1) );
	addS('q_tr', 				cd['H_tr']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_ThermalBridging', cd['H_tr_tb']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_Roof_1', 			cd['H_Transmission_Roof_1']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_Roof_2', 			cd['H_Transmission_Roof_2']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_Sum_Roof', 		roundTo(1+cd['q_T_ThermalBridging']/(cd['q_tr']-cd['q_T_ThermalBridging'])*(cd['q_T_Roof_1']+cd['q_T_Roof_2']),1) || 0);
	addS('q_T_Wall_1', 			cd['H_Transmission_Wall_1']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_Wall_2', 			cd['H_Transmission_Wall_2']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('q_T_Wall_3', 			cd['H_Transmission_Wall_3']*cd['acc_diff_x']*cd['F_red_temp']/cd['A_C_ref']);
	addS('Code_BuildingVariant',cd['Code_Building']);


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

	addS('Q_H_nd', 			cd['Q_ht']-cd['n_h_gn']*(cd['Q_sol']+cd['Q_int']));

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

function calculateGraphData(){
	var cd = sData[cur];
	var thermalBridge =  (1+cd['q_T_ThermalBridging']/(cd['q_tr']-cd['q_T_ThermalBridging']));

	addS('graph_q_ve', 			cd['AHL_H_ve']);
	addS('graph_q_T_Sum_Roof',	thermalBridge * (cd['AHL_Transmission_Roof_1']+cd['AHL_Transmission_Roof_2']));
	addS('graph_q_T_Sum_Wall',	thermalBridge * (cd['AHL_Transmission_Wall_1']+cd['AHL_Transmission_Wall_2']+cd['AHL_Transmission_Wall_3']));
	addS('graph_q_T_Sum_Floor',	thermalBridge * (cd['AHL_Transmission_Floor_1']+cd['AHL_Transmission_Floor_2']));
	addS('graph_q_T_Sum_Window',thermalBridge * (cd['AHL_Transmission_Window_1']+cd['AHL_Transmission_Window_2']));

	addS('graph_q_sol',			cd['AHL_Q_sol']);
	addS('graph_q_int',			cd['AHL_Q_int']);
	addS('graph_eta_h_gn',		cd['n_h_gn']);
	addS('graph_q_H_nd',		cd['AHL_Q_H_nd']);
	//TODO: something about door_1
}

var working = false; //do that different on change calls dont go too deep.
function fillDataSet(){
	if (working) return;
	working = true;

	var cd = sData[cur];
	if ( typeof cd['Code_Building'] == 'undefined' || cd['Code_Building'] == ""){
		toggleStuff($('#button_toggle_bsc')[0] ,true);
		toggleStuff($('#button_toggle_btc')[0] ,false);
		return;
	}

	$('input').val("");
	$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+cd['imageSrc']+'" width="'+cd['imageWidth']+'" height="'+cd['imageHeight']+'" />')

	calcSData();


	console.log(cur,cd);

	$("[id=Building]").val("aaaaaaaa");

	for (var i in cd){
		var value = isNumber(cd[i]) ? roundTo(cd[i],2) : cd[i];
		$("[id="+i+"]").val(value);
		if(value > 0){
			$("[id="+i+"]").html(value);
		}
	}

	$('option').removeAttr('selected');
	$("[id='"+cd['Code_SysW']+"']").removeAttr('selected').attr('selected','selected').change();
	$("[id='"+cd['Code_SysH']+"']").removeAttr('selected').attr('selected','selected').change();
	$("[id='"+cd['Code_SysVent']+"']").removeAttr('selected').attr('selected','selected').change();

	var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
	for (var i in fields){
		var name = (""+cd['Name_Picture_Construction']).substring(0,(""+cd['Name_Picture_Construction']).length-3)+'png';
		$('#image_'+cd['Code_'+fields[i]]).attr('src','images/SIpng/'+name);
		$("[id='"+fields[i]+'_'+cd['Code_'+fields[i]]+"']").removeAttr('selected').attr('selected','selected').change();
	}


	drawGraph();

	working = false;
}



























