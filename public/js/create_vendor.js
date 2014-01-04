var vd_id;
var vd_name;
var select_type;
var vd_category_one;
var vd_category_two;
var vd_address;
/*var vd_geo_lat;
var vd_geo_long;
var vd_speciality;*/
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
	
	$('textarea#vd_address').focus(function()

	{

		$(this).css({backgroundColor:"#FFDDAA"});

	});
	$('textarea#vd_address').blur(function()

	{

		$(this).css({backgroundColor:"#FFFFFF"});

	});

	$("#btn_submit").click(function() 
	{
		all_events();
	//	alert("clicked");
		$('.help-inline').hide();

		if(validateFields())
		{
			
//			alert("In if");
			storeInDB();
//			storeInDocMRMap();
//			alert("data stored");
		}
		else
		{
//			alert("In else");
//			alert("data not stored !!! Something is wrong");
		}
		
		
		
		return false;

	});
	//alert("ok");
	
});