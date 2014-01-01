var doc_id;
var doc_name;
var doc_speciality;
var doc_category_one;
var doc_category_two;
var doc_address;
var doc_geo_lat;
var doc_geo_long;
var select_user;
var dataString;



$(function() 
{
	all_events();
	
//	alert("in js");
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
	
	$('textarea#doc_address').focus(function()

	{

		$(this).css({backgroundColor:"#FFDDAA"});

	});
	$('textarea#doc_address').blur(function()

	{

		$(this).css({backgroundColor:"#FFFFFF"});

	});

	$("#btn_submit").click(function() 
	{
		all_events();
		$('.help-inline').hide();

		if(validateFields())
		{
			
			
			storeInDB();
//			storeInDocMRMap();
//			alert("data stored");
		}
		else
		{
//			alert("data not stored !!! Something is wrong");
		}
		
		
		
		return false;

	});

});