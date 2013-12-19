<?php
	include "check_timeout.php";
?>

<!DOCTYPE HTML>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />


<script src="js/all_events.js"></script>
<script src="js/jquery-1.8.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/application.js"></script>
<script src="js/bootswatch.js"></script>
<script src="js/create_user.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

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



		$usr_id = "";

		$user_name = "";

		$password = "";

		$f_name = "";

		$l_name = "";

		$usr_org = "";
		
		$emp_code = "";
			
			$qMaxUsr_id = "SELECT MAX(usr_id) from usr_detail WHERE 1";

			$getMaxUsr_id = mysql_query($qMaxUsr_id,$con) or die("could not get usr_id : ".mysql_error());

			while($infoResult =  mysql_fetch_assoc($getMaxUsr_id))
			{
				$usr_id = $infoResult['MAX(usr_id)'];
			//	echo $usr_id;	
			}
			$usr_id = $usr_id+1;
			//echo $usr_id;
?>

</head>

<body>

<?php
	include 'menu.html';
?>

	<form name="form_create_usr" id="form_create_usr" method="post" action="">
		<br /><br /><br>
	 	<fieldset>
			<div align="center">
				<h3>Add MR</h3>
				
				<!--<a class="group1" href="content/qrcode.jpg" title="To Download App Take Photo Of This Image From The Device You Want To Install On." style="display: inline; color:#FFFFFF;"><span>Download App</span></a>-->
				
				<hr>
							
	
				<div>
					<div>
					
						<span class="star" s>* </span><input type="text" name="usr_id" id="usr_id" value="<?php echo $usr_id; ?>"  class="span3" readonly="readonly"  placeholder="User Identifier"/>
					</div>
				</div>
				<div>
					<div>
					<label>Username:</label>
						<span class="star" s>* </span><input type="text" name="user_name" id="user_name" class="span3" onBlur="checkUserName(this.value)" placeholder="User Name"/>
					</div>
					<div>
						<span id="usercheck" style="padding-left:10px; ; vertical-align: middle;"></span>
						<label class="help-inline" for="user_name" id="user_name_error">Please Enter MR's Name</label>
						<label class="help-inline" for="user_name" id="user_name_content_error">Please Enter Alphabets Only</label>						
					</div>
				</div>										
				<div>
					<div>
					<label>Password:</label>				
						<span class="star" s>* </span><input type="text" name="password" id="password" class="span3" placeholder="Password" />
					</div>
					<div>								
						<label class="help-inline" for="password" id="password_error">Please Enter Password</label>
						<label class="help-inline" for="password" id="password_content_error">Special Charactors are not allowed</label>
					</div>	
				</div>	
				<div>
					<div>	
					<label>Employee code:</label>					
						<span class="star" s>* </span><input type="text" name="emp_code" id="emp_code" class="span3" placeholder="Employee Code"/>
					</div>
					<div>
						<label class="help-inline" for="emp_code" id="emp_code_error">Please Enter MR's Employee Code</label>
						<label class="help-inline" for="emp_code" id="emp_code_content_error">Special Charactors are not allowed</label>
					</div>
				</div>			
				<div>
					<div>
					<label>MR's first name:</label>						
						<span class="star" s>* </span><input type="text" name="f_name" id="f_name" class="span3" placeholder="First Name"/>
					</div>
					<div>
						<label class="help-inline" for="f_name" id="f_name_error">Please Enter MR's First Name</label>
						<label class="help-inline" for="f_name" id="f_name_content_error">Please Enter Alphabets Only</label>
					</div>
				</div>
				<div>
					<div>
										<label>MR's last name:</label>						
						<span class="star" s>* </span><input type="text" name="l_name" id="l_name" class="span3" placeholder="Last Name"/>
					</div>
					<div>
						<label class="help-inline" for="l_name" id="l_name_error">Please Enter MR's Last Name</label>
						<label class="help-inline" for="l_name" id="l_name_content_error">Please Enter Alphabets Only</label>
					</div>
				</div>
				<div>
					<div>
										<label>MR's Organisation:</label>						
						<span class="star" s>* </span><input type="text" name="usr_org" id="usr_org" class="span3" placeholder="Organization Name"/>
					</div>
					<div>
						<label class="help-inline" for="usr_org" id="usr_org_error">Please Enter MR's Organization</label>
						<label class="help-inline" for="usr_org" id="usr_org_content_error">Special Charactors are not allowed</label>
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