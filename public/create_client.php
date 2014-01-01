<?php
	include "check_timeout.php";
?>

<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />


		<script src="js/all_events.js"></script>
		<script src="js/jquery-1.2.3.pack.js"></script>
		<script src="js/jquery-1.8.2.min.js"></script>	
		<script src="js/create_client.js"></script>
		<script src="js/create_client_validateFields.js"></script>		
		<script src="js/create_client_storeInDB.js"></script>		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
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
			

		
		
<?php


				
			$qMaxDoc_id = "SELECT MAX(doc_id) from doc_data WHERE 1";

			$getMaxDoc_id = mysql_query($qMaxDoc_id,$con) or die("could not get usr_id : ".mysql_error());

			while($infoResult =  mysql_fetch_assoc($getMaxDoc_id))
			{
				$doc_id = $infoResult['MAX(doc_id)'];
			//	echo $doc_id;	
			}
			$doc_id = $doc_id+1;
			//echo $doc_id;
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			$arr_usr_id = array();
			$arr_f_name = array();
			$arr_l_name = array();
			
			$qSelectUser = "SELECT a.usr_id,a.f_name,a.l_name,a.usr_org,b.usr_nm,b.usr_pass FROM usr_detail as a INNER JOIN auth_user AS b ON a.usr_id=b.usr_id AND b.has_access='yes'";

		$qSelectUserResult = mysql_query($qSelectUser,$con) or die("Could not select user to delete");
		$user_count=0;
		while($infoResult = mysql_fetch_assoc($qSelectUserResult))
		{
			$arr_usr_id[$user_count] = $infoResult['usr_id'];
			$arr_f_name[$user_count] = $infoResult['f_name'];
			$arr_l_name[$user_count] = $infoResult['l_name'];

//				echo $infoResult['usr_id'];
			$user_count++;
		}	
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			

?>
		
		

		
		<title>Add Doctor</title>
</head>

<body>
<?php
	include 'menu.html';
?>

   <form id="CreateClientForm" method="post" action="">
      <fieldset>
		<div align="center">
			<br /><br /><br>
			<h3>Add Doctor</h3>
			
			<!--<a class="group1" href="content/qrcode.jpg" title="To Download App Take Photo Of This Image From The Device You Want To Install On." style="display: inline; color:#FFFFFF;"><span>Download App</span></a>-->
			
			<hr>

			
		
			<div>
				<div>
					<span class="star" s>* </span><input type="text" name="doc_id" id="doc_id" value="<?php echo $doc_id; ?>"  class="span3" readonly="readonly"  placeholder="Doctor's Identifier"/>
				</div>
			</div>
			<div>
				<div>
				<label>Enter Doctor's Name:</label>
					<span class="star" s>* </span><input type="text" name="doc_name" id="doc_name" class="span3" value="" placeholder="Name of the Doctor"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_name" id="doc_name_error">Please Enter Doctor's Name</label>
					<label class="help-inline" for="doc_name" id="doc_name_content_error">Please Enter Alphabets Only</label>						
				</div>
			</div>
			<div>
				<div>
				<label>Enter Doctor's speciality:</label>
					<span class="star" s>* </span><input type="text" name="doc_speciality" id="doc_speciality" class="span3" value="" placeholder="Doctor's Speciality"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_speciality" id="doc_speciality_error">Please Enter Doctor's Speciality</label>
					<label class="help-inline" for="doc_speciality" id="doc_speciality_content_error">Please Enter Alphabets Only</label>						
				</div>
			</div>
			
			<div>
				<div>
				<label>Enter Doctor's category : (default: test)</label>
					<span class="star" s>* </span><input type="text" name="doc_category_one" id="doc_category_one" class="span3" value="" placeholder="Doctor's Category One"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_category_one" id="doc_category_one_error">Please Enter Doctor's Category One</label>
					<label class="help-inline" for="doc_category_one" id="doc_category_one_content_error">Special Charactors are not allowed</label>						
				</div>
			</div>
			
			
			<div>
				<div>
				<label>Enter Doctor's Category two: (default: test)</label>
					<span class="star" s>* </span><input type="text" name="doc_category_two" id="doc_category_two" class="span3" value="" placeholder="Doctor's Category Two"/>	
				</div>
				<div>
					<label class="help-inline" for="doc_category_two" id="doc_category_two_error">Please Enter Doctor's Category Two</label>
					<label class="help-inline" for="doc_category_two" id="doc_category_two_content_error">Special Charactors are not allowed</label>							
				</div>
			</div>
			<div>
				<div>
				<label>Enter Doctor's Address: </label>
				   <span class="star" s>* </span><textarea rows="5" cols="500" name="doc_address" id="doc_address"  placeholder="Doctor's address" class="span3"></textarea>
				</div>
				<div>
					<label class="help-inline" for="doc_address" id="doc_address_error">Please Enter Doctor's Address</label>
					<label class="help-inline" for="doc_address" id="doc_address_content_error">Special Charactors are not allowed</label>	
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
				<div>
				<label>Assign MR</label>
					<span class="star" s>* </span><select name="select_user" id="select_user" style="width:auto" class="span3">
							<option value="">Assign MR</option>
							<?php					
								for($i=0;$i<$user_count;$i++)			
								{									
									echo "<option value=\"".$arr_usr_id[$i]."\">".$arr_f_name[$i]." ".$arr_l_name[$i]."</option>";			
								}						
							?>				
					</select>
				</div>
				<div>
					<label class="help-inline" for="select_user" id="select_user_error">Please Assign MR To This Doctor</label>					
					
				</div>
			</div>
			
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
