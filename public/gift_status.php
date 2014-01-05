<?php
	include "check_timeout.php";
?>
<!DOCTYPE HTML>
<html>
<head>

<meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
 
    <title>Check Gift Status</title>



<script type="text/javascript" charset="utf-8" src="js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/jquery.dataTables.js"></script>
<script type="text/javascript" charset="utf-8" language="javascript" src="js/gift_status_DT_bootstrap.js"></script>
<script type="text/javascript" charset="utf-8" src="js/dataTables.bootstrap.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ZeroClipboard.js"></script>
<script type="text/javascript" charset="utf-8" src="js/TableTools.js"></script>



<script src="js/bootstrap.min.js"></script>
<script src="js/application.js"></script>
<script src="js/bootswatch.js"></script>
<script src="js/all_events.js"></script>

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="media/css/TableTools.css">
<link rel="stylesheet" type="text/css" href="media/css/TableTools_JUI.css">
<link rel="stylesheet" type="text/css" href="http://datatables.github.com/Plugins/integration/bootstrap/dataTables.bootstrap.css">



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

</head>

<body>
<?php
	include 'menu.html';
?>
<br /><br /><br />
<h3 align="center">Check Gift Status</h3> 
<br />
<div class="container" style="margin-top: 10px">
<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example">
	<thead>
		<tr>
			<th>Gift ID</th>
			<th>Gift Name</th>
			<th>Gift Value</th>
			<th>Gift Month</th>
			<th>Total Quantity</th>
			<th>Allocated Gifts</th>
			<th>Available Gifts</th>
			
		</tr>
	</thead>
	<tbody>
		
	</tbody>
</table>
			</div>

<?php
	mysql_close($con);
?>
</body>
</html>