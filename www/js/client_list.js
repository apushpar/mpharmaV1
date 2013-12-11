$('#clientList').on('pagebeforeshow', function(event) {
	console.log("in read report")
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
	//$(".ui-loader").css({ "top": "252px !important" });
	//$('body').addClass('ui-loading');
	$.mobile.showPageLoadingMsg();		
	var usr_id = localStorage.getItem('usr_id');
	//console.log("reports for " + usr_id);
	//console.log('http://slatebot.com/comments/getReportList.php?id='+usr_id);
	
	//check for day of week
	//var dayOfWeek = new Date().getDay(); //old method
	var dayOfWeek = localStorage.getItem('week_num');
//	localStorage.removeItem( "week_num");

	var getClientURL;
	//alert ("day of week"+dayOfWeek);
	if (dayOfWeek != '7') {
		getClientURL = serviceURL+'/getModClientList.php?user_id='+usr_id+'&DOW='+dayOfWeek;
	}
	else {
		getClientURL = serviceURL+'/getClientList.php';
	}
	
	console.log(getClientURL);
	$.getJSON(getClientURL, function (data) {
		
		var reports = data.items;
		var repl1;
		var repl;
		
//		console.log("totalCount " + totalCount);
		$('#CLlist').append('<li data-role="list-divider">Client List</li>');
		$.each(reports, function(index, client) {
			
			if (dayOfWeek != '7') {
				repl = client.cl_details;
			}
			else {
				var addShpNam = client.cl_shp+" ("+client.cl_name+")";
				repl = addShpNam;
			}
			console.log("repl"+repl);
			
			// end of check for day of week
			//var repl = client.cl_shp+"("+client.cl_name+")";
			//repl1 = repl.replace(" ","%20");
			repl1 = repl.replace(/ /g, '%20');
			console.log("local"+repl1);
			$('#CLlist').append('<li data-icon="false"><a onClick=toCreateReport("' + repl1 + '")>' +
					'<h4>' + repl + '</h4></a></li>');
			//$('#CLlist').append('<li data-icon="false"><a onClick=toCreateReport("' + repl1 + '")>' +
			//		'<h4>' + repl1 + '</h4> ('+client.cl_name+')</a></li>');
			//console.log('local <li data-icon="false"><a onClick=toCreateReport("' + repl1 + '")>');
		});
		
		$('#CLlist').listview('refresh');
	});
	$.mobile.hidePageLoadingMsg();
	//$('body').addClass('ui-loading');
	}
	
	
});

//<a href="showReport.html?rpt=' + employee.rpt_name + '">'


function toCreateReport(cl_name) {
	//console.log("local in loadReportDetail to handle missing query parameter");
	var repl = cl_name.replace(/%20/g, ' ');
	console.log("local storage"+repl);
	localStorage.setItem('client_name', repl);
//	localStorage.setItem('fieldOne', fieldOne);
	//location.href="employeedetails.html"; // this doesn't work on Android (see http://code.google.com/p/android/issues/detail?id=9122)
	//navigator.app.loadUrl("file:///android_asset/www/showReport.html");
	$.mobile.changePage("createReport.html");
	
}