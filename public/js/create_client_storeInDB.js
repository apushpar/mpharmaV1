function storeInDB()
{
	
			$("#btn_submit").attr('disabled','disabled');
			$('#divMsg').show();
			$("#btn_submit").text("Adding....Please wait"); 
	
	
	dataString = 'doc_id='+ doc_id + '&doc_name='+ doc_name + '&doc_speciality=' + doc_speciality + '&doc_category_one=' + doc_category_one + '&doc_category_two=' + doc_category_two + '&doc_address=' + doc_address + /*'&doc_geo_lat=' + doc_geo_lat + '&doc_geo_long=' + doc_geo_long +*/'&usr_id=' + select_user_id;

//				alert (dataString);

		$.ajax(
		{
			type: "POST",

			url: "server/create_client_store_db_mod.php",

			data: dataString,

			success: function(result) 
			{		
			
//				alert(result);
				if(result==1)
				{
					
					$('#msg_create').html("<div id='message'></div>");

					$("#btn_submit").text("Doctor Added Successfully!"); 
					$("#btn_submit").attr('disabled','disabled');
					$('#divMsg').hide();
					$('#message').html("<a href=\"create_client.php\">Add Another Doctor ?</a>")

	
				}

				else

				{
					$('#btn_submit').removeAttr('disabled');
					
					$("#btn_submit").text("Try Again. Error while Adding.");
					$('#divMsg').hide();
					$('#msg_create').html("<div id='message'></div>");
					$('#message').html("<a href=\"create_client.php\">Refresh</a>")
					
					

				}

			}

		});
}
