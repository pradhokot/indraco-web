document.querySelectorAll('.nav-pills .nav-link').forEach(function(everyitem){ 	
	
	var tabTrigger = new bootstrap.Tab(everyitem)
	everyitem.addEventListener('mouseenter', function(){
		tabTrigger.show();
	});
	
});