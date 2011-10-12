<?php

// Retrieve all the data from the "example" table
$tablesQuery = mysql_query(
	"SELECT DISTINCT Code_BuildingSizeClass
	FROM Tab_Type_Building
	LIMIT 0 , 30"
) or die(mysql_error());  

// store the record of the "example" table into $row
//echo "<pre>";
$BuildingTypes = array();
while ($row = mysql_fetch_assoc($tablesQuery)) {
	$BuildingTypes[$row['Code_BuildingSizeClass']] = array();
}


$result = mysql_query("SELECT * FROM Tab_Building_view LEFT JOIN Tab_Type_Building_view USING (Code_BuildingType)") or die("mysql_query2: SELECT * FROM $tableName ".mysql_error());  
while ($row = mysql_fetch_assoc($result)){
	$BuildingTypes[$row['Code_BuildingSizeClass']][] = $row;
}

//echo "<pre>";print_r($BuildingTypes);echo "</pre>";

echo "<table class=\"buildings_table\">";
for ($i=0, $b=true; $b ; $i++){
	echo "<tr>";
	foreach ($BuildingTypes as $key => $value) {
		echo "<td class=\"buildings_table_element\">";
		if(isset($value[$i])){
			echo $value[$i]['Remark_Building_1'];
		}
		$b = isset($value[$i+1]);
		echo "</td>";
	}
	echo "</tr>";
}
echo "</table>";
