$('#weekList').on('pagebeforeshow', function(event) {
	console.log("in week list page")
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
	
	
	var usr_id = localStorage.getItem('usr_id');
	}
});




function getWeekClient(wk_num) {
	console.log("in getWeekClient function");
	console.log("week num"+wk_num);
	localStorage.setItem('week_num', wk_num);
	$.mobile.changePage("clientList.html");
	
}