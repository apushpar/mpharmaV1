//$.mobile.showPageLoadingMsg();
//$.mobile.hidePageLoadingMsg();
var multipleOrderCount=1;
var orderPrice;
var orderQty;
var displayValue;
var orderPriceChange;

$(document).on('change','.orderCaptureQ', function() {
	for (var i=1;i<multipleOrderCount+1;i++) {
		orderPrice =  $("#orderDataP"+i).val(); 
		orderQty =  $("#orderDataQ"+i).val();
		displayValue = parseFloat(orderPrice) * parseFloat(orderQty);
		$("#calcBill"+i).text("Cost incurred: Rs."+displayValue);
	}
	});

$(document).on('change','.orderDataT', function() {
	for (var i=1;i<multipleOrderCount+1;i++) {
		orderPriceChange =  $("#orderDataT"+i).val(); 
		//orderQty =  $("#orderDataQ"+i).val();
		displayValue = parseFloat(orderPriceChange);
		$("#calcBill"+i).text("Final Cost incurred: Rs."+displayValue);
	}
	});

$('#CreateReport').live('pagebeforeshow', function(event) {
	console.log("in create report")
	console.log(localStorage.getItem('usr_id'));

	if(localStorage.getItem('usr_id') === null ) {
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
    }
	else {
		
	$("#CreateReportForm").submit(handleReportUpload);
	$("#addOrderButton").attr('disabled','disabled');	
	 $('input:radio[name=orderStatus]').click(function() {
		console.log($('input:radio[name=orderStatus]:checked').val());
		 if ($('input:radio[name=orderStatus]:checked').val() == "Order placed") {
			 console.log("local (order placed) adding new text input field");
			 
			 if ($("#NOorderData").length > 0) {
				 console.log("check for @no order data field@ in ORDER PLACED LOOP"+$("#NOorderData").length);
				 $("#NOorderData").remove();
			 }
			 
			 if ($("#orderData").length > 0) {
				 console.log("local no need to add dynamic field");
			 }
			 else {
				 $("#noOrderdiv").remove();
				 $("#orderData1").remove();
				 $("#orderDataP1").remove();
				 $("#orderDataQ1").remove();
				 $("#orderDataT1").remove();
				 console.log("local dynamic field added");
		  $('<div id="Orderdiv"><select name="orderData" id="orderData1"><option value="Product A">Product A</option>'+
				  '<option value="Product B">Product B</option><option value="Product C">Product C</option>'+
				  '</select></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div><input type="number" id="orderDataP1" class="field" name="orderCaptureP" value="" placeholder="Please enter price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div><input type="number" id="orderDataQ1" class="orderCaptureQ" name="orderCaptureQ" value="" placeholder="Please enter quantity" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<h2><label id="calcBill1" class="calcBill"></label></h2>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div id="OrderTdiv"><input type="number" id="orderDataT1" class="orderDataT" name="orderDataT" value="" placeholder="Please enter final billing price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $("#addOrderButton").removeAttr('disabled');
		  
//		  $('<div><input type="button" value="Add More" id="addOrderButton"></div>').fadeIn('slow').appendTo('#dynamicInput');
				 
				
		  //$('#orderData').attr('data-theme','b').addClass('ui-body-a').trigger('create');
		  //$('#CreateReport').trigger("create");

		  //
			 }
		 }
		 
		 else {
			 
			 if ($("#orderData").length > 0) {
				 console.log("check for @order data field@ in NO ORDER PLACED LOOP"+$("#orderData").length);
				 $("#orderData1").remove();
				 $("#orderDataP1").remove();
				 $("#orderDataQ1").remove();
				 $("#orderDataT1").remove();
				 $("#noOrderdiv").remove();
				 //$("#addOrderButton").remove();
			 }
			 console.log("NOorder length in no order loop "+$("#NOorderData").length);
			 if ($("#NOorderData").length > 0) {
				 console.log("local no need to add dynamic field");
			 }
			 else {
				 $("#Orderdiv").remove();
				 $("#orderData1").remove();
				 $("#orderDataP1").remove();
				 $("#orderDataQ1").remove();
				 $("#orderDataT1").remove();
				 $("#OrderTdiv").remove();
				 console.log("local dynamic field added");
		  $('<div id="noOrderdiv"><select name="NOorderData" id="NOorderData"><option value="Client not available">Client not available</option><option value="Stock not needed">Stock not needed</option><option value="Complaint: Poor Quality">Complaint: Poor Quality</option></select></div>').fadeIn('slow').appendTo('#dynamicInput');
		  //$('#CreateReport').trigger("create");
		  
			 }
		 }
		 $('#CreateReport').trigger("create");
		 //$('#CreateReport').trigger("create");
	 });
	 
$('#addOrderButton').click(function() {
	multipleOrderCount++;
	console.log(multipleOrderCount);
	 $('<div data-role="fieldcontain"></div>').fadeIn('slow').appendTo('#dynamicInput');
	 $('<div id="Orderdiv"><select name="orderData" id="orderData'+multipleOrderCount+'"><option value="Product A">Product A</option>'+
			  '<option value="Product B">Product B</option><option value="Product C">Product C</option>'+
			  '</select></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div><input type="number" id="orderDataP'+multipleOrderCount+'" class="field" name="orderCaptureP" value="" placeholder="Please enter price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div><input type="number" id="orderDataQ'+multipleOrderCount+'" class="orderCaptureQ" name="orderCaptureQ" value="" placeholder="Please enter quantity" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<h2><label id="calcBill'+multipleOrderCount+'" class="calcBill"></label></h2>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div id="OrderTdiv"><input type="number" id="orderDataT'+multipleOrderCount+'" class="field" name="orderCaptureT" value="" placeholder="Please enter final billing price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('#CreateReport').trigger("create");
});
	 
	 
	}
	

});




function handleReportUpload() {
/*var uploadform = $("#CreateReportForm");  
console.log("in upload form ");
$("#createSubmitButton",uploadform).attr("disabled","disabled");*/

navigator.geolocation.getCurrentPosition(onSuccess, onError,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
console.log("local next line to geolocation call");

return false;
}


function onSuccess(position) {
	var uploadform = $("#CreateReportForm");  
	console.log("in upload form ");
	$("#createSubmitButton",uploadform).attr("disabled","disabled");
	console.log("local in gps onSuccess function");
	/*var latlon=position.coords.latitude+","+position.coords.longitude;*/
	//localStorage.setItem('usr_lat',position.coords.latitude);
	var usr_lat = position.coords.latitude;
	console.log ("Local OnSuccess, lat data: "+usr_lat);
//	usr_lat = usr_lat.substring(0,6);
	
	//localStorage.setItem('usr_long',position.coords.longitude);
	var usr_long = position.coords.longitude;
	console.log ("Local OnSuccess, long data: "+usr_long);
//	usr_long = usr_long.substring(0,6);
	//localStorage.setItem('gpsStatus',"gpsSuccess");
	
// moving reportUpload code here	
	//var rName = $("#reportName", uploadform).val();
	console.log("order count"+multipleOrderCount);
	for (var i=1;i<multipleOrderCount+1;i++) {
		
		console.log ("in for loop");
	var milliseconds = new Date().getTime();
	//alert (milliseconds);
	var rName = milliseconds+"_"+i;
	var rFone = $("#reportfieldOne").val();
	var rFtwo = $('input:radio[name=orderStatus]:checked').val();
	//alert ("rFtwo"+rFtwo);
	var rFthree;
	var rFfour;
	var rFfive;
	var rFsix;
	if ($("#NOorderData").length > 0) {
		rFthree = $("#NOorderData", uploadform).val();
		rFfour = 0;
		rFfive = 0;
		rFsix = "no data";
	 }
	else {
		
		rFthree = $("#orderData"+i, uploadform).val();
		console.log("rFthree"+rFthree);
		rFfour = $("#orderDataP"+i, uploadform).val();
		console.log(rFfour);
		rFfive = $("#orderDataQ"+i, uploadform).val();
		console.log(rFfive);
		rFsix = $("#orderDataT"+i, uploadform).val();
		console.log(rFsix);
	}
	
	//var rFtwo = $("#reportfieldTwo", uploadform).val();
	var usr_id = localStorage.getItem('usr_id');
	//alert("i:"+i);
	if(rName != '' && rFone != '' && rFtwo != '' && rFthree != '' && typeof rFtwo != 'undefined' && rFone != 'null') {
	    $.ajax({
	        type: 'POST',
	        //data: postData,
	        data: {title:rName,fieldOne:rFone,fieldTwo:rFtwo,usr_id:usr_id,usr_lat:usr_lat,usr_long:usr_long,fieldThree:rFthree,fieldFour:rFfour,fieldFive:rFfive,fieldSix:rFsix},
	        //change the url for your project
	        url: serviceURL+'/reportStore_more.php',
	        //url: 'http://172.20.10.2/comments/auth_error.php',
	        success: function(data){
	        	console.log(data);
	        	if(data == true) {
	        		//alert ("i:"+i+"and multipleOrderCount:"+multipleOrderCount);
	        		//if(i=multipleOrderCount){
	        			
	        		//navigator.notification.alert("Data Stored online.", function() {});
	        		//$.mobile.changePage("readReport.html");
	        		
	        		//}
	        		
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
	    navigator.notification.alert("Please enter a Report Name to proceed", function() {});
	    $("#createSubmitButton").removeAttr("disabled");
	}
	}
	$.mobile.changePage("readReport.html");
}

function onError(error) {
	console.log("local in error for gps cordinates");
	alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
	//localStorage.setItem('gpsStatus',"gpsError");
}