var usr_id;
var doc_id;
var doc_name;
$('#giveGift').live('pagebeforeshow', function(event) {
	console.log("launch: give gift list page");
	
	if(localStorage.getItem('usr_id') === null ) {
		
		navigator.notification.alert("Please login to view list of doctors", function() {});
		$.mobile.changePage("index.html");	
			
    }
	else {
		
	usr_id = localStorage.getItem('usr_id');
	doc_id = localStorage.getItem('doc_id');
	doc_name = localStorage.getItem('doc_name');
	var getMrPerkURL = serviceURL+'/getGivePerkList.php?usr_id='+usr_id;

	console.log(getMrPerkURL);
	
	$.getJSON(getMrPerkURL, function (data) {
		
		var perksAll = data.mrperks;
		
		$('#mrGiftlist').append('<li data-role="list-divider">Available Gifts</li>');
		$.each(perksAll, function(index, mrperk) {
			
			var perk_name = mrperk.perk_name;
			var perk_name_mod = perk_name.replace(/ /g, '%20');
			var perk_id = mrperk.perk_id;
			var perk_val = mrperk.perk_val;
			var perk_mr_qty = mrperk.mr_perk_qty;
			var total_perk_qty = mrperk.perk_qty;
			
			$('#mrGiftlist').append('<li><a onClick=giveGiftNow("' + perk_id + '","' + perk_mr_qty + '","' + total_perk_qty + '","' + perk_name_mod + '")>' +
					'<h4>Click to give: ' + perk_name + '</h4> (cost Rs.'+perk_val+')<span class="ui-li-count">'+perk_mr_qty+'</span></a></li>');
		});
		
		$('#mrGiftlist').listview('refresh');
	});

	}
	
	
});



function giveGiftNow(perk_id,perk_mr_qty,total_perk_qty,perk_name_mod) {
	
	if (perk_mr_qty == '0') {
	alert ("Sorry! Inventory not available. Try another gift");	
	}
	else {
	var new_perk_mr_qty = parseInt(perk_mr_qty) - 1;
	var new_total_perk_qty = parseInt(total_perk_qty) - 1;
	var perk_name = perk_name_mod.replace(/%20/g, ' ');
	
	//alert (usr_id+"@"+doc_id+"@"+perk_id+"@"+perk_mr_qty+"@"+new_perk_mr_qty+"@"+total_perk_qty+"@"+new_total_perk_qty);
	//alert("gift given");
	//$.mobile.changePage("docReport.html");
	
    $.ajax({
        type: 'POST',
        //data: postData,
        data: {usr_id:usr_id,doc_id:doc_id,perk_id:perk_id,new_perk_mr_qty:new_perk_mr_qty,new_total_perk_qty:new_total_perk_qty},
        //change the url for your project
        url: serviceURL+'/docGiftGiven.php',
        //url: 'http://172.20.10.2/comments/auth_error.php',
        success: function(data){
        	console.log(data);
        	if(data == true) {
        		alert (perk_name+" gifted to Dr. "+doc_name);
        	}
        	else {
        		
                navigator.notification.alert("Gift information not updated. Please try again.", function() {});
            }
        },
        error: function(){
            //console.log(data);
            alert('Please check connectivity: Data posting error.');
        }
    });
    
	}
}