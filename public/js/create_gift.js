
function ValidateAlpha(str)
{
	/*var keyCode = window.event.keyCode;
	if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
	{
//		window.event.returnValue = false;
//		alert("Enter only letters");
		$("this").focus();
	}*/
	alert(str);
	return /^[a-zA-Z()]+$/.test(str);
}



$(function() 
{
	
	all_events();
	
	//alert("in js");
	$('.help-inline').hide();
	



	$('.span3').css({backgroundColor:"#FFFFFF"});

	$('.span3').focus(function()
	{
		$(this).css({backgroundColor:"#FFDDAA"});

	});

	$('.span3').blur(function()
	{
		$(this).css({backgroundColor:"#FFFFFF"});		
	});

	

	



	$("#btn_submit").click(function() 
	{
		all_events();
		var perk_id = $(".span3#perk_id").val();
		//alert(perk_id);
		var perk_name = $(".span3#perk_name").val();
		//alert(perk_name);
		var perk_status = $(".span3#perk_status").val();
		//alert(perk_status);
		var perk_qty = $(".span3#perk_qty").val();
		//alert(perk_qty);
		var perk_value = $(".span3#perk_value").val();
		//alert(perk_value);
		var perk_month = $(".span3#perk_month").val();
		//alert(perk_month);
		
				

		$('.help-inline').hide();

		if (perk_id == "")
		{
			
			$('.help-inline').hide();
			$("label#perk_id_error").show();
		//	alert(perk_id);
			$(".span3#perk_id").focus();
			return false;
		}
		else
		{
			//alert(perk_id);
			$("label#perk_id_error").hide();			
		}
		
		if (perk_name=="")
		{
//			alert("In if perk_name = "+perk_name);
			$('.help-inline').hide();
			$("label#perk_name_error").show();
			$(".span3#perk_name").focus();
			return false;
		}
		else
		{
			$("label#perk_name_error").hide();
			if(! /^[a-zA-Z,\s]+$/.test(perk_name))
			{
			$('.help-inline').hide();
				$("label#perk_name_content_error").show();
				$(".span3#perk_name").focus();
				return false;
			}
			else
			{
				$("label#perk_name_content_error").hide();			
			}
//			alert("In else perk_name = "+perk_name);
				
		}
	
		

		
		if (perk_qty=="")
		{
			$('.help-inline').hide();
			$("label#perk_qty_error").show();
			$(".span3#perk_qty").focus();
			return false;
		}
		else
		{
			$("label#perk_qty_error").hide();
			if(isNaN(perk_qty))
			{
				$('.help-inline').hide();
				$("label#perk_qty_content_error").show();
				$(".span3#perk_qty").focus();
				return false;
			}
			else
			{
				$("label#perk_qty_content_error").hide();			
			}
		}
		
	//	alert("perk_qty = "+isNaN(perk_qty));
		
	
		
		
		if (perk_value=="")
		{
			$('.help-inline').hide();
			$("label#perk_value_error").show();
			$(".span3#perk_value").focus();
			return false;
		}
		else
		{
			$("label#perk_value_error").hide();	
			if (isNaN(perk_value))
			{
				$('.help-inline').hide();
				$("label#perk_value_content_error").show();
				$(".span3#perk_value").focus();
				return false;
			}
			else
			{
				$("label#perk_value_content_error").hide();			
			}
		}
		
		if (perk_status=="")
		{
			$('.help-inline').hide();
			$("label#perk_status_error").show();
			$(".span3#perk_status").focus();
			return false;
		}
		else
		{
			$("label#perk_status_error").hide();			
		}
		
		if (perk_month=="")
		{
			$('.help-inline').hide();
			$("label#perk_month_error").show();
			$(".span3#perk_month").focus();
			return false;
		}
		else
		{
			$("label#perk_month_error").hide();	
			if (isNaN(perk_month))
			{
				$('.help-inline').hide();
				$("label#perk_month_content_error").show();
				$(".span3#perk_month").focus();
				return false;
			}
			else
			{
				$("label#perk_month_content_error").hide();			
			}
		}
		
		
		
		
		
		
		$(this).attr('disabled','disabled');
		$('#divMsg').show();
		$("#btn_submit").text("Adding....Please wait"); 
		
//		alert();
		

		var dataString = 'perk_id='+ perk_id + '&perk_name='+ perk_name + '&perk_status=' + perk_status + '&perk_qty=' + perk_qty + '&perk_value=' + perk_value + '&perk_month=' + perk_month;

				//alert (dataString);

		$.ajax(
		{
			type: "POST",

			url: "server/create_gift_store_db.php",

			data: dataString,

			success: function(result) 
			{			
			
//				alert(result);
				if(result==1)
				{

					$('#msg_create').html("<div id='message'></div>");

					//			alert("User Created Successfully!");

					$("#btn_submit").text("Gift Added Successfully!"); 
					$(this).attr('disabled','disabled');
					$('#divMsg').hide();
					$('#message').html("<a href=\"create_gift.php\">Add Another Gift ?</a>")

					/*.hide()

					.fadeIn(1500, function()
					{			

					// $('#message').append("<img id='checkmark' src='images/check.png' />");

					});
*/
				}

				else

				{
					$('#btn_submit').removeAttr('disabled');
					
					$("#btn_submit").text("Try Again. Error while Adding.");
					$('#divMsg').hide();
					$('#msg_create').html("<div id='message'></div>");
					$('#message').html("<a href=\"create_gift.php\">Refresh</a>")
					/*$('#msg_create').html("<div id='message'></div>");

					//			alert("User Not Created !");

					$('#message').html("<h5>Gift Not Added. It already exists! <br> Do You Want To Add Another Gift? Please <a href=\"create_gift.php\">Refresh</a> Page</h5>")

					.hide()

					.fadeIn(1500, function()

					{			

					// $('#message').append("<img id='checkmark' src='images/check.png' />");

					});*/

				}

			}

		});

		/*$('#btn_submit').removeAttr('disabled');
		
		$("#btn_submit").text("Try Again. Error while saving.");*/
		return false;

	});
});