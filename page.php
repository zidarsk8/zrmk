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
	<title>Energy Balance Calculation</title>
	<meta charset="utf-8" />
	
	<link rel="stylesheet" href="css/main.css" type="text/css" />
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

<body id="index" class="home">
	
	
	
	<header id="banner" class="body">
		<h1><a href="#">Naslov je tukaj<br> <strong>Toplotni izkoristek</strong></a></h1>
		<nav><ul>
			<li class="active"><a href="#">Prva Stran</a></li>
			<li><a href="#">Pomoc</a></li>
			<li><a href="#">Kontact</a></li>
		</ul></nav>
	</header><!-- /#banner -->
	
	<section id="content" class="body">
		
		<?php include 'php/buildingTableSelect.php';?>
		<?php include 'php/buildingTweak.php';?>
		
		<table width="800" class="calc_table">
			<caption>Energy Balance Calculation</caption>
			<thead>
				<tr>
					<td>code construction element</td>
					<td>original U-value</td>
					<td>measure type</td>
					<td>applied refurbishment measure</td>
					<td>actual U-value</td>
					<td></td>
					<td>area (basis:<br>external<br>dimensions</td>
					<td></td>
					<td>adjustment<br>factor soil</td>
					<td></td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Roof 1</td>
					<td><span class="input_small" id="U_Roof_1">&nbsp;</span></td>
					<td><span class="input_small" id="roof_1_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="roof_1_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="U_Refurbished_Roof_1">0&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="A_Roof_1">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="b_Transmission_Roof_1">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="roof_1_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Roof 2</td>
					<td><span class="input_small" id="U_Roof_2">&nbsp;</span></td>
					<td><span class="input_small" id="roof_2_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="roof_2_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="U_Refurbished_Roof_2">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="A_Roof_2">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="b_Transmission_Roof_2">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="roof_2_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Wall 1</td>
					<td><span class="input_small" id="wall_1_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="wall_1_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="wall_1_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="wall_1_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_1_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_1_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="wall_1_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Wall 2</td>
					<td><span class="input_small" id="wall_2_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="wall_2_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="wall_2_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="wall_2_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_2_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_2_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="wall_2_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Wall 3</td>
					<td><span class="input_small" id="wall_3_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="wall_3_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="wall_3_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="wall_3_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_3_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="wall_3_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="wall_3_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Floor 1</td>
					<td><span class="input_small" id="floor_1_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="floor_1_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="floor_1_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="floor_1_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="floor_1_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="floor_1_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="floor_1_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Floor 2</td>
					<td><span class="input_small" id="floor_2_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="floor_2_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="floor_2_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="floor_2_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="floor_2_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="floor_2_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="floor_2_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Window 1</td>
					<td><span class="input_small" id="window_1_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="window_1_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="window_1_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="window_1_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="window_1_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="window_1_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="window_1_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Window 2</td>
					<td><span class="input_small" id="window_2_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="window_2_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="window_2_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="window_2_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="window_2_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="window_2_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="window_2_result">&nbsp;</span></td>
				</tr>
				<tr>
					<td>Door 1</td>
					<td><span class="input_small" id="door_1_original_u_value">&nbsp;</span></td>
					<td><span class="input_small" id="door_1_measure_type">&nbsp;</span></td>
					<td><span class="input_big" id="door_1_applied_refurbishment_measure">&nbsp;</span>&nbsp;&nbsp;</td>
					<td><span class="input_medium" id="door_1_actual_u_value">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="door_1_area_external)">&nbsp;</span></td>
					<td>x</td>
					<td><span class="input_medium" id="door_1_adjustment_factor_soil">&nbsp;</span></td>
					<td>=</td>
					<td><span class="input_medium" id="door_1_result">&nbsp;</span></td>
				</tr>
			</tbody>
		</table>	
		
		<div id="Tab_Building_Holder" class="holder">
			<p><h3>Tab_Building</h3></p>
			<select id="select_Tab_Building"></select> 
			<input type="button" value="show Data" id="show_Tab_Building_data_button" />
			<br>
			<div id="Tab_Building_data_table"></div>
		</div>
		
		
	</section><!-- /#content -->
	
	
	<footer id="contentinfo" class="body">
		<address id="about" class="vcard body">
			<span class="primary">
				<strong><a href="#" class="fn url">Smashing Magazine</a></strong>
				<span class="role">Amazing Magazine</span>
			</span><!-- /.primary -->
		
			<img src="images/avatar.gif" alt="Smashing Magazine Logo" class="photo" />
		
			<span class="bio">Smashing Magazine is a website and blog that offers resources and advice to web developers and web designers. It was founded by Sven Lennartz and Vitaly Friedman.</span>

		
		</address><!-- /#about -->
		
		<p>2005-2009 <a href="http://smashingmagazine.com">Smashing Magazine</a>.</p>
	</footer><!-- /#contentinfo -->

</body>
</html>