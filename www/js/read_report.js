$('#readReport').live('pagebeforeshow', function(event) {
	console.log("in read report")
	//----------------redirect back button to weeklist-------------
		document.addEventListener("backbutton", function(e){
	    if($.mobile.activePage.is('#readReport')){
	        e.preventDefault();
	        //navigator.app.exitApp();
	        //$.mobile.changePage("weekList.html");
	    }
	    else {
	        navigator.app.backHistory()
	    }
	}, false);
	//----------------redirect back button to weeklist-------------
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to access reports", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
	//$(".ui-loader").css({ "top": "252px !important" });
	//$('body').addClass('ui-loading');
	//$.mobile.showPageLoadingMsg();	
	//$('#divMsg').show();
	var usr_id = localStorage.getItem('usr_id');
	console.log("reports for " + usr_id);
	console.log(serviceURL+'/getReportList.php?id='+usr_id);
	
	
	$.getJSON(serviceURL+'/getReportList.php?id='+usr_id, function (data) {
		var reports = data.items;
		var totalCount = 0;
		var finalCount = 0;
		console.log("totalCount " + totalCount);
		$('#reportList').append('<li data-role="list-divider">Reports: Today</li>');
		$.each(reports, function(index, employee) {
			//totalCount = employee.fieldFour * employee.fieldFive;
			//finalCount = finalCount + totalCount;
			
			totalCount = employee.fieldSix;
			finalCount = parseFloat(finalCount) + parseFloat(totalCount);
			
			$('#reportList').append('<li data-icon="false"><a onClick=loadReportDetail("' + employee.rpt_name + '")>' +
					'<h2>' + employee.fieldOne + '</h2><h4>' + employee.fieldThree + '</h4><span class="ui-li-count">'+totalCount+'</span></a></li>');
			console.log('local <li><a onClick="loadReportDetail("' + employee.rpt_name + '","' + employee.fieldOne + '")>');
		});
		$('#reportList').append('<li data-theme="c" data-icon="false"><a onClick=""' +
				'<h4>Total</h4><span class="ui-li-count">'+finalCount+'</span></a></li>');
		$('#reportList').listview('refresh');
	});
	//$.mobile.hidePageLoadingMsg();
	// $('#divMsg').hide();
	//$('body').addClass('ui-loading');
	}
	
	
});

//<a href="showReport.html?rpt=' + employee.rpt_name + '">'


function loadReportDetail(rpt_name) {
	console.log("local in loadReportDetail to handle missing query parameter");
	localStorage.setItem('rpt_name', rpt_name);
//	localStorage.setItem('fieldOne', fieldOne);
	//location.href="employeedetails.html"; // this doesn't work on Android (see http://code.google.com/p/android/issues/detail?id=9122)
	//navigator.app.loadUrl("file:///android_asset/www/showReport.html");
	$.mobile.changePage("showReport.html");
	
}