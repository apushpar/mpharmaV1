$('#docList').live('pagebeforeshow', function(event) {
	console.log("launch: generate doctor list");
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to view list of doctors", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
		
	var usr_id = localStorage.getItem('usr_id');

	var getDocURL = serviceURL+'/getDocList.php?user_id='+usr_id;

	console.log(getDocURL);
	
	$.getJSON(getDocURL, function (data) {
		
		var docAll = data.items;
		//var repl1;
		//var repl;
		
//		console.log("totalCount " + totalCount);
		$('#dclist').append('<li data-role="list-divider">List of Doctors</li>');
		$.each(docAll, function(index, doc) {
			
			var doc_name = doc.doc_name;
			var doc_id = doc.doc_id;
			var doc_spec = doc.doc_spec;

			var doc_name_mod = doc_name.replace(/ /g, '%20');
			var doc_id_mod = doc_id.replace(/ /g, '%20');
			var doc_spec_mod = doc_spec.replace(/ /g, '%20');
			
			console.log("local"+doc_name_mod);
			$('#dclist').append('<li><a onClick=forDocReport("' + doc_name_mod + '","' + doc_id_mod + '","' + doc_spec_mod + '")>' +
					'<h4>' + doc_name + '</h4>('+doc_spec+')</a></li>');
			//$('#CLlist').append('<li data-icon="false"><a onClick=toCreateReport("' + repl1 + '")>' +
			//		'<h4>' + repl1 + '</h4> ('+client.cl_name+')</a></li>');
			//console.log('local <li data-icon="false"><a onClick=toCreateReport("' + repl1 + '")>');
		});
		
		$('#dclist').listview('refresh');
	});

	}
	
	
});

//<a href="showReport.html?rpt=' + employee.rpt_name + '">'


function forDocReport(doc_name_mod,doc_id_mod,doc_spec_mod) {

	var doc_name = doc_name_mod.replace(/%20/g, ' ');
	var doc_id = doc_id_mod.replace(/%20/g, ' ');
	var doc_spec = doc_spec_mod.replace(/%20/g, ' ');
	
	localStorage.setItem('doc_name', doc_name);
	localStorage.setItem('doc_id', doc_id);
	localStorage.setItem('doc_spec', doc_spec);
	
	$.mobile.changePage("docReport.html");
	
}