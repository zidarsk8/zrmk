<?php
mysql_connect("localhost", "uju", "ujusansa") or die(mysql_error());
mysql_select_db("uju2") or die("mysql_select_db ".mysql_error());

// Retrieve all the data from the "example" table
$tablesQuery = mysql_query("SHOW TABLES") or die("mysql_query1 ".mysql_error());  

// store the record of the "example" table into $row
//echo "<pre>";
$arrTables = array();
while ($tablesRow = mysql_fetch_assoc($tablesQuery)) {
	$tableName = $tablesRow['Tables_in_uju2'];
	$arrTables[$tableName] = array(); 

	$result = mysql_query("SELECT * FROM $tableName ") or die("mysql_query2: SELECT * FROM $tableName ".mysql_error());  
	while ($row = mysql_fetch_assoc($result)){
		$arrTables[$tableName][]= $row;
	}
}

//print_r($arrTables);

?><!DOCTYPE html>
<html lang="es">
<head>
	<title>ZRMK</title>
	<meta charset="utf-8" />
	
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	<link rel="stylesheet" href="css/toggle.css" type="text/css" />
	<script type="application/javascript" language="JavaScript">
		var data = <?=json_encode($arrTables);?>;
	</script>
	<script type="application/javascript" language="JavaScript" src="js/jquery-1.6.4.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/functions.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/general.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/fillSelectOptions.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/buildngSelectedHandler.js"></script>
</head>

<body>
	
	
	
	<header id="banner" class="body">
		<img src="images/zrmk_logo_png_140.png" />
	</header><!-- /#banner -->
	
	<section id="content" class="body">
		
		<div class="toggleContainer" id="building_selection_container">
			<button class="toggleButton" id="button_toggle_bsc">Skrij</button>
			<div id="toggle_bsc">
				<?php include 'php/buildingTableSelect.php';?>
			</div>
		</div>
		
		<div class="toggleContainer" id="building_tweak_container">
			<button class="toggleButton" id="button_toggle_btc" />Skrij</button>
			<div id="toggle_btc">
				<?php include 'php/buildingTweak.php';?>
			</div>
		</div>
		
		
				<?php include 'php/calcDemoBuilding.php';?>
		
		<div id="Tab_Building_Holder" class="holder">
			<p><h3>Tab_Building</h3></p>
			<select id="select_Tab_Building"></select> 
			<input type="button" value="show Data" id="show_Tab_Building_data_button" />
			<br>
			<div id="Tab_Building_data_table"></div>
		</div>
		
		
	</section><!-- /#content -->
	
	
	<footer id="contentinfo" class="body">
	</footer><!-- /#contentinfo -->

</body>
</html>