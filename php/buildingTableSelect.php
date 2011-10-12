

<?php

// Retrieve all the data from the "example" table
$tablesQuery = mysql_query(
	"SELECT DISTINCT Code_BuildingSizeClass
	FROM Tab_Type_Building
	LIMIT 0 , 30"
) or die(mysql_error());  



$BuildingTypes = array();
while ($row = mysql_fetch_assoc($tablesQuery)) {
	$BuildingTypes[$row['Code_BuildingSizeClass']] = array();
}


$result = mysql_query("SELECT * FROM Tab_Building_view LEFT JOIN Tab_Type_Building_view USING (Code_BuildingType)") or die("mysql_query2: SELECT * FROM $tableName ".mysql_error());  
while ($row = mysql_fetch_assoc($result)){
	$BuildingTypes[$row['Code_BuildingSizeClass']][] = $row;
}


$keyOrder = array("SFH","TH","MFH","AB");

echo "<table class=\"buildings_table\" cellspacing=\"10px\">";

echo "<thead><tr><td>&nbsp;</td>";
echo "<td class=\"centerText\">ED<br>Enodružinska hiša</td>";
echo "<td class=\"centerText\">VH<br>Vrstna hiša</td>";
echo "<td class=\"centerText\">VEČ<br>Večstanovanjska hiša</td>";
echo "<td class=\"centerText\">BL<br>Stanovanjski blok</td>";
echo "</tr></thead><tbody>";

//echo "<pre>";print_r($BuildingTypes);echo "</pre>";
for ($i=0, $b=true; $b ; $i++){
	echo "<tr><td class=\"centerText\">";
	if (isset($BuildingTypes[$keyOrder[0]][$i]) && $BuildingTypes[$keyOrder[0]][$i]['Year1_Building'] == 0){
		echo "pred {$BuildingTypes[$keyOrder[0]][$i]['Year2_Building']}";
	}elseif(isset($BuildingTypes[$keyOrder[0]][$i]) && $BuildingTypes[$keyOrder[0]][$i]['Year2_Building'] == 9999){
		echo "po {$BuildingTypes[$keyOrder[0]][$i]['Year1_Building']}";
	}elseif(isset($BuildingTypes[$keyOrder[0]][$i])){
		echo "med {$BuildingTypes[$keyOrder[0]][$i]['Year1_Building']} in {$BuildingTypes[$keyOrder[0]][$i]['Year2_Building']}";
	}
	echo "</td>";
	foreach ($keyOrder as $key) {
		if(isset($BuildingTypes[$key][$i])){
			$maxImgSize = 140;
			$imagefile = "images/SI/{$BuildingTypes[$key][$i]['Code_Building']}.jpg";
			echo "<td class=\"buildings_table_element\">";
			$size = getimagesize($imagefile);
			$x = $size[0];
			$y = $size[1];
			if ($x>$y){
				$y *= $maxImgSize/$x;
				$x = $maxImgSize;
			}else{
				$x *= $maxImgSize/$y;
				$y = $maxImgSize;
			}
			echo "<img id=\"{$BuildingTypes[$key][$i]['Code_Building']}\" width=\"$x\" height=\"$y\" src=\"$imagefile\"/>";
			//echo $value[$i]['Remark_Building_1'];
			echo "</td>";
		}
		$b = isset($BuildingTypes[$key][$i+1]);
	}
	echo "</tr>";
}
echo "</tbody></table>";
