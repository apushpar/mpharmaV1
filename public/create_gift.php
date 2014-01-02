<?php
	include "check_timeout.php";
?>
<!DOCTYPE HTML>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />



<script src="js/jquery-1.8.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/application.js"></script>
<script src="js/bootswatch.js"></script>
<script src="js/create_gift.js"></script>

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

<title>Add Gift</title>
<script src="js/all_events.js"></script>

<?php



		$perk_id = "";

		$perk_name = "";

		$perk_status = "";

		$perk_qty = "";

		$perk_value = "";

		$perk_month = "";
		
		
			
			$qMax_perk_id = "SELECT MAX(perk_id) from perk_avail WHERE 1";

			$getMax_perk_id = mysql_query($qMax_perk_id,$con) or die("could not get usr_id : ".mysql_error());

			while($infoResult =  mysql_fetch_assoc($getMax_perk_id))
			{
				$perk_id = $infoResult['MAX(perk_id)'];
			//	echo $perk_id;	
			}
			$perk_id = $perk_id+1;
			//echo $perk_id;
?>

</head>

<body>

<?php
	include 'menu.html';
?>


	<form name="form_create_gift" id="form_create_gift" method="post" action="">
		<br /><br /><br>
	 	<fieldset>
			<div align="center">
				<h3>Add Gift</h3>
				
				<!--<a class="group1" href="content/qrcode.jpg" title="To Download App Take Photo Of This Image From The Device You Want To Install On." style="display: inline; color:#FFFFFF;"><span>Download App</span></a>-->
				
				<hr>

	
				<div>
					<div>
						<span class="star" s>* </span><input type="text" name="perk_id" id="perk_id" value="<?php echo $perk_id; ?>"  class="span3" readonly="readonly"  placeholder="Gift Identifier"/>
					</div>
				</div>
				<div>
					<div>
					<label>Enter Gift Name :</label>
						<span class="star">* </span><input type="text" name="perk_name" id="perk_name" class="span3" placeholder="Gift Name" />
					</div>
					<div>
						<!--<span id="usercheck" style="padding-left:10px; ; vertical-align: middle;"></span>-->
						<label class="help-inline" for="perk_name" id="perk_name_error">Please Enter Gift Name</label>
						<label class="help-inline" for="perk_name" id="perk_name_content_error">Please Enter Alphabets Only</label>						
					</div>
				</div>										
					
				<div>
					<div>
					<label>Enter Gift Quantity :</label>						
						<span class="star">* </span><input type="text" name="perk_qty" id="perk_qty" class="span3" placeholder="Gift Quantity"/>
					</div>
					<div>
						<label class="help-inline" for="perk_qty" id="perk_qty_error">Please Enter Gift Quantity</label>
						<label class="help-inline" for="perk_qty" id="perk_qty_content_error">Please Enter numbers only</label>

					</div>
				</div>			
				<div>
					<div>			
					<label>Enter Gift Value :</label>			
						<span class="star">* </span><input type="text" name="perk_value" id="perk_value" class="span3" placeholder="Gift Value"/>
					</div>
					<div>
						<label class="help-inline" for="perk_value" id="perk_value_error">Please Enter Gift Value</label>
						<label class="help-inline" for="perk_value" id="perk_value_content_error">Please Enter numbers only</label>
					</div>
				</div>
				<div>
					<div>				
					<label>Select Gift Status :</label>
						<span class="star">* </span><select name="perk_status" id="perk_status" style="width:auto" class="span3" placeholder="Gift Status">
							<option value="">Gift Status</option>
							<option value="1">Available</option>
							<option value="0">Out Of Stock</option>
						</select>
					</div>
					<div>								
						<label class="help-inline" for="perk_status" id="perk_status_error">Please Select Gift Status</label>
					</div>	
				</div>
				<div>
					<div>
					<label>Select Month for Gift :</label>
						<span class="star">* </span><!--<input type="text" name="perk_month" id="perk_month" class="span3" placeholder="Gift Month"/>-->
						<select name="perk_status" id="perk_month" name="perk_month" style="width:auto" class="span3" placeholder="Gift Month">
							<option value="">Gift Month</option>
							<option value="0">January</option>
							<option value="1">February</option>
							<option value="2">March</option>
							<option value="3">April</option>
							<option value="4">May</option>
							<option value="5">June</option>
							<option value="6">July</option>
							<option value="7">August</option>
							<option value="8">September</option>
							<option value="9">October</option>
							<option value="10">November</option>
							<option value="11">December</option>
						
						</select>
					</div>
					<div>
						<label class="help-inline" for="perk_month" id="perk_month_error">Please Enter Gift Month</label>
						<label class="help-inline" for="perk_month" id="perk_month_content_error">Please Enter numbers only</label>
					</div>
				</div>
				
				<div>
					<button type="submit" id="btn_submit" class="btn btn-primary">Add</button>
					
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