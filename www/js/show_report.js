$('#showReport').live('pageshow', function(event) {
	console.log("in show individual report");
	$.mobile.showPageLoadingMsg();
	//var rpt_name = getUrlVars()["rpt"];
	var rpt_name = localStorage.getItem( "rpt_name");
	//var fieldOne = localStorage.getItem( "fieldOne");
	localStorage.removeItem( "rpt_name");
	//localStorage.removeItem( "fieldOne");
	
	
	console.log("local rpt_name in show_report"+rpt_name);
		var usr_id = localStorage.getItem('usr_id');
		console.log("local Showing report for " + usr_id+", created report: "+rpt_name);
		console.log('local'+serviceURL+'/showReport.php?id='+usr_id+'&rpt='+rpt_name);
		
		
		$.getJSON(serviceURL+'/showReport.php?id='+usr_id+'&rpt='+rpt_name,function (data) {
			
			console.log("local inside showReport function");
			var reports = data.items;
			$.each(reports, function(index, employee) {
				//alert(employee.rpt_name);
				$('#reportName').text("UID: "+employee.rpt_name);
				$('#fieldOne').text("Client Name: "+employee.fieldOne);
				$('#fieldTwo').text("Order Status: "+employee.fieldTwo);
				$('#fieldThree').text("Product: "+employee.fieldThree);
				$('#fieldFour').text("Price: Rs."+employee.fieldFour);
				$('#fieldFive').text("Quantity: "+employee.fieldFive);
				$('#fieldSix').text("Type: "+employee.fieldSix);
			});
		});
		$.mobile.hidePageLoadingMsg();
});


function showIndReport(data) {
	console.log("local inside showIndReport function");

	
}

function getUrlVars() {
    var vars = [], hash;
    console.log("local in getUrlVars");
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}