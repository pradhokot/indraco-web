document.querySelectorAll('.nav-pills .nav-link').forEach(function(everyitem){ 	
	
	var tabTrigger = new bootstrap.Tab(everyitem)
	everyitem.addEventListener('mouseenter', function(){
		tabTrigger.show();
	});
	
});

// $(document).ready(function() {
// 	$('.page-content').css('padding-top', ($('.page-header').height()));
// });