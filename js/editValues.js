$(document).ready(function(){
	$('.canEdit').change(function(){
		addS(this.id,this.value);
		fillDataSet();
	});
	$('.canEditGlobal').change(function(){
	});
});