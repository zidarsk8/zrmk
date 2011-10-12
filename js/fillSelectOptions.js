$(document).ready(function(){


	function fillDropDown(tableName, codeName){
		$('#'+tableName+'_data_table').hide();
		var options = $("#select_"+tableName);
		$.each(data[tableName+'_view'],function(index) {
	    	options.append($("<option />").val(index).text(this[codeName]));
		});
		
		$("#show_"+tableName+"_data_button").click(function() {
			$("#"+tableName+"_data_table").toggle();
		});
		
	    options.change(function () {
	        $("#select_"+tableName+" option:selected").each(function () {
				var tmp = data[tableName+"_view"][this.value];        	
				$("#"+tableName+"_data_table").html(CreateKeyValueTableView(tmp));	
				for (var i in tmp){
					$("#"+i).html(tmp[i]);
				}
			});
	    }).trigger('change');
	}
	
	fillDropDown('Tab_Building','Code_Building');
	fillDropDown('Tab_System_H','Code_SysH');
	fillDropDown('Tab_System_W','Code_SysW');
	fillDropDown('Tab_System_Vent','Code_SysVent');
		
	
	
	function fillBuildingDropDown(table, field, num){
		$('#'+table+'_data_table').hide();
		var optionId = "#select_"+table+"_"+field+"_"+num;
		var options = $(optionId);
		options.append($("<option />").text(" "));
		$.each(data[table+'_view'],function(index) {
			if (this['Code_ElementType'] == field ||
				(field == 'Roof') && this['Code_ElementType'] == 'Ceiling'){
				this['Description_Construction_National'] = typeof this['Description_Construction_National'] == 'string' ? this['Description_Construction_National'] : "strop_"+index;
				options.append($("<option />").val(this['Code_Construction']).text(this['Description_Construction_National']));
			}
		});
		
		$("#show_"+table+"_data_button").click(function() {
			$("#"+table+"_data_table").toggle();
		});
		
	    options.change(function () {
	        $(optionId+" option:selected").each(function () {
				var tmp = data[table+"_view"][this.value];        	
				$("#"+table+"_data_table").html(CreateKeyValueTableView(tmp));	
				for (var i in tmp){
					$("#"+i).html(tmp[i]);
				}
			});
	    }).trigger('change');
	}
	
	//Ceiling Door Floor Roof Wall Window
	fillBuildingDropDown('Tab_Building_Constr','Roof',1);	
	fillBuildingDropDown('Tab_Building_Constr','Roof',2);
	fillBuildingDropDown('Tab_Building_Constr','Floor',1);	
	fillBuildingDropDown('Tab_Building_Constr','Floor',2);	
	fillBuildingDropDown('Tab_Building_Constr','Window',1);	
	fillBuildingDropDown('Tab_Building_Constr','Window',2);	
	fillBuildingDropDown('Tab_Building_Constr','Wall',1);	
	fillBuildingDropDown('Tab_Building_Constr','Wall',2);	
	fillBuildingDropDown('Tab_Building_Constr','Wall',3);	
	

});