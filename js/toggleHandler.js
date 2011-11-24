$(document).ready(function(){

	$(".toggleButton").click(function(){
		//console.log(sData);
		toggleStuff(this);
	});
	//toggleStuff($('#button_toggle_cdsc')[0] ,false);
});


function toggleStuff(button, toggle){
	var id = button.id.substring(7);
	if (typeof toggle == 'undefined'){
		$("#"+id).toggle(0,function(tog){
			if ($(button).html() == "Skrij"){
				$(button).html("Odpri")
			}else{
				$(button).html("Skrij")
			}
		});
	} else if (toggle){
		$("#"+id).show();
		$(button).html("Skrij")
	} else {
		$("#"+id).hide();
		$(button).html("Odpri")
	}
}
