var serviceURL = ""; //webservice url. Add your webservice url here

var employees;

/*function init() {
	document.addEventListener("deviceready", deviceReady, true);
	//var db = window.openDatabase("Test_DB", "1.0", "Just a Test DB", 200000); //will create database Dummy_DB or open it
	delete init;
}*/


$('#loginPage').live('pagebeforeshow', function(event) {
	console.log("local loginPage live function");
	deviceReady();
});



$('#loginPage').live('pageinit', function(event) {
	$.mobile.loader.prototype.options.text = "loading";
	  $.mobile.loader.prototype.options.textVisible = false;
	  $.mobile.loader.prototype.options.theme = "a";
	  $.mobile.loader.prototype.options.html = "";
	console.log("local binding pageinit");
	if (navigator.userAgent.indexOf("Android") != -1)
    {
        $.mobile.defaultPageTransition = 'none';
        $.mobile.defaultDialogTransition = 'none';
    }
	deviceReady();
});


function deviceReady() {
console.log("local in device ready");

	//db.transaction(populateDB, errorCB, successCB);

	document.addEventListener("backbutton", function(e){
	    if($.mobile.activePage.is('#welcomePage')){
	        e.preventDefault();
	        navigator.app.exitApp();
	    }
	    else if($.mobile.activePage.is('#loginPage')){ 
	    	  e.preventDefault();
		        navigator.app.exitApp();
		    }
	    else {
	        navigator.app.backHistory()
	    }
	}, false);
	

	var day1 = new Date().getDate();
	//var day123 = new Date().getDay();
	//navigator.notification.alert(day123, function() {});
	//console.log ("local "+day123);
	var month1 = new Date().getMonth() + 1;
	var year1 = new Date().getFullYear();
	launchDate = day1+"/"+month1+"/"+year1 ;
	
if(launchDate == localStorage.getItem('loginDate')) {	
	if(localStorage.getItem('usr_id') === null ) {
	console.log("Launching handleLogin");
	
	//$("#loginForm").one("submit",handleLogin);
	/*$("#loginForm").submit(handleLogin);*/
	$('#submitButton').click(function() {
		$(this).attr('disabled','disabled');
        $('#divMsg').show();
		$("#submitButton .ui-btn-text").text("Please wait...");
		handleLogin();
		});
	}
	
	else {
		$.mobile.changePage("#welcomePage");
		console.log("local usr_id is not null and getting fullname and org from localStorage");
		console.log("local"+localStorage.getItem('fullName'));
		console.log("local"+localStorage.getItem('Organisation'));
		var fullName = localStorage.getItem('fullName');
		var orgName = localStorage.getItem('Organisation');
		$('#fullName').text(fullName);
		$('#Organisation').text(orgName);
		
		/*$('#checkbox-10').prop('checked', true);
		$('#checkbox-11').prop('checked', true);*/
		
		$('#logOut').click(function() {
			logoutAndClear();
		});
		
/*		$('#checkBoxTest').click(function() {
			
			

		//	$('input[type="checkbox"]').filter('.checkbox6').map(function(){
	var jsonString1="";
	//alert ("js"+jsonString1);
	var beforeJson =  [];
	beforeJson.length = 0;
	console.log("inside click");
	var pre_stat_test;
    var pro_stat_test;
    var prID;
    var tempClass = [];
    
    $('input[type="checkbox"]').map(function(){
    	var forClassArray = $(this).attr('class');
    	tempClass.push(forClassArray);
    	//alert (tempClass);
    });
    
    var uniqueClass = [];
    $.each(tempClass, function(i, el){
        if($.inArray(el, uniqueClass) === -1) uniqueClass.push(el);
    });
    
    $.each(uniqueClass, function(ind, className) {
    //alert(className);
    	$('input[type="checkbox"]').filter("."+className).map(function(){
			    var tempID = $(this).attr('id');
			    //alert (tempID);
			    var splitabc = tempID.split('_');
			    prID = splitabc[0];
			    var cbID = splitabc[1];
			    
			    console.log("inside checkbox loop");
			    if($(this).is(':checked')) //checked means pre_stat/pro_stat should be 1
			    	
			    	if (cbID == "0"){
			    		
			    		//beforeJson.push({ pr_id: prID, pre_stat: "1" });
			    		pre_stat_test = "1";
			    	}
			    	else {
			    		
			    		//beforeJson.push({ pr_id: prID, pro_stat: "1" });
			    		pro_stat_test = "1";
			    	}
			    
			    else //UNchecked means pre_stat/pro_stat should be 0
			    	//console.log("inside UNchecked loop");
			    	if (cbID == "0"){
			    		
			    		//beforeJson.push({ pr_id: prID, pre_stat: "0" });
			    		pre_stat_test = "0";
			    	}
			    	else {
			    		
			    		//beforeJson.push({ pr_id: prID, pro_stat: "0" });
			    		pro_stat_test = "0";
			    	}
			    //beforeJson.push({ ABCD: prID, pre_stat: pre_stat_test, pro_stat: pro_stat_test });
			    //alert (beforeJson);

				});
			beforeJson.push({ pr_id: prID, pre_stat: pre_stat_test, pro_stat: pro_stat_test });
			//alert ("bf"+beforeJson);
			jsonString1="";
			jsonString1 = JSON.stringify(beforeJson);
			//console.log(jsonString1);
			//alert (jsonString2);
		});
    //alert (jsonString1);
   var testdata = {students: JSON.stringify(beforeJson) };
   console.log(testdata);
   alert (testdata);
		});*/
		
	}
}
else {
	console.log("in date mismatch");
	logoutAndClear();
	//$("#loginForm").one("submit",handleLogin);
	//$("#loginForm").submit(handleLogin);
	$('#submitButton').click(function() {
		$(this).attr('disabled','disabled');
        $('#divMsg').show();
		$("#submitButton .ui-btn-text").text("Please wait...");
		handleLogin();
		});
}
	//$("#CreateReportForm").("submit",handleReportUpload);
	//CreateReportForm
	//$.mobile.changePage("#loginPage");		
}

function logoutAndClear() {
	//alert('Logout has been clicked');
    localStorage.clear();
    $.mobile.changePage("#loginPage");
    $('#username').val('');
    $('#password').val('');
}


function checkPreAuth() {
	/*console.log("checkPreAuth");
    var form = $("#loginForm");
    //if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
    if(localStorage('usr_id') != undefined){
        $("#username", form).val(localStorage('username');
        $("#password", form).val(localStorage('password');
        handleLogin();
    }*/
}


function handleLogin() {
	console.log("local in handlelogin");
    var form = $("#loginForm");  
    console.log("in handle login");
    $("#submitButton").attr("disabled","disabled");
    var u = $("#username").val();
    var p = $("#password").val();
    var postData = 'username='+u+'&password='+p;
    console.log(postData);
    	//postData+'&lid='+landmarkID,
    
    if(u != '' && p!= '') {
        $.ajax({
            type: 'POST',
            //data: postData,
            data: {username:u,password:p},
            //change the url for your project
            url: serviceURL+'/auth_error.php',
            //url: 'http://172.20.10.2/comments/auth_error.php',
            success: function(data){
            	console.log(data);
            	var split = data.split('@');
            	if(split[0] == "Pass") {
            		$('#divMsg').hide();
            		$("#submitButton .ui-btn-text").text("Login");
            		$.mobile.changePage("#welcomePage");
            		var day1 = new Date().getDate();
            		var month1 = new Date().getMonth() + 1;
            		var year1 = new Date().getFullYear();
            		loginDate = day1+"/"+month1+"/"+year1 ;
            		//alert(loginDate);
            		fetchProductInfo("loginPage");
            		fetchVendorInfo("loginPage");
            		
            		localStorage.setItem('loginDate',loginDate);
            		localStorage.setItem('usr_id',split[1]);
            		localStorage.setItem('username',u);
            		localStorage.setItem('password',p);
                    console.log("local: "+localStorage.getItem('usr_id'));
                    console.log("local: "+localStorage.getItem('username'));
                    console.log("local: "+localStorage.getItem('password'));
            		console.log(split[0]); //status
            		console.log(split[1]);  //usr_id
            		console.log(split[2]);  //organisation
            		console.log(split[3]);  //First Name
            		console.log(split[4]);  //Last Name
            		$('#fullName').text(split[3] + ' ' + split[4]);
            		$('#Organisation').text(split[2]);
            		localStorage.setItem('fullName',split[3] + ' ' + split[4]);
            		localStorage.setItem('Organisation',split[2]);
            		console.log("local inside handleLogin "+localStorage.getItem('fullName'));
            		console.log("local inside handleLogin "+localStorage.getItem('Organisation'));
            		$('#logOut').click(function() {
            			logoutAndClear();
            		});
            	}
            	else {
                    navigator.notification.alert("Your login failed. Please try again.", function() {});
                    $('#divMsg').hide();
            		$("#submitButton .ui-btn-text").text("Error. Try again");
            		$("#submitButton").removeAttr("disabled");
                }
            },
            error: function(){
                //console.log(data);
                alert('Login failed 2');
                $("#submitButton").removeAttr("disabled");
                $('#divMsg').hide();
                $("#submitButton .ui-btn-text").text("Error. Try again");
            }
        });
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
        $("#submitButton").removeAttr("disabled");
        $("#submitButton .ui-btn-text").text("Error. Try again");
    }
    return false;
}



function fetchProductInfo(referData) {
	
	var fetchPrdURL = serviceURL+"/getPrdList.php"
	
	$.getJSON(fetchPrdURL, function (data) {
		
		localStorage.setItem('prd_list',JSON.stringify(data));
		
		//alert(localStorage.getItem('prd_list'));
	});
	
	if (referData == "loginPage") {
		
	}
	else if (referData == "createDocReport") {
		addOrderFields();
	}
	else if (referData == "monthReport") {
		createMonthForm();
	} 
}


function fetchVendorInfo(referData) {
	
	var usr_id = localStorage.getItem('usr_id');
	
	var fetchVdURL = serviceURL+"/getVdList.php?usr_id="+usr_id;
	
	$.getJSON(fetchVdURL, function (data) {
		
		localStorage.setItem('vend_list',JSON.stringify(data));
		
		//alert(localStorage.getItem('vend_list'));
	});
	
	if (referData == "loginPage") {
		
	}
	else {
		addVendorData();
	}
}
/*function handleWelcomePage() {
	
	$.mobile.changePage("#welcomePage");
	$('#fullName').text = localStorage.getItem('fullName');
	$('#Organisation').text = localStorage.getItem('Organisation');
	
	$('#verify').click(function() {
	    alert('Logout 1 has been clicked');
	    localStorage.clear();
	});
}*/



/* checkbox attempts
var status = $('input[type="checkbox"]').filter('.custom').map(function(){
    var tempID = $(this).attr('id');
    var splitabc = tempID.split('_');
    var prID = splitabc[0];
    var cbID = splitabc[1];
    if($(this).is(':checked')) //checked means pre_stat/pro_stat should be 1
         //return { 'name':name, 'status' : 'Checked'}; 
    	//alert('name: '+name+', status: Checked');
    	if (cbID == "0"){
    		//beforeJson.push('"pr_id":"'+ prID +'","pre_stat":"1"'); //latest
    		//beforeJson.push('pre_stat:1');
    		beforeJson.push({ pr_id: prID, pre_stat: "1" });
    	}
    	else {
    		//beforeJson.push({'"pr_id":"'+prID+'"'});
    		//beforeJson.push({"pro_stat":"0"});
    		//beforeJson.push('"pr_id":"'+ prID +'","pro_stat":"1"'); //latest
    		//beforeJson.push('pro_stat:1');
    		beforeJson.push({ pr_id: prID, pro_stat: "1" });
    	}
    
    else //UNchecked means pre_stat/pro_stat should be 0
        //return { 'name':name, 'status' : 'UnChecked'};
    	if (cbID == "0"){
    		//beforeJson.push('"pr_id":"'+ prID +'","pre_stat":"0"'); //latest
    		//beforeJson.push('pre_stat:0');
    		beforeJson.push({ pr_id: prID, pre_stat: "0" });
    	}
    	else {
    		//beforeJson.push({'"pr_id":"'+prID+'"'});
    		//beforeJson.push({"pro_stat":"0"});
//    		beforeJson.push('pr_id:'+ prID);
    		//beforeJson.push('"pr_id":"'+ prID +'","pro_stat":"0"'); //latest
    		//beforeJson.push('pro_stat:0');
    		beforeJson.push({ pr_id: prID, pro_stat: "0" });
    	}
    */