var doc_name;
var doc_id;
var doc_spec;

$('#docReport').live('pagebeforeshow', function(event) {
	console.log("in create report")
	console.log(localStorage.getItem('usr_id'));

	if(localStorage.getItem('usr_id') === null ) {
		navigator.notification.alert("Please login to create report", function() {});
		$.mobile.changePage("index.html");	
    }
	else {
		
		basicDocInfo();
		checkBoxGrid();
		
		$('#docSubmitButton').click(function() {
			$(this).attr('disabled','disabled');
	        $('#divMsg').show();
			$("#docSubmitButton .ui-btn-text").text("Saving....Please wait");
			checkBoxSave();
			});		
		
		$('#giftButton').click(function() {
			
			//var forGiftTab = doc_id+"@"+doc_name;
			//localStorage.setItem('forGiftTab', forGiftTab);
			$.mobile.changePage("giftTab.html");
			});
		
	}
	

});

function basicDocInfo() {
	$('#divMsg').show();
	$("#docSubmitButton .ui-btn-text").text("Loading....Please wait");
	//getting variables from local storage
	doc_name = localStorage.getItem( "doc_name");
	//localStorage.removeItem( "doc_name");
	
	doc_id = localStorage.getItem( "doc_id");
	//localStorage.removeItem( "doc_id");
	
	doc_spec = localStorage.getItem( "doc_spec");
	//localStorage.removeItem( "doc_spec");
	//end of getting variables from local storage
	
	//ajax call to get perk values
	$.getJSON(serviceURL+'/getPerkDetail.php?doc_id='+doc_id, function (data) {
		 
	//	localStorage.setItem('perk_info', data);
		//alert (localStorage.getItem('perk_info'));
		var perks = data.perks;
		var perkCount = 0;
		var finalPerkCount = 0;
		
		$.each(perks, function(index, perk) {	
			perkCount = perk.perk_val;
			finalPerkCount = parseFloat(finalPerkCount) + parseFloat(perkCount);
		});
		var $element = $('<div data-role="collapsible" data-collapsed="false" data-theme="b" data-content-theme="b"><h2>Doctor Name: Dr.'+doc_name+'</h2>' +
				'<span>Sponsorship Amount: Rs.'+finalPerkCount+'</span>'+
				'</div>').appendTo($('#test123'));

	    $element.collapsible();
	    $('#divMsg').hide();
	    $("#docSubmitButton .ui-btn-text").text("Save");
	});
	//end of ajax call to get perk values
	
     
	
}

function checkBoxGrid() {
	//$('#divMsg').show();
	//$("#docSubmitButton .ui-btn-text").text("Loading....Please wait");
	var dataURL = serviceURL+'/getPrdDocList.php?doc_id='+doc_id;
	console.log("dataURL"+dataURL);
	
	$.getJSON(dataURL, function (data) {
		
		var prdAll = data.items;
		
		$.each(prdAll, function(index, prd) {
			
			var prd_name = prd.prd_name;
			var prd_id = prd.prd_id;
			var pre_stat = prd.pre_stat;
			var pro_stat = prd.pro_stat;

			
			var chkbxData = '<fieldset data-role="controlgroup" data-type="horizontal">' +
								'<legend>'+prd_name+'</legend>' +
									'<input type="checkbox" name="'+prd_id+'_0" id="'+prd_id+'_0" class="'+prd_id+'" />' +
									'<label for="'+prd_id+'_0"><img src="image/scribe.png" height="17" width="17"/></label>' +
									'<input type="checkbox" name="'+prd_id+'_1" id="'+prd_id+'_1" class="'+prd_id+'" />' +
									'<label for="'+prd_id+'_1"><img src="image/pr_horn.png" /></label>' +    
							'</fieldset></div>'

			$('#group_checkboxes').append(chkbxData)
			$('#group_checkboxes').trigger('create');
			
			var preCheckbox = "#"+prd_id+'_0';
			var proCheckbox = "#"+prd_id+'_1';
			
			if (pre_stat=="0") {
				console.log("pre0");
				$(preCheckbox).prop('checked', false);				
			}
			else {
				console.log("pre1");
				$(preCheckbox).prop('checked', true);
			}

			
			if (pro_stat=="0") {
				console.log("pro0");
				$(proCheckbox).prop('checked', false);				
			}
			else {
				console.log("pro1");
				$(proCheckbox).prop('checked', true);
			}
			
			
		});
		
		$("input[type='checkbox']").checkboxradio("refresh");
		
	});
	//$('#divMsg').hide();
	//$("#docSubmitButton .ui-btn-text").text("Save");
	
}



function checkBoxSave() { 
//navigator.geolocation.getCurrentPosition(onCBSuccess, onCBError,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
//navigator.geolocation.getCurrentPosition(onCBSuccess, onCBError,{ maximumAge: 3000, timeout: 10000});
	var position=0;
	onCBSuccess(position);
return false;
}


function onCBSuccess(position) {
	//set variables
	var jsonString1="";
	var beforeJson =  [];
	beforeJson.length = 0;
	var pre_stat_test;
    var pro_stat_test;
    var prID;
    var tempClass = [];
    //variable setting completed
    
    // get the class name for all the checkboxes	    
    $('input[type="checkbox"]').map(function(){
    	var forClassArray = $(this).attr('class');
    	tempClass.push(forClassArray);
    });
    // end class name search
    
    // get unique class names
    var uniqueClass = [];
    $.each(tempClass, function(i, el){
        if($.inArray(el, uniqueClass) === -1) uniqueClass.push(el);
    });
    // end of get unique class names
    
    // get the complete json string
    $.each(uniqueClass, function(ind, className) {

    	$('input[type="checkbox"]').filter("."+className).map(function(){
			    var tempID = $(this).attr('id');
			    //alert (tempID);
			    var splitabc = tempID.split('_');
			    prID = splitabc[0];
			    var cbID = splitabc[1];
			    
			    console.log("inside checkbox loop");
			    if($(this).is(':checked')) //checked means pre_stat/pro_stat should be 1
			    	
			    	if (cbID == "0"){
			    		pre_stat_test = "1";
			    	}
			    	else {
			    		pro_stat_test = "1";
			    	}
			    
			    else 
			    	if (cbID == "0"){
			    		pre_stat_test = "0";
			    	}
			    	else {
			    		pro_stat_test = "0";
			    	}
				});
    	
    		//var usr_lat = position.coords.latitude;
    	var usr_lat = 0;

    		//var usr_long = position.coords.longitude;
    	var usr_long = 0;
    		
    		var rName = new Date().getTime();
    		var usr_id = localStorage.getItem('usr_id');
    		var usr_name = localStorage.getItem('fullName');
    		//alert (usr_name);
			beforeJson.push({ pr_id: prID, doc_id: doc_id, doc_name: doc_name,pre_stat: pre_stat_test, pro_stat: pro_stat_test, geo_lat: usr_lat, geo_long: usr_long, rpt_name: rName, usr_id: usr_id, usr_name: usr_name });
			jsonString1="";
			jsonString1 = JSON.stringify(beforeJson);
			console.log(jsonString1);
			
		});
    // got complete json string. value is held in "jsonString1"
    
    //start ajax call to store data using webservice
    var postArray = {updatePrd:jsonString1};
    
    $.ajax({
        type: 'POST',
        url: serviceURL+'/updatePrdDocList.php',
        data: postArray,
        success: function(data){
        	//console.log(data);
        	if(data == true) {
        		//alert (data);
        		$('#docSubmitButton').removeAttr('disabled');
                $('#divMsg').hide();
        		//$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
        		$("#docSubmitButton .ui-btn-text").text("Saved");    		
        	}
        	else {
        		//alert(data);
        		//alert(data);
        		$('#docSubmitButton').removeAttr('disabled');
                $('#divMsg').hide();
        		//$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
        		$("#docSubmitButton .ui-btn-text").text("Try Again. Error while saving.");
        	}
        },
        error: function(){
            //console.log(data);
            alert('Please check connectivity: Data posting error');
            $('#docSubmitButton').removeAttr('disabled');
            $('#divMsg').hide();
            //$("#textMsg").replaceWith('<div id="textMsg">Save</div>');
            $("#docSubmitButton .ui-btn-text").text("Try Again. Error while saving.");
        }
    });
    // end of ajax call
    
}

function onCBError(error) {
	console.log("local in error for gps cordinates");
	alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
	$("#docSubmitButton .ui-btn-text").text("Try Again. Error while saving.");
	
}




/*
function onCBSuccess(position) {
var uploadform = $("#CreateReportForm");  
console.log("in upload form ");
$("#createSubmitButton",uploadform).attr("disabled","disabled");
console.log("local in gps onSuccess function");

var usr_lat = position.coords.latitude;
console.log ("Local OnSuccess, lat data: "+usr_lat);

var usr_long = position.coords.longitude;
console.log ("Local OnSuccess, long data: "+usr_long);

console.log("order count"+multipleOrderCount);
for (var i=1;i<multipleOrderCount+1;i++) {
	
	console.log ("in for loop");
var milliseconds = new Date().getTime();

var rName = milliseconds+"_"+i;
var rFone = $("#reportfieldOne").val();
var rFtwo = $('input:radio[name=orderStatus]:checked').val();

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
*/