<?php
	include "check_timeout.php";
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
 
    <title>Assign Gifts to MR</title>

	<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="js/assign_gifts.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/application.js"></script>
	<script src="js/bootswatch.js"></script>
	<script src="js/all_events.js"></script>

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

		
		$arrUserIds = array();
		$qUserInfo = "select perk_id,perk_name from perk_avail";
		$usersInfo = mysql_query($qUserInfo,$con) or die('Could not fetch perk_ids:'.mysql_error());
		$noId = 0;
		$arrUserNames = array();
		$co = 0;
		while($infoUsers = mysql_fetch_assoc($usersInfo))
		{				
	//		echo $infoUsers['usr_id'];
			$arrUserNames[$co] = $infoUsers['perk_name'];
			$arrUserIds[$co] = $infoUsers['perk_id'];
			$co++;
		}
	//echo $arrUser;
	?>
</head>

<body>

<?php
	include 'menu.html';
?>

<form id="form_map_pharma" action="" method="post"> 
 <fieldset>
	 <br /><br /><br />
	 <h3 align="center">Assign Gifts to MR</h3> 
	 
	 <!--<a class="group1" href="content/qrcode.jpg" title="To Download App Take Photo Of This Image From The Device You Want To Install On." style="display: inline; color:#FFFFFF;"><span>Download App</span></a>-->
	 	 
	 <hr />
	
		 <div id="parent" align="center">
			 <label>Select Gift:</label>
			  <select id="type" size="5" name="type">
				<!--<option value="all_users">List of Gifts</option>-->
				<?php
					for($i=0;$i<$co;$i++)
					{		
							echo "<option value=\"".$arrUserIds[$i]."\">".$arrUserNames[$i]."</option>";
					}
				?>
			  </select>
			  <br />
				<div>  
					<div>Gift Name		: <b><span id="value0"></span></b></div>
				</div>
				<br />
				<div>
					<div>Gift Value		: <b><span id="value1"></span></b><br /></div>
				</div>
				<br />
				<div>
					<div>Total Quantity	: <b><span id="value2"></span></b><br /></div>
				</div>
				<br />
				<div>
					<div>Availabel Quantity	: <b><span id="value3"></span></b><br /></div>
				</div>
				<br />
				<div>
					<div>Assign to 		: <b><span id="value4"><span class="star" id="star1">* </span><select id="select_MR" name="select_MR" onchange="get_selected_user(this.value)" class="span2" style="width:auto">
					<option value="">Select MR</option>
					</select></span></b><br /></div>
					<div>
						<label class="help-inline" for="select_MR" id="select_MR_error">Please Select MR</label>
					</div>
				</div>
				
				
				<div>
					<div>Assign Quantity	: <b><span id="value5"><span class="star" id="star">* </span><input type="text" id="assign_qty" name="assign_qty" placeholder="Assign Quantity" class="span2"/></span></b><br /></div>
					<div>
						<label class="help-inline" for="assign_qty" id="assign_qty_error">Please Enter Quantity</label>
						<label class="help-inline" for="assign_qty" id="assign_qty_content_error">Please Enter Only Numbers</label>
						<label class="help-inline" for="assign_qty" id="assign_qty_avail_qty_error">It is greater than Available Quantity</label>
					</div>
				</div>
				
				
				<div>
<a class="btn btn-primary" id="btn_submit">Assign</a>
					<div id="divMsg" style="display:none;" align="center">
					   <img src="img/load.gif" alt="Please wait.."/>
					</div>
					<div id="msg_create"></div>
				</div>
				<!--Inventory allocated to MR's	: <b><span id="value3"></span></b><br />
				Available Inventory	: <b><span id="value4"></span></b><br />-->
			 <br /><br />
				<!--<input type="submit" id="btn_view_map" value="View Maps" class="btn btn-success">-->
		</div>
	
	</fieldset>
	
	
	<div>
					
	
</form>

<?php
	mysql_close($con);
?>

</body>
</html>
