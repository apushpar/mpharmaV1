function storeInDB()
{
	
			$("#btn_submit").attr('disabled','disabled');
			$('#divMsg').show();
			$("#btn_submit").text("Adding....Please wait"); 
	
	
	dataString = 'vd_id='+ vd_id + '&vd_name='+ vd_name + '&select_type=' + select_type + '&vd_category_one=' + vd_category_one + '&vd_category_two=' + vd_category_two + '&vd_address=' + vd_address ; /*'&doc_geo_lat=' + doc_geo_lat + '&doc_geo_long=' + doc_geo_long +;*/

			//	alert (dataString);

		$.ajax(
		{
			type: "POST",

			url: "server/create_vendor_store_db.php",

			data: dataString,

			success: function(result) 
			{		
			
		//		alert(result);
				if(result==1)
				{
					
					$('#msg_create').html("<div id='message'></div>");

					$("#btn_submit").text("Vendor Added Successfully!"); 
					$("#btn_submit").attr('disabled','disabled');
					$('#divMsg').hide();
					$('#message').html("<a href=\"create_vendor.php\">Add Another Vendor ?</a>")

					/*$('#msg_create').html("<div id='message'></div>");

					//			alert("User Created Successfully!");

					$('#message').html("<h4>User Created Successfully!</h4>")

					.hide()

					.fadeIn(1500, function()
					{			

					// $('#message').append("<img id='checkmark' src='images/check.png' />");

					});*/

				}

				else

				{
					$('#btn_submit').removeAttr('disabled');
					$("#btn_submit").text("Try Again. Error while Adding.");
					$('#divMsg').hide();
					$('#msg_create').html("<div id='message'></div>");
					$('#message').html("<a href=\"create_vendor.php\">Refresh</a>")
					
					

					/*$('#msg_create').html("<div id='message'></div>");

					//			alert("User Not Created !");

					$('#message').html("<h4>User Not Created. It already exists! <br> Do You Want To Create Another User? Please <a href=\"create_client.php\">Refresh</a> Page</h4>")

					.hide()

					.fadeIn(1500, function()

					{			

					// $('#message').append("<img id='checkmark' src='images/check.png' />");

					});*/

				}

			}

		});
}
