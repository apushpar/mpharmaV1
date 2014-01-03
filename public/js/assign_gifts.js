var perk_id;
var usr_id = [];
var f_name = [];
var l_name = [];
var usr_name = [];
var count_user=0;
var dummy_data="";
var data_array=[];
var sel_user = "";
var flag=0;
var assign_to;
var assign_qty;
var data_to_save;


//			$("#btn_submit").live("click", function() 									  

$(function()
{		   
	all_events();
		$("#btn_submit").click(function()	
		{
				all_events();
				
				if ($('#btn_submit').hasClass('disabled')) return;
			
			//		alert ("else clause");
					assign_to = $('#select_MR').val();
					perk_id = $('#type').val();
					assign_qty = $('#assign_qty').val();
					
					if(perk_id=="")
					{
			
						//$("label#select_gift_error").show();
						flag1=0;
				//		$("#select_gift").focus();
					
			//			alert("in if perk_id = "+perk_id);
			
						return false;
					}
					else
					{
//						alert(perk_id);
				//		$("label#select_gift_error").hide();
						
			//			alert("in else perk_id = "+perk_id);
						
						flag1=1;	
					}
				
					if (assign_to == "")
					{
						$('.help-inline').hide();
						$("label#select_MR_error").show();
						flag=0;
						$("#select_MR").focus();
			
						return false;
			
					}
					else
					{
						$("label#select_MR_error").hide();
						flag=1;		
					}
					
					if (assign_qty=="")
					{
						$('.help-inline').hide();
						$("label#assign_qty_error").show();
						flag=0;
			
						$("#assign_qty").focus();
						return false;
					}
					else
					{
						$("label#assign_qty_error").hide();
						flag=1;
						
						if(isNaN(assign_qty))
						{
							$('.help-inline').hide();
							$("label#assign_qty_content_error").show();
							
							flag=0;
							$("#assign_qty").focus();
							return false;
						}
						else
						{
							$("label#assign_qty_content_error").hide();	
							
							flag=1;
							
							if(parseInt(assign_qty)>parseInt(data_array[3]))
							{
								$('.help-inline').hide();
								$("label#assign_qty_avail_qty_error").show();
								
								flag=0;
								$("#assign_qty").focus();
								return false;					
							}
							else
							{
								$("label#assign_qty_avail_qty_error").hide();
								
								flag=1;
							}
						}
					}
					
					if(flag==1)
					{
					//	$(this).attr('disabled','disabled');
					//	$("#btn_submit").attr('disabled','disabled');
					//	$(this).attr('disabled','disabled');
						$("#btn_submit").addClass('disabled');
						$("#btn_submit").attr('disabled', 'disabled')
						$('#divMsg').show();
						
						$("#btn_submit").text("Assigning....Please wait"); 
						save();
						
						assign_to = "";
						$('#select_MR').val("");
						perk_id = "";
						$('#type').val("");
						assign_qty = "";
						$('#assign_qty').val("");
					
					}
					else
					{
						alert("Please check all parameters");
					}
			
					return false;
						
		});
	
});

function save()
{
		data_to_save = "assign_to="+assign_to+"&perk_id="+perk_id+"&assign_qty="+assign_qty;
	
		//all_events();
		if(flag==1)
		{
			$.ajax(
			{
					type: "POST",
					url: "server/assign_gifts_save.php",
					data: data_to_save,
					success: function(result)
					{
						
							if(result==1)
							{
								//select_MR
								$("#assign_qty").attr('readonly','readonly');						
								
								$("#btn_submit").text("Gift Assigned Successfully!"); 
								$("#btn_submit").attr('disabled','disabled');
								$('#divMsg').hide();
								$('#msg_create').html("<a href=\"assignGifts.php\">Assign Another Gift ?</a>")
							}
							else
							{
								
								$("#btn_submit").text("Try Again. Error while Assigning.");
								$('#divMsg').hide();
								$('#msg_create').html("<div id='message'></div>");
								$('#msg_create').html("<a href=\"assignGifts.php\">Refresh</a>")
							}
						
					},
					error: function()
					{
						alert("Error, Please try again.");
					}
			});
		}
		else
		{
			alert("Error, Please try again");	
		}
}


function get_user_details()
{
	$.ajax(
	{
			type: "POST",
			url: "server/assign_gifts_get_usr_details.php",
			data: dummy_data,
			success: function(xml)
			{
					count_user = 0;				
						$(xml).find("user").each(function()
						{							
								usr_id[count_user] = $(this).find("usr_id").text();
								f_name[count_user] = $(this).find("f_name").text();
								l_name[count_user] = $(this).find("l_name").text();
								usr_name[count_user] = f_name[count_user]+" "+l_name[count_user];
								
								count_user++;								
						});						
				
			},
			error: function()
			{
				alert("Error, Please try again");	
			}
	});
}

$(function()
{
	$('.help-inline').hide();
	all_events();
	get_user_details();
	

		$('#type').change(function()
		{
			all_events();
			
			perk_id = $('#type').val();
			
		
			if(perk_id!="all_users" && perk_id!=null)
			{
				perk_id= 'perk_id='+perk_id;
				$.ajax(
						{
								type: "POST",
								url: "server/assign_gifts_get_perk_Details.php",
								data: perk_id,
								success: function(data)
								{

									data_array = data.split(',');			
									for(var i = 0; i < data_array.length; i++)
									{
						
									 $('#value'+i).text(data_array[i]);
									   document.getElementById('value'+i).value=data_array[i];
									}
	
							
							$('#select_MR').empty();
									for(var i=0;i<count_user;i++)
									{
										$('#select_MR').append('<option value="'+usr_id[i]+'">'+usr_name[i]+'</option>');
									}
	
													
													
									$('.span2').css({backgroundColor:"#FFFFFF"});

									$('.span2').focus(function()
									{
										$(this).css({backgroundColor:"#FFDDAA"});
								
									});
								
									$('.span2').blur(function()
									{
										$(this).css({backgroundColor:"#FFFFFF"});		
									});				
													
													
													
								},
								error: function()
								{
									alert("Error, Please try again");	
								}
						});
				
						$.ajax(
						{
								type: "POST",
								url: "server/assign_gifts_get_usr_details.php",
								data: dummy_data,
								success: function(xml)
								{
										count_user = 0;				
											$(xml).find("user").each(function()
											{							
													usr_id[count_user] = $(this).find("usr_id").text();
													f_name[count_user] = $(this).find("f_name").text();
													l_name[count_user] = $(this).find("l_name").text();
													usr_name[count_user] = f_name[count_user]+" "+l_name[count_user];
													
													count_user++;								
											});						
									
								},
								error: function()
								{
									alert("Error, Please try again");	
								}
						});
				
			}
			
			else
			{
				for(var i=0;i<3;i++)
				{
					$('#value'+i).text("");
					document.getElementById('value'+i).value="";
				}
			}
		});
		
		//return false;
		
});

/*function submit_click()
{
	//alert("submit clicked");
	
	assign_to = $('#select_MR').val();
	assign_qty = $('#assign_qty').val();
	
	
		if (assign_to == "")
		{
			$('.help-inline').hide();
			$("label#select_MR_error").show();

			$("#select_MR").focus();

			return false;

		}
		else
		{
			$("label#select_MR_error").hide();
					
		}
		
		if (assign_qty=="")
		{
			$('.help-inline').hide();
			$("label#assign_qty_error").show();
			$("#assign_qty").focus();
			return false;
		}
		else
		{
			$("label#assign_qty_error").hide();
			if(isNaN(assign_qty))
			{
				$('.help-inline').hide();
				$("label#assign_qty_content_error").show();
				$("#assign_qty").focus();
				return false;
			}
			else
			{
				$("label#assign_qty_content_error").hide();	
				if(assign_qty>data_array[3])
				{
					$('.help-inline').hide();
					$("label#assign_qty_avail_qty_error").show();
					$("#assign_qty").focus();
					return false;					
				}
				else
				{
					$("label#assign_qty_avail_qty_error").hide();
				}
			}
		}

	alert("mr = "+mr);
	alert("qty = "+qty);
	
	alert("Available qty = "+data_array[3]);

	
	return false;
}*/

function get_selected_user(sel_usr)
{
	sel_user = sel_usr;
//	alert(sel_user);
}