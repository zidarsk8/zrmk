

<div class="wrap">
<div class="header"><img class="fl" src="images/tabula.png" />
<div class="fl">Energy Balance Calculation</div>
<div class="sp fl">System Performance</div>
</div>
<div class="fl">Standard Reference Calculation - based on: EN ISO 15316
/ level B (tabled values)</div>
<div class="cb"></div>

<table style="width: 100%;">
	<tr>
		<td></td>
		<td class="small">code</td>
		<td></td>
		<td class="small">A_C_ref</td>
		<td></td>
	</tr>
	<tr>
		<td>Building</td>
		<td width="40%"><input style="width: 90%;" type="text" id="Code_BuildingVariant" /></td>
		<td>conditioned floor area</td>
		<td><input type="text" id="A_C_Ref" style="width: 90%;" /></td>
		<td class="small">m<sup>2</sup>
	
	</tr>
	<tr>
		<td>System</td>
		<td colspan="4"><input type="text" style="width: 90%;" id="Code_SystemType"/></td>
	</tr>
</table>
<hr />
<h1>Domestic Hot Water System</h1>
<table class="full">
	<tr>
		<td></td>
		<td class="small">code</td>
	</tr>
	<tr>
		<td>System</td>
		<td><input style="width: 350px;" type="text" id="Code_SysW" /></td>
	</tr>
</table>
<br />
<table>
	<tr>
		<td colspan="2">energy need hot water</td>
		<td class="tr">q<sub>nd,w</sub></td>
		<td><input type="text" id="q_w_nd" size="6" /></td>
		<td colspan="2" style="text-align: center">thereof recoverable for
		space heating:</td>
	</tr>
	<tr>
		<td>+ losses distrib.</td>
		<td><input type="text" id="Code_SysW_D" /></td>
		<td class="tr">q<sub>d,w</sub></td>
		<td><input type="text" id="q_d_w" size="6" /></td>
		<td class="tr">q<sub>d,w,h</sub></td>
		<td><input type="text" id="q_d_w_h" /></td>
	</tr>
	<tr>
		<td class="bottomBorderDark">+ losses storage</td>
		<td class="bottomBorderDark"><input type="text" id="Code_SysW_S" /></td>
		<td class="tr bottomBorderDark">q<sub>s,w</sub></td>
		<td class="bottomBorderDark"><input type="text" id="q_s_w" size="6" /></td>
		<td class="tr">q<sub>s,w,h</sub></td>
		<td><input type="text" id="q_s_w_h" /></td>
	</tr>

	<tr>
		<td colspan="3" class="tr">q<sub>g,w,out</sub> = q<sub>nd,w</sub> + q<sub>d,w</sub>
		+ q<sub>s,w</sub></td>
		<td width="100px"><input type="text" id="qg_w_out" size="6" /></td>
		<td width="170px" class="tr">q<sub>w,h</sub> = q<sub>d,w,h</sub> + q<sub>s,w,h</sub></td>
		<td><input type="text" id="qw_h" /></td>
	</tr>
	<tr>
		<td colspan="3"></td>
		<td>kWh/(m<sup>2</sup>a)</td>
		<td></td>
		<td>kWh/(m<sup>2</sup>a)</td>
	</tr>
</table>
<br>
<br>
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
		<td class="small">expenditure factor electricity generation<br />
		e<sub>g,el,w,i</sub></td>
		<td class="small">electricity production <br />
		q<sub>prod,el,w,i</sub></td>
	</tr>

	<tr>
		<td>1</td>
		<td><input size="10" type="text" id="Code_SysW_EC_1" /></td>
		<td><input size="13" type="text" id="Code_SysW_G_1" /></td>
		<td><input class="is" type="text" id="nd_w_i" /></td>
		<td></td>
		<td><input class="is" type="text" id="e_g_w_Heat_1" /> =</td>
		<td><input class="is" type="text" id="qdel_w_i_1" /> :</td>
		<td><input class="is" type="text" id="e_g_w_Electricity_1" /> =</td>
		<td><input class="is" type="text" id="qprod_el_w_i_1" /></td>
	</tr>

	<tr>
		<td>2</td>
		<td><input size="10" type="text" id="Code_SysW_EC_2" /></td>
		<td><input size="13" type="text" id="Code_SysW_G_2" /></td>
		<td><input class="is" type="text" id="Fraction_SysW_G_2" /></td>
		<td>x <input class="is" type="text" id="qg_w_out_2" /> x</td>
		<td><input class="is" type="text" id="e_g_w_Heat_2" /> =</td>
		<td><input class="is" type="text" id="qdel_w_i_2" /> :</td>
		<td><input class="is" type="text" id="e_g_w_Electricity_2" /> =</td>
		<td><input class="is" type="text" id="qprod_el_w_i_2" /></td>
	</tr>

	<tr>
		<td>3</td>
		<td><input size="10" type="text" id="Code_SysW_EC_3" /></td>
		<td><input size="13" type="text" id="Code_SysW_G_3" /></td>
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
		<td><input size="10" type="text" id="el_1" value="el" /></td>
		<td colspan="3"><input type="text" id="Code_SysW_Aux" /></td>
		<td><input size="13" type="text" id="q_del_w_aux" /></td>
	</tr>

	<tr>
		<td colspan="5"></td>
		<td class="small">kWh/(m<sup>2</sup>a)</td>
	</tr>
</table>


<h1>Heating System</h1>
<table>
	<tr>
		<td></td>
		<td class="small">code</td>
	</tr>
	<tr>
		<td>System</td>
		<td><input type="text" id="Code_SysH" style="width: 500px;" /></td>
		<td class="small">gain utilisation factor for heating</td>
	</tr>
</table>

<table>
	<tr>
		<td colspan="2">energy need space heating</td>
		<td class="tr">q<sub>nd,h</sub></td>
		<td><input type="text" id="q_h_nd" class="is" /></td>
		<td class="small">kWh/(m<sup>2</sup>a</td>
		<td>hh<sub>gn</sub></td>
		<td colspan="2">ventilation heat recovery</td>
	</tr>

	<tr>
		<td colspan="2">- usable contribution of hot water system</td>
		<td class="tr">q<sub>w,h</sub></td>
		<td><input type="text" id="q_w_h" class="is" /></td>
		<td class="small">kWh/(m<sup>2</sup>a</td>
		<td><input type="text" id="eta_h_gn" class="is" /></td>
		<td>hve<sub>rec</sub></td>
		<td>qht<sub>ve</sub></td>
	</tr>

	<tr>
		<td colspan="2">- usable contribution of ventilation heat recovery</td>
		<td class="tr">q<sub>ve,h,rec</sub></td>
		<td><input type="text" id="qve_h_re" class="is" /></td>
		<td class="small">kWh/(m<sup>2</sup>a</td>
		<td></td>
		<td><input type="text" id="q_ht_ve" class="is" /></td>
		<td><input type="text" id="eta_ve_rec" class="is" /></td>
	</tr>

	<tr>
		<td class="small">+ losses distribution and heat emission</td>
		<td><input type="text" id="Code_SysH_D" /></td>
		<td class="tr">q<sub>d,h</sub></td>
		<td><input type="text" id="q_s_h" class="is" /></td>
		<td class="small">kWh/(m<sup>2</sup>a</td>
	</tr>

	<tr>
		<td>+ losses storage</td>
		<td><input type="text" id="Code_SysH_S" /></td>
		<td class="tr">q<sub>s,h</sub></td>
		<td><input type="text" id="q_d_h" class="is" /></td>
		<td class="small">kWh/(m<sup>2</sup>a</td>
	</tr>

	<tr>
		<td class="tr" colspan="3">q<sub>g,h,out</sub> = q<sub>nd,h</sub> - q<sub>w,h</sub>
		- q<sub>ve,h,rec</sub> + q<sub>d,h</sub> + q<sub>s,h</sub></td>
		<td><input type="text" id="q_g_h_out" class="is" /></td>
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
		<td>heat generator<br />
		output</td>
		<td>expenditure<br />
		factor</td>
		<td>delivered<br />
		energy</td>
		<td colspan="2">combined heat<br />
		and power</td>
	</tr>

	<tr>
		<td></td>
		<td class="small">code</td>
		<td class="small">code</td>
		<td class="small">a<sub>nd,h,i</sub></td>
		<td class="small">q<sub>g,h,out</sub></td>
		<td class="small">e<sub>g,h,i</sub></td>
		<td class="small">q<sub>del,h,i</sub></td>
		<td class="small">expenditure factor<br />
		electricity generation<br />
		e<sub>g,el,h,i</sub></td>
		<td class="small">electricity production <br />
		q<sub>prod,el,h,i</sub></td>
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

<div class="header"><img class="fl" src="images/tabula.png" />
<div class="fl">Energy Balance Calculation</div>
<div class="sp fl">Energy Carriers</div>
</div>
<div class="fl">Standard Reference Calculation - based on: EN ISO 15316
/ level B (tabled values)</div>
<div class="cb"></div>