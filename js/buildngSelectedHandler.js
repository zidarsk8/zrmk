$(document).ready(function(){
	
	
	
	$(".buildings_table_element").click(function(){
		var buildingID = this.firstChild.id;
		var building;
		$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+this.firstChild.src+'" width="'+(this.firstChild.width*2)+'" height="'+(this.firstChild.height*2)+'" />')
		
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
		
		$("[id='"+sData[cur]['Code_SysW']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+sData[cur]['Code_SysH']+"']").removeAttr('selected').attr('selected','selected').change();
		$("[id='"+sData[cur]['Code_SysVent']+"']").removeAttr('selected').attr('selected','selected').change();
		
		fillDataSet();
		
		location.href = "#building_selection_container";
	});
	
});