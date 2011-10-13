$(document).ready(function(){
	
	
	
	$(".buildings_table_element").click(function(){
		var buildingID = this.firstChild.id;
		var building;
		$('#SelectedBuildingHolder').html('<img id="SelectedBuilding" src="'+this.firstChild.src+'" width="'+(this.firstChild.width*2)+'" height="'+(this.firstChild.height*2)+'" />')
		
		$("#button_toggle_bsc").trigger("click");
		
		$("#toggle_btc").show();
		$("#button_toggle_btc").html("Skrij");
		
		sData[curDataSet]["Code_Building"] = buildingID;
		
		$.each(data.Tab_Building_view, function(index){
			if (this.Code_Building == buildingID){
				building = this;
				return false;
			}
		});
		
		$("[id^=select_Tab_Building_Constr_]").each(function(){
			var field = (this.id.substring('select_Tab_Building_Constr_'.length));
			$("option:selected",'#'+this.id).removeAttr('selected');
			$("option","#"+this.id).each(function(){
				if (this.value == building['Code_'+field]) {
					$(this).attr('selected', 'selected');
					//sData[curDataSet]['Code_'+field] = building['Code_'+field];
					
					addS('Code_'+field, building['Code_'+field]);
				}
			});
		});
		location.href = "#building_selection_container";
	});
	
	
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
	checkDuplicateIds();
});