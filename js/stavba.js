$(document).ready(function(){
	
	
	
	$('#stavba1').click(function(){
		if (cur != 0){
			$(this).addClass('active');
			$('#k2').removeClass('active');
			$('#k3').removeClass('active');
			
			cur = 0;
			fillDataSet();
		}
	});

	
	$('#stavba2').click(function(){
		if (cur != 1){
			$('#k1').removeClass('active');
			$(this).addClass('active');
			$('#k3').removeClass('active');
			
			cur = 1;
			fillDataSet();
		}
	});

	
	$('#stavba3').click(function(){
		if (cur != 2){
			$('#k1').removeClass('active');
			$('#k2').removeClass('active');
			$(this).addClass('active');
			
			cur = 2;
			fillDataSet();
		}
	});
	
});