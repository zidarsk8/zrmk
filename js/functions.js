
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
	if (typeof val == 'object' ){
		console.log("adding object to sData");
		for (i in val){
			addS(i,val[i]);
		}
	}else if (typeof val != 'undefined' ){
		sData[cur][key]=val;
	}
}

function getArrayRow(array, fieldName, fieldValue){
	for (row in array){
		if (array[row][fieldName] == fieldValue){
			return array[row];
		}
	}
	return false;
}

function addArrayToSdata(array, fieldName, fieldValue){
	for (row in array){
		//console.log('array to data ',array,array[row],fieldName);
		if (array[row][fieldName] == fieldValue){
			for (var i in array[row]){
				addS(i,array[row][i]);
			}
			return array[row];
		}
	}
	return false;
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

function calcSDataSheet1(){

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
	
	
	
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	
	addS('q_w_h_x', cd['eta_h_gn']*cd['q_w_h']);
	addS('q_ve_h_rec', cd['eta_h_gn']*cd['eta_ve_rec']*cd['q_ht_ve']);
	addS('q_ve_h_rec', cd['q_d_s'] + cd['q_d_h'] + cd['q_ve_h_rec'] + cd['q_w_h_x'] + cd['q_h_nd']);
	
	
	addS('Fraction_SysW_G1', 1-cd['Fraction_SysW_G2']+cd['Fraction_SysW_G3']);
	
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

function calcSDataSheet2(){
	var cd = sData[cur];
	var row = {};
	addS('q_g_w_out', cd["q_w_nd"]*1+cd["q_d_w"]*1+cd["q_s_w"]*1);
	addS('q_w_h', cd["q_d_w_h"]*1+cd["q_s_w_h"]*1);
	
	for ( var i = 1; i < 4; i++) {
		row = getArrayRow(data['Tab_System_WG_view'], 'Code_SysWG', cd['Code_SysW_G'+i]);
		addS('e_g_w_Heat_'+i,getNumber(row['e_g_w_Heat']));
		
		addS('q_del_w_Heat_1',cd['Fraction_SysW_G'+i]*cd['q_g_w_out']*cd['e_g_w_Heat_'+i]);

		addS('e_g_w_Electricity_'+i,getNumber(row['e_g_w_Electricity']));
		
		addS('q_prod_w_Electricity_'+i, (cd['e_g_w_Electricity_'+i]>0 ? cd['q_del_w_Heat_1'+i]/cd['e_g_w_Electricity_'+i] : 0));
	}

	row = getArrayRow(data['Tab_System_WA_view'], 'Code_SysW_Aux', cd['Code_SysW_Aux']);
	addS('q_del_w_aux',row['q_del_w']);
	
	addS('q_h_nd',cd['AHL_Q_H_nd']);
	addS('q_ht_ve',cd['AHL_H_ve']); // = cd['q_ve']
	
	addS('eta_h_gn',cd['n_h_gn']);
	
	addS('q_w_h_x',cd['eta_h_gn'] * cd['q_w_h']);
	addS('q_ve_h_rec',cd['eta_h_gn'] * cd['eta_ve_rec'] * cd['q_ht_ve']);

	row = getArrayRow(data['Tab_System_HD_view'], 'Code_SysHD', cd['Code_SysH_D']);
	addS('q_d_h',row['q_d_h']);

	row = getArrayRow(data['Tab_System_HS_view'], 'Code_SysHS', cd['Code_SysH_S']);
	addS('q_s_h',row['q_s_h']);
	
	addS('q_g_h_out',cd['q_s_h']*1+cd['q_d_h']*1+cd['q_ve_h_rec']*1+cd['q_w_h_x']*1+cd['q_h_nd']*1);
	
	addS('Fraction_SysH_G1',1-1*cd['Fraction_SysH_G2']-1*cd['Fraction_SysH_G3']);
	
	for (var i=1; i<4 ; i++){
		row = getArrayRow(data['Tab_System_HG_view'], 'Code_SysHG', cd['Code_SysH_G'+i]);
		addS('e_g_h_Electricity_'+i,getNumber(row['e_g_h_Electricity']));
		addS('e_g_h_Heat_'+i,getNumber(row['e_g_h_Heat']));
		
		addS('q_del_h_'+i,getNumber(cd['Fraction_SysH_G'+i]*1*cd['q_g_h_out']*cd['e_g_h_Heat_'+i]));
		
		addS('q_prod_el_h_'+i, cd['e_g_h_Electricity_'+i]>0 ? cd['q_del_h_'+i] / 1*cd['e_g_h_Electricity_'+i] : 0);
	}
	
	row = getArrayRow(data['Tab_System_HA_view'], 'Code_AuxH', cd['Code_SysH_Aux']);
	addS('q_del_h_aux',row['q_del_h_aux']);
	
}


function calcSDataSheet3(){
	var cd = sData[cur];
	
	addS('System', '//todo');
	

	addS('Code_Specification_SysH_EC_1', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysH_EC1']);
	addS('Code_Specification_SysH_EC_2', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysH_EC2']);
	addS('Code_Specification_SysH_EC_3', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysH_EC3']);
	addS('Code_Specification_SysH_EC_4', cd['Code_Specification_SysH_EC_ElAux']);
	addS('Code_Specification_SysH_EC_5', cd['Code_Specification_SysH_EC_ElProd']);
	

	addS('q_del_h_4', 1*cd['q_del_h_aux']+1*cd['q_del_ve_aux']);
	addS('q_del_h_5', 1*cd['q_prod_el_h_1']+1*cd['q_prod_el_h_2']+1*cd['q_prod_el_h_3']);
	
	cd['q_sum_h_del'] = 0;
	cd['q_sum_p_total_h'] = 0;
	cd['q_sum_p_nonren_h'] = 0;
	cd['m_sum_CO2_h'] = 0;
	cd['c_sum_price_h'] = 0;
	for (var i=1; i<6 ; i++){
		row = getArrayRow(data['Tab_System_EC_view'], 'Code_EnergyCarrier_Specification', cd['Code_Specification_SysH_EC_'+i]);

		addS('q_del_h_'+i,getNumber(cd['q_del_h_'+i]));
		
		addS('f_p_Total_SysH_EC_'+i, getNumber(row['EC_f_p_Total']));
		addS('q_p_total_'+i,  getNumber(1*cd['f_p_Total_SysH_EC_'+i]*1*cd['q_del_h_'+i]));
		cd['q_sum_p_total_h'] += 1*cd['q_p_total_'+i];
		
		addS('f_p_NonRen_SysH_EC_'+i, getNumber(row['EC_f_p_NonRen']));
		addS('q_p_nonren_'+i,  getNumber(1*cd['f_p_NonRen_SysH_EC_'+i]*1*cd['q_del_h_'+i]));
		cd['q_sum_p_nonren_h'] += 1*cd['q_p_nonren_'+i];

		addS('f_CO2_SysH_EC_'+i, getNumber(row['EC_f_CO2']));
		addS('m_CO2_'+i,  getNumber(1*cd['f_CO2_SysH_EC_'+i]*1*cd['q_del_h_'+i]/1000));
		cd['m_sum_CO2_h'] += 1*cd['m_CO2_'+i];
		
		addS('price_SysH_EC_'+i, getNumber(row['EC_price']));
		addS('c_price_'+i,  getNumber(1*cd['price_SysH_EC_'+i]*1*cd['q_del_h_'+i]/100));
		cd['c_sum_price_h'] += 1*cd['c_price_'+i];
		
		cd['q_sum_h_del'] += 1*cd['q_del_h_'+i];
	}
	

	addS('Code_Specification_SysW_EC_1', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysW_EC1']);
	addS('Code_Specification_SysW_EC_2', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysW_EC2']);
	addS('Code_Specification_SysW_EC_3', cd['Code_EC_Specification_Version']+'.'+cd['Code_SysW_EC3']);
	addS('Code_Specification_SysW_EC_4', cd['Code_Specification_SysH_EC_ElAux']);
	addS('Code_Specification_SysW_EC_5', cd['Code_Specification_SysH_EC_ElProd']);
	
	addS('q_del_w_Heat_4', 1*cd['q_del_w_aux']);
	addS('q_del_w_Heat_5', 1*cd['q_prod_w_Electricity_1']+1*cd['q_prod_w_Electricity_2']+1*cd['q_prod_w_Electricity_3']);
	

	cd['q_sum_w_del'] = 0;
	cd['q_sum_p_total_w'] = 0;
	cd['q_sum_p_nonren_w'] = 0;
	cd['m_sum_CO2_w'] = 0;
	cd['c_sum_price_w'] = 0;
	for (var i=1; i<6 ; i++){
		row = getArrayRow(data['Tab_System_EC_view'], 'Code_EnergyCarrier_Specification', cd['Code_Specification_SysH_EC_'+i]);
		
		addS('q_del_w_Heat_'+i,getNumber(cd['q_del_w_Heat_'+i]));

		addS('f_p_Total_SysW_EC_'+i, getNumber(row['EC_f_p_Total']));
		addS('q_p_total_w_'+i,  getNumber(1*cd['f_p_Total_SysW_EC_'+i]*1*cd['q_del_w_Heat_'+i]));
		cd['q_sum_p_total_w'] += 1*cd['q_p_total_w_'+i];

		addS('f_p_NonRen_SysW_EC_'+i, getNumber(row['EC_f_p_NonRen']));
		addS('q_p_nonren_w_'+i,  getNumber(1*cd['f_p_NonRen_SysW_EC_'+i]*1*cd['q_del_w_Heat_'+i]));
		cd['q_sum_p_nonren_w'] += 1*cd['q_p_nonren_w_'+i];

		addS('f_CO2_SysW_EC_'+i, getNumber(row['EC_f_CO2']));
		addS('m_CO2_w_'+i,  getNumber(1*cd['f_CO2_SysW_EC_'+i]*1*cd['q_del_w_Heat_'+i]/1000));
		cd['m_sum_CO2_w'] += 1*cd['m_CO2_w_'+i];

		addS('price_SysW_EC_'+i, getNumber(row['EC_price']));
		addS('c_price_w_'+i,  getNumber(1*cd['price_SysH_EC_'+i]*1*cd['q_del_w_Heat_'+i]/100));
		cd['c_sum_price_w'] += 1*cd['c_price_w_'+i];

		cd['q_sum_w_del'] += 1*cd['q_del_w_Heat_'+i];
	}
	
	
	addS('q_sum_nd',1*cd['q_h_nd']+1*cd['q_w_nd']);
	addS('q_sum_del',1*cd['q_sum_w_del']+1*cd['q_sum_h_del']);

	addS('e_sum_p_total_w',1*cd['q_sum_p_total_w']/cd['q_w_nd']);
	addS('e_sum_p_total_h',1*cd['q_sum_p_total_h']/cd['q_h_nd']);
	addS('e_sum_p_nonren_w',1*cd['q_sum_p_nonren_w']/cd['q_w_nd']);
	addS('e_sum_p_nonren_h',1*cd['q_sum_p_nonren_h']/cd['q_h_nd']);
	addS('f_sum_CO2_w',1*cd['m_sum_CO2_w']/cd['q_w_nd']);
	addS('f_sum_CO2_h',1*cd['m_sum_CO2_h']/cd['q_h_nd']);
	addS('p_sum_price_w',1*cd['c_sum_price_w']/cd['q_w_nd']);
	addS('p_sum_price_h',1*cd['c_sum_price_h']/cd['q_h_nd']);

	
	addS('q_sum_p_total',1*cd['q_sum_p_total_h']+cd['q_sum_p_total_w']);
	addS('q_sum_p_nonren',1*cd['q_sum_p_nonren_h']+cd['q_sum_p_nonren_w']);
	addS('m_sum_CO2',1*cd['m_sum_CO2_h']+cd['m_sum_CO2_w']);
	addS('c_sum_price',1*cd['c_sum_price_h']+cd['c_sum_price_w']);
	
	addS('e_sum_p_total',1*cd['e_sum_p_total_h']+cd['e_sum_p_total_w']);
	addS('e_sum_p_nonren',1*cd['e_sum_p_nonren_h']+cd['e_sum_p_nonren_w']);
	addS('f_sum_CO2',1*cd['f_sum_CO2_h']+cd['f_sum_CO2_w']);
	addS('p_sum_price',1*cd['p_sum_price_h']+cd['p_sum_price_w']);
	
	addS('current_value', 1*cd['q_del_h_1']+1*cd['q_del_h_2']+1*cd['q_del_h_3']+1*cd['q_del_w_Heat_1']+1*cd['q_del_w_Heat_2']+1*cd['q_del_w_Heat_3']);
	
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

	addArrayToSdata(data['Tab_System_WD_view'],'Code_SysW_D',cd['Code_SysW_D']);
	addArrayToSdata(data['Tab_System_WS_view'],'Code_SysW_S',cd['Code_SysW_S']);
	

	calcSDataSheet1();
	calcSDataSheet2();
	calcSDataSheet3();


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



























