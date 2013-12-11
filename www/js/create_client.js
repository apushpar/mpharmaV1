//$.mobile.showPageLoadingMsg();
//$.mobile.hidePageLoadingMsg();
$('#CreateClient').on('pagebeforeshow', function(event) {
	console.log("in create client")
	console.log(localStorage.getItem('usr_id'));
	
	if(localStorage.getItem('usr_id') === null ) {
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
    }
	else {
	
		$("#CreateClientForm").submit(handleClientUpload);
	
	}
});


function handleClientUpload() {

//uncomment line to activate gps code   navigator.geolocation.getCurrentPosition(cl_onSuccess, cl_onError,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	var position = 0;  //remove line for gps
	cl_onSuccess();  //remove line for gps
console.log("local next line to CLIENT geolocation call");


return false;
}


function cl_onSuccess(position) {
	var uploadform = $("#CreateClientForm");  
	console.log("in client form ");
	$("#clientSubmitButton",uploadform).attr("disabled","disabled");
	console.log("local in CLIENT gps onSuccess function");
	
	//var cl_lat = position.coords.latitude;  uncomment to activate gps
	var cl_lat = 0; //remove line for gps
	console.log ("Local CLIENT OnSuccess, lat data: "+cl_lat);

	//var cl_long = position.coords.longitude;   uncomment to activate gps
	var cl_long = 0; //remove line for gps
	console.log ("Local CLIENT OnSuccess, long data: "+cl_long);
	
	var cName = $("#clientName", uploadform).val();
	var cSname = $("#clientShop", uploadform).val();
	var cSaddr = $("#clientAddr", uploadform).val();
	var cSloc = $('input:radio[name=atLocation]:checked').val();
	

	var usr_id = localStorage.getItem('usr_id');
	
	if(cName != '' && cSname != '' && cSaddr != '' && $('input:radio[name="atLocation"]:checked').length > 0) {
	    $.ajax({
	        type: 'POST',
	        //data: postData,
	        data: {clientName:cName,clientShop:cSname,clientAddr:cSaddr,usr_id:usr_id,cl_lat:cl_lat,cl_long:cl_long,atLocation:cSloc},
	        //change the url for your project
	        url: serviceURL+'/clientStore.php',
	        //url: 'http://172.20.10.2/comments/auth_error.php',
	        success: function(data){
	        	console.log(data);
	        	if(data == true) {
	        		navigator.notification.alert("Data Stored online.", function() {});
	        		//$.mobile.changePage("readReport.html");
	        	}
	        	else {
	        		
	                navigator.notification.alert("Data not stored. Please re-enter the data.", function() {});
	            }
	        },
	        error: function(){
	            //console.log(data);
	            alert('Please check connectivity: Data posting error');
	        }
	    });
	} else {
	    navigator.notification.alert("Please enter all the client details", function() {});
	    $("#clientSubmitButton").removeAttr("disabled");
	}

	
}

function cl_onError(error) {
	
	console.log("local in error for gps cordinates");
	alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '. Please try again.\n');

}