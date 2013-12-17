
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
    <title>User Login</title>
    <!-- Bootstrap -->
   
	
		<!--<script src="http://code.jquery.com/jquery-latest.js"></script>-->
		<script src="js/jquery-1.8.2.min.js"></script>
		<script src="js/application.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/bootswatch.js"></script>
		<script src="js/index.js"></script>
		
		<link href="css/bootstrap.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-responsive.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">	
	
</head>
<body>
  	<form method="post" action="">
	
		<p><br><br><br><br><br></p>
			
		<h3 align="center">Admin Login</h3>
					
		<div align="center">
								
				<div>
					<div class="control-group">
					<label>Username:</label>
						<input class="span4" type="text" placeholder="User Name" id="input_user_name" name="input_user_name">
					</div>
					<div>
						<span class="help-inline" id="un_error">Please Enter User Id</span>
					</div>
				</div>
				<div>
					<div class="control-group">
					<label>Password:</label>
						<input class="span4" type="password" placeholder="Password" id="input_password" name="input_password">
					</div>
					<div>
					
						<span class="help-inline" id="pw_error">Please Enter Password</span>
					</div>
				</div>
				<div align="center">
					<button type="submit" class="btn btn-primary" id="btn_login">Login</button>
					<button type="button" class="btn" id="btn_cancel">Cancel</button>
				</div>	
				<br>
				<div id="msg_create"></div>		
		</div>
		
	</form>
	
</body>
</html>