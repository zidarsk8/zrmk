$(document).ready(function(){
	
	
	
	$(".buildings_table_element").click(function(){
		var buildingID = this.firstChild.id;
		var building;
		addS('imageSrc',this.firstChild.src);
		addS('imageWidth',this.firstChild.width*2);
		addS('imageHeight',this.firstChild.height*2);

		$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+getS('imageSrc')+'" width="'+getS('imageWidth')+'" height="'+getS('imageHeight')+'" />')

		toggleStuff($("#button_toggle_bsc")[0] ,false);
		toggleStuff($('#button_toggle_btc')[0] ,true);
		
		
		sData[cur]["Code_Building"] = buildingID;
		
		$.each(data.Tab_Building_view, function(index){
			if (this.Code_Building == buildingID){
				building = this;
				for (var i in building){
					addS(i,building[i]);
				}
				return false;
			}
		});
		
		//se selected options for roof walls dors ...
		$("[id^=select_Tab_Building_Constr_]").each(function(){
			var field = (this.id.substring('select_Tab_Building_Constr_'.length));
			$("option:selected",'#'+this.id).removeAttr('selected');
			$("option","#"+this.id).each(function(){
				if (this.value == building['Code_'+field]) {
					$(this).attr('selected', 'selected');
					//sData[cur]['Code_'+field] = building['Code_'+field];
					
					addS('Code_'+field, building['Code_'+field]);
				}
			});
		});
		
		//se selected options for roof walls dors ...
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
		$("[id='"+sData[cur]['Code_SysW']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+sData[cur]['Code_SysH']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+sData[cur]['Code_SysVent']+"']").removeAttr('selected').attr('selected','selected').change();
	
		var fields = new Array('Roof_1','Roof_2','Wall_1','Wall_2','Wall_3','Floor_1','Floor_2','Window_1','Window_2','Door_1');
		for (var i in fields){
			$("[id='"+fields[i]+'_'+sData[cur]['Code_'+fields[i]]+"']").removeAttr('selected').attr('selected','selected').change();
		}
		
		fillDataSet();
		
		location.href = "#building_selection_container";
	});
	
});