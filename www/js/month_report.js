var multipleOrderCount=1;
var orderPrice;
var orderQty;
var displayValue;
var orderPriceChange;
var prd_list_mod_month;

$('#MonthReport').live('pagebeforeshow', function(event) {
	
	
	
	console.log("in create report")
	console.log(localStorage.getItem('usr_id'));

	if(localStorage.getItem('usr_id') === null ) {
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
    }
	else {
	
	createMonthForm();
		
	$('#monthSubmitButton').click(function() {
		$(this).attr('disabled','disabled');
        $('#divMsg').show();
		$("#monthSubmitButton .ui-btn-text").text("Saving....Please wait");
		handleMonthUpload();
		});	
	//$("#MonthReportForm").submit(handleMonthUpload);

	
	 
	}
	

});

function createMonthForm() {
	
	var prd_list = localStorage.getItem('prd_list');
	
	if (prd_list != null) {
		prd_list_mod_month = JSON.parse(prd_list)
		$('.dynamicField').empty();
		
		
		/*$('.orderData').trigger("create");
		console.log('after create');
		*/
		$.each(prd_list_mod_month.prds, function(i, item) {
			$('<div><label for="prd_name">'+item.prd_name+'</label></div>').fadeIn('slow').appendTo('#dynamicInput');
			$('<input type="number" id="qty'+item.prd_id+'" class="month_qty" name="month_qty" value="" placeholder="Please enter quantity"/>').fadeIn('slow').appendTo('#dynamicInput');
			$('<input type="number" id="prc'+item.prd_id+'" class="month_prc" name="month_prc" value="" placeholder="Please enter price"/>').fadeIn('slow').appendTo('#dynamicInput');
			//$('<option value='+item.prd_name+'>'+item.prd_name+'</option>').fadeIn('slow').appendTo('#orderData'+multipleOrderCount);
	      });
		$('#MonthReport').trigger("create");	
	}
	else {
		console.log('wrong loop');
		fetchProductInfo("monthReport");
	}
	
}


function handleMonthUpload() {

//navigator.geolocation.getCurrentPosition(onMonSuccess, onMonError,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	var position=0;
	onMonSuccess(position);
console.log("local next line to geolocation call");

return false;
}


function onMonSuccess(position) {
	
	//var defines
	var mBeforeJson =  [];
	mBeforeJson.length = 0;
	var monthJson;
	var rFfour;
	var rFfive;
	//var defines
	
	var uploadform = $("#MonthReportForm");  
	console.log("in upload month form ");
	$("#monthSubmitButton").attr("disabled","disabled");
	console.log("local in gps onSuccess function");
	
	//var usr_lat = position.coords.latitude;
	var usr_lat = 0;
	console.log ("Local OnSuccess, lat data: "+usr_lat);

	//var usr_long = position.coords.longitude;
	var usr_long = 0;
	console.log ("Local OnSuccess, long data: "+usr_long);

	var usr_id = localStorage.getItem('usr_id');
	var milliseconds = new Date().getTime();
	$.each(prd_list_mod_month.prds, function(i, item) {
		
		
		var rName = milliseconds+"_"+i;	
		var rFone = "0";
		//var rFtwo = $("#monthSelect").val();
		var rFtwo = "0";
		var rFthree = item.prd_name; 
		rFfour = $('#prc'+item.prd_id).val();
		rFfive = $('#qty'+item.prd_id).val();
		var rFsix = "0";
		mBeforeJson.push({title:rName,fieldOne:rFone,fieldTwo:rFtwo,usr_id:usr_id,usr_lat:usr_lat,usr_long:usr_long,fieldThree:rFthree,fieldFour:rFfour,fieldFive:rFfive,fieldSix:rFsix});
      });
	monthJson = JSON.stringify(mBeforeJson);
	//alert (monthJson);
	var postArray = {monthReport:monthJson};

	
	if(rFfour != '' && rFfive != '') {
		
		$.ajax({
	        type: 'POST',
	        url: serviceURL+'/updateMonthReport.php',
	        data: postArray,
	        success: function(data){
	        	//console.log(data);
	        	if(data == true) {
	        		//alert (data);
	        		$('#monthSubmitButton').removeAttr('disabled');
	                $('#divMsg').hide();
	        		//$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
	        		$("#monthSubmitButton .ui-btn-text").text("Saved");
	        		$('.month_qty').val('');
	        		$('.month_prc').val('');
	        		alert ("Monthly report submitted");
	        	}
	        	else {
	        		//alert(data);
	        		//alert(data);
	        		$('#monthSubmitButton').removeAttr('disabled');
	                $('#divMsg').hide();
	        		//$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
	        		$("#monthSubmitButton .ui-btn-text").text("Try Again. Error while saving.");
	        	}
	        },
	        error: function(){
	            //console.log(data);
	            alert('Please check connectivity: Data posting error');
	            $('#monthSubmitButton').removeAttr('disabled');
	            $('#divMsg').hide();
	            //$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
	            $("#monthSubmitButton .ui-btn-text").text("Try Again. Error while saving.");
	        }
	    });
	} else {
	    navigator.notification.alert("Please enter all the details to proceed", function() {});
	    $("#monthSubmitButton").removeAttr("disabled");
	}
	
}

function onMonError(error) {
	console.log("local in error for gps cordinates");
	alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
	//localStorage.setItem('gpsStatus',"gpsError");
}