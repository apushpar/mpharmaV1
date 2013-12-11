var doc_name;
var doc_id;
var doc_spec;

$('#giftTab').live('pagebeforeshow', function(event) {
	console.log("in gift tab");
	//----------------redirect back button to weeklist-------------
		/*document.addEventListener("backbutton", function(e){
	    if($.mobile.activePage.is('#readReport')){
	        e.preventDefault();
	        //navigator.app.exitApp();
	        //$.mobile.changePage("weekList.html");
	    }
	    else {
	        navigator.app.backHistory()
	    }
	}, false);*/
	//----------------redirect back button to weeklist-------------
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to access reports", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
		
		$('#giveGiftButton').click(function() {
			$.mobile.changePage("giveGift.html");
			});
		
		
	var usr_id = localStorage.getItem('usr_id');
	//var forGiftTab = localStorage.getItem('forGiftTab');
	var data = localStorage.getItem('perk_info');
	//alert (data);
	//localStorage.removeItem( "forGiftTab");
	//localStorage.removeItem( "perk_info");

	
		
		//var forGiftTab_split = forGiftTab.split('@');
		//var doc_id = forGiftTab_split[0];
		//var doc_name = forGiftTab_split[1];
		
		var doc_id = localStorage.getItem('doc_id');
		var doc_name = localStorage.getItem('doc_name');
		
		/*alert (forGiftTab);
		alert (doc_id);
		alert (doc_name);
		alert (perk_data);*/
		$.getJSON(serviceURL+'/getPerkDetail.php?doc_id='+doc_id, function (data) {
			var perks = data.perks;
			var perkCount = 0;
			var finalPerkCount = 0;
		$('#giftList').append('<li data-role="list-divider">Gifted to Dr. '+doc_name+' </li>');
		$.each(perks, function(index, perk) {
			var d1 = Date.parse(perk.perk_ts);
			//alert(d1.toString('dddd, MMMM d, yyyy, HH:mm '));
			perkCount = perk.perk_val;
			finalPerkCount = parseFloat(finalPerkCount) + parseFloat(perkCount);
			$('#giftList').append('<li data-icon="false"><a onClick=""' +
					'<h2>' + perk.perk_name + '</h2><h4>Rs. ' + perk.perk_val + '</h4>'+
					'<p class="ui-li-aside"><strong>'+d1.toString("dddd, MMMM d, yyyy ")+'</strong></p></a></li>');
		});
		$('#giftList').append('<li data-theme="c" data-icon="false"><a onClick=""' +
				'<h4>Total sponsored: Rs.'+finalPerkCount+'</h4></a></li>');
		$('#giftList').listview('refresh');
		});
	}
	
	
});
