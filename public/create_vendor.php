<?php
	include "check_timeout.php";
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<script src="js/all_events.js"></script>
<?php

				
			$qMaxVd_id = "SELECT MAX(vd_id) from vendor_data WHERE 1";

			$getMaxVd_id = mysql_query($qMaxVd_id,$con) or die("could not get vd_id : ".mysql_error());

			while($infoResult =  mysql_fetch_assoc($getMaxVd_id))
			{
				$vd_id = $infoResult['MAX(vd_id)'];
			//	echo $vd_id;	
			}
			$vd_id = $vd_id+1;
			//echo $vd_id;
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
		
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			

?>
		<script src="js/jquery-1.2.3.pack.js"></script>
		<script src="js/jquery-1.8.2.min.js"></script>		
		<script src="js/create_vendor.js"></script>
		<script src="js/create_vendor_validateFields.js"></script>		
		<script src="js/create_vendor_storeInDB.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/application.js"></script>
		<script src="js/bootswatch.js"></script>	
		
		<link href="css/bootstrap.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-responsive.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
		
		

<link rel="stylesheet" type="text/css" href="css/BackToTop.jquery.css" media="screen" />	
<script type="text/javascript" src="js/BackToTop.min.jquery.js"></script>
<script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
<link rel="stylesheet" type="text/css" href="css/prettyPhoto.css" media="screen" />

<style>
	body{font:14px/1.2 Verdana, sans-serif; padding:0 10px;}
	a:link, a:visited{text-decoration:none; color:#416CE5; /*border-bottom:1px solid #416CE5;*/}
	h2{font-size:13px; margin:15px 0 0 0;}
	
	.scrollup{
    width:40px;
    height:40px;
    opacity:0.3;
    position:fixed;
    bottom:50px;
    right:100px;
    display:none;
    text-indent:-9999px;
    background: url('img/icon_top.png') no-repeat;
	}	
</style>			
			
<link rel="stylesheet" href="css/colorbox.css" />
<script src="js/jquery.colorbox.js"></script>
<script src="js/download_app.js"></script>
		
		<title>Add Vendor</title>
</head>

<body>

<?php
	include 'menu.html';
?>

   <form id="CreateClientForm" method="post" action="">
      <fieldset>
		<div align="center">
			<br /><br /><br>
			<h3>Add Vendor</h3>
			
			<!--<a class="group1" href="content/qrcode.jpg" title="To Download App Take Photo Of This Image From The Device You Want To Install On." style="display: inline; color:#FFFFFF;"><span>Download App</span></a>-->
			
			<hr>

			
		
			<div>
				<div>
					<span class="star" s>* </span><input type="text" name="vd_id" id="vd_id" value="<?php echo $vd_id; ?>"  class="span3" readonly="readonly"  placeholder="Vendor's Identifier"/>
				</div>
			</div>
			<div>
				<div>
				<label>Enter Vendor's Name:</label>
					<span class="star" s>* </span><input type="text" name="vd_name" id="vd_name" class="span3" value="" placeholder="Name of the Vendor"/>	
				</div>
				<div>
					<label class="help-inline" for="vd_name" id="vd_name_error">Please Enter Vendor's Name</label>
					<label class="help-inline" for="vd_name" id="vd_name_content_error">Please Enter Alphabets Only</label>						
				</div>
			</div>
			<div>
				<div>
				<label>Select Vendor's Type:</label>
					<span class="star" s>* </span><select name="select_type" id="select_type" style="width:auto" class="span3">
														<option value="">Select Type</option>
														<option value="stockist">Stockist</option>
														<option value="pharmacist">Pharmacist</option>
													</select>	
				</div>
				<div>
					<label class="help-inline" for="select_type" id="select_type_error">Please Select Type of Vendor</label>					
				</div>
			</div>
			
			<div>
				<div>
								<label>Vendor's Category: (default: test)</label>
					<span class="star" s>* </span><input type="text" name="vd_category_one" id="vd_category_one" class="span3" value="" placeholder="Vendor's Category One"/>	
				</div>
				<div>
					<label class="help-inline" for="vd_category_one" id="vd_category_one_error">Please Enter Vendor's Category One</label>
					<label class="help-inline" for="vd_category_one" id="vd_category_one_content_error">Special Charactors are not allowed</label>						
				</div>
			</div>
			
			
			<div>
				<div>
				<label>Vendor's Category two: (default: test)</label>
					<span class="star" s>* </span><input type="text" name="vd_category_two" id="vd_category_two" class="span3" value="" placeholder="Vendor's Category Two"/>	
				</div>
				<div>
					<label class="help-inline" for="vd_category_two" id="vd_category_two_error">Please Enter Vendor's Category Two</label>
					<label class="help-inline" for="vd_category_two" id="vd_category_two_content_error">Special Charactors are not allowed</label>							
				</div>
			</div>
			<div>
				<div>
				<label>Vendor's address:</label>
				   <span class="star" s>* </span><textarea rows="5" cols="500" name="vd_address" id="vd_address"  placeholder="Vendor's address" class="span3"></textarea>
				</div>
				<div>
					<label class="help-inline" for="vd_address" id="vd_address_error">Please enter Vendor's Address</label>
					<label class="help-inline" for="vd_address" id="vd_address_content_error">Special Characters are not allowed</label>	
				</div>
			</div>
			
			<!--<div>
				<div>
					<input type="text" name="doc_geo_lat" id="doc_geo_lat" class="span4" value="" placeholder="Please enter Doctor Geo Latitude"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_geo_lat" id="doc_geo_lat_error">This field is required.</label>
					
				</div>
			</div>
			
			
			<div>
				<div>
					<input type="text" name="doc_geo_long" id="doc_geo_long" class="span4" value="" placeholder="Please enter Doctor Geo Longitude"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_geo_long" id="doc_geo_long_error">This field is required.</label>
					
				</div>
			</div>-->
			
			
			
			<div>
				<button type="submit" id="btn_submit" value="Save" class="btn btn-primary">Add</button>
				<div id="divMsg" style="display:none;" align="center">
					   <img src="img/load.gif" alt="Please wait.."/>
				</div>
				<div id="msg_create"></div>
			</div>
			
		</div>           
	</fieldset>		      
</form>
<?php
	mysql_close($con);
?>
</body>
</html>
