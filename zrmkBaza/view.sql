CREATE OR REPLACE VIEW Tab_ConstrYearClass_view AS
SELECT 
CONVERT( CONCAT( Code_Country, '.', LPAD( Number_ConstructionYearClass, 2, '0' ) ) USING utf8 ) AS Code_ConstructionYearClass, 
Tab_ConstrYearClass.*
FROM Tab_ConstrYearClass
WHERE 1 ;

CREATE OR REPLACE VIEW Tab_AdditionalPar_view AS
SELECT 
CONVERT( CONCAT( Code_Country, '.', ShortCut_AdditionalParameter ) USING utf8 ) AS Code_AdditionalParameter, 
Tab_AdditionalPar.*
FROM Tab_AdditionalPar
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_BoundaryCond_view AS
SELECT 
CONVERT( CONCAT( Code_Country, '.', ShortCut_BoundaryCond ) USING utf8 ) AS Code_BoundaryCond, 
Tab_BoundaryCond.*
FROM Tab_BoundaryCond
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_Building_Constr_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_ElementType, '.', 
		Code_DataType_Construction, '.', 
		SUBSTRING(Code_Construction_ConstructionYearClass,4) , '.', 
		LPAD( Number_Construction_Variant, 2, '0' ) 
	) USING utf8 
) AS Code_Construction, 
Tab_Building_Constr.*

FROM Tab_Building_Constr
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_Building_Measure_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_ElementType, '.', 
		Code_MeasureType, '.', 
		LPAD( Number_Variant_MeasureType, 2, '0' ) 
	) USING utf8 
) AS Code_Measure,
Code_StatusDataset,
Code_Country,
Code_ElementType,
Code_MeasureType,
Number_Variant_MeasureType,
Description_Measure,
Description_Measure_National,
Remark_Measure,
Name_Picture_Measure,
Picture_Measure,
U_construction,
R_manual,
d_Layer_1,
lambda_Layer_1,
d_Layer_2,
lambda_Layer_2a,
lambda_Layer_2b,
AreaFraction_Layer_2b,
g_gl_n,
d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0) 
AS R_calc_1,
IF(d_Layer_2>0,1/((1-AreaFraction_Layer_2b)*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2a)+AreaFraction_Layer_2b*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2b)),(d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0) )) 
AS R_calc_2,
((d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0))+
IF(d_Layer_2>0,1/((1-AreaFraction_Layer_2b)*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2a)+AreaFraction_Layer_2b*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2b)),(d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0) )))/2 
AS R_calc,
IF(U_construction>0,1/U_construction, 
IF(R_manual>0,R_manual,((d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0))+
IF(d_Layer_2>0,1/((1-AreaFraction_Layer_2b)*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2a)+AreaFraction_Layer_2b*1/(d_Layer_1/lambda_Layer_1+d_Layer_2/lambda_Layer_2b)),(d_Layer_1/lambda_Layer_1+ IF(d_Layer_2>0,(1/((1-AreaFraction_Layer_2b)*lambda_Layer_2a/d_Layer_2+AreaFraction_Layer_2b*lambda_Layer_2b/d_Layer_2)),0) )))/2)) 
AS R_measure,
Date_Entry,
Date_Change,
Note_DataBaseAdmin
FROM Tab_Building_Measure
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_HG_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysHG, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysHG, 2, '0' ) 
	) USING utf8
) AS Code_SysHG, 
Tab_System_HG.*
FROM Tab_System_HG
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_HS_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysHS, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysHS, 2, '0' ) 
	) USING utf8 
) AS Code_SysHS, 
Tab_System_HS.*
FROM Tab_System_HS
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_HD_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysHD, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysHD, 2, '0' ) 
	) USING utf8 
) AS Code_SysHD, 
Tab_System_HD.*
FROM Tab_System_HD
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_HA_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_AuxH, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_AuxH, 2, '0' ) 
	) USING utf8 
) AS Code_AuxH, 
Tab_System_HA.*
FROM Tab_System_HA
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_System_H_subview1 AS
SELECT 
Code_StatusDataset,
Code_Country,
Code_BuildingSizeClass_System,
Number_Variant_SysH,
Description_SysH,
Description_National_SysH,
Remark_SysH,
FileName_Picture_SysH,
Picture_SysH,
Code_SysH_EC1,
Code_SysH_EC2,
Code_SysH_EC3,
Code_SysH_G1,
Code_SysH_G2,
Code_SysH_G3,
(SELECT Code_Type_SysHG FROM Tab_System_HG_view WHERE Tab_System_HG_view.Code_SysHG = CONVERT( Code_SysH_G1 USING utf8) ) AS Code_Type_SysH_G1,
(SELECT Code_Type_SysHG FROM Tab_System_HG_view WHERE Tab_System_HG_view.Code_SysHG = CONVERT( Code_SysH_G2 USING utf8) ) AS Code_Type_SysH_G2,
(SELECT Code_Type_SysHG FROM Tab_System_HG_view WHERE Tab_System_HG_view.Code_SysHG = CONVERT( Code_SysH_G3 USING utf8) ) AS Code_Type_SysH_G3,
Fraction_SysH_G2,
Fraction_SysH_G3,
Code_SysH_S,
Code_SysH_D,
Code_SysH_Aux,
Date_Entry,
Date_Change,
Note_DataBaseAdmin
FROM Tab_System_H
WHERE 1 ;





CREATE OR REPLACE VIEW Tab_System_H_subview2 AS
SELECT 
Code_StatusDataset,
Code_Country,
CONCAT( Code_SysH_EC1, IF (Code_SysH_EC1!=Code_SysH_EC2 AND Code_SysH_EC2 != '', CONCAT ('+', Code_SysH_EC2),''), IF (Code_SysH_EC1 != Code_SysH_EC3 AND Code_SysH_EC2 != Code_SysH_EC3 AND Code_SysH_EC3 != '', CONCAT ('+', Code_SysH_EC3), '')) 
AS CombiCode_SysH_EC,
CONCAT( IF(Code_Type_SysH_G1 IS NOT NULL , Code_Type_SysH_G1 , ''), IF(Code_Type_SysH_G2 IS NOT NULL , CONCAT ('+', Code_Type_SysH_G2) , ''), IF(Code_Type_SysH_G3 IS NOT NULL , CONCAT ('+', Code_Type_SysH_G3) , ''))
AS CombiCode_SysH_G,
Code_BuildingSizeClass_System,
Number_Variant_SysH,
Description_SysH,
Description_National_SysH,
Remark_SysH,
FileName_Picture_SysH,
Picture_SysH,
Code_SysH_EC1,
Code_SysH_EC2,
Code_SysH_EC3,
Code_SysH_G1,
Code_SysH_G2,
Code_SysH_G3,
Code_Type_SysH_G1,
Code_Type_SysH_G2,
Code_Type_SysH_G3,
Fraction_SysH_G2,
Fraction_SysH_G3,
Code_SysH_S,
Code_SysH_D,
Code_SysH_Aux,
Date_Entry,
Date_Change,
Note_DataBaseAdmin
FROM Tab_System_H_subview1;




CREATE OR REPLACE VIEW Tab_System_H_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		CombiCode_SysH_EC, '.', 
		CombiCode_SysH_G, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysH, 2, '0' ) 
	) USING utf8 
) AS Code_SysH, 
Tab_System_H_subview2.*
FROM Tab_System_H_subview2
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_System_WG_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysWG, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysWG, 2, '0' ) 
	) USING utf8 
) AS Code_SysWG, 
Tab_System_WG.*
FROM Tab_System_WG
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_W_subview1 AS
SELECT 
Code_StatusDataset,
Code_Country,
Code_BuildingSizeClass_System,
Number_Variant_SysW,
Description_SysW,
Description_National_SysW,
Remark_SysW,
FileName_Picture_SysW,
Picture_SysW,
Code_SysW_EC1,
Code_SysW_EC2,
Code_SysW_EC3,
Code_SysW_G1,
Code_SysW_G2,
Code_SysW_G3,
(SELECT Code_Type_SysWG FROM Tab_System_WG_view WHERE Tab_System_WG_view.Code_SysWG = CONVERT( Code_SysW_G1 USING utf8) ) AS Code_Type_SysW_G1,
(SELECT Code_Type_SysWG FROM Tab_System_WG_view WHERE Tab_System_WG_view.Code_SysWG = CONVERT( Code_SysW_G2 USING utf8) ) AS Code_Type_SysW_G2,
(SELECT Code_Type_SysWG FROM Tab_System_WG_view WHERE Tab_System_WG_view.Code_SysWG = CONVERT( Code_SysW_G3 USING utf8) ) AS Code_Type_SysW_G3,
Fraction_SysW_G2,
Fraction_SysW_G3,
Code_SysW_S,
Code_SysW_D,
Code_SysW_Aux,
Date_Entry,
Date_Change,
Note_DataBaseAdmin
FROM Tab_System_W
WHERE 1 ;





CREATE OR REPLACE VIEW Tab_System_W_subview2 AS
SELECT 
Code_StatusDataset,
Code_Country,
CONCAT( Code_SysW_EC1, IF (Code_SysW_EC1!=Code_SysW_EC2 AND Code_SysW_EC2 != '', CONCAT ('+', Code_SysW_EC2),''), IF (Code_SysW_EC1 != Code_SysW_EC3 AND Code_SysW_EC2 != Code_SysW_EC3 AND Code_SysW_EC3 != '', CONCAT ('+', Code_SysW_EC3), '')) 
AS CombiCode_SysW_EC,
CONCAT( IF(Code_Type_SysW_G1 IS NOT NULL , Code_Type_SysW_G1 , ''), IF(Code_Type_SysW_G2 IS NOT NULL , CONCAT ('+', Code_Type_SysW_G2) , ''), IF(Code_Type_SysW_G3 IS NOT NULL , CONCAT ('+', Code_Type_SysW_G3) , ''))
AS CombiCode_SysW_G,
Code_BuildingSizeClass_System,
Number_Variant_SysW,
Description_SysW,
Description_National_SysW,
Remark_SysW,
FileName_Picture_SysW,
Picture_SysW,
Code_SysW_EC1,
Code_SysW_EC2,
Code_SysW_EC3,
Code_SysW_G1,
Code_SysW_G2,
Code_SysW_G3,
Code_Type_SysW_G1,
Code_Type_SysW_G2,
Code_Type_SysW_G3,
Fraction_SysW_G2,
Fraction_SysW_G3,
Code_SysW_S,
Code_SysW_D,
Code_SysW_Aux,
Date_Entry,
Date_Change,
Note_DataBaseAdmin
FROM Tab_System_W_subview1;




CREATE OR REPLACE VIEW Tab_System_W_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		CombiCode_SysW_EC, '.', 
		CombiCode_SysW_G, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysW, 2, '0' ) 
	) USING utf8 
) AS Code_SysW,
Tab_System_W_subview2.*
FROM Tab_System_W_subview2
WHERE 1 ;






CREATE OR REPLACE VIEW Tab_System_WS_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysWS, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysWS, 2, '0' ) 
	) USING utf8 
) AS Code_SysWS,
Tab_System_WS.*
FROM Tab_System_WS
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_System_WD_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysWD, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysWD, 2, '0' ) 
	) USING utf8 
) AS Code_SysWD,
Tab_System_WD.*
FROM Tab_System_WD
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_System_WA_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_AuxW, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_AuxW, 2, '0' ) 
	) USING utf8 
) AS Code_AuxW, 
Tab_System_WA.*
FROM Tab_System_WA
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_System_Vent_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		Code_Type_SysVent, '.', 
		Code_BuildingSizeClass_System, '.', 
		LPAD( Number_Variant_SysVent, 2, '0' ) 
	) USING utf8 
) AS Code_SysVent,
Tab_System_Vent.*
FROM Tab_System_Vent
WHERE 1 ;


CREATE OR REPLACE VIEW Tab_System_EC_view AS
SELECT 
CONVERT( CONCAT( Code_EC_Specification_Version, '.', Code_Type_EnergyCarrier ) USING utf8 ) AS Code_EnergyCarrier_Specification,
Tab_System_EC.*
FROM Tab_System_EC
WHERE 1 ;



CREATE OR REPLACE VIEW Tab_CalcAdapt_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_Country, '.', 
		SUBSTR(Code_Type_CalcAdapt,1,1), '.',
		LPAD( Index_Variant_CalcAdapt, 2, '0' ) 
	) USING utf8 
) AS Code_CalcAdapt,
Tab_CalcAdapt.*
FROM Tab_CalcAdapt
WHERE 1 ;






CREATE OR REPLACE VIEW Tab_Type_Building_view AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_TypologyRegion, '.', 
		Code_BuildingSizeClass, '.',
		IF ((Code_BuildingSizeClass_Extension IS NOT NULL AND Code_BuildingSizeClass_Extension != '') ,  CONCAT(Code_BuildingSizeClass_Extension,'.'), '') ,
		SUBSTR(Code_ConstructionYearClass,4) , '.' ,
		IF ((Code_ConstructionYearClass_Extension IS NOT NULL and Code_ConstructionYearClass_Extension != ''),  CONCAT(Code_ConstructionYearClass_Extension,'.'), ''), 
		SUBSTR(Code_AdditionalParameter,4) 
	) USING utf8 
) AS Code_BuildingType,
ttb.*,

tcyc1.ConstructionYearClass_FirstYear AS Year1_Building,
tcyc1.ConstructionYearClass_LastYear AS Year2_Building,
0 AS Year2_Building_Extension,
tcyc1.Code_ConstructionYearClass_National

FROM Tab_Type_Building AS ttb
LEFT JOIN Tab_ConstrYearClass_view AS tcyc1 USING(Code_ConstructionYearClass);








CREATE OR REPLACE VIEW Tab_Building_subview1 AS
SELECT 
CONVERT( 
	CONCAT( 
		Code_BuildingType, '.', 
		Code_DataType_Building, '.',  
		LPAD( Number_Building, 3, '0' ) 
	) USING utf8 
) AS Code_Building, 

tb.*,
	Year1_Building,
	Year2_Building,
	Year2_Building_Extension,

(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Roof_1 ) AS U_Roof_1,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Roof_2 ) AS U_Roof_2,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_1 ) AS U_Wall_1,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_2 ) AS U_Wall_2,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_3 ) AS U_Wall_3,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Floor_1 ) AS U_Floor_1,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Floor_2 ) AS U_Floor_2,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Window_1 ) AS U_Window_1,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Window_2 ) AS U_Window_2,
(Select U FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Door_1 ) AS U_Door_1,

(Select g_gl_n FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Window_1 ) AS g_gl_n_Window_1,
(Select g_gl_n FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Window_2 ) AS g_gl_n_Window_2,

(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Roof_1 ) AS d_Insulation_Roof_1,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Roof_2 ) AS d_Insulation_Roof_2,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_1 ) AS d_Insulation_Wall_1,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_2 ) AS d_Insulation_Wall_2,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Wall_3 ) AS d_Insulation_Wall_3,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Floor_1 ) AS d_Insulation_Floor_1,
(Select d_Insulation FROM Tab_Building_Constr_view AS tb WHERE tb.Code_Construction =Code_Floor_2 ) AS d_Insulation_Floor_2,

(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Roof_1 ) AS R_Add_UnheatedSpace_Roof_1,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Roof_2 ) AS R_Add_UnheatedSpace_Roof_2,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_1 ) AS R_Add_UnheatedSpace_Wall_1,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_2 ) AS R_Add_UnheatedSpace_Wall_2,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_3 ) AS R_Add_UnheatedSpace_Wall_3,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Floor_1 ) AS R_Add_UnheatedSpace_Floor_1,
(Select R_Add_UnheatedSpace FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Floor_2 ) AS R_Add_UnheatedSpace_Floor_2,

(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Roof_1 ) AS b_Transmission_Roof_1,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Roof_2 ) AS b_Transmission_Roof_2,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_1 ) AS b_Transmission_Wall_1,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_2 ) AS b_Transmission_Wall_2,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Wall_3 ) AS b_Transmission_Wall_3,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Floor_1 ) AS b_Transmission_Floor_1,
(Select b_Transmission FROM Tab_Const_ConstrBorder AS tb WHERE tb.Code_ConstructionBorder =Code_ConstructionBorder_Floor_2 ) AS b_Transmission_Floor_2,

delta_U_ThermalBridging,
n_air_infiltration

FROM Tab_Building AS tb
LEFT JOIN Tab_Type_Building_view AS ttb USING (Code_BuildingType) 
LEFT JOIN Tab_Const_ThermalBridging USING (Code_ThermalBridging)
LEFT JOIN Tab_Const_Infiltration USING (Code_Infiltration) ;



CREATE OR REPLACE VIEW Tab_Building_view AS
SELECT
Code_Building,
Code_StatusDataset,
Code_Country,
Code_BuildingType,
Code_DataType_Building,
Number_Building,
Description_Building,
Description_Building_National,
Name_Photo_Building,
Photo_Building,
Remark_Building_1,
Remark_Building_2,
Remark_Building_3,
Remark_Building_4,
Date_Entry,
Date_Change,
Note_DataBaseAdmin,
Year1_Building,
Year2_Building,
Year2_Building_Extension,
Code_UtilisationType,
A_C_National,

A_C_ExtDim,
A_C_IntDim,
A_C_Use,
A_C_Living,
V_C,
IF(A_C_IntDim>0,A_C_IntDim,IF(A_C_ExtDim>0,0.85*A_C_ExtDim,IF(A_C_Living>0,1.1*A_C_Living,IF(A_C_Use>0,1.4*A_C_Use,0.85/3*V_C)))) AS A_C_Ref,
n_Apartment,
n_Storey,
Code_RoofType,
Code_AtticCond,
Code_CellarCond,
Code_AttachedNeighbours,
Code_ThermalBridging,
Code_Infiltration,
Code_Roof_1,
Code_Roof_2,
Code_Wall_1,
Code_Wall_2,
Code_Wall_3,
Code_Floor_1,
Code_Floor_2,
Code_Window_1,
Code_Window_2,
Code_Door_1,
Code_ConstructionBorder_Roof_1,
Code_ConstructionBorder_Roof_2,
Code_ConstructionBorder_Wall_1,
Code_ConstructionBorder_Wall_2,
Code_ConstructionBorder_Wall_3,
Code_ConstructionBorder_Floor_1,
Code_ConstructionBorder_Floor_2,
A_Roof_1,
A_Roof_2,
A_Wall_1,
A_Wall_2,
A_Wall_3,
A_Floor_1,
A_Floor_2,
A_Window_1,
A_Window_2,
A_Window_Horizontal,
A_Window_East,
A_Window_South,
A_Window_West,
A_Window_North,
A_Door_1,

IF( U_Roof_1 IS NOT NULL, U_Roof_1, 0 ) AS U_Roof_1,
IF( U_Roof_2 IS NOT NULL, U_Roof_2, 0 ) AS U_Roof_2,

IF( U_Wall_1 IS NOT NULL, U_Wall_1, 0 ) AS U_Wall_1,
IF( U_Wall_2 IS NOT NULL, U_Wall_2, 0 ) AS U_Wall_2,
IF( U_Wall_3 IS NOT NULL, U_Wall_3, 0 ) AS U_Wall_3,

IF( U_Floor_1 IS NOT NULL, U_Floor_1, 0 ) AS U_Floor_1,
IF( U_Floor_2 IS NOT NULL, U_Floor_2, 0 ) AS U_Floor_2,

IF( U_Window_1 IS NOT NULL, U_Window_1, 0 ) AS U_Window_1,
IF( U_Window_2 IS NOT NULL, U_Window_2, 0 ) AS U_Window_2,

IF( U_Door_1 IS NOT NULL, U_Door_1, 0 ) AS U_Door_1,

IF( g_gl_n_Window_1 IS NOT NULL, g_gl_n_Window_1, 0 ) AS g_gl_n_Window_1,
IF( g_gl_n_Window_2 IS NOT NULL, g_gl_n_Window_2, 0 ) AS g_gl_n_Window_2,

IF( d_Insulation_Roof_1 IS NOT NULL, d_Insulation_Roof_1, 0 ) AS d_Insulation_Roof_1,
IF( d_Insulation_Roof_2 IS NOT NULL, d_Insulation_Roof_2, 0 ) AS d_Insulation_Roof_2,

IF( d_Insulation_Wall_1 IS NOT NULL, d_Insulation_Wall_1, 0 ) AS d_Insulation_Wall_1,
IF( d_Insulation_Wall_2 IS NOT NULL, d_Insulation_Wall_2, 0 ) AS d_Insulation_Wall_2,
IF( d_Insulation_Wall_3 IS NOT NULL, d_Insulation_Wall_3, 0 ) AS d_Insulation_Wall_3,

IF( d_Insulation_Floor_1 IS NOT NULL, d_Insulation_Floor_1, 0 ) AS d_Insulation_Floor_1,
IF( d_Insulation_Floor_2 IS NOT NULL, d_Insulation_Floor_2, 0 ) AS d_Insulation_Floor_2,

IF( R_Add_UnheatedSpace_Roof_1 IS NOT NULL, R_Add_UnheatedSpace_Roof_1, 0 ) AS R_Add_UnheatedSpace_Roof_1,
IF( R_Add_UnheatedSpace_Roof_2 IS NOT NULL, R_Add_UnheatedSpace_Roof_2, 0 ) AS R_Add_UnheatedSpace_Roof_2,

IF( R_Add_UnheatedSpace_Wall_1 IS NOT NULL, R_Add_UnheatedSpace_Wall_1, 0 ) AS R_Add_UnheatedSpace_Wall_1,
IF( R_Add_UnheatedSpace_Wall_2 IS NOT NULL, R_Add_UnheatedSpace_Wall_2, 0 ) AS R_Add_UnheatedSpace_Wall_2,
IF( R_Add_UnheatedSpace_Wall_3 IS NOT NULL, R_Add_UnheatedSpace_Wall_3, 0 ) AS R_Add_UnheatedSpace_Wall_3,

IF( R_Add_UnheatedSpace_Floor_1 IS NOT NULL, R_Add_UnheatedSpace_Floor_1, 0 ) AS R_Add_UnheatedSpace_Floor_1,
IF( R_Add_UnheatedSpace_Floor_2 IS NOT NULL, R_Add_UnheatedSpace_Floor_2, 0 ) AS R_Add_UnheatedSpace_Floor_2,

IF( b_Transmission_Roof_1 IS NOT NULL, b_Transmission_Roof_1, 0 ) AS b_Transmission_Roof_1,
IF( b_Transmission_Roof_2 IS NOT NULL, b_Transmission_Roof_2, 0 ) AS b_Transmission_Roof_2,

IF( b_Transmission_Wall_1 IS NOT NULL, b_Transmission_Wall_1, 0 ) AS b_Transmission_Wall_1,
IF( b_Transmission_Wall_2 IS NOT NULL, b_Transmission_Wall_2, 0 ) AS b_Transmission_Wall_2,
IF( b_Transmission_Wall_3 IS NOT NULL, b_Transmission_Wall_3, 0 ) AS b_Transmission_Wall_3,

IF( b_Transmission_Floor_1 IS NOT NULL, b_Transmission_Floor_1, 0 ) AS b_Transmission_Floor_1,
IF( b_Transmission_Floor_2 IS NOT NULL, b_Transmission_Floor_2, 0 ) AS b_Transmission_Floor_2,

IF(A_Window_1>0, "1", "") AS b_Transmission_Window_1,
IF(A_Window_2>0, "1", "") AS b_Transmission_Window_2,
IF(A_Door_1>0, "1", "") AS b_Transmission_Door_1,

IF( delta_U_ThermalBridging IS NOT NULL, delta_U_ThermalBridging, 0 ) AS delta_U_ThermalBridging,
IF( n_air_infiltration IS NOT NULL, n_air_infiltration, 0 ) AS n_air_infiltration,

Code_SysH,
Code_SysW,
Code_SysVent

FROM Tab_Building_subview1 ;







LOAD DATA INFILE 'Tab_Const_AtticCond.csv' INTO TABLE Tab_Const_AtticCond FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_ConstrBorder.csv' INTO TABLE Tab_Const_ConstrBorder FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_Infiltration.csv' INTO TABLE Tab_Const_Infiltration FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_StatusDataset.csv' INTO TABLE Tab_Const_StatusDataset FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_Size.csv' INTO TABLE Tab_Const_SysType_Size FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_WS.csv' INTO TABLE Tab_Const_SysType_WS FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_AttNeighb.csv' INTO TABLE Tab_Const_AttNeighb FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_Country.csv' INTO TABLE Tab_Const_Country FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_Language.csv' INTO TABLE Tab_Const_Language FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_HA.csv' INTO TABLE Tab_Const_SysType_HA FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_Vent.csv' INTO TABLE Tab_Const_SysType_Vent FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_ThermalBridging.csv' INTO TABLE Tab_Const_ThermalBridging FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_BoundaryCondType.csv' INTO TABLE Tab_Const_BoundaryCondType FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_DataType_Building.csv' INTO TABLE Tab_Const_DataType_Building FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_MeasureType.csv' INTO TABLE Tab_Const_MeasureType FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_HD.csv' INTO TABLE Tab_Const_SysType_HD FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_WA.csv' INTO TABLE Tab_Const_SysType_WA FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_Type_CalcAdapt.csv' INTO TABLE Tab_Const_Type_CalcAdapt FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_BuildingSizeClass.csv' INTO TABLE Tab_Const_BuildingSizeClass FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_ElementType.csv' INTO TABLE Tab_Const_ElementType FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_RoofType.csv' INTO TABLE Tab_Const_RoofType FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_HG.csv' INTO TABLE Tab_Const_SysType_HG FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_WD.csv' INTO TABLE Tab_Const_SysType_WD FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_Utilisation.csv' INTO TABLE Tab_Const_Utilisation FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_CellarCond.csv' INTO TABLE Tab_Const_CellarCond FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_EnergyCarrier.csv' INTO TABLE Tab_Const_EnergyCarrier FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_HS.csv' INTO TABLE Tab_Const_SysType_HS FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Const_SysType_WG.csv' INTO TABLE Tab_Const_SysType_WG FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';


LOAD DATA INFILE 'Tab_ConstrYearClass.csv' INTO TABLE Tab_ConstrYearClass FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_BoundaryCond.csv' INTO TABLE Tab_BoundaryCond FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_AdditionalPar.csv' INTO TABLE Tab_AdditionalPar FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Building_Constr.csv' INTO TABLE Tab_Building_Constr FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_HG.csv' INTO TABLE Tab_System_HG FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_HS.csv' INTO TABLE Tab_System_HS FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_HD.csv' INTO TABLE Tab_System_HD FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_HA.csv' INTO TABLE Tab_System_HA FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_H.csv' INTO TABLE Tab_System_H FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_WG.csv' INTO TABLE Tab_System_WG FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_WS.csv' INTO TABLE Tab_System_WS FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_WD.csv' INTO TABLE Tab_System_WD FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_WA.csv' INTO TABLE Tab_System_WA FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_W.csv' INTO TABLE Tab_System_W FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_System_Vent.csv' INTO TABLE Tab_System_Vent FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';


LOAD DATA INFILE 'Tab_System_EC.csv' INTO TABLE Tab_System_EC FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_CalcAdapt.csv' INTO TABLE Tab_CalcAdapt FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';
LOAD DATA INFILE 'Tab_Type_Building.csv' INTO TABLE Tab_Type_Building FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';


/*
TRUNCATE `Tab_Building_Constr`;
TRUNCATE `Tab_Const_Country`;
TRUNCATE `Tab_System_EC`;
TRUNCATE `Tab_Const_EnergyCarrier`;
TRUNCATE `Tab_Const_Utilisation`;
TRUNCATE `Tab_Const_SysType_HG`;
TRUNCATE `Tab_Const_SysType_WG`;
TRUNCATE `Tab_Building`;
TRUNCATE `Tab_Type_Building`;
TRUNCATE `Tab_Const_Language`;
TRUNCATE `Tab_System_WG`;
TRUNCATE `Tab_System_W`;
TRUNCATE `Tab_Building_Measure`;
TRUNCATE `Tab_System_H`;
TRUNCATE `Tab_System_HG`;
TRUNCATE `Tab_Const_SysType_HD`;
TRUNCATE `Tab_Const_SysType_WD`;
TRUNCATE `Tab_Const_StatusDataset`;
TRUNCATE `Tab_Const_ElementType`;
TRUNCATE `Tab_Const_SysType_WS`;
TRUNCATE `Tab_ConstrYearClass`;
TRUNCATE `Tab_Const_BuildingSizeClass`;
TRUNCATE `Tab_Const_SysType_Vent`;
TRUNCATE `Tab_Const_SysType_WA`;
TRUNCATE `Tab_Const_AtticCond`;
TRUNCATE `Tab_Const_CellarCond`;
TRUNCATE `Tab_Const_ConstrBorder`;
TRUNCATE `Tab_Const_Infiltration`;
TRUNCATE `Tab_Const_SysType_HS`;
TRUNCATE `Tab_Const_ThermalBridging`;
TRUNCATE `Tab_System_HD`;
TRUNCATE `Tab_System_WS`;
TRUNCATE `Tab_BoundaryCond`;
TRUNCATE `Tab_Const_AttNeighb`;
TRUNCATE `Tab_Const_DataType_Building`;
TRUNCATE `Tab_Const_MeasureType`;
TRUNCATE `Tab_Const_RoofType`;
TRUNCATE `Tab_Const_SysType_Size`;
TRUNCATE `Tab_Const_BoundaryCondType`;
TRUNCATE `Tab_Const_SysType_HA`;
TRUNCATE `Tab_Const_Type_CalcAdapt`;
TRUNCATE `Tab_System_HA`;
TRUNCATE `Tab_System_HS`;
TRUNCATE `Tab_System_Vent`;
TRUNCATE `Tab_System_WA`;
TRUNCATE `Tab_System_WD`;
TRUNCATE `Tab_AdditionalPar`;
TRUNCATE `Tab_CalcAdapt`;


/****/

