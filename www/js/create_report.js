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

function addOrderFields() {
	
	$('<div data-role="fieldcontain"></div>').fadeIn('slow').appendTo('#dynamicInput');
	//localStorage.removeItem('prd_list');
	var prd_list = localStorage.getItem('prd_list');
	
	
	if (prd_list != null) {
		var prd_list_mod = JSON.parse(prd_list)
		$('.orderData').empty();
		$('<div id="Orderdiv"><select name="orderData" id="orderData'+multipleOrderCount+'">').fadeIn('slow').appendTo('#dynamicInput');
		
		$('.orderData').trigger("create");
		console.log('after create');
		
		$.each(prd_list_mod.prds, function(i, item) {
	        $('<option value='+item.prd_name+'>'+item.prd_name+'</option>').fadeIn('slow').appendTo('#orderData'+multipleOrderCount);
	      });
		
	}
	else {
		console.log('wrong loop');
		fetchProductInfo("createDocReport");
	}
/*	 $('<div id="Orderdiv"><select name="orderData" id="orderData'+multipleOrderCount+'">'+
			 '<option value="Product A">Product A</option>'+
			  '<option value="Product B">Product B</option>'+
			  '<option value="Product C">Product C</option>'+
			  '</select></div>').fadeIn('slow').appendTo('#dynamicInput');*/
	 
	 
	  $('<div><input type="number" id="orderDataP'+multipleOrderCount+'" class="field" name="orderCaptureP" value="" placeholder="Please enter price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div><input type="number" id="orderDataQ'+multipleOrderCount+'" class="orderCaptureQ" name="orderCaptureQ" value="" placeholder="Please enter quantity" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<h2><label id="calcBill'+multipleOrderCount+'" class="calcBill"></label></h2>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div id="OrderTdiv"><input type="number" id="orderDataT'+multipleOrderCount+'" class="field" name="orderCaptureT" value="" placeholder="Please enter final billing price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('#CreateReport').trigger("create");
	
}


function addVendorData() {
	
	//$('<div data-role="fieldcontain"></div>').fadeIn('slow').appendTo('#dynamicInput');
	//localStorage.removeItem('prd_list');
	var vend_list = localStorage.getItem('vend_list');
	
	
	if (vend_list != null) {
		$('#dynamicSelect').empty();
		var vend_list_mod = JSON.parse(vend_list)
		//$('#reportfieldOne').empty();
		$('<select name="reportfieldOne" id="reportfieldOne">').fadeIn('slow').appendTo('#dynamicSelect');
		
		$('#dynamicSelect').trigger("create");
		//console.log('after create');
		
		$.each(vend_list_mod.vends, function(i, item) {
			//$('#reportfieldOne').append('<option value='+item.vd_id+'@'+item.vd_name+'>'+item.vd_name+'</option>');
			$('<option value='+item.vd_id+'@'+item.vd_name+'>'+item.vd_name+'</option>').fadeIn('slow').appendTo('#reportfieldOne');
	      });
		
	}
	else {
		console.log('wrong loop');
		fetchVendorInfo("createDocReport");
	}
	//$('#reportfieldOne').listview('refresh'); 
	$('#CreateReport').trigger("create");
	
}



$('#CreateReport').live('pagebeforeshow', function(event) {
	
	
	
	console.log("in create report")
	console.log(localStorage.getItem('usr_id'));

	if(localStorage.getItem('usr_id') === null ) {
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
    }
	else {
	
	
	//$("#CreateReportForm").submit(handleReportUpload); //older upload method
	
	$('#createSubmitButton').click(function() {
		$(this).attr('disabled','disabled');
        $('#divMsg').show();
		$("#createSubmitButton .ui-btn-text").text("Saving....Please wait");
		handleReportUpload();
		});	
	
	addVendorData();
	$("#addOrderButton").attr('disabled','disabled');
	
	
	
	 $('input:radio[name=orderStatus]').click(function() {
		console.log($('input:radio[name=orderStatus]:checked').val());
		 if ($('input:radio[name=orderStatus]:checked').val() == "Order placed") {
			 
		        for(var i=1;i<=multipleOrderCount;i++)
		        {
		        	 $('#orderData'+i).remove();
					 $('#orderDataP'+i).remove();
					 $('#orderDataQ'+i).remove();
					 $('#orderDataT1'+i).remove();
		        	
		        }
				 $("#noOrderdiv").remove();
				 $("#Orderdiv").remove();
				 $("#OrderTdiv").remove();
				 
				 console.log("local dynamic field added");
			/*	 
		  $('<div id="Orderdiv"><select name="orderData" id="orderData1"><option value="Product A">Product A</option>'+
				  '<option value="Product B">Product B</option><option value="Product C">Product C</option>'+
				  '</select></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div><input type="number" id="orderDataP1" class="field" name="orderCaptureP" value="" placeholder="Please enter price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div><input type="number" id="orderDataQ1" class="orderCaptureQ" name="orderCaptureQ" value="" placeholder="Please enter quantity" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<h2><label id="calcBill1" class="calcBill"></label></h2>').fadeIn('slow').appendTo('#dynamicInput');
		  $('<div id="OrderTdiv"><input type="number" id="orderDataT1" class="orderDataT" name="orderDataT" value="" placeholder="Please enter final billing price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
		  */
				 addOrderFields();
		  $("#addOrderButton").removeAttr('disabled');
		  
		 }
		 
		 else {
			 console.log ("localtest "+multipleOrderCount);
			 for(var i=1;i<=multipleOrderCount;i++)
		        {
				 console.log ("localtest loopcount"+i);
		        	 $('#orderData'+i).remove();
					 $('#orderDataP'+i).remove();
					 $('#orderDataQ'+i).remove();
					 $('#orderDataT1'+i).remove();
		        	
		        }
			 multipleOrderCount=1;
			 
			 	 $("#noOrderdiv").remove();
				 $("#Orderdiv").remove();
				 $("#OrderTdiv").remove();
				 console.log("local dynamic field added");
		  $('<div id="noOrderdiv"><select name="NOorderData" id="NOorderData"><option value="Stockist not available">Stockist not available</option><option value="Stock not needed">Stock not needed</option><option value="Complaint: Quality issues">Complaint: Quality issues</option></select></div>').fadeIn('slow').appendTo('#dynamicInput');

		 }
		 $('#CreateReport').trigger("create");
		 //$('#CreateReport').trigger("create");
	 });
	 
$('#addOrderButton').click(function() {
	multipleOrderCount++;
	console.log(multipleOrderCount);
	
	addOrderFields();
	 /*$('<div data-role="fieldcontain"></div>').fadeIn('slow').appendTo('#dynamicInput');
	 $('<div id="Orderdiv"><select name="orderData" id="orderData'+multipleOrderCount+'"><option value="Product A">Product A</option>'+
			  '<option value="Product B">Product B</option><option value="Product C">Product C</option>'+
			  '</select></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div><input type="number" id="orderDataP'+multipleOrderCount+'" class="field" name="orderCaptureP" value="" placeholder="Please enter price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div><input type="number" id="orderDataQ'+multipleOrderCount+'" class="orderCaptureQ" name="orderCaptureQ" value="" placeholder="Please enter quantity" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<h2><label id="calcBill'+multipleOrderCount+'" class="calcBill"></label></h2>').fadeIn('slow').appendTo('#dynamicInput');
	  $('<div id="OrderTdiv"><input type="number" id="orderDataT'+multipleOrderCount+'" class="field" name="orderCaptureT" value="" placeholder="Please enter final billing price" /></div>').fadeIn('slow').appendTo('#dynamicInput');
	  $('#CreateReport').trigger("create");*/
});
	 
	 
	}
	

});




function handleReportUpload() {

//navigator.geolocation.getCurrentPosition(onSuccess, onError,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	var position = 0;
	onSuccess(position);
console.log("local next line to geolocation call");

return false;
}


function onSuccess(position) {
	var uploadform = $("#CreateReportForm");  
	console.log("in upload form ");
	$("#createSubmitButton").attr("disabled","disabled");
	console.log("local in gps onSuccess function");
	
//	var usr_lat = position.coords.latitude;
	var usr_lat = 0;
	console.log ("Local OnSuccess, lat data: "+usr_lat);

//	var usr_long = position.coords.longitude;
	var usr_long = 0;
	console.log ("Local OnSuccess, long data: "+usr_long);

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
		rFthree = $("#NOorderData").val();
		rFfour = 0;
		rFfive = 0;
		rFsix = "no data";
	 }
	else {
		
		rFthree = $("#orderData"+i).val();
		console.log("rFthree"+rFthree);
		rFfour = $("#orderDataP"+i).val();
		console.log(rFfour);
		rFfive = $("#orderDataQ"+i).val();
		console.log(rFfive);
		rFsix = $("#orderDataT"+i).val();
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
	        		$('#divMsg').hide();
	        		$("#createSubmitButton .ui-btn-text").text("Saved");
	        		
	        	}
	        	else {
	        		
	                navigator.notification.alert("Data not stored. Please re-enter the data.", function() {});
	                $('#divMsg').hide();
	        		$("#createSubmitButton .ui-btn-text").text("Error. Please click again");
	            }
	        },
	        error: function(){
	            //console.log(data);
	            alert('Please check connectivity: Data posting error');
	            $('#divMsg').hide();
        		$("#createSubmitButton .ui-btn-text").text("Error. Please click again");
	        }
	    });
	} else {
	    navigator.notification.alert("Please enter a Report Name to proceed", function() {});
	    $("#createSubmitButton").removeAttr("disabled");
	    $('#divMsg').hide();
		$("#createSubmitButton .ui-btn-text").text("Save");
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