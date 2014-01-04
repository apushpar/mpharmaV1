function validateFields()
{
	//alert("In Validator");
	
	
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	var flag5 = false;
	var flag6 = false;
	var flag7 = false;
	var flag8 = false;
	var flag9 = false;
	
		vd_id = $("#vd_id").val();
//		alert(vd_id);
		
		vd_name = $("#vd_name").val();
//		alert(vd_name);
		
		select_type = $("#select_type").val();
//		alert(select_type);		
		
		vd_category_one = $("#vd_category_one").val();
//		alert(vd_category_one);	
		
		vd_category_two = $("#vd_category_two").val();
//		alert(vd_category_two);	
		
		vd_address = $("#vd_address").val();
//		alert(vd_address);	
		
	/*	doc_geo_lat = $("#doc_geo_lat").val();
//		alert(doc_geo_lat);	
		
		doc_geo_long = $("#doc_geo_long").val();
//		alert(doc_geo_long);	
		*/
		


		if (vd_id == "")
		{
			$('.help-inline').hide();
			$("label#vd_id_error").show();

			$("#vd_id").focus();

			flag1 = false;
			return false;

		}
		else
		{
			$("label#vd_id_error").hide();
			flag1 = true;
			
			
		}

		
		if (vd_name == "")
		{
			$('.help-inline').hide();
			$("label#vd_name_error").show();

			$("#vd_name").focus();

			flag2 = false;
			return false;

		}
		else
		{
			$("label#vd_name_error").hide();
			flag2 = true;	
		//	alert("in else");
			if(! /^[a-zA-Z,\s]+$/.test(vd_name))
			{
	//			alert("in if");
				$('.help-inline').hide();
				$("label#vd_name_content_error").show();
				$("#vd_name").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#vd_name_content_error").hide();	
				flag2 = true;
			}
		}
		
		
		if (select_type == "") 
		{
			$('.help-inline').hide();
			$("label#select_type_error").show();

			$("#select_type").focus();

			flag9 = false;
			return false;
		}
		else
		{
			$("label#select_type_error").hide();
			flag9 = true;
		}
		

		/*if (doc_speciality == "")
		{
			$('.help-inline').hide();
			$("label#doc_speciality_error").show();

			$("#doc_speciality").focus();

			flag3 = false;
			return false;
		}
		else
		{
			$("label#doc_speciality_error").hide();
			flag3 = true;
			
			if(! /^[a-zA-Z,\s]+$/.test(doc_speciality))
			{
	//			alert("in if");
				$('.help-inline').hide();
				$("label#doc_speciality_content_error").show();
				$("#doc_speciality").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#doc_speciality_content_error").hide();	
				flag3 = true;
			}
			
			
		}*/
		
		

		if (vd_category_one == "")
		{
			$('.help-inline').hide();
			$("label#vd_category_one_error").show();

			$("#vd_category_one").focus();

			flag4 = false;
			return false;
		}
		else
		{
			$("label#vd_category_one_error").hide();
			flag4 = true;
			
			//      	/^[A-Za-z\s`~!@#$%^&*()+={}|;:'",.<>\/?\\-]+$/
			
			
			var characterReg = /^\s*[a-zA-Z0-9,,\s]+\s*$/;
			if(! characterReg.test(vd_category_one))
			{
	//			alert("in if");
				$('.help-inline').hide();
				$("label#vd_category_one_content_error").show();
				$("#vd_category_one").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#vd_category_one_content_error").hide();	
				flag4 = true;
			}			
		}

		if (vd_category_two == "") 
		{
			$('.help-inline').hide();
			$("label#vd_category_two_error").show();

			$("#vd_category_two").focus();

			flag5 = false;
			return false;
		}
		else
		{
			$("label#vd_category_two_error").hide();
			flag5 = true;
			
			var characterReg = /^\s*[a-zA-Z0-9,,\s]+\s*$/;
			if(! characterReg.test(vd_category_two))
			{
	//			alert("in if");
				$('.help-inline').hide();
				$("label#vd_category_two_content_error").show();
				$("#vd_category_two").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#vd_category_two_content_error").hide();	
				flag5 = true;
			}
		}

		

		if (vd_address == "") 
		{
			$('.help-inline').hide();
			$("label#vd_address_error").show();

			$("#vd_address").focus();

			flag6 = false;
			return false;
		}
		else
		{
			$("label#vd_address_error").hide();
			flag6 = true;
			
			var characterReg = /^\s*[-a-zA-Z0-9,,\s,.,_,:,',"]+\s*$/;
			if(! characterReg.test(vd_address))
			{
	//			alert("in if");
				$('.help-inline').hide();
				$("label#vd_address_content_error").show();
				$("#vd_address").focus();
				return false;
			
			}
			else
			{
				//alert("in if else");
				$("label#vd_address_content_error").hide();	
				flag6 = true;
			}
			
		}

		

		/*if (doc_geo_lat == "") 
		{
			$('.help-inline').hide();
			$("label#doc_geo_lat_error").show();

			$("#doc_geo_lat").focus();

			flag7 = false;
			return false;
		}
		else
		{
			$("label#doc_geo_lat_error").hide();
			flag7 = true;
		}

		if (doc_geo_long == "") 
		{
			$('.help-inline').hide();
			$("label#doc_geo_long_error").show();

			$("#doc_geo_long").focus();

			flag8 = false;
			return false;
		}
		else
		{
			$("label#doc_geo_long_error").hide();
			flag8 = true;
		}
		*/
		

		
		
		if(flag1 && flag2 && flag4 && flag5 && flag6 /*&& flag7 && flag8*/ && flag9)
		{
			return true;
		}
		else
		{
			return false;
		}
		
}