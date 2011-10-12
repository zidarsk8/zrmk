$(document).ready(function(){


	
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