$(document).ready(function(){

	// Tab Building /////////////////////////////////////////
	$('#Tab_Building_data_table').hide();
	var options = $("#select_Tab_Building");
	$.each(data['Tab_Building_view'],function(index) {
    	options.append($("<option />").val(index).text(this['Code_Building']));
	});
	
	$("#show_Tab_Building_data_button").click(function() {
		$('#Tab_Building_data_table').toggle();
	});
	
    $("#select_Tab_Building").change(function () {
        $("#select_Tab_Building option:selected").each(function () {
			var tmp = data['Tab_Building_view'][this.value];        	
			$("#Tab_Building_data_table").html(CreateKeyValueTableView(tmp));	
			for (var i in tmp){
				$("#"+i).html(tmp[i]);
				console.log("#"+i,tmp[i]);
			}
			calculateValues();
		});
    }).trigger('change');
	
	
	function calculateValues(){
		$("#roof_1_result").html(parseInt($("#U_Roof_1").html)*parseInt($("#A_Roof_1").html)*parseInt($("#b_Transmission_Roof_1").html));
	}
	
});