-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 13, 2011 at 01:44 AM
-- Server version: 5.1.54
-- PHP Version: 5.3.5-1ubuntu7.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `uju2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tab_AdditionalPar`
--

DROP TABLE IF EXISTS `Tab_AdditionalPar`;
CREATE TABLE IF NOT EXISTS `Tab_AdditionalPar` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `ShortCut_AdditionalParameter` varchar(50) NOT NULL,
  `Name_AdditionalParameter` varchar(200) NOT NULL,
  `Description_AdditionalParameter` varchar(200) NOT NULL,
  `Code_AdditionalParameter_National` varchar(50) NOT NULL,
  `Name_AdditionalParameter_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Description_AdditionalParameter_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`ShortCut_AdditionalParameter`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_AdditionalPar`
--

REPLACE INTO `Tab_AdditionalPar` (`Code_StatusDataset`, `Code_Country`, `ShortCut_AdditionalParameter`, `Name_AdditionalParameter`, `Description_AdditionalParameter`, `Code_AdditionalParameter_National`, `Name_AdditionalParameter_National`, `Description_AdditionalParameter_National`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'Gen', 'Generic', '', 'Tipična', '', '', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_BoundaryCond`
--

DROP TABLE IF EXISTS `Tab_BoundaryCond`;
CREATE TABLE IF NOT EXISTS `Tab_BoundaryCond` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(10) NOT NULL,
  `Code_UtilisationType` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(10) NOT NULL,
  `Code_BuildingSizeClass` varchar(10) NOT NULL,
  `ShortCut_BoundaryCond` varchar(10) NOT NULL,
  `Name_BoundaryCond` varchar(200) NOT NULL,
  `Name_BoundaryCond_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Remarks` varchar(200) NOT NULL,
  `theta_i` decimal(10,5) NOT NULL,
  `F_red_htr1` decimal(10,5) NOT NULL,
  `F_red_htr4` decimal(10,5) NOT NULL,
  `n_air_use` decimal(10,5) NOT NULL,
  `h_room` decimal(10,5) NOT NULL,
  `phi_int` decimal(10,5) NOT NULL,
  `F_sh_hor` decimal(10,5) NOT NULL,
  `F_sh_vert` decimal(10,5) NOT NULL,
  `F_f` decimal(10,5) NOT NULL,
  `F_w` decimal(10,5) NOT NULL,
  `c_m` decimal(10,5) NOT NULL,
  `q_w_nd` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`ShortCut_BoundaryCond`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_BoundaryCond`
--

REPLACE INTO `Tab_BoundaryCond` (`Code_StatusDataset`, `Code_Country`, `Code_UtilisationType`, `Code_BuildingSizeClass_System`, `Code_BuildingSizeClass`, `ShortCut_BoundaryCond`, `Name_BoundaryCond`, `Name_BoundaryCond_National`, `Remarks`, `theta_i`, `F_red_htr1`, `F_red_htr4`, `n_air_use`, `h_room`, `phi_int`, `F_sh_hor`, `F_sh_vert`, `F_f`, `F_w`, `c_m`, `q_w_nd`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'EU', 'Residential', 'Gen', '-', 'SUH', 'standard boundary conditions single-unit housing, for cross-country comparisons', '', '', '20.00000', '0.90000', '0.80000', '0.40000', '2.50000', '3.00000', '0.80000', '0.60000', '0.30000', '0.90000', '45.00000', '10.00000', '2010-09-07', '0000-00-00', ''),
('Typology', 'EU', 'Residential', 'Gen', '-', 'MUH', 'standard boundary conditions multi-unit housing, for cross-country comparisons', '', '', '20.00000', '0.95000', '0.85000', '0.40000', '2.50000', '3.00000', '0.80000', '0.60000', '0.30000', '0.90000', '45.00000', '15.00000', '2010-09-07', '0000-00-00', ''),
('Typology', 'SI', 'Residential', 'Gen', '-', 'Gen', 'national boundery conditions according energy performance procedures', '', '', '20.00000', '1.00000', '1.00000', '0.50000', '2.80000', '4.00000', '1.00000', '1.00000', '0.80000', '0.90000', '156.25000', '12.00000', '2011-01-24', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Building`
--

DROP TABLE IF EXISTS `Tab_Building`;
CREATE TABLE IF NOT EXISTS `Tab_Building` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_BuildingType` varchar(50) NOT NULL,
  `Code_DataType_Building` varchar(50) NOT NULL,
  `Number_Building` int(11) NOT NULL,
  `Description_Building` varchar(200) NOT NULL,
  `Description_Building_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Name_Photo_Building` varchar(200) NOT NULL,
  `Photo_Building` varchar(200) NOT NULL,
  `Remark_Building_1` varchar(200) NOT NULL,
  `Remark_Building_2` varchar(200) NOT NULL,
  `Remark_Building_3` varchar(200) NOT NULL,
  `Remark_Building_4` varchar(200) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  `Code_UtilisationType` varchar(200) NOT NULL,
  `A_C_National` decimal(10,5) NOT NULL,
  `A_C_ExtDim` decimal(10,5) NOT NULL,
  `A_C_IntDim` decimal(10,5) NOT NULL,
  `A_C_Use` decimal(10,5) NOT NULL,
  `A_C_Living` decimal(10,5) NOT NULL,
  `V_C` decimal(10,5) NOT NULL,
  `n_Apartment` int(11) NOT NULL,
  `n_Storey` int(11) NOT NULL,
  `Code_RoofType` varchar(50) NOT NULL,
  `Code_AtticCond` varchar(50) NOT NULL,
  `Code_CellarCond` varchar(50) NOT NULL,
  `Code_AttachedNeighbours` varchar(50) NOT NULL,
  `Code_ThermalBridging` varchar(50) NOT NULL,
  `Code_Infiltration` varchar(50) NOT NULL,
  `Code_Roof_1` varchar(50) NOT NULL,
  `Code_Roof_2` varchar(50) NOT NULL,
  `Code_Wall_1` varchar(50) NOT NULL,
  `Code_Wall_2` varchar(50) NOT NULL,
  `Code_Wall_3` varchar(50) NOT NULL,
  `Code_Floor_1` varchar(50) NOT NULL,
  `Code_Floor_2` varchar(50) NOT NULL,
  `Code_Window_1` varchar(50) NOT NULL,
  `Code_Window_2` varchar(50) NOT NULL,
  `Code_Door_1` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Roof_1` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Roof_2` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Wall_1` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Wall_2` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Wall_3` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Floor_1` varchar(50) NOT NULL,
  `Code_ConstructionBorder_Floor_2` varchar(50) NOT NULL,
  `A_Roof_1` decimal(10,5) NOT NULL,
  `A_Roof_2` decimal(10,5) NOT NULL,
  `A_Wall_1` decimal(10,5) NOT NULL,
  `A_Wall_2` decimal(10,5) NOT NULL,
  `A_Wall_3` decimal(10,5) NOT NULL,
  `A_Floor_1` decimal(10,5) NOT NULL,
  `A_Floor_2` decimal(10,5) NOT NULL,
  `A_Window_1` decimal(10,5) NOT NULL,
  `A_Window_2` decimal(10,5) NOT NULL,
  `A_Window_Horizontal` decimal(10,5) NOT NULL,
  `A_Window_East` decimal(10,5) NOT NULL,
  `A_Window_South` decimal(10,5) NOT NULL,
  `A_Window_West` decimal(10,5) NOT NULL,
  `A_Window_North` decimal(10,5) NOT NULL,
  `A_Door_1` decimal(10,5) NOT NULL,
  `Code_SysH` varchar(50) NOT NULL,
  `Code_SysW` varchar(50) NOT NULL,
  `Code_SysVent` varchar(50) NOT NULL,
  PRIMARY KEY (`Code_BuildingType`,`Code_DataType_Building`,`Number_Building`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Building`
--

REPLACE INTO `Tab_Building` (`Code_StatusDataset`, `Code_Country`, `Code_BuildingType`, `Code_DataType_Building`, `Number_Building`, `Description_Building`, `Description_Building_National`, `Name_Photo_Building`, `Photo_Building`, `Remark_Building_1`, `Remark_Building_2`, `Remark_Building_3`, `Remark_Building_4`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`, `Code_UtilisationType`, `A_C_National`, `A_C_ExtDim`, `A_C_IntDim`, `A_C_Use`, `A_C_Living`, `V_C`, `n_Apartment`, `n_Storey`, `Code_RoofType`, `Code_AtticCond`, `Code_CellarCond`, `Code_AttachedNeighbours`, `Code_ThermalBridging`, `Code_Infiltration`, `Code_Roof_1`, `Code_Roof_2`, `Code_Wall_1`, `Code_Wall_2`, `Code_Wall_3`, `Code_Floor_1`, `Code_Floor_2`, `Code_Window_1`, `Code_Window_2`, `Code_Door_1`, `Code_ConstructionBorder_Roof_1`, `Code_ConstructionBorder_Roof_2`, `Code_ConstructionBorder_Wall_1`, `Code_ConstructionBorder_Wall_2`, `Code_ConstructionBorder_Wall_3`, `Code_ConstructionBorder_Floor_1`, `Code_ConstructionBorder_Floor_2`, `A_Roof_1`, `A_Roof_2`, `A_Wall_1`, `A_Wall_2`, `A_Wall_3`, `A_Floor_1`, `A_Floor_2`, `A_Window_1`, `A_Window_2`, `A_Window_Horizontal`, `A_Window_East`, `A_Window_South`, `A_Window_West`, `A_Window_North`, `A_Door_1`, `Code_SysH`, `Code_SysW`, `Code_SysVent`) VALUES
('Typology', 'SI', 'SI.N.SFH.01.Gen', 'ReEx', 1, '', '', '', '', '?', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.SFH.02.Gen', 'ReEx', 1, '', '', '', '', 'vzorÄna stavba 4', '', '', '', '2011-01-24', '0000-00-00', '', 'SingleFamily', '380.00000', '0.00000', '0.00000', '0.00000', '0.00000', '1438.80000', 1, 3, 'TR', 'N', 'N', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.02.01', '', 'SI.Wall.ReEx.02.01', '', '', 'SI.Floor.ReEx.01.02', '', 'SI.Window.ReEx.02.01', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Cellar', '', '126.50000', '0.00000', '207.10000', '0.00000', '0.00000', '98.60000', '0.00000', '58.40000', '0.00000', '0.00000', '14.50000', '29.60000', '6.70000', '7.60000', '6.80000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.SFH.03.Gen', 'ReEx', 1, '', '', '', '', 'vzorÄna stavba 2', '', '', '', '2011-01-24', '0000-00-00', '', 'SingleFamily', '181.00000', '0.00000', '0.00000', '0.00000', '0.00000', '538.75000', 1, 2, 'TR', 'N', 'N', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.02.01', '', 'SI.Wall.ReEx.03.01', '', '', 'SI.Floor.ReEx.03.01', '', 'SI.Window.ReEx.02.01', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Cellar', '', '91.70000', '0.00000', '149.00000', '0.00000', '0.00000', '89.20000', '0.00000', '22.80000', '0.00000', '0.00000', '3.20000', '8.80000', '3.50000', '7.30000', '7.70000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.SFH.04.Gen', 'ReEx', 1, '', '', '', '', 'vzorÄna stavba 1', '', '', '', '2011-01-24', '0000-00-00', '', 'SingleFamily', '113.20000', '0.00000', '0.00000', '0.00000', '0.00000', '381.88000', 1, 2, 'TR', 'N', 'N', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.04.03', '', 'SI.Wall.ReEx.04.02', '', '', 'SI.Floor.ReEx.04.01', '', 'SI.Window.ReEx.04.03', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Cellar', '', '133.20000', '0.00000', '92.10000', '0.00000', '0.00000', '113.20000', '0.00000', '22.30000', '0.00000', '0.00000', '4.10000', '1.90000', '6.60000', '9.70000', '0.00000', 'SI.DH.TS.MUH.10', 'SI.Bio.B_WP.SUH.07', 'SI.-.Gen.01'),
('Typology', 'SI', 'SI.N.SFH.05.Gen', 'ReEx', 1, '', '', '', '', 'wiener', '', '', '', '2011-01-24', '0000-00-00', '', 'SingleFamily', '285.00000', '0.00000', '0.00000', '0.00000', '0.00000', '844.00000', 1, 3, 'TR', 'N', 'N', 'B_Alone', 'Medium', 'Medium', 'SI.Roof.ReEx.05.01', '', 'SI.Wall.ReEx.04.04', '', '', 'SI.Floor.ReEx.05.01', '', 'SI.Window.ReEx.04.02', '', 'SI.Door.ReEx.01.01', 'Ext', '', 'Ext', '', '', 'Cellar', '', '69.13000', '0.00000', '235.93000', '0.00000', '0.00000', '104.24000', '0.00000', '29.95000', '0.00000', '0.00000', '6.89000', '9.03000', '9.50000', '6.53000', '11.76000', 'SI.Oil.B_NC.SUH.01', 'SI.Gas.G_IWH.SUH.04', 'SI.-.Gen.01'),
('Typology', 'SI', 'SI.N.SFH.06.Gen', 'ReEx', 1, '', '', '', '', 'perovo', '', '', '', '2010-09-07', '0000-00-00', '', 'SingleFamily', '286.81000', '0.00000', '0.00000', '0.00000', '129.59000', '896.28000', 1, 2, 'TR', 'N', 'N', 'B_Alone', 'Low', 'Low', 'SI.Roof.ReEx.05.02', 'SI.Roof.ReEx.05.02', 'SI.Wall.ReEx.05.03', 'SI.Wall.ReEx.05.03', '', 'SI.Floor.ReEx.05.02', 'SI.Floor.ReEx.05.02', 'SI.Window.ReEx.05.02', '', 'SI.Door.ReEx.01.01', 'Ext', 'Ext', 'Ext', 'Ext', 'Ext', 'Cellar', 'Cellar', '54.95000', '19.20000', '35.47000', '68.60000', '0.00000', '107.72000', '21.87000', '9.89000', '0.00000', '2.18000', '0.00000', '0.00000', '0.00000', '0.00000', '10.02000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.01.Gen', 'ReEx', 1, '', '', '', '', 'stara ljubljana??', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.02.Gen', 'ReEx', 1, '', '', '', '', '?', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.03.Gen', 'ReEx', 1, '', '', '', '', 'testen', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.04.Gen', 'ReEx', 1, '', '', '', '', '?', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.05.Gen', 'ReEx', 1, '', '', '', '', 'raÄe', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.TH.06.Gen', 'ReEx', 1, '', '', '', '', 'wienerberger', '', '', '', '0000-00-00', '0000-00-00', '', 'SingleFamily', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.01.Gen', 'ReEx', 1, '', '', '', '', 'koroÅ¡ka??', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.02.Gen', 'ReEx', 1, '', '', '', '', 'vzorÄna stavba 7', '', '', '', '2011-01-24', '0000-00-00', '', 'Apartment', '362.00000', '0.00000', '0.00000', '0.00000', '0.00000', '1541.25000', 4, 5, '', '', '', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.01.03', '', 'SI.Wall.ReEx.02.03', '', '', 'SI.Floor.ReEx.01.02', '', 'SI.Window.ReEx.01.02', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Cellar', '', '70.00000', '0.00000', '262.10000', '32.50000', '0.00000', '105.00000', '0.00000', '101.70000', '0.00000', '0.00000', '31.70000', '26.50000', '43.50000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.03.Gen', 'ReEx', 1, '', '', '', '', 'vzorÄna stavba 15', '', '', '', '2011-01-24', '0000-00-00', '', 'Apartment', '2528.00000', '0.00000', '0.00000', '0.00000', '0.00000', '8863.75000', 40, 6, '', '', '', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.01.03', '', 'SI.Wall.ReEx.02.03', '', '', 'SI.Floor.ReEx.03.01', '', 'SI.Window.ReEx.02.01', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Cellar', '', '506.50000', '0.00000', '1242.90000', '0.00000', '0.00000', '506.50000', '0.00000', '267.90000', '0.00000', '0.00000', '110.60000', '32.30000', '113.00000', '12.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.04.Gen', 'ReEx', 1, '', '', '', '', 'jakopiÄeva', '', '', '', '2011-01-24', '0000-00-00', '', 'Apartment', '876.38000', '0.00000', '0.00000', '0.00000', '0.00000', '2738.69000', 12, 7, '', '', '', 'B_Alone', 'High', 'High', 'SI.Ceiling.ReEx.02.01', '', 'SI.Wall.ReEx.03.05', 'SI.Wall.ReEx.03.05', '', 'SI.Floor.ReEx.04.01', '', 'SI.Window.ReEx.04.02', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', 'Ext', '', 'Soil', '', '140.00000', '0.00000', '895.50000', '21.10000', '0.00000', '233.00000', '0.00000', '101.50000', '0.00000', '0.00000', '40.60000', '0.00000', '60.90000', '0.00000', '14.70000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.05.Gen', 'ReEx', 1, '', '', '', '', 's4', '', '', '', '2011-01-24', '0000-00-00', '', 'Apartment', '661.72000', '0.00000', '0.00000', '0.00000', '0.00000', '2067.88000', 5, 2, '', '', '', 'B_Alone', 'Medium', 'Medium', 'SI.Ceiling.ReEx.04.01', '', 'SI.Wall.ReEx.04.08', 'SI.Wall.ReEx.04.08', '', 'SI.Ceiling.ReEx.04.01', '', 'SI.Window.ReEx.04.02', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', 'Ext', '', 'Cellar', '', '246.18000', '0.00000', '221.76000', '545.42000', '0.00000', '492.36000', '0.00000', '143.81000', '0.00000', '0.00000', '41.21000', '38.28000', '36.24000', '28.08000', '10.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.MFH.06.Gen', 'ReEx', 1, '', '', '', '', 'borovnica', '', '', '', '2011-01-24', '0000-00-00', '', 'Apartment', '1851.00000', '0.00000', '0.00000', '0.00000', '0.00000', '5785.00000', 5, 4, '', '', '', 'B_Alone', 'Low', 'Low', 'SI.Ceiling.ReEx.05.02', '', 'SI.Wall.ReEx.05.01', '', '', 'SI.Ceiling.ReEx.04.03', '', 'SI.Window.ReEx.05.02', '', 'SI.Door.ReEx.01.01', 'Unh', '', 'Ext', '', '', 'Soil', '', '417.75000', '0.00000', '559.38000', '0.00000', '0.00000', '395.10000', '0.00000', '304.60000', '0.00000', '0.00000', '97.30000', '0.00000', '48.06000', '159.24000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.01.Gen', 'ReEx', 1, '', '', '', '', 'nebotiÄnik', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.02.Gen', 'ReEx', 1, '', '', '', '', '?', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.03.Gen', 'ReEx', 1, '', '', '', '', 'topniÅ¡ka', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.04.Gen', 'ReEx', 1, '', '', '', '', 'stoÅ¾ice', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.05.Gen', 'ReEx', 1, '', '', '', '', 'celovÅ¡ki dvori', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01'),
('Typology', 'SI', 'SI.N.AB.06.Gen', 'ReEx', 1, '', '', '', '', 'majske poljane', '', '', '', '0000-00-00', '0000-00-00', '', 'Apartment', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', 'SI.Gas.G_IWH+Solar.SUH.08', 'SI.Gas.G_IWH+Solar.SUH.05', 'SI.Bal_Rec.Gen.01');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Building_Constr`
--

DROP TABLE IF EXISTS `Tab_Building_Constr`;
CREATE TABLE IF NOT EXISTS `Tab_Building_Constr` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_ElementType` varchar(50) NOT NULL,
  `Code_DataType_Construction` varchar(50) NOT NULL,
  `Code_Construction_ConstructionYearClass` varchar(50) NOT NULL,
  `Number_Construction_Variant` int(11) NOT NULL,
  `Type_Construction` varchar(200) NOT NULL,
  `Type_Construction_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci NOT NULL,
  `Description_Construction` varchar(200) NOT NULL,
  `Description_Construction_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci NOT NULL,
  `Remark_Construction` varchar(200) NOT NULL,
  `Name_Picture_Construction` varchar(200) NOT NULL,
  `Picture_Construction` varchar(200) NOT NULL,
  `Year1_Construction` int(11) NOT NULL,
  `Year2_Construction` int(11) NOT NULL,
  `d_Insulation` decimal(10,5) NOT NULL,
  `U` decimal(10,5) NOT NULL,
  `g_gl_n` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_ElementType`,`Code_DataType_Construction`,`Code_Construction_ConstructionYearClass`,`Number_Construction_Variant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Building_Constr`
--

REPLACE INTO `Tab_Building_Constr` (`Code_StatusDataset`, `Code_Country`, `Code_ElementType`, `Code_DataType_Construction`, `Code_Construction_ConstructionYearClass`, `Number_Construction_Variant`, `Type_Construction`, `Type_Construction_National`, `Description_Construction`, `Description_Construction_National`, `Remark_Construction`, `Name_Picture_Construction`, `Picture_Construction`, `Year1_Construction`, `Year2_Construction`, `d_Insulation`, `U`, `g_gl_n`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.01', 1, 'Vauit Celling over unheated basement', 'Strop nad kletjo', '', 'Opečni obok, nasutje, bet. Estrih, leseni pod', '', 'Ceiling_Vault.wmf', '', 0, 1945, '0.00000', '1.00000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.01', 2, 'Wooden ceiling', 'Strop proti podstrešju', '', 'Lesen tramovni strop, nasutje, bet. estrih, slepi pod', '', 'Ceiling_WoodBeam_Cinders.wmf', '', 0, 1970, '0.00000', '1.00000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.01', 3, 'Concrete Ceiling no insulation', 'Strop nad kletjo', '', 'Betonska plošča, betonski estrih, lesni pod', '', 'Ceiling_Concrete_WoodenFlooring.wmf', '', 0, 1980, '0.00000', '1.80000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.02', 1, 'Concrete ceiling with thin insulation (2 cm)', 'Strop nad kletjo', '', 'Betonska plošča, toplotna izolacija 2 cm, betonski estrih, lesni pod', '', 'Ceiling_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 1946, 1980, '0.02000', '1.00000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.02', 2, 'Ceiling Cavity Blocks thin insulation (2 cm)', 'Strop nad kletjo', '', 'Votličava polnila, tlačna plošča, toplotna izolacija 2 cm', '', 'Ceiling_CavityBlocks_Concrete_InsulationAbove.wmf', '', 1946, 1970, '0.02000', '0.90000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.03', 1, 'Concrete ceiling with medium insulation (5 cm)', 'Strop proti podstrešju', '', 'Betonska plošča, toplotna izolacija 5 cm, betonski estrih, lesni pod', '', 'Ceiling_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 1971, 2002, '0.05000', '0.67000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.03', 2, 'Pourus concrete ceiling with insulation', 'Strop proti podstrešju', '', 'Strop iz celičnega betona 15 cm s toplotno izolacijo 5 cm', '', 'Ceiling_Pourus_Insulation_Above.bmp', '', 1971, 1980, '0.05000', '0.52000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.04', 1, 'Concrete ceiling with medium insulation (8 cm)', 'Strop proti podstrešju', '', 'Betonska plošča, toplotna izolacija 8 cm, betonski estrih, lesni pod', '', 'Ceiling_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 1981, 1990, '0.08000', '0.45000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.04', 2, 'Pourus concrete ceiling with insulation (8 cm)', 'Strop proti podstrešju', '', 'Strop iz celičnega betona 15 cm s toplotno izolacijo 8 cm', '', 'Ceiling_Pourus_Insulation_Above.bmp', '', 1981, 1990, '0.08000', '0.38000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.04', 3, 'Pourus concrete ceiling with insulation (10 cm)', 'Strop proti podstrešju', '', 'Strop iz celičnega betona 15 cm s toplotno izolacijo 10 cm', '', 'Ceiling_Pourus_Insulation_Above.bmp', '', 1990, 2002, '0.10000', '0.32000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.05', 1, 'Concrete ceiling with tick insulation (30 cm)', 'Strop proti podstrešju', '', 'Betonska plošča, toplotna izolacija 30 cm', '', 'Ceiling_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 2001, 2011, '0.30000', '0.13000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Ceiling', 'ReEx', 'SI.05', 2, 'Concrete ceiling with tick insulation (15 cm)', 'Strop proti podstrešju', '', 'Betonska plošča, toplotna izolacija 15 cm', '', 'Ceiling_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 2001, 2011, '0.15000', '0.26000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Door', 'ReEx', 'SI.01', 1, 'standard door', 'Vrata', '', 'Zunanja vrata', '', '', '', 0, 2011, '0.00000', '1.80000', '0.00000', '2010-10-14', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.01', 1, 'Concrete floor on the ground', 'Tla na terenu', '', 'Betonski tlak 30 cm z ali brez estriha', '', 'Floor_Concrete_CementScreed.bmp', '', 0, 1945, '0.00000', '2.60000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.01', 2, 'Concrete floor on the ground with woode floor', 'Tla na terenu', '', 'Podložni beton, nasutje, slepi - leseni pod', '', 'Floor_Concrete_WoodenFlooring.bmp', '', 0, 1945, '0.00000', '1.50000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.02', 1, 'Concrete floor on the ground with thin insulation (2 cm)', 'Tla na terenu', '', 'Podložni beton, bit. hidroizolacija, toplotna izolacija 2 cm, estrih, obloga', '', 'Floor_Concrete_CementScreed_ThinInsulationBetween.bmp', '', 1946, 1970, '0.02000', '1.40000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.03', 1, 'Floor on ground with thin insulation (3 cm)', 'Tla na terenu', '', 'Tla na terenu s 3 cm toplotne izolacije', '', 'Floor_thin_insulation.bmp', '', 1971, 1980, '0.03000', '0.96000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.04', 1, 'Floor on ground with medium insulation (5 cm)', 'Tla na terenu', '', 'Tla na terenu s 5 cm toplotne izolacije', '', 'Floor_thin_insulation.bmp', '', 1981, 2002, '0.05000', '0.65000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.05', 1, 'Floor on ground with thick insulation (10 cm)', 'Tla na terenu', '', 'Tla na terenu z 10 cm toplotne izolacije', '', 'Floor_Concrete_CementScreed_ThickInsulationBetween.bmp', '', 2002, 2010, '0.10000', '0.33000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Floor', 'ReEx', 'SI.05', 2, 'Floor on ground with thick insulation (15 cm)', 'Tla na terenu', '', 'Tla na terenu z 15 cm toplotne izolacije', '', 'Floor_Concrete_CementScreed_ThickInsulationBetween.bmp', '', 2002, 2010, '0.15000', '0.17000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.01', 1, 'Roof', 'Poševna streha', '', 'Leseno ostrešje z ometom na opažu', '', 'Roof_CavityBetweenRafters_ReedMatPlaster.wmf', '', 0, 1970, '0.00000', '2.70000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.02', 1, 'Roof with thin insulation (5 cm)', 'Poševna streha', '', 'Poševna streha s 5 cm toplotne izolacije med škarniki', '', 'Roof_Rafters_ThinInsulationCavity.wmf', '', 1946, 1980, '0.05000', '0.90000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.04', 1, 'Roof with medium insulation (8 cm)', 'Poševna streha', '', 'Poševna streha z 8 cm toplotne izolacije med škarniki', '', 'Roof_Rafters_ThinInsulationCavity.wmf', '', 1981, 1990, '0.08000', '0.60000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.04', 2, 'Roof with thick insulation (12 cm)', 'Poševna streha', '', 'Poševna streha z 12 cm toplotne izolacije med škarniki', '', 'Roof_Rafters_ThinInsulationCavity.wmf', '', 1990, 2002, '0.13000', '0.30000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.05', 1, 'Roof with thick insulation (20 cm)', 'Poševna streha', '', 'Poševna streha z 20 cm toplotne izolacije med škarniki', '', 'Roof_Rafters_ThinInsulationCavity.wmf', '', 2002, 2010, '0.20000', '0.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.05', 2, 'Flat roof with thick insulation (20 cm)', 'Ravna streha', '', 'Ravna streha z 20 cm toplotne izolacije', '', 'Ceiling_Concrete_CementScreed_ThickInsulationBetween.wmf', '', 2002, 2010, '0.20000', '0.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Roof', 'ReEx', 'SI.05', 3, 'Roof with thick insulation (30 cm)', 'Poševna streha', '', 'Poševna streha z 30 cm toplotne izolacije med škarniki', '', 'Roof_Rafters_ThinInsulationCavity.wmf', '', 2002, 2010, '0.30000', '0.13000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.01', 1, 'Brick wall', 'Zunanja opečnata stena', '', 'Polna opeka, omet', '', 'Wall_Brickwork.wmf', '', 0, 1970, '0.00000', '1.50000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.01', 2, 'Stone wall', 'Zunanja kamnita stena', '', 'Naravni kamen z ali brez ometa', '', 'Wall_ThickBrickwork.wmf', '', 0, 1945, '0.00000', '1.50000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.01', 3, 'Wooden wall', 'Zunanja lesena stena', '', 'Stena iz lesenih tramičev', '', 'Wall_Logs_Plaster.wmf', '', 0, 1945, '0.00000', '0.70000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.02', 1, 'Honeycomb thin brick wall', 'Zunanja stena', '', 'Votlličasta opeka 29 cm', '', 'Wall_HoneycombBrick.wmf', '', 1946, 1970, '0.00000', '1.50000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.02', 2, 'Honeycomb thick brick wall', 'Zunanja stena', '', 'Votlličasta opeka 55 cm', '', 'Wall_HoneycombBrick.wmf', '', 1946, 1970, '0.00000', '0.90000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.02', 3, 'Concrete brick wall', 'Zunanja stena', '', 'Betonski blok, omet', '', 'Wall_PorousConcrete.wmf', '', 1946, 1970, '0.00000', '1.80000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.02', 4, 'Porus concrete wall', 'Zunanja stena', '', 'Blok iz celičnega betona, omet', '', 'Wall_PorousConcrete.wmf', '', 1946, 1970, '0.00000', '1.10000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.02', 5, 'Wall concrete no insulation', 'Zunanja stena', '', 'Betonska stena', '', 'Wall_Concrete.bmp', '', 1970, 1980, '0.00000', '2.80000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 1, 'Honeycomb brick wall with thin insulation (3 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 3 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 1971, 1980, '0.03000', '0.70000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 2, 'Brickwork Two Leaves with thin insulation (3 cm)', 'Zunanja stena', '', 'Votličava opeka 19 cm, omet, toplotna izolacija 3 cm, prezračevani sloj, fasadna opeka', '', 'Wall_BrickworkTwoLayers_InsulationCavity.wmf', '', 1971, 1980, '0.03000', '0.70000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 3, 'Concrete wall and porous concrete', 'Zunanja stena', '', 'Beton iz kamnitega agregata 20 cm, celični beton 10 cm, omet', '', 'Wall_Concrete_PorousConcrete.bmp', '', 1971, 1980, '0.00000', '1.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 4, 'Light frame wall with insulation and cavity', 'Zunanja stena', '', 'Montažna stena s 15 cm izolacije in prezračevanim slojem', '', 'Wall_LightFrame_InsulationCavity.wmf', '', 1971, 1980, '0.15000', '0.26000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 5, 'Wall concrete with thin insulation (5 cm)', 'Zunanja stena', '', 'Betonska stena s 5 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 1981, 2002, '0.05000', '0.62000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.03', 6, 'Wall concrete panel with thin insulation (5 cm)', 'Zunanja stena', '', 'Panelna betonska stena s 5 cm toplotne izolacije', '', 'Wall_Concrete_Sandwich.wmf', '', 1970, 1990, '0.05000', '0.60000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 1, 'Honeycomb brick wall with medium insulation (5 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 5 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 1981, 1990, '0.05000', '0.55000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 2, 'Brickwork Two Leaves with medium insulation (5 cm)', 'Zunanja stena', '', 'Votličava opeka 19 cm, omet, toplotna izolacija 5 cm, prezračevani sloj, fasadna opeka', '', 'Wall_BrickworkTwoLayers_InsulationCavity.wmf', '', 1981, 1990, '0.05000', '0.52000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 3, 'Light frame wall with insulation and cavity', 'Zunanja stena', '', 'Montažna stena z 18 cm izolacije in prezračevanim slojem', '', 'Wall_LightFrame_InsulationCavity.wmf', '', 1981, 1990, '0.18000', '0.22000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 4, 'Honeycomb brick wall with medium insulation (8 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 8 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 1990, 2002, '0.08000', '0.38000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 5, 'Brickwork Two Leaves with medium insulation (8 cm)', 'Zunanja stena', '', 'Votličava opeka 19 cm, omet, toplotna izolacija 8 cm, prezračevani sloj, fasadna opeka', '', 'Wall_BrickworkTwoLayers_InsulationCavity.wmf', '', 1981, 1990, '0.08000', '0.38000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 6, 'Light frame wall with insulation and cavity (20 cm)', 'Zunanja stena', '', 'Montažna stena z 20 cm izolacije in prezračevanim slojem', '', 'Wall_LightFrame_InsulationCavity.wmf', '', 1981, 1990, '0.20000', '0.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 7, 'Wall concrete with medium insulation (8 cm)', 'Zunanja stena', '', 'Betonska stena s 8 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 1990, 2010, '0.08000', '0.42000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.04', 8, 'Wall concrete with thick insulation (10 cm)', 'Zunanja stena', '', 'Betonska stena z 10 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 2002, 2010, '0.10000', '0.35000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 1, 'Wall concrete with thick insulation (12 cm)', 'Zunanja stena', '', 'Betonska stena z 12 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 2002, 2010, '0.12000', '0.30000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 2, 'Honeycomb brick wall with thick insulation (12 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 12 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 2002, 2010, '0.10000', '0.30000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 3, 'Honeycomb brick wall with thick insulation (15 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 15 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 2002, 2011, '0.15000', '0.23000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 4, 'Honeycomb brick wall with thick insulation (20 cm)', 'Zunanja stena', '', 'Votličava opeka 29 cm, toplotna izolacija 20 cm', '', 'Wall_Brickwork_ThinInsulationOutside.wmf', '', 2002, 2011, '0.20000', '0.18000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 5, 'Wall concrete with thick insulation (15 cm)', 'Zunanja stena', '', 'Betonska stena s 15 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 2002, 2010, '0.15000', '0.26000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Wall', 'ReEx', 'SI.05', 6, 'Wall concrete with thick insulation (20 cm)', 'Zunanja stena', '', 'Betonska stena z 20 cm toplotne izolacije', '', 'Wall_Concrete_Insulation_Outside.bmp', '', 2002, 2010, '0.20000', '0.19000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.01', 1, 'Wooden Window 1P', 'Okno', '', 'Lesno okno z enojno zasteklitvijo', '', 'Window_Wood_1P.wmf', '', 0, 1945, '0.00000', '5.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.01', 2, 'Wooden Window box', 'Okno', '', 'Leseno škatlasto okno', '', 'Window_Wood_BoxType_2P.wmf', '', 0, 1945, '0.00000', '2.20000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.02', 1, 'Wooden Window 2P', 'Okno', '', 'Lesno okno z dvojno zasteklitvijo', '', 'Window_Wood_2P.wmf', '', 1946, 2002, '0.00000', '2.80000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.02', 2, 'Woden Window Composit', 'Okno', '', 'Leseno vezano okno z dvemi stekli', '', 'Window_WoodComposite_2P.wmf', '', 1946, 1990, '0.00000', '2.30000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.04', 1, 'Wood Window with 2P low e', 'Okno', '', 'Leseno okno z dvoslojno toplotno izolacijsko zasteklitvijo', '', 'Window_Wood_2P.wmf', '', 1990, 2002, '0.00000', '1.50000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.04', 2, 'PVC Window with 2P low e', 'Okno', '', 'PVC okno z dvoslojno toplotno izolacijsko zasteklitvijo', '', 'Window_Plastic_2P.wmf', '', 1990, 2002, '0.00000', '1.40000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.04', 3, 'Alu Window with 2P low e', 'Okno', '', 'Alu okno z dvoslojno toplotno izolacijsko zasteklitvijo', '', 'Window_MetalNoThermalBreak_2P.wmf', '', 1990, 2002, '0.00000', '1.60000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 1, 'Wood Window with 2P low e and gas', 'Okno', '', 'Leseno okno z dvoslojno zasteklitvijo low e in plinom', '', 'Window_Wood_2P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '1.20000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 2, 'PVC Window with 2P low e and gas', 'Okno', '', 'PVC okno z dvoslojno zasteklitvijo low e in plinom', '', 'Window_Plastic_2P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '1.10000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 3, 'Alu Window with 2P low e and gas', 'Okno', '', 'Alu okno z dvoslojno zasteklitvijo low e in plinom', '', 'Window_MetalThermalBreak_2P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '1.30000', '0.60000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 4, 'Wood Window with 3P low e and gas', 'Okno', '', 'Leseno okno z troslojno zasteklitvijo low e in plinom', '', 'Window_Wood_3P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '0.80000', '0.50000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 5, 'PVC Window with 3P low e and gas', 'Okno', '', 'PVC okno z troslojno zasteklitvijo low e in plinom', '', 'Window_Plastic_3P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '0.70000', '0.50000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Window', 'ReEx', 'SI.05', 6, 'Alu Window with 3P low e and gas', 'Okno', '', 'Alu okno z troslojno zasteklitvijo low e in plinom', '', 'Window_MetalThermalBreak_3P_LowE_Gas.wmf', '', 2002, 2010, '0.00000', '0.90000', '0.50000', '2011-01-24', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Building_Measure`
--

DROP TABLE IF EXISTS `Tab_Building_Measure`;
CREATE TABLE IF NOT EXISTS `Tab_Building_Measure` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_ElementType` varchar(50) NOT NULL,
  `Code_MeasureType` varchar(50) NOT NULL,
  `Number_Variant_MeasureType` int(11) NOT NULL,
  `Description_Measure` varchar(200) NOT NULL,
  `Description_Measure_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Remark_Measure` varchar(200) NOT NULL,
  `Name_Picture_Measure` varchar(200) NOT NULL,
  `Picture_Measure` varchar(200) NOT NULL,
  `U_construction` decimal(10,5) NOT NULL,
  `R_manual` decimal(10,5) NOT NULL,
  `d_Layer_1` decimal(10,5) NOT NULL,
  `lambda_Layer_1` decimal(10,5) NOT NULL,
  `d_Layer_2` decimal(10,5) NOT NULL,
  `lambda_Layer_2a` decimal(10,5) NOT NULL,
  `lambda_Layer_2b` decimal(10,5) NOT NULL,
  `AreaFraction_Layer_2b` decimal(10,5) NOT NULL,
  `g_gl_n` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_ElementType`,`Code_MeasureType`,`Number_Variant_MeasureType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Building_Measure`
--

REPLACE INTO `Tab_Building_Measure` (`Code_StatusDataset`, `Code_Country`, `Code_ElementType`, `Code_MeasureType`, `Number_Variant_MeasureType`, `Description_Measure`, `Description_Measure_National`, `Remark_Measure`, `Name_Picture_Measure`, `Picture_Measure`, `U_construction`, `R_manual`, `d_Layer_1`, `lambda_Layer_1`, `d_Layer_2`, `lambda_Layer_2a`, `lambda_Layer_2b`, `AreaFraction_Layer_2b`, `g_gl_n`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'Roof', 'Insulation16cm', 1, 'insulate cavity between rafters 12 cm + add 4 cm insulation layer', 'Izolacija strhe, 12 cm med širovci, ter dodatnih 4 cm', '', 'Roof_Rafters_InsulationCavityAndThinBelow.wmf', '', '0.00000', '0.00000', '0.04000', '0.04000', '0.12000', '0.03500', '0.13000', '0.15000', '0.00000', '0000-00-00', '0000-00-00', '3.57056856674205'),
('Typology', 'SI', 'Roof', 'Insulation20cm', 1, 'insulate cavity between rafters 12 cm + add 10 cm insulation layer', 'Izolacija strhe, 12 cm med širovci, ter dodatnih 10 cm', '', 'Roof_Rafters_InsulationCavityAndAbove.wmf', '', '0.00000', '0.00000', '0.10000', '0.04000', '0.12000', '0.03500', '0.13000', '0.15000', '0.00000', '0000-00-00', '0000-00-00', '5.13930390629474'),
('Typology', 'SI', 'Roof', 'Insulation30cm', 1, 'insulate cavity between rafters 12 cm + add 18 cm insulation layer', 'Izolacija strhe, 12 cm med širovci, ter dodatnih 18 cm', '', 'Roof_Rafters_InsulationCavityAndAbove.wmf', '', '0.00000', '0.00000', '0.18000', '0.04000', '0.12000', '0.03500', '0.13000', '0.15000', '0.00000', '0000-00-00', '0000-00-00', '7.1756362492533'),
('Typology', 'SI', 'Wall', 'Insulation08cm', 1, 'add 8 cm of insulation (external insulated render system)', 'Dodatno 8 cm toplotne izolacije', '', 'Wall_Measure_InsulationOutside.wmf', '', '0.00000', '0.00000', '0.08000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '2'),
('Typology', 'SI', 'Wall', 'Insulation08cm', 2, 'add 8 cm of insulation on inner surface', 'Dodatno 8 cm toplotne izolacije na notranji strani', '', 'Wall_Measure_InsulationInside.wmf', '', '0.00000', '0.00000', '0.08000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '2'),
('Typology', 'SI', 'Wall', 'Insulation15cm', 1, 'add 15 cm of insulation (external insulated render system)', 'Dodatno 15 cm toplotne izolacije', '', 'Wall_Measure_ThickInsulationOutside.wmf', '', '0.00000', '0.00000', '0.15000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '3.75'),
('Typology', 'SI', 'Wall', 'Insulation20cm', 1, 'add 20 cm of insulation (external insulated render system)', 'Dodatno 20 cm toplotne izolacije', '', 'Wall_Measure_ThickInsulationOutside.wmf', '', '0.00000', '0.00000', '0.20000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '5'),
('Typology', 'SI', 'Floor', 'Insulation06cm', 1, 'add 6 cm of insulation below / alternatively: on top of ceiling (in case of floor renovation)', 'Dodatno 6 cm toplotne izolacije proti kleti', '', 'Ceiling_Measure_InsulationBelow.wmf', '', '0.00000', '0.00000', '0.06000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '1.5'),
('Typology', 'SI', 'Floor', 'Insulation12cm', 1, 'add 12 cm insulation below (in case of sufficient cellar height) / alternatively: on top of ceiling (in case of floor renovation) or combination of both', 'Dodatno 12 cm toplotne izolacije proti kleti', '', 'Ceiling_Measure_ThickInsulationBelow.wmf', '', '0.00000', '0.00000', '0.12000', '0.04000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0000-00-00', '0000-00-00', '3'),
('Typology', 'SI', 'Window', '2p-LowE-arg', 1, 'mount new windows, double glazed, argon filled, low E', 'Vgradnja lesenega okna z dvoslojno nizkoemisivno zasteklitvijo in medstekelnim prostorom polnjenim z žlahtnim plinom', '', 'Window_Wood_2P_LowE_Gas.wmf', '', '1.40000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.60000', '0000-00-00', '0000-00-00', '#DIV/0!'),
('Typology', 'SI', 'Window', '3p-LowE-arg', 1, 'mount new windows, triple glazed, argon filled, low E', 'Vgradnja lesenega okna s troslojno nizkoemisivno zasteklitvijo in medstekelnim prostorom polnjenim z žlahtnim plinom', '', 'Window_Wood_3P_LowE_Gas.wmf', '', '1.10000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.50000', '0000-00-00', '0000-00-00', '#DIV/0!'),
('Typology', 'SI', 'Window', '3pInsulatedFrame', 1, 'mount new windows, triple glazed, argon filled, low E, insulated frame', 'Vgradnja lesenega okna s troslojno nizkoemisivno zasteklitvijo in medstekelnim prostorom polnjenim z žlahtnim plinom. Okenski okvir je izveden s termičnim vložkom.', '', 'Window_SandwichWoodInsulation_3P_LowE_Gas.wmf', '', '0.80000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.50000', '0000-00-00', '0000-00-00', '#DIV/0!');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_CalcAdapt`
--

DROP TABLE IF EXISTS `Tab_CalcAdapt`;
CREATE TABLE IF NOT EXISTS `Tab_CalcAdapt` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_CalcAdapt` varchar(50) NOT NULL,
  `Index_Variant_CalcAdapt` int(11) NOT NULL,
  `Name_CalcAdapt` varchar(200) NOT NULL,
  `Name_National_CalcAdapt` varchar(200) NOT NULL,
  `Description_CalcAdapt` varchar(200) NOT NULL,
  `Description_National_CalcAdapt` varchar(200) NOT NULL,
  `Remark_CalcAdapt` varchar(200) NOT NULL,
  `Indicator_CalcAdapt_Accuracy` varchar(50) NOT NULL,
  `F_CalcAdapt_000` decimal(10,5) NOT NULL,
  `F_CalcAdapt_100` decimal(10,5) NOT NULL,
  `F_CalcAdapt_200` decimal(10,5) NOT NULL,
  `F_CalcAdapt_300` decimal(10,5) NOT NULL,
  `F_CalcAdapt_400` decimal(10,5) NOT NULL,
  `F_CalcAdapt_500` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_CalcAdapt`,`Index_Variant_CalcAdapt`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_CalcAdapt`
--

REPLACE INTO `Tab_CalcAdapt` (`Code_StatusDataset`, `Code_Country`, `Code_Type_CalcAdapt`, `Index_Variant_CalcAdapt`, `Name_CalcAdapt`, `Name_National_CalcAdapt`, `Description_CalcAdapt`, `Description_National_CalcAdapt`, `Remark_CalcAdapt`, `Indicator_CalcAdapt_Accuracy`, `F_CalcAdapt_000`, `F_CalcAdapt_100`, `F_CalcAdapt_200`, `F_CalcAdapt_300`, `F_CalcAdapt_400`, `F_CalcAdapt_500`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('SI.C.01', 'Typology', 'SI', 0, '1', 'EPC', '', '', '', '', '0.00000', '1.00000', '1.00000', '1.00000', '1.00000', '1.00000', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_ConstrYearClass`
--

DROP TABLE IF EXISTS `Tab_ConstrYearClass`;
CREATE TABLE IF NOT EXISTS `Tab_ConstrYearClass` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(10) NOT NULL,
  `Number_ConstructionYearClass` int(11) NOT NULL,
  `Remark_ConstructionYearClass` varchar(200) NOT NULL,
  `ConstructionYearClass_FirstYear` int(11) NOT NULL,
  `ConstructionYearClass_LastYear` int(11) NOT NULL,
  `Code_ConstructionYearClass_National` varchar(200) CHARACTER SET utf8 COLLATE utf8_slovenian_ci  NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Number_ConstructionYearClass`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_ConstrYearClass`
--

REPLACE INTO `Tab_ConstrYearClass` (`Code_StatusDataset`, `Code_Country`, `Number_ConstructionYearClass`, `Remark_ConstructionYearClass`, `ConstructionYearClass_FirstYear`, `ConstructionYearClass_LastYear`, `Code_ConstructionYearClass_National`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 1, '', 0, 1945, '', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 2, '', 1946, 1970, '', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 3, '', 1971, 1980, '', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 4, '', 1981, 2002, '', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 5, '', 2003, 2008, '', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 6, '', 2009, 9999, '', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_AtticCond`
--

DROP TABLE IF EXISTS `Tab_Const_AtticCond`;
CREATE TABLE IF NOT EXISTS `Tab_Const_AtticCond` (
  `Code_AtticCond` varchar(10) NOT NULL,
  `Name_AtticCond` varchar(200) NOT NULL,
  `Description_AtticCond` varchar(200) NOT NULL,
  `Name_AtticCond_GER` varchar(200) NOT NULL,
  `Description_AtticCond_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_AtticCond`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_AtticCond`
--

REPLACE INTO `Tab_Const_AtticCond` (`Code_AtticCond`, `Name_AtticCond`, `Description_AtticCond`, `Name_AtticCond_GER`, `Description_AtticCond_GER`) VALUES
('-', 'not existent', '', '', ''),
('C', 'completely conditioned', '', '', ''),
('P', 'partly conditioned', '', '', ''),
('N', 'not conditioned', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_AttNeighb`
--

DROP TABLE IF EXISTS `Tab_Const_AttNeighb`;
CREATE TABLE IF NOT EXISTS `Tab_Const_AttNeighb` (
  `Code_AttachedNeighbours` varchar(50) NOT NULL,
  `Name_AttachedNeighbours` varchar(200) NOT NULL,
  `Description_AttachedNeighbours` varchar(200) NOT NULL,
  `Name_AttachedNeighbours_GER` varchar(200) NOT NULL,
  `Description_AttachedNeighbours_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_AttachedNeighbours`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_AttNeighb`
--

REPLACE INTO `Tab_Const_AttNeighb` (`Code_AttachedNeighbours`, `Name_AttachedNeighbours`, `Description_AttachedNeighbours`, `Name_AttachedNeighbours_GER`, `Description_AttachedNeighbours_GER`) VALUES
('B_Alone', 'stand-alone building (detached)', '', '', ''),
('B_N1', '1 neighbour (semi-detached)', '', '', ''),
('B_N2', '2 neighbours (terraced)', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_BoundaryCondType`
--

DROP TABLE IF EXISTS `Tab_Const_BoundaryCondType`;
CREATE TABLE IF NOT EXISTS `Tab_Const_BoundaryCondType` (
  `Code_BoundaryCondType` varchar(50) NOT NULL,
  `Name_BoundaryCondType` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_BoundaryCondType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_BoundaryCondType`
--

REPLACE INTO `Tab_Const_BoundaryCondType` (`Code_BoundaryCondType`, `Name_BoundaryCondType`) VALUES
('Standard', 'standard values of boundary conditions (EU.SUH or EU.MUH)'),
('Individual', 'individual selected values');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_BuildingSizeClass`
--

DROP TABLE IF EXISTS `Tab_Const_BuildingSizeClass`;
CREATE TABLE IF NOT EXISTS `Tab_Const_BuildingSizeClass` (
  `Code_BuildingSizeClass` varchar(10) NOT NULL,
  `Name_BuildingSizeClass` varchar(200) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(10) NOT NULL,
  `Code_BuildingSizeClass_GER` varchar(10) NOT NULL,
  `Name_BuildingSizeClass_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_BuildingSizeClass`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_BuildingSizeClass`
--

REPLACE INTO `Tab_Const_BuildingSizeClass` (`Code_BuildingSizeClass`, `Name_BuildingSizeClass`, `Code_BuildingSizeClass_System`, `Code_BuildingSizeClass_GER`, `Name_BuildingSizeClass_GER`) VALUES
('SFH', 'Single Family House', 'SUH', 'EFH', 'Einfamilienhaus'),
('TH', 'Terraced House (Single Family)', 'SUH', 'RH', 'Reihenhaus'),
('MFH', 'Multi-Family House', 'MUH', 'MFH', 'Mehrfamilienhaus'),
('AB', 'Apartment Block', 'MUH', 'GMH', 'großes Mehrfamilienhaus'),
('-', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_CellarCond`
--

DROP TABLE IF EXISTS `Tab_Const_CellarCond`;
CREATE TABLE IF NOT EXISTS `Tab_Const_CellarCond` (
  `Code_CellarCond` varchar(10) NOT NULL,
  `Name_CellarCond` varchar(200) NOT NULL,
  `Description_CellarCond` varchar(200) NOT NULL,
  `Name_CellarCond_GER` varchar(200) NOT NULL,
  `Description_CellarCond_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_CellarCond`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_CellarCond`
--

REPLACE INTO `Tab_Const_CellarCond` (`Code_CellarCond`, `Name_CellarCond`, `Description_CellarCond`, `Name_CellarCond_GER`, `Description_CellarCond_GER`) VALUES
('-', 'not existent', '', '', ''),
('C', 'completely conditioned', '', '', ''),
('P', 'partly conditioned', '', '', ''),
('N', 'not conditioned', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_ConstrBorder`
--

DROP TABLE IF EXISTS `Tab_Const_ConstrBorder`;
CREATE TABLE IF NOT EXISTS `Tab_Const_ConstrBorder` (
  `Code_ConstructionBorder` varchar(50) NOT NULL,
  `R_Add_UnheatedSpace` decimal(4,3) NOT NULL,
  `b_Transmission` decimal(4,3) NOT NULL,
  `Name_ConstructionBorder` varchar(200) NOT NULL,
  `Description_ConstructionBorder` varchar(200) NOT NULL,
  `Name_ConstructionBorder_GER` varchar(200) NOT NULL,
  `Description_ConstructionBorder_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_ConstructionBorder`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_ConstrBorder`
--

REPLACE INTO `Tab_Const_ConstrBorder` (`Code_ConstructionBorder`, `R_Add_UnheatedSpace`, `b_Transmission`, `Name_ConstructionBorder`, `Description_ConstructionBorder`, `Name_ConstructionBorder_GER`, `Description_ConstructionBorder_GER`) VALUES
('Ext', '0.000', '1.000', 'external air', 'construction bordering on external air', 'Außenluft', 'Bauteil grenzt an Außenluft'),
('Unh', '0.300', '1.000', 'unheated space', 'construction bordering on unheated rooms (e.g. unheated attic) ', 'unbeheizte Räume', 'Bauteil grenzt an unbeheizte Räume (z.B. unbeheizte Dachräume)'),
('Cellar', '0.300', '0.500', 'unheated cellar', 'construction bordering on unheated cellar', 'unbeheizter Keller', 'Bauteil grenzt an unbeheizte Kellerräume'),
('Soil', '0.000', '0.500', 'soil', 'construction bordering on soil', 'Erdreich', 'Bauteil grenzt an Erdreich');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_Country`
--

DROP TABLE IF EXISTS `Tab_Const_Country`;
CREATE TABLE IF NOT EXISTS `Tab_Const_Country` (
  `Code_Country` varchar(10) NOT NULL,
  `Name_Country` varchar(50) NOT NULL,
  `Name_Country_National` varchar(50) NOT NULL,
  `Status_Country` int(11) NOT NULL,
  PRIMARY KEY (`Code_Country`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_Country`
--

REPLACE INTO `Tab_Const_Country` (`Code_Country`, `Name_Country`, `Name_Country_National`, `Status_Country`) VALUES
('AD', 'Andorra', '', 0),
('AL', 'Albania', '', 0),
('AT', 'Austria', '', 0),
('BA', 'Bosnia and Herzegovina', '', 0),
('BE', 'Belgium', '', 0),
('BG', 'Bulgaria', '', 0),
('BY', 'Belarus', '', 0),
('CH', 'Switzerland', '', 0),
('CZ', 'Czech Republic', '', 0),
('DE', 'Germany', 'Deutschland', 0),
('DK', 'Denmark', '', 0),
('EE', 'Estonia', '', 0),
('ES', 'Spain', '', 0),
('FI', 'Finland', '', 0),
('FO', 'Faroe Islands', '', 0),
('FR', 'France', '', 0),
('FX', 'France, Metropolitan', '', 0),
('GI', 'Gibraltar', '', 0),
('GR', 'Greece', '', 0),
('HR', 'Croatia', '', 0),
('HU', 'Hungary', '', 0),
('IE', 'Ireland', '', 0),
('EC', 'Iceland', '', 0),
('IT', 'Italy', '', 0),
('LI', 'Liechtenstein', '', 0),
('LT', 'Lithuania', '', 0),
('LU', 'Luxembourg', '', 0),
('LV', 'Latvia', '', 0),
('MC', 'Monaco', '', 0),
('MD', 'Moldova, Republic of', '', 0),
('ME', 'Montenegro', '', 0),
('MK', 'Macedonia', '', 0),
('MT', 'Malta', '', 0),
('NL', 'Netherlands', '', 0),
('NO', 'Norway', '', 0),
('PL', 'Poland', '', 0),
('PT', 'Portugal', '', 0),
('RO', 'Romania', '', 0),
('RS', 'Serbia', '', 0),
('SE', 'Sweden', '', 0),
('SI', 'Slovenia', '', 0),
('SJ', 'Svalbard and Jan Mayen', '', 0),
('SK', 'Slovakia', '', 0),
('SM', 'San Marino', '', 0),
('UA', 'Ukraine', '', 0),
('UK', 'United Kingdom', '', 0),
('VA', 'Holy See (Vatican City State)', '', 0),
('XX', 'Demonstration Country', 'Demonstration Country', 0),
('EU', 'Europe', '', 0),
('##', '- not specified -', '- not specified -', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_DataType_Building`
--

DROP TABLE IF EXISTS `Tab_Const_DataType_Building`;
CREATE TABLE IF NOT EXISTS `Tab_Const_DataType_Building` (
  `Code_DataType_Building` varchar(50) NOT NULL,
  `Name_DataType_Building` varchar(200) NOT NULL,
  `Description_DataType_Building` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_DataType_Building`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_DataType_Building`
--

REPLACE INTO `Tab_Const_DataType_Building` (`Code_DataType_Building`, `Name_DataType_Building`, `Description_DataType_Building`) VALUES
('ReEx', 'real example building', 'real example building'),
('ReAv', 'real average building', 'real building, corresponding to average building'),
('SyAv', 'synthetical average building', 'synthetical average building');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_ElementType`
--

DROP TABLE IF EXISTS `Tab_Const_ElementType`;
CREATE TABLE IF NOT EXISTS `Tab_Const_ElementType` (
  `Code_ElementType` varchar(50) NOT NULL,
  `Name_ElementType` varchar(200) NOT NULL,
  `Name_ElementType_BUL` varchar(200) NOT NULL,
  `Name_ElementType_CZE` varchar(200) NOT NULL,
  `Name_ElementType_DAN` varchar(200) NOT NULL,
  `Name_ElementType_DUT` varchar(200) NOT NULL,
  `Name_ElementType_ENG` varchar(200) NOT NULL,
  `Name_ElementType_EST` varchar(200) NOT NULL,
  `Name_ElementType_FIN` varchar(200) NOT NULL,
  `Name_ElementType_FRE` varchar(200) NOT NULL,
  `Name_ElementType_GER` varchar(200) NOT NULL,
  `Name_ElementType_GRE` varchar(200) NOT NULL,
  `Name_ElementType_HUN` varchar(200) NOT NULL,
  `Name_ElementType_GLE` varchar(200) NOT NULL,
  `Name_ElementType_ITA` varchar(200) NOT NULL,
  `Name_ElementType_LAV` varchar(200) NOT NULL,
  `Name_ElementType_LIT` varchar(200) NOT NULL,
  `Name_ElementType_MLT` varchar(200) NOT NULL,
  `Name_ElementType_POL` varchar(200) NOT NULL,
  `Name_ElementType_POR` varchar(200) NOT NULL,
  `Name_ElementType_RUM` varchar(200) NOT NULL,
  `Name_ElementType_SLO` varchar(200) NOT NULL,
  `Name_ElementType_SLV` varchar(200) NOT NULL,
  `Name_ElementType_SPA` varchar(200) NOT NULL,
  `Name_ElementType_SWE` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_ElementType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_ElementType`
--

REPLACE INTO `Tab_Const_ElementType` (`Code_ElementType`, `Name_ElementType`, `Name_ElementType_BUL`, `Name_ElementType_CZE`, `Name_ElementType_DAN`, `Name_ElementType_DUT`, `Name_ElementType_ENG`, `Name_ElementType_EST`, `Name_ElementType_FIN`, `Name_ElementType_FRE`, `Name_ElementType_GER`, `Name_ElementType_GRE`, `Name_ElementType_HUN`, `Name_ElementType_GLE`, `Name_ElementType_ITA`, `Name_ElementType_LAV`, `Name_ElementType_LIT`, `Name_ElementType_MLT`, `Name_ElementType_POL`, `Name_ElementType_POR`, `Name_ElementType_RUM`, `Name_ElementType_SLO`, `Name_ElementType_SLV`, `Name_ElementType_SPA`, `Name_ElementType_SWE`) VALUES
('Roof', 'roof', '', '', '', '', '', '', '', '', 'Dach', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Ceiling', 'top ceiling', '', '', '', '', '', '', '', '', 'oberste Geschossdecke', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Wall', 'external wall', '', '', '', '', '', '', '', '', 'Außenwand', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Window', 'window', '', '', '', '', '', '', '', '', 'Fenster', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Door', 'external door', '', '', '', '', '', '', '', '', 'Tür', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Floor', 'bottom floor (cellar ceiling or floor above ground)', '', '', '', '', '', '', '', '', 'Fußboden', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_EnergyCarrier`
--

DROP TABLE IF EXISTS `Tab_Const_EnergyCarrier`;
CREATE TABLE IF NOT EXISTS `Tab_Const_EnergyCarrier` (
  `Code_EnergyCarrier` varchar(50) NOT NULL,
  `Name_EnergyCarrier` varchar(200) NOT NULL,
  `Description_EnergyCarrier` varchar(200) NOT NULL,
  `Name_EnergyCarrier_BUL` varchar(200) NOT NULL,
  `Name_EnergyCarrier_CZE` varchar(200) NOT NULL,
  `Name_EnergyCarrier_DAN` varchar(200) NOT NULL,
  `Name_EnergyCarrier_DUT` varchar(200) NOT NULL,
  `Name_EnergyCarrier_ENG` varchar(200) NOT NULL,
  `Name_EnergyCarrier_EST` varchar(200) NOT NULL,
  `Name_EnergyCarrier_FIN` varchar(200) NOT NULL,
  `Name_EnergyCarrier_FRE` varchar(200) NOT NULL,
  `Name_EnergyCarrier_GER` varchar(200) NOT NULL,
  `Name_EnergyCarrier_GRE` varchar(200) NOT NULL,
  `Name_EnergyCarrier_HUN` varchar(200) NOT NULL,
  `Name_EnergyCarrier_GLE` varchar(200) NOT NULL,
  `Name_EnergyCarrier_ITA` varchar(200) NOT NULL,
  `Name_EnergyCarrier_LAV` varchar(200) NOT NULL,
  `Name_EnergyCarrier_LIT` varchar(200) NOT NULL,
  `Name_EnergyCarrier_MLT` varchar(200) NOT NULL,
  `Name_EnergyCarrier_POL` varchar(200) NOT NULL,
  `Name_EnergyCarrier_POR` varchar(200) NOT NULL,
  `Name_EnergyCarrier_RUM` varchar(200) NOT NULL,
  `Name_EnergyCarrier_SLO` varchar(200) NOT NULL,
  `Name_EnergyCarrier_SLV` varchar(200) NOT NULL,
  `Name_EnergyCarrier_SPA` varchar(200) NOT NULL,
  `Name_EnergyCarrier_SWE` varchar(200) NOT NULL,
  `Description_EnergyCarrier_BUL` varchar(200) NOT NULL,
  `Description_EnergyCarrier_CZE` varchar(200) NOT NULL,
  `Description_EnergyCarrier_DAN` varchar(200) NOT NULL,
  `Description_EnergyCarrier_DUT` varchar(200) NOT NULL,
  `Description_EnergyCarrier_ENG` varchar(200) NOT NULL,
  `Description_EnergyCarrier_EST` varchar(200) NOT NULL,
  `Description_EnergyCarrier_FIN` varchar(200) NOT NULL,
  `Description_EnergyCarrier_FRE` varchar(200) NOT NULL,
  `Description_EnergyCarrier_GER` varchar(200) NOT NULL,
  `Description_EnergyCarrier_GRE` varchar(200) NOT NULL,
  `Description_EnergyCarrier_HUN` varchar(200) NOT NULL,
  `Description_EnergyCarrier_GLE` varchar(200) NOT NULL,
  `Description_EnergyCarrier_ITA` varchar(200) NOT NULL,
  `Description_EnergyCarrier_LAV` varchar(200) NOT NULL,
  `Description_EnergyCarrier_LIT` varchar(200) NOT NULL,
  `Description_EnergyCarrier_MLT` varchar(200) NOT NULL,
  `Description_EnergyCarrier_POL` varchar(200) NOT NULL,
  `Description_EnergyCarrier_POR` varchar(200) NOT NULL,
  `Description_EnergyCarrier_RUM` varchar(200) NOT NULL,
  `Description_EnergyCarrier_SLO` varchar(200) NOT NULL,
  `Description_EnergyCarrier_SLV` varchar(200) NOT NULL,
  `Description_EnergyCarrier_SPA` varchar(200) NOT NULL,
  `Description_EnergyCarrier_SWE` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_EnergyCarrier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_EnergyCarrier`
--

REPLACE INTO `Tab_Const_EnergyCarrier` (`Code_EnergyCarrier`, `Name_EnergyCarrier`, `Description_EnergyCarrier`, `Name_EnergyCarrier_BUL`, `Name_EnergyCarrier_CZE`, `Name_EnergyCarrier_DAN`, `Name_EnergyCarrier_DUT`, `Name_EnergyCarrier_ENG`, `Name_EnergyCarrier_EST`, `Name_EnergyCarrier_FIN`, `Name_EnergyCarrier_FRE`, `Name_EnergyCarrier_GER`, `Name_EnergyCarrier_GRE`, `Name_EnergyCarrier_HUN`, `Name_EnergyCarrier_GLE`, `Name_EnergyCarrier_ITA`, `Name_EnergyCarrier_LAV`, `Name_EnergyCarrier_LIT`, `Name_EnergyCarrier_MLT`, `Name_EnergyCarrier_POL`, `Name_EnergyCarrier_POR`, `Name_EnergyCarrier_RUM`, `Name_EnergyCarrier_SLO`, `Name_EnergyCarrier_SLV`, `Name_EnergyCarrier_SPA`, `Name_EnergyCarrier_SWE`, `Description_EnergyCarrier_BUL`, `Description_EnergyCarrier_CZE`, `Description_EnergyCarrier_DAN`, `Description_EnergyCarrier_DUT`, `Description_EnergyCarrier_ENG`, `Description_EnergyCarrier_EST`, `Description_EnergyCarrier_FIN`, `Description_EnergyCarrier_FRE`, `Description_EnergyCarrier_GER`, `Description_EnergyCarrier_GRE`, `Description_EnergyCarrier_HUN`, `Description_EnergyCarrier_GLE`, `Description_EnergyCarrier_ITA`, `Description_EnergyCarrier_LAV`, `Description_EnergyCarrier_LIT`, `Description_EnergyCarrier_MLT`, `Description_EnergyCarrier_POL`, `Description_EnergyCarrier_POR`, `Description_EnergyCarrier_RUM`, `Description_EnergyCarrier_SLO`, `Description_EnergyCarrier_SLV`, `Description_EnergyCarrier_SPA`, `Description_EnergyCarrier_SWE`) VALUES
('Gas', 'natural gas', 'natural gas, type unknown', '', '', '', '', '', '', '', '', 'Erdgas', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Erdgas, Typ nicht bekannt', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Gas_E', 'natural gas E', 'natural gas E', '', '', '', '', '', '', '', '', 'Erdgas E', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Erdgas E (frühere Bezeichnung Erdgas H)', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Gas_LL', 'natural gas LL', 'natural gas LL', '', '', '', '', '', '', '', '', 'Erdgas LL', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Erdgas LL (frühere Bezeichnung Erdgas L)', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Gas_Liquid', 'liquid gas', 'liquid gas', '', '', '', '', '', '', '', '', 'Flüssiggas', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Flüssiggas', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Oil', 'heating oil', 'heating oil', '', '', '', '', '', '', '', '', 'Heizöl', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Heizöl', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Coal', 'coal', 'coal, type unknown', '', '', '', '', '', '', '', '', 'Kohle', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Kohle, Typ nicht bekannt', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Coal_Hard', 'hard coal', 'hard coal', '', '', '', '', '', '', '', '', 'Steinkohle', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Steinkohle', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Coal_Lignite', 'lignite coal', 'lignite coal', '', '', '', '', '', '', '', '', 'Braunkohle', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Braunkohle', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Bio', 'biomass', 'biomass, type unknown ', '', '', '', '', '', '', '', '', 'Biomasse', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Biomasse', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Bio_FW', 'firewood', 'firewood', '', '', '', '', '', '', '', '', 'Scheitholz', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Scheitholz', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Bio_WP', 'wood pellets', 'wood pellets', '', '', '', '', '', '', '', '', 'Holz-Pellets', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Holz-Pellets', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Bio_WC', 'wood chips', 'wood chips', '', '', '', '', '', '', '', '', 'Holzhackschnitzel', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Holzhackschnitzel', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Bio_Other', 'other biomass', 'biomass, if different from firewood or wood pellets', '', '', '', '', '', '', '', '', 'andere Biomasse', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Biomasse, andere als Scheitholz oder Holz-Pellets', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('El', 'electricity', 'electricity', '', '', '', '', '', '', '', '', 'Strom', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Strom', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('El_OP', 'off-peak electricity', 'off-peak electricity', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('El_Prod', 'electricity production', 'electricity production by combined heat-power generation', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH', 'district heating', 'district heating, type unknown', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah- oder Fernwärme', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Gas_NoCHP', 'district heating gas without chp', 'district heating, fuel gas, heat generation without combined heat and power (chp)', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Gas_CHP33', 'district heating gas with 33% chp', 'district heating, fuel gas, heat generation with combined heat and power (chp) fraction 33%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Gas_CHP67', 'district heating gas with 67% chp', 'district heating, fuel gas, heat generation with combined heat and power (chp) fraction 67%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Gas_CHP100', 'district heating gas with 100% chp', 'district heating, fuel gas, heat generation with combined heat and power (chp) fraction 100%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Oil_NoCHP', 'district heating oil without chp', 'district heating, fuel oil, heat generation without combined heat and power (chp)', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Oil_CHP33', 'district heating oil with 33% chp', 'district heating, fuel oil, heat generation with combined heat and power (chp) fraction 33%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Oil_CHP67', 'district heating oil with 67% chp', 'district heating, fuel oil, heat generation with combined heat and power (chp) fraction 67%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Oil_CHP100', 'district heating oil with 100% chp', 'district heating, fuel oil, heat generation with combined heat and power (chp) fraction 100%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Coal_NoCHP', 'district heating coal without chp', 'district heating, fuel coal, heat generation without combined heat and power (chp)', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Coal_CHP33', 'district heating coal with 33% chp', 'district heating, fuel coal, heat generation with combined heat and power (chp) fraction 33%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Coal_CHP67', 'district heating coal with 67% chp', 'district heating, fuel coal, heat generation with combined heat and power (chp) fraction 67%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Coal_CHP100', 'district heating coal with 100% chp', 'district heating, fuel coal, heat generation with combined heat and power (chp) fraction 100%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Bio_NoCHP', 'district heating biomass without chp', 'district heating, fuel biomass, heat generation without combined heat and power (chp)', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme ohne KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Bio_CHP33', 'district heating biomass with 33% chp', 'district heating, fuel biomass, heat generation with combined heat and power (chp) fraction 33%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Bio_CHP67', 'district heating biomass with 67% chp', 'district heating, fuel biomass, heat generation with combined heat and power (chp) fraction 67%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DH_Bio_CHP100', 'district heating biomass with 100% chp', 'district heating, fuel biomass, heat generation with combined heat and power (chp) fraction 100%', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Nah-/Fernwärme mit KWK', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Other', 'other ', 'other energy carriers', '', '', '', '', '', '', '', '', 'andere Energieträger', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'andere Energieträger', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_Infiltration`
--

DROP TABLE IF EXISTS `Tab_Const_Infiltration`;
CREATE TABLE IF NOT EXISTS `Tab_Const_Infiltration` (
  `Code_Infiltration` varchar(50) NOT NULL,
  `n_air_infiltration` decimal(4,3) NOT NULL,
  `Name_Infiltration` varchar(200) NOT NULL,
  `Description_Infiltration` varchar(200) NOT NULL,
  `Name_Infiltration_GER` varchar(200) NOT NULL,
  `Description_Infiltration_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Infiltration`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_Infiltration`
--

REPLACE INTO `Tab_Const_Infiltration` (`Code_Infiltration`, `n_air_infiltration`, `Name_Infiltration`, `Description_Infiltration`, `Name_Infiltration_GER`, `Description_Infiltration_GER`) VALUES
('Minimal', '0.050', 'minimal air infiltration, very tight building', 'indication: blower door result n_50 <= 0.6 1/h', '', ''),
('Low', '0.100', 'low effect of air infiltration', 'indication: blower door result n_50 <= 1.0 1/h', '', ''),
('Medium', '0.200', 'medium effect of air infiltration', 'indication: blower door result n_50 <= 3.0 1/h', '', ''),
('High', '0.400', 'high effect of air infiltration', 'indication: blower door result n_50 > 3.0 1/h', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_Language`
--

DROP TABLE IF EXISTS `Tab_Const_Language`;
CREATE TABLE IF NOT EXISTS `Tab_Const_Language` (
  `Code_Language` varchar(50) NOT NULL,
  `Name_Language` varchar(50) NOT NULL,
  `NameNative_Language` varchar(50) NOT NULL,
  `Country_OfficialLanguage` varchar(50) NOT NULL,
  `Remarks` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Language`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_Language`
--

REPLACE INTO `Tab_Const_Language` (`Code_Language`, `Name_Language`, `NameNative_Language`, `Country_OfficialLanguage`, `Remarks`) VALUES
('BUL', 'Bulgarian', 'български език', 'Bulgaria', ''),
('CZE', 'Czech', 'česky, čeština', 'Czech Republic', ''),
('DAN', 'Danish', 'dansk', 'Denmark', ''),
('DUT', 'Dutch', 'Nederlands, Vlaams', 'Netherlands and Belgium', ''),
('ENG', 'English', 'English', 'Ireland, Malta and United Kingdom', ''),
('EST', 'Estonian', 'eesti, eesti keel', 'Estonia', ''),
('FIN', 'Finnish', 'suomi, suomen kieli', 'Finland', ''),
('FRE', 'French', 'français, langue française', 'Belgium, France, Italy and Luxembourg', 'Italy: Region of Aosta Valley'),
('GER', 'German', 'Deutsch', 'Austria, Belgium, Germany, Italy and Luxembourg', 'Italy: Province of Bolzano-Bozen'),
('GRE', 'Greek', 'Ελληνικά', 'Cyprus, Greece and Italy', 'Italy: Provinces of Apulia and Reggio Calabria'),
('HUN', 'Hungarian', 'Magyar', 'Hungary, Austria, Romania and Slovenia', 'Austria: Region of Burgenland / Slovenia: Mura region'),
('GLE', 'Irish', 'Gaeilge', 'Ireland and United Kingdom', 'UK: Northern Ireland'),
('ITA', 'Italian', 'Italiano', 'Italy and Slovenia', 'Slovenia: Istria'),
('LAV', 'Latvian', 'latviešu valoda', 'Latvia', ''),
('LIT', 'Lithuanian', 'lietuvių kalba', 'Lithuania', ''),
('MLT', 'Maltese', 'Malti', 'Malta', ''),
('POL', 'Polish', 'polski', 'Poland', ''),
('POR', 'Portuguese', 'Português', 'Portugal', ''),
('RUM', 'Romanian', 'română', 'Romania', ''),
('SLO', 'Slovak', 'slovenčina', 'Slovakia', ''),
('SLV', 'Slovene', 'slovenščina', 'Slovenia, Austria and Italy', 'Italy: Region of Friuli Venezia Giulia / Austria: Region of Carinthia'),
('SPA', 'Spanish', 'español, castellano', 'Spain', ''),
('SWE', 'Swedish', 'svenska', 'Finland and Sweden', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_MeasureType`
--

DROP TABLE IF EXISTS `Tab_Const_MeasureType`;
CREATE TABLE IF NOT EXISTS `Tab_Const_MeasureType` (
  `Code_MeasureType` varchar(50) NOT NULL,
  `Name_MeasureType` varchar(200) NOT NULL,
  `Name_MeasureType_BUL` varchar(200) NOT NULL,
  `Name_MeasureType_CZE` varchar(200) NOT NULL,
  `Name_MeasureType_DAN` varchar(200) NOT NULL,
  `Name_MeasureType_DUT` varchar(200) NOT NULL,
  `Name_MeasureType_ENG` varchar(200) NOT NULL,
  `Name_MeasureType_EST` varchar(200) NOT NULL,
  `Name_MeasureType_FIN` varchar(200) NOT NULL,
  `Name_MeasureType_FRE` varchar(200) NOT NULL,
  `Name_MeasureType_GER` varchar(200) NOT NULL,
  `Name_MeasureType_GRE` varchar(200) NOT NULL,
  `Name_MeasureType_HUN` varchar(200) NOT NULL,
  `Name_MeasureType_GLE` varchar(200) NOT NULL,
  `Name_MeasureType_ITA` varchar(200) NOT NULL,
  `Name_MeasureType_LAV` varchar(200) NOT NULL,
  `Name_MeasureType_LIT` varchar(200) NOT NULL,
  `Name_MeasureType_MLT` varchar(200) NOT NULL,
  `Name_MeasureType_POL` varchar(200) NOT NULL,
  `Name_MeasureType_POR` varchar(200) NOT NULL,
  `Name_MeasureType_RUM` varchar(200) NOT NULL,
  `Name_MeasureType_SLO` varchar(200) NOT NULL,
  `Name_MeasureType_SLV` varchar(200) NOT NULL,
  `Name_MeasureType_SPA` varchar(200) NOT NULL,
  `Name_MeasureType_SWE` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_MeasureType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_MeasureType`
--

REPLACE INTO `Tab_Const_MeasureType` (`Code_MeasureType`, `Name_MeasureType`, `Name_MeasureType_BUL`, `Name_MeasureType_CZE`, `Name_MeasureType_DAN`, `Name_MeasureType_DUT`, `Name_MeasureType_ENG`, `Name_MeasureType_EST`, `Name_MeasureType_FIN`, `Name_MeasureType_FRE`, `Name_MeasureType_GER`, `Name_MeasureType_GRE`, `Name_MeasureType_HUN`, `Name_MeasureType_GLE`, `Name_MeasureType_ITA`, `Name_MeasureType_LAV`, `Name_MeasureType_LIT`, `Name_MeasureType_MLT`, `Name_MeasureType_POL`, `Name_MeasureType_POR`, `Name_MeasureType_RUM`, `Name_MeasureType_SLO`, `Name_MeasureType_SLV`, `Name_MeasureType_SPA`, `Name_MeasureType_SWE`) VALUES
('Add', 'additional insulation', '', '', '', '', '', '', '', '', 'zusätzliche Dämmung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Replace', 'replacement of existing construction', '', '', '', '', '', '', '', '', 'Ersatz der existierenden Konstruktion', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('ReplaceInsulation', 'additional, existing insulation replaced', '', '', '', '', '', '', '', '', 'zusätzliche Maßnahme, vorhandene Dämmung wird ausgetauscht', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_RoofType`
--

DROP TABLE IF EXISTS `Tab_Const_RoofType`;
CREATE TABLE IF NOT EXISTS `Tab_Const_RoofType` (
  `Code_RoofType` varchar(10) NOT NULL,
  `Name_RoofType` varchar(50) NOT NULL,
  `Description_RoofType` varchar(200) NOT NULL,
  `Name_RoofType_GER` varchar(200) NOT NULL,
  `Description_RoofType_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_RoofType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_RoofType`
--

REPLACE INTO `Tab_Const_RoofType` (`Code_RoofType`, `Name_RoofType`, `Description_RoofType`, `Name_RoofType_GER`, `Description_RoofType_GER`) VALUES
('TR', 'tilted roof', 'tilted roof, tilted >= 30°', 'geneigtes Dach', 'geneigtes Dach, Neigung >= 30°'),
('FR', 'flat roof', 'flat roof, tilted < 30°', 'Flachdach', 'Flachdach, Neigung < 30°'),
('UC', 'upper floor ceiling', 'upper floor ceiling below unheated attic space', 'oberste Geschossdecke', 'oberste Geschossdecke unter unbeheiztem Dachraum');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_StatusDataset`
--

DROP TABLE IF EXISTS `Tab_Const_StatusDataset`;
CREATE TABLE IF NOT EXISTS `Tab_Const_StatusDataset` (
  `Code` varchar(50) NOT NULL COMMENT 'code of the dataset status',
  `Name` varchar(200) NOT NULL COMMENT 'name of the dataset status',
  `Description` varchar(200) NOT NULL COMMENT 'description and limits of the dataset status ',
  PRIMARY KEY (`Code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_StatusDataset`
--

REPLACE INTO `Tab_Const_StatusDataset` (`Code`, `Name`, `Description`) VALUES
('Typology', 'part of the typology (import to standard and expert version of WebTool)', 'constituent part of the respective national building typology - dataset will be transferred to the Building Typology WebTool'),
('Analysis', 'dataset, used for own analyses (import to expert version of WebTool)', 'dataset, apart from the official building typology definition; used for own calculations and analyses'),
('Development', 'dataset, in the state of development (no import to WebTool)', 'dataset, still under development, may later be part of the official typology'),
('Other', 'other dataset (no import to WebTool)', 'dataset apart from the official building typology definition, used for other purposes'),
('Demonstration', 'demonstration dataset (no import to WebTool)', 'used for the demonstration of the workbook'),
('Template', 'dataset template (no import to WebTool)', 'to be used as a template for dataset formats and formulas'),
('Test', 'test dataset (no import to WebTool)', 'used for test purposes');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_HA`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_HA`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_HA` (
  `Code_Type_AuxH` varchar(50) NOT NULL,
  `Name_Type_AuxH` varchar(200) NOT NULL,
  `Description_Type_AuxH` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_AuxH`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_HA`
--

REPLACE INTO `Tab_Const_SysType_HA` (`Code_Type_AuxH`, `Name_Type_AuxH`, `Description_Type_AuxH`) VALUES
('D', 'decentral system', 'decentral system, no distribution ducts available'),
('C', 'central heating, distribution by pipeline', 'central distribution by water pipes');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_HD`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_HD`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_HD` (
  `Code_Type_SysHD` varchar(50) NOT NULL,
  `Name_Type_SysHD` varchar(200) NOT NULL,
  `Description_Type_SysHD` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysHD`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_HD`
--

REPLACE INTO `Tab_Const_SysType_HD` (`Code_Type_SysHD`, `Name_Type_SysHD`, `Description_Type_SysHD`) VALUES
('D', 'decentral system', 'decentral system, no distribution ducts available'),
('C', 'central heating, distribution by pipeline', 'central distribution by water pipes (type unknown)'),
('C_Int', 'central heating, all pipes inside of thermal envelope', 'central distribution, pipeline completely inside of thermal envelope'),
('C_Ext', 'central heating, fraction of pipeline outside of thermal envelope', 'central distribution, pipeline is partly installed in unheated rooms (e.g. cellar) or in the ground'),
('A', 'seperate pipeline per apartment', 'seperate pipeline per apartment (multi-unit housing)'),
('Air_Int', 'distribution of heat by air ducts, inside of thermal envelope', 'distribution of thermal energy for heating by air ducts, all ducts inside of thermal envelope'),
('Air_Ext', 'distribution of heat by air ducts, partly outside of thermal envelope', 'distribution of thermal energy for heating by air ducts, partly outside of thermal envelope'),
('MV_SupExh_Ext', 'distribution ducts of supply/exhaust ventilation system - partly outside of thermal envelope', 'distribution ducts of supply/exhaust ventilation system - installation in unheated rooms (e.g. cellar)'),
('MV_SupExh_Int', 'distribution ducts of supply/exhaust ventilation system - installation inside of thermal envelope', 'distribution ducts of supply/exhaust ventilation system - installation of all ducts inside the thermal envelope');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_HG`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_HG`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_HG` (
  `Code_Type_SysHG` varchar(50) NOT NULL,
  `Name_Type_SysHG` varchar(200) NOT NULL,
  `Description_Type_SysHG` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysHG`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_HG`
--

REPLACE INTO `Tab_Const_SysType_HG` (`Code_Type_SysHG`, `Name_Type_SysHG`, `Description_Type_SysHG`) VALUES
('B', 'boiler', 'boiler (type unknown)'),
('B_NC', 'boiler, non-condensing', 'non-condensing boiler (further details unknown)'),
('B_NC_CT', 'boiler, non-condensing, constant temperature', 'constant temperature non-condensing boiler'),
('B_NC_LT', 'boiler, non-condensing, low temperature', 'low temperature non-condensing boiler'),
('B_C', 'boiler, condensing', 'condensing boiler'),
('B_WP', 'wood-pellets boiler', 'boiler for combustion of wood pellets'),
('G_IWH', 'gas-fired instantaneous water heater', 'instantaneous water heater, fired by gas (tankless)'),
('G_IWH_NC', 'gas-fired instantaneous water heater, non-condensing', 'instantaneous water heater, fired by gas (tankless)'),
('G_IWH_C', 'gas-fired instantaneous water heater, condensing', 'instantaneous water heater, fired by gas (tankless), condensing'),
('G_SH', 'gas-fired space heater', 'gas-fired space heater'),
('E', 'direct electric heat generator', 'direct electric, not specified: any device which uses electricity for direct heat generation, e.g. electric stoves (no heat pumps which use also heat from the environment)'),
('E_Immersion', 'electric immersion heater', 'electric heating rod or coil, immersed in a water storage'),
('E_Storage', 'electrical night storage space heater', 'electrical night storage space heater (off-peak storage heating), heat emission by convection'),
('E_UnderFloor', 'electrical underfloor heating', 'electrical underfloor heating'),
('E_SH', 'electrical space heater', 'electrical space heater: radiative heater or (forced) convection heater'),
('HP', 'heat pump', 'heat pump (type unknown),  remark: also reversible engines that work as a cold generator in summer are to be considered here or (if heat source is known) below '),
('HP_Air', 'heat pump, heat source external air', 'air source heat pump: heat pump, using the external air as the heat source '),
('HP_Ground', 'heat pump, heat source ground', 'ground source heat pump (or geothermal heat pump): heat pump, using the ground as the heat source '),
('HP_ExhAir', 'heat pump, heat source exhaust air', 'heat pump, using exhaust air of a ventilation system as the heat source'),
('HP_Water', 'heat pump, heat source ground water', 'heat pump, using ground water or a water stream as the heat source'),
('HP_Other', 'heat pump, other heat sources', 'heat pump, using more than one or other heat sources (e.g. industrial exhaust heat, low-temperature district heat)'),
('Stove', 'stove', 'stove, fuel fired'),
('Stove_L', 'stove for liquid fuels', 'stove for liquid fuels, especially oil stove'),
('Stove_S', 'stove for solid fuels', 'stove for solid fuels, especially wood and coal'),
('OpenFire', 'open fire', 'open fire (fireplace, mantle)'),
('TS', 'district heating transfer station', 'heat exchanger (heat transfer station, heat substation) of a district heating system'),
('CHP', 'combined heat and power generation', 'cogeneration system: combined heat and (electric) power generation'),
('Solar', 'thermal solar plant', 'thermal solar plant'),
('Steam', 'steam generator', 'steam generator (any type)'),
('Other', 'other', 'other generator type');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_HS`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_HS`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_HS` (
  `Code_Type_SysHS` varchar(50) NOT NULL,
  `Name_Type_SysHS` varchar(200) NOT NULL,
  `Description_Type_SysHS` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysHS`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_HS`
--

REPLACE INTO `Tab_Const_SysType_HS` (`Code_Type_SysHS`, `Name_Type_SysHS`, `Description_Type_SysHS`) VALUES
('BS', 'buffer storage (type unknown)', 'buffer storage (type unknown)'),
('BS_E', 'buffer storage for electric systems', 'buffer storage for electric heat pumps or night-storage systems'),
('BS_Wood', 'buffer storage for wood boilers', 'buffer storage for wood boilers'),
('Other', 'other', 'other storage system');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_Size`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_Size`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_Size` (
  `Code_BuildingSizeClass_System` varchar(10) NOT NULL,
  `Name_BuildingSizeClass_System` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_BuildingSizeClass_System`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_Size`
--

REPLACE INTO `Tab_Const_SysType_Size` (`Code_BuildingSizeClass_System`, `Name_BuildingSizeClass_System`) VALUES
('Gen', 'generic'),
('SUH', 'single-unit housing (detached, semi-detached or terraced houses)'),
('MUH', 'multi-unit housing (multi-family housing and apartment blocks)');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_Vent`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_Vent`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_Vent` (
  `Code_Type_SysVent` varchar(50) NOT NULL,
  `Name_Type_SysVent` varchar(200) NOT NULL,
  `Description_Type_SysVent` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysVent`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_Vent`
--

REPLACE INTO `Tab_Const_SysType_Vent` (`Code_Type_SysVent`, `Name_Type_SysVent`, `Description_Type_SysVent`) VALUES
('-', 'no ventilation System', 'no ventilation System'),
('Exh', 'exhaust air system', 'exhaust air system, continuously operated during heating season'),
('Bal', 'balanced ventilation system', 'balanced ventilation system (air exhaust/supply)'),
('Bal_Rec', 'balanced ventilation system with heat recovery', 'balanced ventilation system (air exhaust/supply) with heat recovery system'),
('Bal_GroundRec', 'balanced ventilation system, preheated by ground heat exchanger + heat recovery', 'balanced ventilation system (air exhaust/supply) with ground heat exchanger and heat recovery');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_WA`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_WA`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_WA` (
  `Code_Type_AuxW` varchar(50) NOT NULL,
  `Name_Type_AuxW` varchar(200) NOT NULL,
  `Description_Type_AuxW` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_AuxW`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_WA`
--

REPLACE INTO `Tab_Const_SysType_WA` (`Code_Type_AuxW`, `Name_Type_AuxW`, `Description_Type_AuxW`) VALUES
('D', 'decentral DHW system', 'decentral DHW system, no distribution ducts available'),
('C_NoCirc', 'central DHW distribution, no circulation', 'central DHW distribution, no circulation'),
('C_Circ', 'central DHW distribution with circulation', 'central DHW distribution with circulation'),
('C_NoCirc_Sol', 'central DHW distribution with solar thermal system, no circulation', 'central DHW distribution with solar thermal system, no circulation'),
('C_Circ_Sol', 'central DHW distribution with solar thermal system and circulation', 'central DHW distribution with solar thermal system and circulation');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_WD`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_WD`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_WD` (
  `Code_Type_SysWD` varchar(50) NOT NULL,
  `Name_Type_SysWD` varchar(200) NOT NULL,
  `Description_Type_SysWD` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysWD`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_WD`
--

REPLACE INTO `Tab_Const_SysType_WD` (`Code_Type_SysWD`, `Name_Type_SysWD`, `Description_Type_SysWD`) VALUES
('D', 'decentral DHW system', 'decentral DHW system, no distribution ducts available'),
('C', 'central DHW pipeline', 'central DHW pipeline for the whole building, type unknown'),
('C_NoCirc_Int', 'central DHW distribution, all pipes inside of thermal envelope, no circulation', 'central DHW distribution, pipeline completely inside of thermal envelope, no circulation'),
('C_NoCirc_Ext', 'central DHW distribution, fraction of pipeline outside of thermal envelope, no circulation', 'central DHW distribution, pipeline is partly installed in unheated rooms (e.g. cellar) or in the ground, no circulation'),
('NoCirc_A', 'seperate DHW distribution per apartment, no circulation', 'seperate DHW distribution per apartment (multi-unit housing), no circulation'),
('C_Circ_Int', 'central DHW distribution with circulation, all pipes inside of thermal envelope', 'central DHW distribution with circulation, pipeline completely inside of thermal envelope'),
('C_Circ_Ext', 'central DHW distribution with circulation, fraction of pipeline outside of thermal envelope', 'central DHW distribution with circulation, pipeline is partly installed in unheated rooms (e.g. cellar) or in the ground'),
('Circ_A', 'seperate DHW distribution per apartment, with circulation', 'DHW distribution with circulation separately in each apartment (multi-unit housing)');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_WG`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_WG`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_WG` (
  `Code_Type_SysWG` varchar(50) NOT NULL,
  `Name_Type_SysWG` varchar(200) NOT NULL,
  `Description_Type_SysWG` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysWG`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_WG`
--

REPLACE INTO `Tab_Const_SysType_WG` (`Code_Type_SysWG`, `Name_Type_SysWG`, `Description_Type_SysWG`) VALUES
('B', 'boiler', 'boiler (type unknown)'),
('B_NC', 'boiler, non-condensing', 'non-condensing boiler (further details unknown)'),
('B_NC_CT', 'boiler, non-condensing, constant temperature', 'constant temperature non-condensing boiler'),
('B_NC_LT', 'boiler, non-condensing, low temperature', 'low temperature non-condensing boiler'),
('B_C', 'boiler, condensing', 'condensing boiler'),
('B_WP', 'wood-pellets boiler', 'boiler for combustion of wood pellets'),
('G_IWH', 'gas-fired instantaneous water heater', 'instantaneous water heater, fired by gas (tankless)'),
('G_IWH_NC', 'gas-fired instantaneous water heater, non-condensing', 'instantaneous water heater, fired by gas (tankless)'),
('G_IWH_C', 'gas-fired instantaneous water heater, condensing', 'instantaneous water heater, fired by gas (tankless), condensing'),
('G_Tank', 'gas burner for directly heated DHW tank', 'gas burner as a heating element of a domestic hot water tank (separately from space heating system)'),
('E', 'direct electric heat generator, not specified', 'direct electric, not specified: any device which uses electricity for direct heat generation, e.g. electric heating element in water storage, instantaneous water heater'),
('E_Immersion', 'electric immersion heater', 'electric heating rod or coil, immersed in a water storage'),
('E_IWH', 'electric instantaneous water heater', 'electric instantaneous water heater (tankless)'),
('HP', 'heat pump', 'heat pump (type unknown),  remark: also reversible engines that work as a cold generator in summer are to be considered here or (if heat source is known) below '),
('HP_Air', 'heat pump, heat source external air', 'air source heat pump: heat pump, using the external air as the heat source '),
('HP_Ground', 'heat pump, heat source ground', 'ground source heat pump (or geothermal heat pump): heat pump, using the ground as the heat source '),
('HP_ExhAir', 'heat pump, heat source exhaust air', 'heat pump, using exhaust air of a ventilation system as the heat source'),
('HP_Water', 'heat pump, heat source ground water', 'heat pump, using ground water or a water stream as the heat source'),
('HP_Cellar', 'heat pump, heat source: cellar air ', 'heat pump, using cellar air as heat source'),
('HP_Other', 'heat pump, other heat sources', 'heat pump, using more than one or other heat sources (e.g. industrial exhaust heat, low-temperature district heat)'),
('TS', 'district heating transfer station', 'heat exchanger (heat transfer station, heat substation) of a district heating system'),
('CHP', 'combined heat and power generation', 'cogeneration system: combined heat and (electric) power generation'),
('Solar', 'thermal solar plant', 'thermal solar plant'),
('Steam', 'steam generator', 'steam generator (any type)'),
('Other', 'other', 'other generator type');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_SysType_WS`
--

DROP TABLE IF EXISTS `Tab_Const_SysType_WS`;
CREATE TABLE IF NOT EXISTS `Tab_Const_SysType_WS` (
  `Code_Type_SysWS` varchar(50) NOT NULL,
  `Name_Type_SysWS` varchar(200) NOT NULL,
  `Description_Type_SysWS` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_SysWS`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_SysType_WS`
--

REPLACE INTO `Tab_Const_SysType_WS` (`Code_Type_SysWS`, `Name_Type_SysWS`, `Description_Type_SysWS`) VALUES
('S_D', 'decentral electric hot water storage', 'decentral electric hot water storage, close to tap'),
('S_A', 'hot water storage per apartment', 'hot water storage per apartment in multi-unit buildings (inside thermal envelope)'),
('S_C_Int', 'central hot water storage, inside of thermal envelope', 'central hot water storage, inside of thermal envelope'),
('S_C_Ext', 'central hot water storage, outside of thermal envelope', 'central hot water storage, outside of thermal envelope'),
('S_Gas', 'directly gas heated hot water storage', 'directly gas heated hot water storage (in combination with heat generator type G_Tank)'),
('Other', 'other', 'other DHW storage system');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_ThermalBridging`
--

DROP TABLE IF EXISTS `Tab_Const_ThermalBridging`;
CREATE TABLE IF NOT EXISTS `Tab_Const_ThermalBridging` (
  `Code_ThermalBridging` varchar(50) NOT NULL,
  `delta_U_ThermalBridging` decimal(4,3) NOT NULL,
  `Name_ThermalBridging` varchar(200) NOT NULL,
  `Description_ThermalBridging` varchar(200) NOT NULL,
  `Name_ThermalBridging_GER` varchar(200) NOT NULL,
  `Description_ThermalBridging_GER` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_ThermalBridging`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_ThermalBridging`
--

REPLACE INTO `Tab_Const_ThermalBridging` (`Code_ThermalBridging`, `delta_U_ThermalBridging`, `Name_ThermalBridging`, `Description_ThermalBridging`, `Name_ThermalBridging_GER`, `Description_ThermalBridging_GER`) VALUES
('Minimal', '0.000', 'optimisation of constructional thermal bridging', 'indication: additional transmission losses <= 0 W/K per sqm envelope ', '', ''),
('Low', '0.050', 'low effect of constructional thermal bridging', 'indication: additional transmission losses <= 0,05 W/K per sqm envelope ', '', ''),
('Medium', '0.100', 'medium effect of constructional thermal bridging', 'indication: additional transmission losses > 0,05 and <= 0,15 W/K per sqm envelope (e.g. inside thermal insulation of walls in buildings with wooden ceilings)', '', ''),
('High', '0.150', 'high effect of constructional thermal bridging', 'indication: additional transmission losses > 0,15 W/K per sqm envelope (e.g. concrete ceilings penetrate insulation)', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_Type_CalcAdapt`
--

DROP TABLE IF EXISTS `Tab_Const_Type_CalcAdapt`;
CREATE TABLE IF NOT EXISTS `Tab_Const_Type_CalcAdapt` (
  `Code_Type_CalcAdapt` varchar(50) NOT NULL,
  `Name_Type_CalcAdapt` varchar(200) NOT NULL,
  `Description_Type_CalcAdapt` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Type_CalcAdapt`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_Type_CalcAdapt`
--

REPLACE INTO `Tab_Const_Type_CalcAdapt` (`Code_Type_CalcAdapt`, `Name_Type_CalcAdapt`, `Description_Type_CalcAdapt`) VALUES
('Calculated', 'energy performance certificate procedure', 'adaptation to the level of national energy performance certificate or energy advice procedure'),
('Measured', 'measured consumption', 'adaptation to the level of measured consumption');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Const_Utilisation`
--

DROP TABLE IF EXISTS `Tab_Const_Utilisation`;
CREATE TABLE IF NOT EXISTS `Tab_Const_Utilisation` (
  `Code_UtilisationType` varchar(50) NOT NULL,
  `Name_UtilisationType` varchar(200) NOT NULL,
  `Code_FurtherIndicatorBuildingSize` varchar(200) NOT NULL,
  `Name_UtilisationType_BUL` varchar(200) NOT NULL,
  `Name_UtilisationType_CZE` varchar(200) NOT NULL,
  `Name_UtilisationType_DAN` varchar(200) NOT NULL,
  `Name_UtilisationType_DUT` varchar(200) NOT NULL,
  `Name_UtilisationType_ENG` varchar(200) NOT NULL,
  `Name_UtilisationType_EST` varchar(200) NOT NULL,
  `Name_UtilisationType_FIN` varchar(200) NOT NULL,
  `Name_UtilisationType_FRE` varchar(200) NOT NULL,
  `Name_UtilisationType_GER` varchar(200) NOT NULL,
  `Name_UtilisationType_GRE` varchar(200) NOT NULL,
  `Name_UtilisationType_HUN` varchar(200) NOT NULL,
  `Name_UtilisationType_GLE` varchar(200) NOT NULL,
  `Name_UtilisationType_ITA` varchar(200) NOT NULL,
  `Name_UtilisationType_LAV` varchar(200) NOT NULL,
  `Name_UtilisationType_LIT` varchar(200) NOT NULL,
  `Name_UtilisationType_MLT` varchar(200) NOT NULL,
  `Name_UtilisationType_POL` varchar(200) NOT NULL,
  `Name_UtilisationType_POR` varchar(200) NOT NULL,
  `Name_UtilisationType_RUM` varchar(200) NOT NULL,
  `Name_UtilisationType_SLO` varchar(200) NOT NULL,
  `Name_UtilisationType_SLV` varchar(200) NOT NULL,
  `Name_UtilisationType_SPA` varchar(200) NOT NULL,
  `Name_UtilisationType_SWE` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_UtilisationType`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Const_Utilisation`
--

REPLACE INTO `Tab_Const_Utilisation` (`Code_UtilisationType`, `Name_UtilisationType`, `Code_FurtherIndicatorBuildingSize`, `Name_UtilisationType_BUL`, `Name_UtilisationType_CZE`, `Name_UtilisationType_DAN`, `Name_UtilisationType_DUT`, `Name_UtilisationType_ENG`, `Name_UtilisationType_EST`, `Name_UtilisationType_FIN`, `Name_UtilisationType_FRE`, `Name_UtilisationType_GER`, `Name_UtilisationType_GRE`, `Name_UtilisationType_HUN`, `Name_UtilisationType_GLE`, `Name_UtilisationType_ITA`, `Name_UtilisationType_LAV`, `Name_UtilisationType_LIT`, `Name_UtilisationType_MLT`, `Name_UtilisationType_POL`, `Name_UtilisationType_POR`, `Name_UtilisationType_RUM`, `Name_UtilisationType_SLO`, `Name_UtilisationType_SLV`, `Name_UtilisationType_SPA`, `Name_UtilisationType_SWE`) VALUES
('Residential', 'residential: not specified or mixed residential utilisation', 'persons', '', '', '', '', '', '', '', '', 'Wohnen allgemein: nicht näher spezifizierte oder gemischte Wohnnutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('SingleFamily', 'single-family house, terraced house', 'persons', '', '', '', '', '', '', '', '', 'Einfamilienhaus, Reihenhaus', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Apartment', 'apartment house, residential accomodation', 'persons', '', '', '', '', '', '', '', '', 'Mehrfamilienhaus', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Home', 'collective accomodation, children''s home, retirement home', 'persons', '', '', '', '', '', '', '', '', 'Gemeinschaftsunterkunft, Kinderheim, Seniorenheim', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Office', 'office (general)', 'persons', '', '', '', '', '', '', '', '', 'Büros (allgemein)', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('ComputerCentre', 'computer centre', '', '', '', '', '', '', '', '', '', 'Rechenzentrum, Serverbetrieb', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('StandByDuty', 'on-call service, stand-by duty (police, fire brigade, technical services, call centres ...)', 'persons', '', '', '', '', '', '', '', '', 'Bereitschaftsdienste (Polizei, Feuerwehr, Technische Dienste, Telefonzentrale ...)', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Education', 'education / school: not specified or mixed', 'pupils', '', '', '', '', '', '', '', '', 'Schulen: nicht näher spezifizierte oder gemischte Schulnutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('School', 'ordinary school, special school', 'pupils', '', '', '', '', '', '', '', '', 'Allgemeinbildende Schule, Sonderschule', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('School_Vocational', 'vocational school', 'pupils', '', '', '', '', '', '', '', '', 'Berufsbildende Schule', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Kindergarten', 'kindergarten, nursery school', 'pupils', '', '', '', '', '', '', '', '', 'Kindergarten, Kindertagesstätte', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('HigherEducation', 'higher education: not specified or mixed ', '', '', '', '', '', '', '', '', '', 'Lehre und Forschung: nicht näher spezifizierte oder gemischter Lehr-/Forschungsbetrieb', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Lecture', 'lecture hall', 'persons', '', '', '', '', '', '', '', '', 'Hörsäle, Seminarräume', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Laboratory', 'laboratory', '', '', '', '', '', '', '', '', '', 'Labor', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Library', 'library', '', '', '', '', '', '', '', '', '', 'Bibliothek', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Hospital', 'hospital / health care: not specified or standard hospital utilisation', 'beds', '', '', '', '', '', '', '', '', 'Krankenhaus / Gesundheitswesen: nicht näher spezifizierte oder allgemeine Krankenhaus-Nutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Surgery', 'operating room, emergency surgery etc.', '', '', '', '', '', '', '', '', '', 'Operationssaal', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Nursing', 'sick-nursing, long-term care', 'beds', '', '', '', '', '', '', '', '', 'Krankenpflege, Pflegeheim', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Trade', 'trade: not specified or mixed', '', '', '', '', '', '', '', '', '', 'Gewerbe: nicht näher spezifizierte oder gemichte Gewerbenutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Shop', 'retail trade, shop', '', '', '', '', '', '', '', '', '', 'Einzelhandel, Laden', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Storage', 'storage depot, wholesale', '', '', '', '', '', '', '', '', '', 'Lager, Großhandel', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Production', 'production, workshop, maintenance', '', '', '', '', '', '', '', '', '', 'Produktion, Werkstatt, Wartung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Agriculture', 'agriculture, animal husbandry, plant breeding', '', '', '', '', '', '', '', '', '', 'Landwirtschaft, Viehzucht, Pflanzenzucht', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('HotelRestaurant', 'hotel and restaurant: not specified mixed utilisation', 'beds', '', '', '', '', '', '', '', '', 'Hotel und Restaurant: nicht näher spezifizierte gemischte Nutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Hotel', 'hotel, hostel', 'beds', '', '', '', '', '', '', '', '', 'Hotel, Herberge', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Restaurant', 'restaurant', '', '', '', '', '', '', '', '', '', 'Restaurant, Gastwirtschaft', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Sports', 'sports: not specified or mixed sports utilisation', '', '', '', '', '', '', '', '', '', 'Sport allgemein: nicht näher spezifizierte oder gemischte Sportnutzung', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('SportsHall', 'sports hall, fitness centre etc.', '', '', '', '', '', '', '', '', '', 'Sporthalle', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('SwimmingPool', 'indoor swimming pool', 'pool_surface_area', '', '', '', '', '', '', '', '', 'Schwimmhalle', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Others', 'other utilisations: not specified or mixed', '', '', '', '', '', '', '', '', '', 'andere Nutzungen: nicht spezifiziert oder gemischt', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Assembly', 'assembly hall, arrival hall, church, concert hall, museums', 'persons', '', '', '', '', '', '', '', '', 'kulturelle Einrichtungen, Versammlungs- und Empfangsräume, Kirchen, Museen', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('DayCare', 'day care (youth centres, senior centres, ...)', 'persons', '', '', '', '', '', '', '', '', 'Tagesstätten (Jugendzentrum, Seniorenzentrum, ...)', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Garage', 'garage, underground car park', 'cars', '', '', '', '', '', '', '', '', 'Garage, Tiefgarage', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_EC`
--

DROP TABLE IF EXISTS `Tab_System_EC`;
CREATE TABLE IF NOT EXISTS `Tab_System_EC` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_EC_Specification_Version` varchar(50) NOT NULL,
  `Code_Type_EnergyCarrier` varchar(50) NOT NULL,
  `Description_EnergieCarrier_Specification` varchar(50) NOT NULL,
  `Description_National_EnergieCarrier_Specification` varchar(50) NOT NULL,
  `Remark_EnergieCarrier_Specification` varchar(200) NOT NULL,
  `EC_rho1` decimal(10,5) NOT NULL,
  `EC_rho2` decimal(10,5) NOT NULL,
  `EC_unit1` varchar(200) NOT NULL,
  `EC_edu1` decimal(10,5) NOT NULL,
  `EC_unit2` varchar(200) NOT NULL,
  `EC_edu2` decimal(10,5) NOT NULL,
  `EC_rel_gr_net` decimal(10,5) NOT NULL,
  `EC_f_p_Total` decimal(10,5) NOT NULL,
  `EC_f_p_NonRen` decimal(10,5) NOT NULL,
  `EC_f_CO2` decimal(10,5) NOT NULL,
  `EC_price` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_EC_Specification_Version`,`Code_Type_EnergyCarrier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_EC`
--

REPLACE INTO `Tab_System_EC` (`Code_StatusDataset`, `Code_EC_Specification_Version`, `Code_Type_EnergyCarrier`, `Description_EnergieCarrier_Specification`, `Description_National_EnergieCarrier_Specification`, `Remark_EnergieCarrier_Specification`, `EC_rho1`, `EC_rho2`, `EC_unit1`, `EC_edu1`, `EC_unit2`, `EC_edu2`, `EC_rel_gr_net`, `EC_f_p_Total`, `EC_f_p_NonRen`, `EC_f_CO2`, `EC_price`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Template', '##', '-', '', '', '', '0.00000', '0.00000', '', '0.00000', '', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Gas', 'Generic', '', '', '0.76000', '0.00000', 'standard cubic metre', '10.40000', 'kWh gross calorific value', '0.91330', '1.09490', '1.10000', '1.10000', '250.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Gas_E', 'Generic', '', '', '0.76000', '0.00000', 'standard cubic metre', '10.40000', 'kWh gross calorific value', '0.91330', '1.09490', '1.10000', '1.10000', '250.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Gas_LL', 'Generic', '', '', '0.76000', '0.00000', 'standard cubic metre', '8.90000', 'kWh gross calorific value', '0.91400', '1.09400', '1.10000', '1.10000', '270.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Gas_Liquid', 'Generic', '', '', '2.36000', '0.00000', 'litre (liquid)', '7.09000', 'kg', '12.80000', '1.08590', '1.10000', '1.10000', '270.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Oil', 'Generic', '', '', '860.00000', '0.00000', 'litre', '10.20000', '', '0.00000', '1.07630', '1.10000', '1.10000', '310.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Coal', 'Generic', '', '', '0.00000', '760.00000', 'm³ piled', '6600.00000', '', '0.00000', '1.03440', '1.10000', '1.10000', '440.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Coal_Hard', 'Generic', '', '', '0.00000', '760.00000', 'm³ piled', '6600.00000', '', '0.00000', '1.03440', '1.10000', '1.10000', '440.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Coal_Lignite', 'Generic', '', '', '0.00000', '700.00000', 'm³ piled', '3900.00000', '', '0.00000', '1.07270', '1.20000', '1.20000', '450.00000', '0.06000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Bio', 'Generic', '', 'same as WP', '1200.00000', '650.00000', 'kg', '5.50000', 'm³ piled', '3547.84000', '1.10870', '1.20000', '0.20000', '40.00000', '0.05000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'Bio_FW', 'Generic', '', '', '0.00000', '420.00000', 'm³ piled', '1700.00000', 'kg', '4.00000', '1.14630', '1.20000', '0.20000', '40.00000', '0.05000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'Bio_WP', 'Generic', '', '', '1200.00000', '650.00000', 'kg', '5.50000', 'm³ piled', '3547.84000', '1.10870', '1.20000', '0.20000', '40.00000', '0.05000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'Bio_WC', 'Generic', '', '', '0.00000', '185.00000', 'kg', '4.80000', 'm³ piled', '892.50000', '1.05000', '1.20000', '0.20000', '40.00000', '0.05000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'Bio_Other', 'Generic', '', 'same as WP', '1200.00000', '650.00000', 'kg', '5.50000', 'm³ piled', '3547.84000', '1.10870', '1.20000', '0.20000', '40.00000', '0.05000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'El', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '3.00000', '2.60000', '680.00000', '0.20000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'El_OP', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '3.00000', '2.60000', '680.00000', '0.15000', '2010-09-07', '2011-05-20', ''),
('Typology', 'Gen', 'El_Prod', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '3.00000', '2.60000', '680.00000', '0.20000', '2010-11-21', '2011-05-20', ''),
('Typology', 'Gen', 'DH', 'Generic', '', 'same as DH_Gas_NoCHP', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.30000', '1.30000', '420.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Gas_NoCHP', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.30000', '1.30000', '300.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Gas_CHP33', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.10000', '1.10000', '250.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Gas_CHP67', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.90000', '0.90000', '200.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Gas_CHP100', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.70000', '0.70000', '150.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Oil_NoCHP', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.30000', '1.30000', '420.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Oil_CHP33', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.10000', '1.10000', '350.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Oil_CHP67', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.90000', '0.90000', '280.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Oil_CHP100', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.70000', '0.70000', '210.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Coal_NoCHP', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.30000', '1.30000', '420.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Coal_CHP33', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '1.10000', '1.10000', '350.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Coal_CHP67', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.90000', '0.90000', '280.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Coal_CHP100', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.70000', '0.70000', '210.00000', '0.08000', '2010-09-07', '2011-09-01', ''),
('Typology', 'Gen', 'DH_Bio_NoCHP', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.30000', '0.10000', '60.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Bio_CHP33', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.20000', '0.00000', '40.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Bio_CHP67', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.10000', '0.00000', '20.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'DH_Bio_CHP100', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.00000', '0.00000', '0.00000', '0.08000', '2010-09-07', '0000-00-00', ''),
('Typology', 'Gen', 'Other', 'Generic', '', '', '0.00000', '0.00000', 'kWh', '1.00000', '', '0.00000', '1.00000', '0.00000', '0.00000', '0.00000', '0.00000', '2010-09-07', '2011-09-12', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_H`
--

DROP TABLE IF EXISTS `Tab_System_H`;
CREATE TABLE IF NOT EXISTS `Tab_System_H` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysH` int(11) NOT NULL,
  `Description_SysH` varchar(200) NOT NULL,
  `Description_National_SysH` varchar(200) NOT NULL,
  `Remark_SysH` varchar(200) NOT NULL,
  `FileName_Picture_SysH` varchar(200) NOT NULL,
  `Picture_SysH` varchar(200) NOT NULL,
  `Code_SysH_EC1` varchar(50) NOT NULL,
  `Code_SysH_EC2` varchar(50) NOT NULL,
  `Code_SysH_EC3` varchar(50) NOT NULL,
  `Code_SysH_G1` varchar(200) NOT NULL,
  `Code_SysH_G2` varchar(200) NOT NULL,
  `Code_SysH_G3` varchar(200) NOT NULL,
  `Fraction_SysH_G2` decimal(10,5) NOT NULL,
  `Fraction_SysH_G3` decimal(10,5) NOT NULL,
  `Code_SysH_S` varchar(200) NOT NULL,
  `Code_SysH_D` varchar(200) NOT NULL,
  `Code_SysH_Aux` varchar(200) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_BuildingSizeClass_System`,`Number_Variant_SysH`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_H`
--

REPLACE INTO `Tab_System_H` (`Code_StatusDataset`, `Code_Country`, `Code_BuildingSizeClass_System`, `Number_Variant_SysH`, `Description_SysH`, `Description_National_SysH`, `Remark_SysH`, `FileName_Picture_SysH`, `Picture_SysH`, `Code_SysH_EC1`, `Code_SysH_EC2`, `Code_SysH_EC3`, `Code_SysH_G1`, `Code_SysH_G2`, `Code_SysH_G3`, `Fraction_SysH_G2`, `Fraction_SysH_G3`, `Code_SysH_S`, `Code_SysH_D`, `Code_SysH_Aux`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'SUH', 1, 'Typical very old oil boiler in unheated room, distribution system is partly in unheated room', 'Viskotemperaturni standardni kotel ELKO v kotlovnici s hranilnikom, razvod je deloma v  neogrevanem, deloma v ogrevanem prostoru', '', '', '', 'Oil', '', '', 'SI.B_NC.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.01', 'SI.C.Gen.01', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'SUH', 2, 'Typical old oil boiler in unheated room, distribution system is partly in unheated room', 'Srednjetemperaturni standardni kotel ELKO v kotlovnici s hranilnikom, razvod je deloma v  neogrevanem, deloma v ogrevanem prostoru', '', '', '', 'Oil', '', '', 'SI.B_NC_CT.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.01', 'SI.C.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 3, 'Noncondenzing low temperature boiler for heating and hot wather installed in the heated room. Distribution of pipes inside the envelope.', 'Nizkotemperaturni kotel v ogrevani kotlovnici za pripravo tople vode in za ogrevanje, razvod znotraj ogrevanega prostora.', '', '', '', 'Oil', '', '', 'SI.B_NC_LT.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.01', 'SI.C.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 4, 'Biomass central heating, woodpellets boiler (old) in unconditioned space, not insulated pipes in unheated rooms.', 'Star kotel na lesno biomaso v neogrevanem prostoru', '', '', '', 'Bio', '', '', 'SI.B_WP.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.01', 'SI.C.Gen.02', 'SI.D.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 5, 'Biomass central heating, woodpellets boiler (new) in conditioned space', 'Nov kotel na lesno biomaso v ogrevanem prostoru', '', '', '', 'Bio', '', '', 'SI.B_WP.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.01', 'SI.C.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'MUH', 6, 'Central old gas boiler in unheated room, no heat pump, distribution system partly in unheated places', 'Ogrevanje s kotlom na plin, skupna neogrevana kotlovnica, brez obtočne črpalke', '', '', '', 'Gas', '', '', 'SI.G_SH.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.03', 'SI.D.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 7, 'Condensation gas boiler for heating and hot wather installed in the heated room. Distribution of pipes inside the envelope.', 'Kondenzacijski plinski kotel v ogrevani kotlovnici za pripravo tople vode in za ogrevanje, razvod znotraj ogrevanega prostora.', '', '', '', 'Gas', '', '', 'SI.G_IWH.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.01', 'SI.C.Gen.01', 'SI.C.Gen.01', '2010-09-07', '0000-00-00', ''),
('Typology', 'SI', 'SUH', 8, 'Condensation gas boiler for heating and hot wather installed in the heated room. Distribution of pipes inside the envelope. Instaled solar pannels for heating and DHW', 'Kondenzacijski plinski kotel v ogrevani kotlovnici za pripravo tople vode in za ogrevanje, razvod znotraj ogrevanega prostora. Sončni sprejemniki za ogrevanje in pripravo tople vode', '', '', '', 'Gas', '', '', 'SI.G_IWH.Gen.01', 'SI.Solar.Gen.01', '', '0.20000', '0.00000', 'SI.BS.Gen.01', 'SI.C.Gen.01', 'SI.C.Gen.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 9, 'District heating, DHW local, DH in unheated room', 'Daljinsko ogrevanje, priprava tople vode lokalno, toplotna postaja v neogrevani kotlovnici', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.01', 'SI.C.Gen.02', 'SI.D.Gen.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 10, 'District heating, DHW central, DH in unheated room', 'Daljinsko ogrevanje, priprava tople vode centralno, toplotna postaja v neogrevani kotlovnici', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.01', 'SI.C.Gen.02', 'SI.D.Gen.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 11, 'District heating, DHW central, DH in heated room', 'Daljinsko ogrevanje, priprava tople vode centralno, toplotna postaja v ogrevani kotlovnici', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', '', '', '0.00000', '0.00000', 'SI.BS.Gen.02', 'SI.C.Gen.01', 'SI.C.Gen.01', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_HA`
--

DROP TABLE IF EXISTS `Tab_System_HA`;
CREATE TABLE IF NOT EXISTS `Tab_System_HA` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_AuxH` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_AuxH` int(11) NOT NULL,
  `Description_AuxH` varchar(200) NOT NULL,
  `Description_National_AuxH` varchar(200) NOT NULL,
  `Remark_AuxH` varchar(200) NOT NULL,
  `year1_AuxH` int(11) NOT NULL,
  `year2_AuxH` int(11) NOT NULL,
  `q_del_h_aux` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_AuxH`,`Code_BuildingSizeClass_System`,`Number_Variant_AuxH`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_HA`
--

REPLACE INTO `Tab_System_HA` (`Code_StatusDataset`, `Code_Country`, `Code_Type_AuxH`, `Code_BuildingSizeClass_System`, `Number_Variant_AuxH`, `Description_AuxH`, `Description_National_AuxH`, `Remark_AuxH`, `year1_AuxH`, `year2_AuxH`, `q_del_h_aux`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'C', 'Gen', 1, 'central heating - heat pump', 'Obtočna črpalka', '', 1, 9999, '2.70000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'D', 'Gen', 1, 'decentral heating system', 'Brez obotčne črpalke', '', 1, 9999, '0.00000', '2011-06-15', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_HD`
--

DROP TABLE IF EXISTS `Tab_System_HD`;
CREATE TABLE IF NOT EXISTS `Tab_System_HD` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysHD` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysHD` int(11) NOT NULL,
  `Description_SysHD` varchar(200) NOT NULL,
  `Description_National_SysHD` varchar(200) NOT NULL,
  `Remark_SysHD` varchar(200) NOT NULL,
  `year1_SysHD` int(11) NOT NULL,
  `year2_SysHD` int(11) NOT NULL,
  `q_d_h` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysHD`,`Code_BuildingSizeClass_System`,`Number_Variant_SysHD`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_HD`
--

REPLACE INTO `Tab_System_HD` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysHD`, `Code_BuildingSizeClass_System`, `Number_Variant_SysHD`, `Description_SysHD`, `Description_National_SysHD`, `Remark_SysHD`, `year1_SysHD`, `year2_SysHD`, `q_d_h`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'C', 'Gen', 1, 'central distribution, completely in heated envelope', 'Centralni razvod ogrevalnega sistema je cel znotraj toplotnega ovoja stavbe', '', 1, 9999, '4.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'C', 'Gen', 2, 'central distribution, mostly in heated envelope', 'Centralni razvod ogrevalnega sistema je večinoma znotraj toplotnega ovoja stavbe', '', 1, 9999, '10.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'C', 'Gen', 3, 'central distribution, partly in heated envelope', 'Centralni razvod ogrevalnega sistema je deloma znotraj toplotnega ovoja stavbe', '', 1, 9999, '14.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'D', 'Gen', 4, 'decentral distribution', 'Brez centralnega razvodnega sistema', '', 1, 9999, '0.00000', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_HG`
--

DROP TABLE IF EXISTS `Tab_System_HG`;
CREATE TABLE IF NOT EXISTS `Tab_System_HG` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysHG` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysHG` int(11) NOT NULL,
  `Description_SysHG` varchar(200) NOT NULL,
  `Description_National_SysHG` varchar(200) NOT NULL,
  `Remark_SysHG` varchar(200) NOT NULL,
  `year1_SysHG` int(11) NOT NULL,
  `year2_SysHG` int(11) NOT NULL,
  `e_g_h_Heat` decimal(10,5) NOT NULL,
  `e_g_h_Electricity` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysHG`,`Code_BuildingSizeClass_System`,`Number_Variant_SysHG`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_HG`
--

REPLACE INTO `Tab_System_HG` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysHG`, `Code_BuildingSizeClass_System`, `Number_Variant_SysHG`, `Description_SysHG`, `Description_National_SysHG`, `Remark_SysHG`, `year1_SysHG`, `year2_SysHG`, `e_g_h_Heat`, `e_g_h_Electricity`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'B_NC', 'Gen', 1, 'boiler unknnown old', 'Standardni kotel', '', 0, 0, '1.35135', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'TS', 'Gen', 1, 'district heating station', 'Daljinsko ogrevanje', '', 0, 0, '1.00000', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'B_C', 'Gen', 1, 'condensing boiler old', 'Kondenzacijski kotel - star', '', 0, 0, '1.17647', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'G_SH', 'Gen', 1, 'gas fired space heating boiler', 'Kotel na plin', '', 0, 0, '1.18000', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'G_IWH', 'Gen', 1, 'condensing boiler new', 'Kondenzacijski kotel - nov', '', 0, 0, '0.98039', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'B_WP', 'Gen', 1, 'wood pellets boiler old', 'Kotel na lesno biomaso - star', '', 0, 0, '2.00000', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'B_WP', 'Gen', 2, 'wood pellets boiler new', 'Kotel na lesno biomaso - nov', '', 0, 0, '1.20482', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'B_NC_CT', 'Gen', 1, 'oil boiler constant temperature', 'Srednjetemperaturni kotel', '', 0, 0, '1.20000', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'Solar', 'Gen', 1, 'thermal solar plant', 'Sprejemniki sončne energije', '', 0, 0, '0.00000', '0.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'B_NC_LT', 'Gen', 1, 'non-condensing boiler new', 'Nizkotemperaturni kotel', '', 0, 0, '1.10000', '0.00000', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_HS`
--

DROP TABLE IF EXISTS `Tab_System_HS`;
CREATE TABLE IF NOT EXISTS `Tab_System_HS` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysHS` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysHS` int(11) NOT NULL,
  `Description_SysHS` varchar(200) NOT NULL,
  `Description_National_SysHS` varchar(200) NOT NULL,
  `Remark_SysHS` varchar(200) NOT NULL,
  `year1_SysHS` int(11) NOT NULL,
  `year2_SysHS` int(11) NOT NULL,
  `q_s_h` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysHS`,`Code_BuildingSizeClass_System`,`Number_Variant_SysHS`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_HS`
--

REPLACE INTO `Tab_System_HS` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysHS`, `Code_BuildingSizeClass_System`, `Number_Variant_SysHS`, `Description_SysHS`, `Description_National_SysHS`, `Remark_SysHS`, `year1_SysHS`, `year2_SysHS`, `q_s_h`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'BS', 'Gen', 2, 'buffer storagein heated room', 'hranilnik v neogrevanem prostoru', '', 0, 0, '2.00000', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'BS', 'Gen', 1, 'buffer storage in unheated room', 'hranilnik v ogrevanem prostoru', '', 2000, 0, '8.53000', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_Vent`
--

DROP TABLE IF EXISTS `Tab_System_Vent`;
CREATE TABLE IF NOT EXISTS `Tab_System_Vent` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysVent` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysVent` int(11) NOT NULL,
  `Description_SysVent` varchar(200) NOT NULL,
  `Description_National_SysVent` varchar(200) NOT NULL,
  `Remark_SysVent` varchar(200) NOT NULL,
  `FileName_Picture_SysVent` varchar(200) NOT NULL,
  `Picture_SysVent` varchar(200) NOT NULL,
  `year1_SysVent` int(11) NOT NULL,
  `year2_SysVent` int(11) NOT NULL,
  `eta_ve_rec` decimal(10,5) NOT NULL,
  `q_del_ve_aux` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysVent`,`Code_BuildingSizeClass_System`,`Number_Variant_SysVent`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_Vent`
--

REPLACE INTO `Tab_System_Vent` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysVent`, `Code_BuildingSizeClass_System`, `Number_Variant_SysVent`, `Description_SysVent`, `Description_National_SysVent`, `Remark_SysVent`, `FileName_Picture_SysVent`, `Picture_SysVent`, `year1_SysVent`, `year2_SysVent`, `eta_ve_rec`, `q_del_ve_aux`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', '-', 'Gen', 1, 'no ventilation system', 'Brez sistema za mehansko prezračevanje.', '', '', '', 1, 9999, '0.00000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'Bal_Rec', 'Gen', 1, 'ventilation system with 80% heat recovery ', 'Sistem za mehansko prezračevanje z rekuperacijo toplote zavrženega zraka 80%.', '', '', '', 1, 9999, '0.80000', '2.00000', '2010-09-07', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_W`
--

DROP TABLE IF EXISTS `Tab_System_W`;
CREATE TABLE IF NOT EXISTS `Tab_System_W` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysW` int(11) NOT NULL,
  `Description_SysW` varchar(200) NOT NULL,
  `Description_National_SysW` varchar(200) NOT NULL,
  `Remark_SysW` varchar(200) NOT NULL,
  `FileName_Picture_SysW` varchar(200) NOT NULL,
  `Picture_SysW` varchar(200) NOT NULL,
  `Code_SysW_EC1` varchar(50) NOT NULL,
  `Code_SysW_EC2` varchar(50) NOT NULL,
  `Code_SysW_EC3` varchar(50) NOT NULL,
  `Code_SysW_G1` varchar(200) NOT NULL,
  `Code_SysW_G2` varchar(200) NOT NULL,
  `Code_SysW_G3` varchar(200) NOT NULL,
  `Fraction_SysW_G2` decimal(10,5) NOT NULL,
  `Fraction_SysW_G3` decimal(10,5) NOT NULL,
  `Code_SysW_S` varchar(200) NOT NULL,
  `Code_SysW_D` varchar(200) NOT NULL,
  `Code_SysW_Aux` varchar(200) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_BuildingSizeClass_System`,`Number_Variant_SysW`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_W`
--

REPLACE INTO `Tab_System_W` (`Code_StatusDataset`, `Code_Country`, `Code_BuildingSizeClass_System`, `Number_Variant_SysW`, `Description_SysW`, `Description_National_SysW`, `Remark_SysW`, `FileName_Picture_SysW`, `Picture_SysW`, `Code_SysW_EC1`, `Code_SysW_EC2`, `Code_SysW_EC3`, `Code_SysW_G1`, `Code_SysW_G2`, `Code_SysW_G3`, `Fraction_SysW_G2`, `Fraction_SysW_G3`, `Code_SysW_S`, `Code_SysW_D`, `Code_SysW_Aux`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'SUH', 1, 'central hot water system, high efficiency: heat generation combined with heating system (condensing boiler), no circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (kondenzacijski kotel). Brez cirkulacije.', '', '', '', 'Gas', '', '', 'SI.G_IWH.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'SUH', 2, 'central hot water system, low efficiency: heat generation combined with heating system (old oil boiler), no circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (star kotel na ELKO). Brez cirkulacije.', '', '', '', 'Oil', '', '', 'SI.B_NC.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 3, 'central hot water system, low efficiency: heat generation combined with heating system (constant temperature boiler), no circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (srednje temperaturni kotel). Brez cirkulacije.', '', '', '', 'Oil', '', '', 'SI.B_NC_CT.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 4, 'central hot water system, high efficiency: heat generation combined with heating system (condensing boiler), circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (kondenzacijski kotel). S cirkulacijo.', '', '', '', 'Gas', '', '', 'SI.G_IWH.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 5, 'central hot water system, high efficiency: heat generation combined with heating system (condensing boiler), circulation loop + solar panels', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (kondenzacijski kotel). S cirkulacijo. + Sprejemniki sončne energije', '', '', '', 'Gas', '', '', 'SI.G_IWH.Gen.01', 'SI.Solar.Gen.01', '', '0.80000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 6, 'central hot water system, low efficiency: heat generation combined with heating system (wood palets boiler), no circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (star kotel na lesno biomaso). Brez cirkulacije.', '', '', '', 'Bio', '', '', 'SI.B_WP.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Ext.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 7, 'central hot water system, high efficiency: heat generation combined with heating system (wood palets boiler), circulation loop', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (nov kotel na lesno biomaso). S cirkulacije.', '', '', '', 'Bio', '', '', 'SI.B_WP.Gen.02', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 8, 'central hot water system, high efficiency: heat generation combined with heating system (wood palets boiler), circulation loop + solar panels', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (nov kotel na lesno biomaso). S cirkulacije. + Sprejemniki sončne energije', '', '', '', 'Bio', '', '', 'SI.B_WP.Gen.02', 'SI.Solar.Gen.01', '', '0.80000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'SUH', 9, 'central hot water system, high efficiency: heat generation combined with heating system (low temperature oil boiler), circulation loop + solar panels', 'Centralna priprava tople vode kombinirana z ogrevalnim sistemom (nizkotemperaturni kotel). S cirkulacije. + Sprejemniki sončne energije', '', '', '', 'Oil', '', '', 'SI.B_NC_LT.Gen.01', 'SI.Solar.Gen.01', '', '0.80000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'MUH', 10, 'decentral gas', 'Stenski električni kotliček', '', '', '', 'Gas', '', '', 'SI.G_Tank.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '2010-09-07', '2010-10-14', ''),
('Typology', 'SI', 'MUH', 11, 'decentral electric', 'Stenski električni kotel', '', '', '', 'El', '', '', 'SI.E.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_Gas.Gen.01', 'SI.C_NoCirc_Int.Gen.01', 'SI.C_NoCirc.SUH.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 12, 'District heating for heating and DHW, circulation. Unheated room', 'Daljinsko ogrevanje za ogrevanje in pripravo tople vode. Naprave nameščene v neogrevanem prostoru.', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Ext.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 13, 'District heating for heating and DHW, circulation. Heated room', 'Daljinsko ogrevanje za ogrevanje in pripravo tople vode. Naprave nameščene v ogrevanem prostoru.', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', '', '', '0.00000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'MUH', 14, 'District heating for heating and DHW, circulation. Heated room. + Solar panels', 'Daljinsko ogrevanje za ogrevanje in pripravo tople vode. Naprave nameščene v ogrevanem prostoru. + Sprejemniki sončne energije', '', '', '', 'DH', '', '', 'SI.TS.Gen.01', 'SI.Solar.Gen.01', '', '0.80000', '0.00000', 'SI.S_C_Int.Gen.01', 'SI.C_Circ_Int.Gen.01', 'SI.C_Circ.Gen.01', '0000-00-00', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_WA`
--

DROP TABLE IF EXISTS `Tab_System_WA`;
CREATE TABLE IF NOT EXISTS `Tab_System_WA` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_AuxW` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_AuxW` int(11) NOT NULL,
  `Description_AuxW` varchar(200) NOT NULL,
  `Description_National_AuxW` varchar(200) NOT NULL,
  `Remark_AuxW` varchar(200) NOT NULL,
  `year1_AuxW` int(11) NOT NULL,
  `year2_AuxW` int(11) NOT NULL,
  `q_del_w` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_AuxW`,`Code_BuildingSizeClass_System`,`Number_Variant_AuxW`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_WA`
--

REPLACE INTO `Tab_System_WA` (`Code_StatusDataset`, `Code_Country`, `Code_Type_AuxW`, `Code_BuildingSizeClass_System`, `Number_Variant_AuxW`, `Description_AuxW`, `Description_National_AuxW`, `Remark_AuxW`, `year1_AuxW`, `year2_AuxW`, `q_del_w`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'C_Circ', 'Gen', 1, 'central dhw system, circulation pump', '', '', 0, 9999, '1.70000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'C_NoCirc', 'SUH', 1, 'central domestic hot water system, no circulation pump', '', '', 0, 9999, '0.00000', '2011-01-24', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_WD`
--

DROP TABLE IF EXISTS `Tab_System_WD`;
CREATE TABLE IF NOT EXISTS `Tab_System_WD` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysWD` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysWD` int(11) NOT NULL,
  `Description_SysWD` varchar(200) NOT NULL,
  `Description_National_SysWD` varchar(200) NOT NULL,
  `Remark_SysWD` varchar(200) NOT NULL,
  `year1_SysWD` int(11) NOT NULL,
  `year2_SysWD` int(11) NOT NULL,
  `q_d_w` decimal(10,5) NOT NULL,
  `q_d_w_h` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysWD`,`Code_BuildingSizeClass_System`,`Number_Variant_SysWD`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_WD`
--

REPLACE INTO `Tab_System_WD` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysWD`, `Code_BuildingSizeClass_System`, `Number_Variant_SysWD`, `Description_SysWD`, `Description_National_SysWD`, `Remark_SysWD`, `year1_SysWD`, `year2_SysWD`, `q_d_w`, `q_d_w_h`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'C_NoCirc_Int', 'Gen', 1, 'central system no circulation ', '', '', 0, 9999, '0.60000', '0.48000', '2010-09-07', '0000-00-00', ''),
('Typology', 'SI', 'C_Circ_Int', 'Gen', 1, 'central system with circulation', '', '', 0, 9999, '1.00000', '0.80000', '2011-01-24', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_WG`
--

DROP TABLE IF EXISTS `Tab_System_WG`;
CREATE TABLE IF NOT EXISTS `Tab_System_WG` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysWG` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysWG` int(11) NOT NULL,
  `Description_SysWG` varchar(200) NOT NULL,
  `Description_National_SysWG` varchar(200) NOT NULL,
  `Remark_SysWG` varchar(200) NOT NULL,
  `year1_SysWG` int(11) NOT NULL,
  `year2_SysWG` int(11) NOT NULL,
  `e_g_w_Heat` decimal(10,5) NOT NULL,
  `e_g_w_Electricity` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysWG`,`Code_BuildingSizeClass_System`,`Number_Variant_SysWG`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_WG`
--

REPLACE INTO `Tab_System_WG` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysWG`, `Code_BuildingSizeClass_System`, `Number_Variant_SysWG`, `Description_SysWG`, `Description_National_SysWG`, `Remark_SysWG`, `year1_SysWG`, `year2_SysWG`, `e_g_w_Heat`, `e_g_w_Electricity`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'HP_Air', 'Gen', 1, 'electrical heat pump, heat source: air', 'Toplotna črpalka, zrak', '', 0, 0, '0.35714', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_WP', 'Gen', 2, 'wood pellets boiler new', 'Kotel na lesno biomaso - nov', '', 0, 0, '1.20482', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'HP_Ground', 'Gen', 1, 'electrical heat pump, heat source: soil, ground', 'Toplotna črpalka, zemlja', '', 0, 0, '0.28571', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_WP', 'Gen', 1, 'wood pellets boiler old', 'Kotel na lesno biomaso - star', '', 0, 0, '2.00000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_C', 'Gen', 1, 'condensing boiler new', 'Kondenzacijski kotel - nov', '', 0, 0, '0.98039', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'G_SH', 'Gen', 1, 'gas fired space heating boiler', 'Kotel na plin', '', 0, 0, '1.18000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'TS', 'Gen', 1, 'district heating station', 'Daljinsko ogrevanje', '', 0, 0, '1.00000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_C', 'Gen', 2, 'condensing boiler old', 'Kondenzacijski kotel - star', '', 0, 0, '1.17647', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_NC', 'Gen', 1, 'boiler unknnown old', 'Standardni kotel', '', 0, 0, '1.35135', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'G_IWH', 'Gen', 1, 'gas fired instanataneus water heater', 'Pretočni plinski kotliček', '', 0, 0, '1.00000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'E', 'Gen', 1, 'electric heater with tank', 'Električni akumulacijski bojler', '', 0, 0, '1.00000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'Solar', 'Gen', 1, 'thermal solar plant', 'Sprejemniki sončne energije', '', 0, 0, '0.00000', '0.00000', '2011-06-15', '0000-00-00', ''),
('Typology', 'SI', 'B_NC_CT', 'Gen', 1, 'oil boiler constant temperature', 'Srednjetemperaturni kotel', '', 0, 0, '1.20000', '0.00000', '2011-08-26', '0000-00-00', ''),
('Typology', 'SI', 'G_Tank', 'Gen', 1, 'gas burner as a heating element of a domestic hot water tank (separately from space heating system)', 'Stenski plinski kotlićček za pripravo tople vode', '', 0, 0, '1.00000', '0.00000', '2011-08-26', '0000-00-00', ''),
('Typology', 'SI', 'B_NC_LT', 'Gen', 1, 'non-condensing boiler new', 'Nizkotemperaturni kotel', '', 0, 0, '1.10000', '0.00000', '2011-08-26', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_System_WS`
--

DROP TABLE IF EXISTS `Tab_System_WS`;
CREATE TABLE IF NOT EXISTS `Tab_System_WS` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_Type_SysWS` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_System` varchar(50) NOT NULL,
  `Number_Variant_SysWS` int(11) NOT NULL,
  `Description_SysWS` varchar(200) NOT NULL,
  `Description_National_SysWS` varchar(200) NOT NULL,
  `Remark_SysWS` varchar(200) NOT NULL,
  `year1_SysWS` int(11) NOT NULL,
  `year2_SysWS` int(11) NOT NULL,
  `q_s_w` decimal(10,5) NOT NULL,
  `q_s_w_h` decimal(10,5) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_Country`,`Code_Type_SysWS`,`Code_BuildingSizeClass_System`,`Number_Variant_SysWS`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_System_WS`
--

REPLACE INTO `Tab_System_WS` (`Code_StatusDataset`, `Code_Country`, `Code_Type_SysWS`, `Code_BuildingSizeClass_System`, `Number_Variant_SysWS`, `Description_SysWS`, `Description_National_SysWS`, `Remark_SysWS`, `year1_SysWS`, `year2_SysWS`, `q_s_w`, `q_s_w_h`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'S_D', 'Gen', 1, 'indirect storage, since 1994', '', '', 1994, 0, '4.32000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'S_Gas', 'Gen', 1, 'directly gas or eletrical heated', '', '', 0, 9999, '0.00000', '0.00000', '2011-01-24', '0000-00-00', ''),
('Typology', 'SI', 'S_C_Ext', 'Gen', 1, 'central hot water storage, outside thermal envelope', '', '', 0, 9999, '0.50000', '0.00000', '2010-09-07', '0000-00-00', ''),
('Typology', 'SI', 'S_C_Int', 'Gen', 1, 'central hot water storage, inside thermal envelope', '', '', 0, 9999, '0.50000', '0.50000', '2010-09-07', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `Tab_Type_Building`
--

DROP TABLE IF EXISTS `Tab_Type_Building`;
CREATE TABLE IF NOT EXISTS `Tab_Type_Building` (
  `Code_StatusDataset` varchar(50) NOT NULL,
  `Code_Country` varchar(50) NOT NULL,
  `Code_TypologyRegion` varchar(50) NOT NULL,
  `Code_BuildingSizeClass` varchar(50) NOT NULL,
  `Code_BuildingSizeClass_Extension` varchar(50) NOT NULL,
  `Code_ConstructionYearClass` varchar(50) NOT NULL,
  `Code_ConstructionYearClass_Extension` varchar(50) NOT NULL,
  `Code_AdditionalParameter` varchar(50) NOT NULL,
  `Description_BuildingType` varchar(50) NOT NULL,
  `Description_BuildingType_National` varchar(50) NOT NULL,
  `Code_BuildingType_National` varchar(50) NOT NULL,
  `Remark_BuildingType_1` varchar(50) NOT NULL,
  `Remark_BuildingType_2` varchar(50) NOT NULL,
  `Remark_BuildingType_3` varchar(50) NOT NULL,
  `Remark_BuildingType_4` varchar(50) NOT NULL,
  `Date_Entry` date NOT NULL,
  `Date_Change` date NOT NULL,
  `Note_DataBaseAdmin` varchar(200) NOT NULL,
  PRIMARY KEY (`Code_TypologyRegion`,`Code_BuildingSizeClass`,`Code_BuildingSizeClass_Extension`,`Code_ConstructionYearClass`,`Code_ConstructionYearClass_Extension`,`Code_AdditionalParameter`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tab_Type_Building`
--

REPLACE INTO `Tab_Type_Building` (`Code_StatusDataset`, `Code_Country`, `Code_TypologyRegion`, `Code_BuildingSizeClass`, `Code_BuildingSizeClass_Extension`, `Code_ConstructionYearClass`, `Code_ConstructionYearClass_Extension`, `Code_AdditionalParameter`, `Description_BuildingType`, `Description_BuildingType_National`, `Code_BuildingType_National`, `Remark_BuildingType_1`, `Remark_BuildingType_2`, `Remark_BuildingType_3`, `Remark_BuildingType_4`, `Date_Entry`, `Date_Change`, `Note_DataBaseAdmin`) VALUES
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.04', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.03', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.02', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.01', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.06', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.05', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.04', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.03', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.02', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'MFH', '', 'SI.01', '', 'SI.Gen', 'Multy family house in original state', 'Večstanovanjska stavba brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.06', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.05', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.04', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.03', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.02', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'TH', '', 'SI.01', '', 'SI.Gen', 'Tarraced House Single Family in original state', 'Vrstna hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.06', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.05', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.04', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.03', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.02', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'SFH', '', 'SI.01', '', 'SI.Gen', 'Single family house in original state', 'Enodružinska hiša brez prenove', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.05', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', ''),
('Typology', 'SI', 'SI.N', 'AB', '', 'SI.06', '', 'SI.Gen', 'Apartment block', 'Stanovanjski blok - stolpnica', '', '', '', '', '', '0000-00-00', '0000-00-00', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
