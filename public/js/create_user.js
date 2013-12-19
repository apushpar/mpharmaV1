var unique_un=0;

function checkUserName(usercheck)
{
	
	var user_name = $("input#user_name").val();

	if (user_name == "") 
	{

      $("label#user_name_error").show();

      $("input#user_name").focus();

      return false;
	}
	else
	{
		$("label#user_name_error").hide();
	}

//	alert ("inside checkusername   "+usercheck);

	$('#usercheck').html();

	$.post("server/check.php", {user_name: usercheck} , function(data)
	{

//		alert (data);
		
		$('#usercheck').html(data);
		
		if(data=='<span id="name_availability" class="help-inline">Username already exists.</span>')
		{
			$("#btn_submit").attr('disabled','disabled');
//			alert("In if");
			$("#user_name").focus();
		}
		else
		{
			$('#btn_submit').removeAttr('disabled');
//			alert("In else");
			
				if(! /^[a-zA-Z()]+$/.test(user_name))
				{		
					$('.help-inline').hide();
				
					$("label#user_name_content_error").show();
					$("#name_availability").hide();		
					
					$("#user_name").focus();
					return false;
				}
				else
				{
					
					$("label#user_name_content_error").hide();
					$("#name_availability").show();	

				}
		}
		

		

	});
	

}

function validation()
{
	var el = $(this).val;
	/*if(this.value == '')
	{
		alert("blank");
	}
	else
	{
		alert("data is present  =  "+this.value);
	}*/
	//alert(el);
	
	
}

$(function() 
{
	all_events();
	//alert("in js");
	$('.help-inline').hide();
	

	$('.error').hide();

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
		// validate and process form

		// first hide any error messages

		$('.help-inline').hide();

	

		var usr_id = $("input#usr_id").val();

		if (usr_id == "")
		{
			//$('.help-inline').hide();
			$("label#usr_id_error").show();

			$("input#usr_id").focus();

			return false;

		}
		else
		{
			$("label#user_id_error").hide();
						
		}

		var user_name = $("input#user_name").val();

		if (user_name == "")
		{
		//	$('.help-inline').hide();
			$("label#user_name_error").show();

			$("input#user_name").focus();

			return false;

		}
		else
		{
			$("label#user_name_error").hide();
					
			//if(! /^[a-zA-Z,\s]+$/.test(user_name))
			if(! /^[a-zA-Z,\s]+$/.test(user_name))
			{
		//	$('.help-inline').hide();
				$("#name_availability").hide();	
				$("label#user_name_content_error").show();						
				$(".span3#user_name").focus();
				return false;
			}
			else
			{
				$("label#user_name_content_error").hide();
				$("#name_availability").show();	
			}
			
		}
	
		
		var password = $("input#password").val();

		if (password == "")
		{
		//	$('.help-inline').hide();
			$("label#password_error").show();

			$("input#password").focus();

			return false;

		}
		else
		{
			$("label#password_error").hide();
			
			var characterReg = /^\s*[a-zA-Z0-9,,\s]+\s*$/;
			if(! characterReg.test(password))
			{
	//			alert("in if");
			//	$('.help-inline').hide();
				$("label#password_content_error").show();
				$("#password").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#password_content_error").hide();	
				
			}
		}
		
		var emp_code = $("input#emp_code").val();

		if (emp_code == "")
		{
		//	$('.help-inline').hide();
			$("label#emp_code_error").show();

			$("input#emp_code").focus();

			return false;

		}
		else
		{
			$("label#emp_code_error").hide();
			
			var characterReg = /^\s*[a-zA-Z0-9,,\s]+\s*$/;
			if(! characterReg.test(emp_code))
			{
	//			alert("in if");
		//		$('.help-inline').hide();
				$("label#emp_code_content_error").show();
				$("#emp_code").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#emp_code_content_error").hide();	
				
			}
		}

		var f_name = $("#f_name").val();

		if (f_name == "") 
		{
		//	$('.help-inline').hide();
			$("label#f_name_error").show();

			$("#f_name").focus();

			return false;

		}
		else
		{
			$("label#f_name_error").hide();
			
			$("label#f_name_error").hide();
					
			if(! /^[a-zA-Z()]+$/.test(f_name))
			{
	//			$('.help-inline').hide();
				$("label#f_name_content_error").show();
				$(".span3#f_name").focus();
				return false;
			}
			else
			{
				$("label#f_name_content_error").hide();			
			}
		}

		var l_name = $("input#l_name").val();

		if (l_name == "") 
		{
	//		$('.help-inline').hide();
			$("label#l_name_error").show();

			$("#l_name").focus();

			return false;

		}
		else
		{
			$("label#l_name_error").hide();
			
			$("label#l_name_error").hide();
					
			if(! /^[a-zA-Z()]+$/.test(l_name))
			{
		//	$('.help-inline').hide();
				$("label#l_name_content_error").show();
				
				$(".span3#l_name").focus();
				return false;
			}
			else
			{
				$("label#l_name_content_error").hide();	
				
			}
		}

		var usr_org = $("input#usr_org").val();

		if (usr_org == "") 
		{
	//		$('.help-inline').hide();
			$("label#usr_org_error").show();

			$("input#usr_org").focus();

			return false;

		}
		else
		{
			$("label#usr_org_error").hide();
			
			$("label#usr_org_error").hide();
			
			var characterReg = /^\s*[-a-zA-Z0-9,,\s,.,_,:,(,)]+\s*$/;
			if(! characterReg.test(usr_org))
			{
	//		$('.help-inline').hide();
				$("label#usr_org_content_error").show();
				$(".span3#usr_org").focus();
				return false;
			}
			else
			{
				$("label#usr_org_content_error").hide();			
			}
		}

		var test = $("input#test").val();

		if (test == "") 
		{
	//		$('.help-inline').hide();
			$("label#test_error").show();

			$("input#test").focus();

			return false;

		}
		else
		{
			$("label#test_error").hide();
		}



		$(this).attr('disabled','disabled');
		$('#divMsg').show();
		$("#btn_submit").text("Adding....Please wait"); 


		var dataString = 'usr_id='+ usr_id + '&user_name='+ user_name + '&password=' + password + '&emp_code=' + emp_code + '&f_name=' + f_name + '&l_name=' + l_name + '&usr_org=' + usr_org;

		//		alert (dataString);

		$.ajax(
		{
			type: "POST",

			url: "server/create_user_store_db.php",

			data: dataString,

			success: function(result) 
			{			
				if(result==1)
				{
					
					
					$('#msg_create').html("<div id='message'></div>");

					//			alert("User Created Successfully!");

					$("#btn_submit").text("MR Added Successfully!"); 
					$("#btn_submit").attr('disabled','disabled');
					$('#divMsg').hide();
					$('#message').html("<a href=\"create_user.php\">Add Another MR ?</a>")
					

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
					$('#message').html("<a href=\"create_user.php\">Refresh</a>")
					
					

					/*$('#msg_create').html("<div id='message'></div>");

					//			alert("User Not Created !");

					$('#message').html("<h4>User Not Created. It already exists! <br> Do You Want To Create Another User? Please <a href=\"create_user.php\">Refresh</a> Page</h4>")

					.hide()

					.fadeIn(1500, function()

					{			

					// $('#message').append("<img id='checkmark' src='images/check.png' />");

					});*/

				}

			}

		});


		return false;

	});

});
