$(document).ready(function(){
	
	$(".buildings_table_element").click(function(){
		automatic = true;
		var buildingID = this.firstChild.id;
		var building;
		var cd = sData[cur];
		addS('imageSrc',this.firstChild.src);
		addS('imageWidth',this.firstChild.width*2);
		addS('imageHeight',this.firstChild.height*2);

		$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+cd['imageSrc']+'" width="'+cd['imageWidth']+'" height="'+cd['imageHeight']+'" />')

		toggleStuff($("#button_toggle_bsc")[0] ,false);
		toggleStuff($('#button_toggle_btc')[0] ,true);
		
		addS('Code_Building',buildingID);
		addS('Building',buildingID);
		
		building = addArrayToSdata(data["Tab_Building_view"],"Code_Building",buildingID);
		
		//se selected options for roof, floor, walls, dors and windows
		$("[id^=select_Tab_Building_Constr_]").each(function(){
			var field = (this.id.substring('select_Tab_Building_Constr_'.length));
			$("option:selected",'#'+this.id).removeAttr('selected');
			$("option","#"+this.id).each(function(){
				if (this.value == building['Code_'+field]) {
					$(this).attr('selected', 'selected');
					addS('Code_'+field, building['Code_'+field]);
				}
			});
		});
		
		$('option').removeAttr('selected');
		$("[id='"+cd['Code_SysW']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+cd['Code_SysH']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+cd['Code_SysVent']+"']").removeAttr('selected').attr('selected','selected').change();
	
		var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
		for (var i in fields){
			$("[id='"+fields[i]+'_'+cd['Code_'+fields[i]]+"']").removeAttr('selected').attr('selected','selected').change();
		}
		
		fillDataSet();

		automatic = false;
		//location.href = "#building_selection_container";
	});
});
