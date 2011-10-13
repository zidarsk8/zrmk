<html>
<head>
<title>

</title>
<style TYPE="text/css">
       <!--

       -->
</style>
</head>
<body>

<div class="wrap">
<div class="header">
<img class="fl" src="tabula.png" /><div class="fl">Energy Balance Calculation</div><div class="sp fl">System Performance</div>
</div>
<div class="fl">Standard Reference Calculation - based on: EN ISO 15316 / level B (tabled values)</div>
<div class="cb"></div>

<table style="width:100%;">
<tr><td></td><td class="small">code</td><td></td><td class="small">A_C_ref</td></tr>
<tr><td>Building</td><td><input style="width:100%;" type="text" width="200px" id="Code_BuildingVariant" /></td><td>conditioned floor area</td><td><input type="text" id="A_C_Ref" style="width:100%;"/></td><td class="small">m<sup>2</sup></tr>
<tr><td>System</td><td colspan="4"><input type="text" style="width:100%;" id="Code_SystemType" /></td></tr>
</table>
<hr />
<h1>Domestic Hot Water System</h1>
<table class="full">
<tr><td></td><td class="small">code</td></tr>
<tr><td>System</td><td><input style="width:350px;" type="text" id="Code_SysW" /></td></tr>
</table>
<br />
<table>
<tr><td colspan="2">energy need hot water</td><td class="tr">q<sub>nd,w</sub></td><td><input type="text" id="q_w_nd" /></td><td colspan="2">thereof recoverable for space heating:</td></tr>
<tr><td>+  losses distrib.</td><td><input type="text" id="Code_SysW_D" /></td><td class="tr">q<sub>d,w</sub></td><td><input type="text" id="q_d_w" /></td><td class="tr">q<sub>d,w,h</sub></td><td><input type="text" id="q_d_w_h" /></td></tr>
<tr><td>+  losses storage</td><td><input type="text" id="Code_SysW_S" /></td><td class="tr">q<sub>s,w</sub></td><td><input type="text" id="q_s_w" /></td><td class="tr">q<sub>s,w,h</sub></td><td><input type="text" id="q_s_w_h" /></td></tr>

<tr><td colspan="3" class="tr">q<sub>g,w,out</sub> = q<sub>nd,w</sub> + q<sub>d,w</sub> + q<sub>s,w</sub></td><td><input type="text" id="qg_w_out" /></td><td class="tr">q<sub>w,h</sub> = q<sub>d,w,h</sub> + q<sub>s,w,h</sub></td><td><input type="text" id="qw_h" /></td></tr>
<tr><td colspan="3"></td><td>kWh/(m<sup>2</sup>a)</td><td></td><td>kWh/(m<sup>2</sup>a)</td></tr>
</table>

<table>
<tr>
<td></td>
<td>energyware for domestic water</td>
<td>heat generator</td>
<td></td>
<td>heat generator output</td>
<td>expenditure factor</td>
<td>delivered energy</td>
<td colspan="2">combined heat and power</td>
</tr>

<tr>
<td></td>
<td class="small">code</td>
<td class="small">code</td>
<td class="small">a<sub>nd,w,i</sub></td>
<td class="small">q<sub>g,w,out</sub></td>
<td class="small">e<sub>g,w,i</sub></td>
<td class="small">q<sub>del,w,i</sub></td>
<td class="small">expenditure factor electricity generation<br />e<sub>g,el,w,i</sub></td>
<td class="small">electricity production <br />q<sub>prod,el,w,i</sub></td>
</tr>

<tr>
<td>1</td>
<td><input type="text" id="Code_SysW_EC_1" /></td>
<td><input type="text" id="Code_SysW_G_1" /></td>
<td><input class="is" type="text" id="nd_w_i" /></td>
<td></td>
<td><input class="is" type="text" id="e_g_w_Heat_1" /> =</td>
<td><input class="is" type="text" id="qdel_w_i_1" /> :</td>
<td><input class="is" type="text" id="e_g_w_Electricity_1" /> =</td>
<td><input class="is" type="text" id="qprod_el_w_i_1" /></td>
</tr>

<tr>
<td>2</td>
<td><input type="text" id="Code_SysW_EC_2" /></td>
<td><input type="text" id="Code_SysW_G_2" /></td>
<td><input class="is" type="text" id="Fraction_SysW_G_2" /></td>
<td>x <input class="is" type="text" id="qg_w_out_2" /> x</td>
<td><input class="is" type="text" id="e_g_w_Heat_2" /> =</td>
<td><input class="is" type="text" id="qdel_w_i_2" /> :</td>
<td><input class="is" type="text" id="e_g_w_Electricity_2" /> =</td>
<td><input class="is" type="text" id="qprod_el_w_i_2" /></td>
</tr>

<tr>
<td>3</td>
<td><input type="text" id="Code_SysW_EC_3" /></td>
<td><input type="text" id="Code_SysW_G_3" /></td>
<td><input class="is" type="text" id="Fraction_SysW_G_3" /></td>
<td></td>
<td><input class="is" type="text" id="e_g_w_Heat_3" /> =</td>
<td><input class="is" type="text" id="qdel_w_i_3" /> :</td>
<td><input class="is" type="text" id="e_g_w_Electricity_3" /> =</td>
<td><input class="is" type="text" id="qprod_el_w_i_3" /></td>
</tr>

<tr>
<td></td>
<td class="small"><b>auxiliary energy</b></td>
<td colspan="3" class="small">code</td>
<td class="small">q<sub>del,w,aux</sub></td>
</tr>


<tr>
<td>aux</td>
<td><input type="text" id="el_1" value="el" /></td>
<td colspan="3"><input type="text" id="Code_SysW_Aux" /></td>
<td><input type="text" id="q_del_w_aux" /></td>
</tr>

<tr>
<td colspan="5"></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
</tr>
</table>


<h1>Heating System</h1>
<table>
<tr><td></td><td class="small">code</td></tr>
<tr><td>System</td><td><input type="text" id="Code_SysH" style="width:500px;" /></td><td class="small">gain utilisation factor for heating</td></tr>
</table>

<table>
<tr>
<td colspan="2">energy need space heating</td>
<td class="tr">q<sub>nd,h</sub></td>
<td><input type="text" id="q_h_nd" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
<td>hh<sub>gn</sub></td>
<td colspan="2">ventilation heat recovery</td>
</tr>

<tr>
<td colspan="2">-  usable contribution of hot water system</td>
<td class="tr">q<sub>w,h</sub></td>
<td><input type="text" id="q_w_h" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
<td><input type="text" id="eta_h_gn" class="is" /></td>
<td>hve<sub>rec</sub></td>
<td>qht<sub>ve</sub></td>
</tr>

<tr>
<td colspan="2">-  usable contribution of ventilation heat recovery</td>
<td class="tr">q<sub>ve,h,rec</sub></td>
<td><input type="text" id="qve_h_re" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
<td></td>
<td><input type="text" id="q_ht_ve" class="is"/></td>
<td><input type="text" id="eta_ve_rec" class="is"/></td>
</tr>

<tr>
<td class="small">+  losses distribution and heat emission</td>
<td><input type="text" id="Code_SysH_D" /></td>
<td class="tr">q<sub>d,h</sub></td>
<td><input type="text" id="q_s_h" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
</tr>

<tr>
<td>+  losses storage</td>
<td><input type="text" id="Code_SysH_S" /></td>
<td class="tr">q<sub>s,h</sub></td>
<td><input type="text" id="q_d_h" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
</tr>

<tr>
<td class="tr" colspan="3">q<sub>g,h,out</sub> = q<sub>nd,h</sub> - q<sub>w,h</sub> - q<sub>ve,h,rec</sub> + q<sub>d,h</sub> + q<sub>s,h</sub></td>
<td><input type="text" id="q_g_h_out" class="is"/></td>
<td class="small">kWh/(m<sup>2</sup>a</td>
</tr>

</table>

<br />
<table>
<tr>
<td></td>
<td>energyware for space</td>
<td>heat generator</td>
<td></td>
<td>heat generator<br /> output</td>
<td>expenditure<br /> factor</td>
<td>delivered<br /> energy</td>
<td colspan="2">combined heat<br /> and power</td>
</tr>

<tr>
<td></td>
<td class="small">code</td>
<td class="small">code</td>
<td class="small">a<sub>nd,h,i</sub></td>
<td class="small">q<sub>g,h,out</sub></td>
<td class="small">e<sub>g,h,i</sub></td>
<td class="small">q<sub>del,h,i</sub></td>
<td class="small">expenditure factor<br /> electricity generation<br />e<sub>g,el,h,i</sub></td>
<td class="small">electricity production <br />q<sub>prod,el,h,i</sub></td>
</tr>

<tr>
<td>1</td>
<td><input type="text" id="Code_SysH_EC_1" /></td>
<td><input type="text" id="Code_SysH_G_1" /></td>
<td><input class="is" type="text" id="nd_h_i" /></td>
<td></td>
<td><input class="is" type="text" id="e_g_h_Heat_1" /> =</td>
<td><input class="is" type="text" id="qdel_h_i_1" /> :</td>
<td><input class="is" type="text" id="e_g_h_Electricity_1" /> =</td>
<td><input class="is" type="text" id="qprod_el_h_i_1" /></td>
</tr>

<tr>
<td>2</td>
<td><input type="text" id="Code_SysH_EC_2" /></td>
<td><input type="text" id="Code_SysH_G_2" /></td>
<td><input class="is" type="text" id="Fraction_SysH_G_2" /></td>
<td>x <input class="is" type="text" id="qg_h_out" /> x</td>
<td><input class="is" type="text" id="e_g_h_Heat_2" /> =</td>
<td><input class="is" type="text" id="qdel_h_i_2" /> :</td>
<td><input class="is" type="text" id="e_g_h_Electricity_2" /> =</td>
<td><input class="is" type="text" id="qprod_el_h_i_2" /></td>
</tr>

<tr>
<td>3</td>
<td><input type="text" id="Code_SysH_EC_3" /></td>
<td><input type="text" id="Code_SysH_G_3" /></td>
<td><input class="is" type="text" id="Fraction_SysH_G_3" /></td>
<td></td>
<td><input class="is" type="text" id="e_g_h_Heat_3" /> =</td>
<td><input class="is" type="text" id="qdel_h_i_3" /> :</td>
<td><input class="is" type="text" id="e_g_h_Electricity_3" /> =</td>
<td><input class="is" type="text" id="qprod_el_h_i_3" /></td>
</tr>

<tr>
<td></td>
<td class="small">heating system</td>
<td colspan="3" class="small">code</td>
<td class="small">q<sub>del,h,aux</sub></td>
</tr>


<tr>
<td>aux</td>
<td><input type="text" id="el_2" value="el" /></td>
<td colspan="3"><input type="text" id="Code_SysH_Aux" /></td>
<td><input type="text" id="q_del_h_aux" /></td>
</tr>

<tr>
<td colspan="5"></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
</tr>

<tr>
<td></td>
<td class="small">ventilation system</td>
<td colspan="3" class="small">code</td>
<td class="small">q<sub>del,ve,aux</sub></td>
</tr>

<tr>
<td>aux</td>
<td><input type="text" id="el_3" value="el" /></td>
<td colspan="3"><input type="text" id="Code_SysVent" /></td>
<td><input type="text" id="q_del_ve_aux" /></td>
</tr>

<tr>
<td colspan="5"></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
</tr>

</table>

<br />
<br />

<div class="header">
<img class="fl" src="tabula.png" /><div class="fl">Energy Balance Calculation</div><div class="sp fl">Energy Carriers</div>
</div>
<div class="fl">Standard Reference Calculation - based on: EN ISO 15316 / level B (tabled values)</div>
<div class="cb"></div>

<table style="width:100%;">
<tr><td></td><td class="small">code</td><td></td><td class="small">A_C_ref</td></tr>
<tr><td>Building</td><td><input style="width:100%;" type="text" width="200px" id="Code_BuildingVariant_2" /></td><td>conditioned floor area</td><td><input type="text" id="A_C_Ref" style="width:100%;"/></td><td class="small">m<sup>2</sup></tr>
<tr><td>System</td><td colspan="4"><input type="text" style="width:100%;" id="Code_SystemType_2" /></td></tr>
</table>
<h1>Assessment of Energywares</h1>
<div>version of energy carrier specification <input type="text" id="Code_EC_Specification_Version" /></div>
<h2>Standard Calculating</h2>

<table>
<tr>
<td></td>
<td></td>
<td>delivered energy</td>
<td colspan="2">total primary energy</td>
<td colspan="2">non-renewable primary energy</td>
<td colspan="2">carbon dioxide emissions</td>
<td colspan="2">energy costs</td>
</tr>

<tr>
<td colspan="2"><h2>Heating (+ Ventilation) System </h2></td>
<td>q<sub>del,i</sub></td>
<td>f<sub>p,total,i</sub></td>
<td>q<sub>p,total,i</sub></td>
<td>f<sub>p,nonren,i</sub></td>
<td>q<sub>p,nonren,i</sub></td>
<td>f<sub>CO2</sub></td>
<td>m<sub>CO2</sub></td>
<td>p<sub>i</sub></td>
<td>c<sub>i</sub></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="heating_1" class="full"/></td>
<td><input type="text" id="qdel_i_1" class="full"/></td>
<td><input type="text" id="f_p_Total_SysH_EC_1" class="full"/></td>
<td><input type="text" id="qp_total_i_1" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysH_EC_1" class="full"/></td>
<td><input type="text" id="qp_nonren_i_1" class="full"/></td>
<td><input type="text" id="f_CO2_SysH_EC_1" class="full"/></td>
<td><input type="text" id="mco2i_1" class="full"/></td>
<td><input type="text" id="price_SysH_EC_1" class="full"/></td>
<td><input type="text" id="c_i_1" class="full"/></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="heating_2" class="full"/></td>
<td><input type="text" id="qdel_i_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysH_EC_2" class="full"/></td>
<td><input type="text" id="qp_total_i_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysH_EC_2" class="full"/></td>
<td><input type="text" id="qp_nonren_i_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysH_EC_2" class="full"/></td>
<td><input type="text" id="mco2i_2" class="full"/></td>
<td><input type="text" id="price_SysH_EC_2" class="full"/></td>
<td><input type="text" id="c_i_2" class="full"/></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="heating_3" class="full"/></td>
<td><input type="text" id="qdel_i_3" class="full"/></td>
<td><input type="text" id="f_p_Total_SysH_EC_3" class="full"/></td>
<td><input type="text" id="qp_total_i_3" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysH_EC_3" class="full"/></td>
<td><input type="text" id="qp_nonren_i_3" class="full"/></td>
<td><input type="text" id="f_CO2_SysH_EC_3" class="full"/></td>
<td><input type="text" id="mco2i_3" class="full"/></td>
<td><input type="text" id="price_SysH_EC_3" class="full"/></td>
<td><input type="text" id="c_i_3" class="full"/></td>
</tr>

<tr>
<td colspan="2">auxiliary energy</td>
<td><input type="text" id="qdel_i_ElAux" class="full"/></td>
<td><input type="text" id="f_p_Total_SysH_ElAux" class="full"/></td>
<td><input type="text" id="qp_total_i_ElAux" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysH_EC_ElAux" class="full"/></td>
<td><input type="text" id="qp_nonren_i_ElAux" class="full"/></td>
<td><input type="text" id="f_CO2_SysH_EC_ElAux" class="full"/></td>
<td><input type="text" id="mco2i_ElAux" class="full"/></td>
<td><input type="text" id="price_SysH_EC_ElAux" class="full"/></td>
<td><input type="text" id="c_i_ElAux" class="full"/></td>
</tr>

<tr>
<td colspan="2">electricity production / export</td>
<td><input type="text" id="qdel_i_ElProd" class="full"/></td>
<td><input type="text" id="f_p_Total_SysH_ElProd" class="full"/></td>
<td><input type="text" id="qp_total_i_ElProd" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysH_EC_ElProd" class="full"/></td>
<td><input type="text" id="qp_nonren_i_ElProd" class="full"/></td>
<td><input type="text" id="f_CO2_SysH_EC_ElProd" class="full"/></td>
<td><input type="text" id="mco2i_ElProd" class="full"/></td>
<td><input type="text" id="price_SysH_EC_ElProd" class="full"/></td>
<td><input type="text" id="c_i_ElProd" class="full"/></td>
</tr>

<tr>
<td colspan="2"><h2>Domestic Hot Water System</h2></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="domestic_1" class="full"/></td>
<td><input type="text" id="qdel_i_1_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysW_EC_1" class="full"/></td>
<td><input type="text" id="qp_total_i_1_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysW_EC_1" class="full"/></td>
<td><input type="text" id="qp_nonren_i_1_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysW_EC_1" class="full"/></td>
<td><input type="text" id="mco2i_1_2" class="full"/></td>
<td><input type="text" id="price_SysW_EC_1" class="full"/></td>
<td><input type="text" id="c_i_1_2" class="full"/></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="domestic_2" class="full"/></td>
<td><input type="text" id="qdel_i_2_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysW_EC_2" class="full"/></td>
<td><input type="text" id="qp_total_i_2_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysW_EC_2" class="full"/></td>
<td><input type="text" id="qp_nonren_i_2_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysW_EC_2" class="full"/></td>
<td><input type="text" id="mco2i_2_2" class="full"/></td>
<td><input type="text" id="price_SysW_EC_2" class="full"/></td>
<td><input type="text" id="c_i_2_2" class="full"/></td>
</tr>

<tr>
<td colspan="2"><input type="text" id="domestic_3" class="full"/></td>
<td><input type="text" id="qdel_i_3_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysW_EC_3" class="full"/></td>
<td><input type="text" id="qp_total_i_3_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysW_EC_3" class="full"/></td>
<td><input type="text" id="qp_nonren_i_3_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysW_EC_3" class="full"/></td>
<td><input type="text" id="mco2i_3_2" class="full"/></td>
<td><input type="text" id="price_SysW_EC_3" class="full"/></td>
<td><input type="text" id="c_i_3_2" class="full"/></td>
</tr>

<tr>
<td colspan="2">auxiliary energy</td>
<td><input type="text" id="qdel_i_ElAux_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysW_ElAux" class="full"/></td>
<td><input type="text" id="qp_total_i_ElAux_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysW_EC_ElAux" class="full"/></td>
<td><input type="text" id="qp_nonren_i_ElAux_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysW_EC_ElAux" class="full"/></td>
<td><input type="text" id="mco2i_ElAux_2" class="full"/></td>
<td><input type="text" id="price_SysW_EC_ElAux" class="full"/></td>
<td><input type="text" id="c_i_ElAux_2" class="full"/></td>
</tr>

<tr>
<td colspan="2">electricity production / export</td>
<td><input type="text" id="qdel_i_ElProd_2" class="full"/></td>
<td><input type="text" id="f_p_Total_SysW_ElProd" class="full"/></td>
<td><input type="text" id="qp_total_i_ElProd_2" class="full"/></td>
<td><input type="text" id="f_p_NonRen_SysW_EC_ElProd" class="full"/></td>
<td><input type="text" id="qp_nonren_i_ElProd_2" class="full"/></td>
<td><input type="text" id="f_CO2_SysW_EC_ElProd" class="full"/></td>
<td><input type="text" id="mco2i_ElProd_2" class="full"/></td>
<td><input type="text" id="price_SysW_EC_ElProd" class="full"/></td>
<td><input type="text" id="c_i_ElProd_2" class="full"/></td>
</tr>

<tr>
<td><h2>Summary and Expenditure Factors</h2></td>
<td>heat need q<sub>nd</sub></td>
<td>q<sub>del</sub></td>
<td>e<sub>p,total</sub></td>
<td>q<sub>p,total</sub></td>
<td>e<sub>p,nonren</sub></td>
<td>q<sub>p,nonren</sub></td>
<td>f<sub>CO2,heat</sub></td>
<td>m<sub>CO2,i</sub></td>
<td>p<sub>heat</sub></td>
<td>c</td>
</tr>


<tr>
<td>heating (+ ventilation) system</td>
<td><input type="text" id="heat_need_1" class="full"/></td>
<td><input type="text" id="qdel_i_1_3" class="full"/></td>
<td><input type="text" id="f_p_Total_1_3" class="full"/></td>
<td><input type="text" id="qp_total_i_1_3" class="full"/></td>
<td><input type="text" id="f_p_NonRen_1_3" class="full"/></td>
<td><input type="text" id="qp_nonren_i_1_3" class="full"/></td>
<td><input type="text" id="f_CO2_1_3" class="full"/></td>
<td><input type="text" id="mco2i_1_3" class="full"/></td>
<td><input type="text" id="price_1_3" class="full"/></td>
<td><input type="text" id="c_i_1_3" class="full"/></td>
</tr>

<tr>
<td>domestic hot water system</td>
<td><input type="text" id="heat_need_2" class="full"/></td>
<td><input type="text" id="qdel_i_2_3" class="full"/></td>
<td><input type="text" id="f_p_Total_2_3" class="full"/></td>
<td><input type="text" id="qp_total_i_2_3" class="full"/></td>
<td><input type="text" id="f_p_NonRen_2_3" class="full"/></td>
<td><input type="text" id="qp_nonren_i_2_3" class="full"/></td>
<td><input type="text" id="f_CO2_2_3" class="full"/></td>
<td><input type="text" id="mco2i_2_3" class="full"/></td>
<td><input type="text" id="price_2_3" class="full"/></td>
<td><input type="text" id="c_i_2_3" class="full"/></td>
</tr>

<tr>
<td>total</td>
<td><input type="text" id="heat_need_3" class="full"/></td>
<td><input type="text" id="qdel_i_3_3" class="full"/></td>
<td><input type="text" id="f_p_Total_3_3" class="full"/></td>
<td><input type="text" id="qp_total_i_3_3" class="full"/></td>
<td><input type="text" id="f_p_NonRen_3_3" class="full"/></td>
<td><input type="text" id="qp_nonren_i_3_3" class="full"/></td>
<td><input type="text" id="f_CO2_3_3" class="full"/></td>
<td><input type="text" id="mco2i_3_3" class="full"/></td>
<td><input type="text" id="price_3_3" class="full"/></td>
<td><input type="text" id="c_i_3_3" class="full"/></td>
</tr>

<tr>
<td></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
<td></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
<td></td>
<td class="small">kWh/(m<sup>2</sup>a)</td>
<td class="small">g/kWh</td>
<td class="small">kg/(m<sup>2</sup>a)</td>
<td class="small">cent/kWh</td>
<td class="small">Euro/(m<sup>2</sup>m)</td>
</tr>

</table>

<h2>Typical Values of the Measured Consumption - Empirical Calibration</h2>
<div>code <input type="text" id="Code_CalcAdapt_M" /><div style="float:right; width:500px;">The empirical calibration factor describes a typical ratio of the energy uses determined by measurements for a large number of buildings and by the TABULA method for the given value of the TABULA method.</div></div>
<div class="cb"></div>
<table>
<tr>
<td>application field</td>
<td colspan="2"><input type="text" id="Name_CalcAdapt_M" /></td>
</tr>

<tr>
<td>application field</td>
<td colspan="2"><input type="text" id="Description_CalcAdapt_M" /></td>
</tr>

<tr>
<td>application field</td>
<td><input type="text" id="Indicator_CalcAdapt_M_Accuracy" />=</td>
<td><input type="text" id="" /></td>
</tr>
</table>

<table>
<tr>
<td>delivered energy (without auxiliary electricity) 
according to standard calculation method</td>
<td>0</td>
<td>100</td>
<td>200</td>
<td>300</td>
<td>400</td>
<td>500</td>
<td></td>
<td><input class="is"  type="text" id="current_value_1" /></td>
</tr>

<tr>
<td>adaptation factor</td>
<td><input class="is" type="text" id="F_CalcAdapt_M_000" /></td>
<td><input class="is" type="text" id="F_CalcAdapt_M_100" /></td>
<td><input class="is" type="text" id="F_CalcAdapt_M_200" /></td>
<td><input class="is" type="text" id="F_CalcAdapt_M_300" /></td>
<td><input class="is" type="text" id="F_CalcAdapt_M_400" /></td>
<td><input class="is" type="text" id="F_CalcAdapt_M_500" /></td>
<td></td>
<td><input class="is" type="text" id="current_value_2" /></td>
</tr>
</table>

<table>
<tr>
<td colspan="2"></td>
<td colspan="3">Standard Calculation</td>
<td colspan="3">Typical Measured Consumption</td>
</tr>

<tr>
<td colspan="2">Summary (including subcategories)</td>
<td>heating</td>
<td>dhw</td>
<td>sum</td>
<td>heating</td>
<td>dlwh</td>
<td>sum</td>
</tr>

<tr>
<td>Gas</td>
<td>q<sub>del,Sgas</sub></td>
<td><input class="is" type="text" id="sc_heating_1" /></td>
<td><input class="is" type="text" id="sc_dhw_1" /></td>
<td><input class="is" type="text" id="sc_sum_1" /></td>
<td><input class="is" type="text" id="tmc_heating_1" /></td>
<td><input class="is" type="text" id="tmc_thw_1" /></td>
<td><input class="is" type="text" id="tmc_sum_1" /></td>
</tr>

<tr>
<td>Oil</td>
<td>q<sub>del,Soil</sub></td>
<td><input class="is" type="text" id="sc_heating_2" /></td>
<td><input class="is" type="text" id="sc_dhw_2" /></td>
<td><input class="is" type="text" id="sc_sum_2" /></td>
<td><input class="is" type="text" id="tmc_heating_2" /></td>
<td><input class="is" type="text" id="tmc_thw_2" /></td>
<td><input class="is" type="text" id="tmc_sum_2" /></td>
</tr>

<tr>
<td>Coal</td>
<td>q<sub>del,Scoal</sub></td>
<td><input class="is" type="text" id="sc_heating_3" /></td>
<td><input class="is" type="text" id="sc_dhw_3" /></td>
<td><input class="is" type="text" id="sc_sum_3" /></td>
<td><input class="is" type="text" id="tmc_heating_3" /></td>
<td><input class="is" type="text" id="tmc_thw_3" /></td>
<td><input class="is" type="text" id="tmc_sum_3" /></td>
</tr>

<tr>
<td>Bio</td>
<td>q<sub>del,Sbio</sub></td>
<td><input class="is" type="text" id="sc_heating_4" /></td>
<td><input class="is" type="text" id="sc_dhw_4" /></td>
<td><input class="is" type="text" id="sc_sum_4" /></td>
<td><input class="is" type="text" id="tmc_heating_4" /></td>
<td><input class="is" type="text" id="tmc_thw_4" /></td>
<td><input class="is" type="text" id="tmc_sum_4" /></td>
</tr>

<tr>
<td>El</td>
<td>q<sub>del,Sel</sub></td>
<td><input class="is" type="text" id="sc_heating_5" /></td>
<td><input class="is" type="text" id="sc_dhw_5" /></td>
<td><input class="is" type="text" id="sc_sum_5" /></td>
<td><input class="is" type="text" id="tmc_heating_5" /></td>
<td><input class="is" type="text" id="tmc_thw_5" /></td>
<td><input class="is" type="text" id="tmc_sum_5" /></td>
</tr>

<tr>
<td>DH</td>
<td>q<sub>del,Sdh</sub></td>
<td><input class="is" type="text" id="sc_heating_6" /></td>
<td><input class="is" type="text" id="sc_dhw_6" /></td>
<td><input class="is" type="text" id="sc_sum_6" /></td>
<td><input class="is" type="text" id="tmc_heating_6" /></td>
<td><input class="is" type="text" id="tmc_thw_6" /></td>
<td><input class="is" type="text" id="tmc_sum_6" /></td>
</tr>

<tr>
<td>Other</td>
<td>q<sub>del,Sother</sub></td>
<td><input class="is" type="text" id="sc_heating_7" /></td>
<td><input class="is" type="text" id="sc_dhw_7" /></td>
<td><input class="is" type="text" id="sc_sum_7" /></td>
<td><input class="is" type="text" id="tmc_heating_7" /></td>
<td><input class="is" type="text" id="tmc_thw_7" /></td>
<td><input class="is" type="text" id="tmc_sum_7" /></td>
</tr>

<tr>
<td>Auxiliary Electricity</td>
<td>q<sub>del,Saux</sub></td>
<td><input class="is" type="text" id="sc_heating_8" /></td>
<td><input class="is" type="text" id="sc_dhw_8" /></td>
<td><input class="is" type="text" id="sc_sum_8" /></td>
<td><input class="is" type="text" id="tmc_heating_8" /></td>
<td><input class="is" type="text" id="tmc_thw_8" /></td>
<td><input class="is" type="text" id="tmc_sum_8" /></td>
</tr>

<tr>
<td>Produced / exported electricity</td>
<td>q<sub>del,Sel</sub></td>
<td><input class="is" type="text" id="sc_heating_9" /></td>
<td><input class="is" type="text" id="sc_dhw_9" /></td>
<td><input class="is" type="text" id="sc_sum_9" /></td>
<td><input class="is" type="text" id="tmc_heating_9" /></td>
<td><input class="is" type="text" id="tmc_thw_9" /></td>
<td><input class="is" type="text" id="tmc_sum_9" /></td>
</tr>

</table>


</div>

</body>
</html>