var loginFlag = 0;
var data_to_send = "";

$(document).ready(function(){

	//alert("validation");
	$('.help-inline').hide();
	
	
	
	$("#btn_login").click(function() 
	{
		//alert("clicked");

		// validate and process form

		// first hide any error messages

		$('.help-inline').hide();

	

		var un = $("input#input_user_name").val();

		if (un == "")
		{
			$("input#input_user_name").parents('.control-group').addClass('error');
			
			$("#un_error").show();
			
			$("input#input_user_name").focus();

			loginFlag = 0;
			
			return false;
		}
		if(un!="")
		{
			
			$("input#input_user_name").parents('.control-group').removeClass('error');
			$('.help-inline').hide();
			loginFlag = 1;
			
			
		}
		
		var pw = $("input#input_password").val();

		
		if (pw == "")
		{
			$("input#input_password").parents('.control-group').addClass('error');
			
			$("#pw_error").show();
			
			$("input#input_password").focus();

			loginFlag = 0;

			return false;
		}
		if(pw!="")
		{
			
			$("input#input_password").parents('.control-group').removeClass('error');
			$('.help-inline').hide();
			
			loginFlag = 1;
		}

	
		
		data_to_send = "un="+un+"&pw="+pw;
		
		//data_to_send = "input_user_name="+un+"&input_password="+pw;
		
		$.ajax(

			{

				type: "POST",

				url: "server/authenticate.php",

				async:    false,

				data: data_to_send,

				success:function parseXml(result)
				{
					//alert(result);
					if(result==1)
					{
					//	alert("login successful");
						window.location.replace("map_pharma.php");
					}
					else if(result==2)
					{
						window.location.replace("get_started_wizard.php");
					}
					else
					{
						
				//		alert("login failed");
				//		alert(result);
				//		window.location.replace("index.php");
						
						$('#msg_create').html("<div id='message'></div>");
				
						$('#message').html("<label class='help-inline'>Incorrect Username or Password.</label>")
						
					}
				},
				error: function()
				{
					alert("ERROR");
				}
			});
		
		
		return false;
	});
	
});