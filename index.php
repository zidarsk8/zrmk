<?php
mysql_connect("localhost", "uju2", "uju") or die(mysql_error());
mysql_select_db("uju2") or die(mysql_error());
mysql_set_charset('utf8');
header( 'Content-Type: text/html;charset=utf-8' );


//This is what I call Enterprisy code
$tablesQuery = mysql_query("SHOW TABLES") or die(mysql_error());
$arrTables = array();
while ($tablesRow = mysql_fetch_assoc($tablesQuery)) {
	$tableName = $tablesRow['Tables_in_uju2'];
	$arrTables[$tableName] = array();

	$result = mysql_query("SELECT * FROM $tableName ") or die(mysql_error());
	while ($row = mysql_fetch_assoc($result)){
		foreach ($row as $key => $value) {
			$row[$key] = str_ireplace(array('Ä','Å¾','Å¡'),array('č','ž','š'), $value);
		}
		$arrTables[$tableName][]= $row;
	}
}

?><!DOCTYPE html>
<html>
<head>
	<title>ZRMK</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	<link rel="stylesheet" href="css/toggle.css" type="text/css" />
	<link rel="stylesheet" href="css/calcDemoSystem.css" type="text/css" />
	<link rel="stylesheet" href="css/buldingTweak.css" type="text/css" />
	<script type="application/javascript" language="JavaScript">
		var numberOfSets = 3; //could be higher
		var data = <?=json_encode($arrTables);?>;
		var sData = new Array(); //selected data used for calculations
		for (var i=0; i < numberOfSets ; i++) {
			sData[i] = new Object();
			
			//const
			
			sData[i]['b_Transmission_constant'] = 1;
			sData[i]['C_p_air_constant'] = 0.34;
			sData[i]['auxiliary_energy_constant'] = 'el';
			sData[i]['c_p_air'] = 0.34;
			sData[i]['h_tr_tb'] = 1;  //remover this line
						
			sData[i]['Code_ClimateRegion'] = 'SI.N';
			sData[i]['Name_ClimateRegion'] = 'national / whole country';
			sData[i]['HeatingDays'] = 206;
			sData[i]['Theta_e'] = 4.3;
			sData[i]['I_Sol_Hor'] = 375;
			sData[i]['I_Sol_East'] = 241;
			sData[i]['I_Sol_South'] = 292;
			sData[i]['I_Sol_West'] = 218;
			sData[i]['I_Sol_North'] = 98;
			sData[i]['theta_i'] = 20.0;
			sData[i]['F_red_temp'] = 1.00;

			sData[i]['n_air_use'] = 0.50;
			sData[i]['h_room'] = 2.80;
			sData[i]['phi_int'] = 4.00;
			sData[i]['F_sh_hor'] = 1.00;
			sData[i]['F_sh_vert'] = 1.00;
			sData[i]['F_f'] = 0.80;
			sData[i]['F_w'] = 0.90;
			sData[i]['c_m'] = 156.25;
			sData[i]['q_w_nd'] = 12.00000;
			sData[i]['c_m'] = 156.25000;
			sData[i]['variant'] = 1;
			 
		};
		var cur = 0;
	</script>
	<script type="application/javascript" language="JavaScript" src="js/jquery-1.6.4.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/highcharts.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/functions.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/toggleHandler.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/fillSelectOptions.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/buildngSelectedHandler.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/stavba.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/editValues.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/highcharts.js"></script>
	<script type="application/javascript" language="JavaScript" src="js/graphs.js"></script>
	
</head>

<body>

	<header id="banner" class="body">
		<div class="toggleContainer">
		<div style="float:right; text-align: right;"> 
			<img src="images/iee_logo_supportedby_55.jpg" /> <br>
			<img src="images/logo_enforce_55.jpg" /> <br>
			<img src="images/tabula_logo_mini_55.png"/> 
		</div>
		<a href=""><img src="images/zrmk_logo_png_100.png" alt="Gradbeni institut ZRMK d.o.o."  /></a><br>
		<img src="images/logo_enSOS_70.jpg" /> 
		</div>
		<br />
		<nav>
			<ul>
		      <li id="k1" class="active"><a href="#" >Stavba 1</a></li>
		      <li id="k2"><a href="#">Stavba 2</a></li>
		      <li id="k3"><a href="#">Stavba 3</a></li>
		    </ul>
		    <div class="saveForm">
				<input type="text" name="konfigSave" id="configSave" value="Shrani_01" class="canEditGlobal" />
				<button class="saveButton" id="save">Shrani</button>
				<button class="saveButton" id="open">Odpri</button>
			</div>
    	</nav>

	</header>

	<section class="body">

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

		<div class="toggleContainer" id="Graph_container">
			<button class="toggleButton" id="button_toggle_g" />Skrij</button>
			<div id="toggle_g">
				<div id="neeee"></div>
			
				<!-- 3. Add the container -->
				<div id="chart_1_container_0" style="width: 540px; height: 600px; float:left; margin: 0 auto"></div>
				<div id="chart_2_container_0" style="width: 340px; height: 600px; float:left; margin: 0 auto"></div>
		

			</div>
		</div>

		<div class="toggleContainer" id="BuildingPerformance_container">
			<button class="toggleButton" id="button_toggle_bpc" />Skrij</button>
			<div id="toggle_bpc">
				<?php include 'tables/BuildingPerformance.html';?>
			</div>
		</div>

		<div class="toggleContainer" id="SystemPerformance_container">
			<button class="toggleButton" id="button_toggle_spc" />Skrij</button>
			<div id="toggle_spc">
				<?php include 'tables/SystemPerformance.html';?>
			</div>
		</div>

		<div class="toggleContainer" id="EnergyCarriers_container">
			<button class="toggleButton" id="button_toggle_ecc" />Skrij</button>
			<div id="toggle_ecc">
				<?php include 'tables/EnergyCarriers.html';?>
			</div>
		</div>

	</section>


	<footer id="contentinfo" class="body">
	</footer>

</body>
</html>
