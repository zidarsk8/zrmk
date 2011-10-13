$(document).ready(function(){

	$(".toggleButton").click(function(){
		toggleStuff(this);
	});
	
	toggleStuff($('button_toggle_cdsc'),false);
	
});


	function toggleStuff(button, toggle){
		console.log('toggle', button, toggle);
		if (typeof toggle == 'undefined'){
			var id = button.id.substring(7);
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
