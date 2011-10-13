$(document).ready(function(){

	$(".toggleButton").click(function(){
		var button = this;
		var id = button.id.substring(7);
		$("#"+id).toggle(0,function(tog){
			if ($(button).html() == "Skrij"){
				$(button).html("Odpri")
			}else{
				$(button).html("Skrij")
			}
		});
		console.log(sData);
	});
	
});