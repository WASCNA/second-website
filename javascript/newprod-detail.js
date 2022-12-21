/* newprod-detail.js */


function imageover(cSrc,cError,cHeight,cWeight) {
  if (cSrc != "?" && cSrc != "") 
   document.getElementById("main").src=cSrc;
  else document.getElementById("main").src=cError;
  
  document.getElementById("main").height=cHeight;
  document.getElementById("main").weight=cWeight;
  
}

function showGrid2(no){

	var gridMsg;

	if (gridChanged == true && gridMessage == false){
		gridChanged = false;
		gridMessage = true;
		gridMsg = "Warning: You have changed quantities without " +
                          "adding to the cart!\n\n" +
			  "Orders can be added or changed from one of the " +
                          "Warehouse, Availability, or Color tabs, " + 
			  "but clicking Add will update quantities to " +
                          "those CURRENTLY DISPLAYED.\n\n" +
			  "Do you wish to update your cart?";
		if (confirm(gridMsg)){
			document.forms['frmGetInventory'].gridOverride.value=no;
			document.forms['frmGetInventory'].btnAddToCart.value='Ad to Order';
			validateAndSubmit(document.forms['frmGetInventory'].btnAddToCart);
			return;
		}
	}
        var allColorsBox = document.getElementById("allColorsBox");
	document.forms['frmGetInventory'].gridSelect.value=no;
	if(no==1){
		document.getElementById("location").className = "locationTabAct";
		document.getElementById("avail").className = "availTab";
		document.getElementById("allcolors").className = "colorsTab";
		document.getElementById("availDiv").style.display = "none";
		document.getElementById("locationDiv").style.display = "block";
		document.getElementById("allcolorsDiv").style.display = "none";
		document.getElementById("ColorTextBox").style.display = "block";
		document.getElementById("ColorFetchBox1").style.display = "none";
		document.getElementById("ColorFetchBox2").style.display = "none";
		document.getElementById("ColorLabelBox").style.display = "block";
		document.getElementById("ColorSpecialsBox").style.display = "block";
		if (allColorsBox) allColorsBox.style.display = "block";
	} else if(no==2){
		document.getElementById("location").className = "locationTab";
		document.getElementById("avail").className = "availTabAct";
		document.getElementById("allcolors").className = "colorsTab";
		document.getElementById("availDiv").style.display = "block";
		document.getElementById("locationDiv").style.display = "none";
		document.getElementById("allcolorsDiv").style.display = "none";
		document.getElementById("ColorTextBox").style.display = "block";
		document.getElementById("ColorFetchBox1").style.display = "none";
		document.getElementById("ColorFetchBox2").style.display = "none";
		document.getElementById("ColorLabelBox").style.display = "block";
		document.getElementById("ColorSpecialsBox").style.display = "block";
		if (allColorsBox) allColorsBox.style.display = "block";
	} else if(no==3){
		document.getElementById("location").className = "locationTab";
		document.getElementById("avail").className = "availTab";
		document.getElementById("allcolors").className = "colorsTabAct";
		document.getElementById("allcolorsDiv").style.display = "block";
		document.getElementById("availDiv").style.display = "none";
		document.getElementById("locationDiv").style.display = "none";
		document.getElementById("ColorTextBox").style.display = "none";
		document.getElementById("ColorFetchBox1").style.display = "block";
		document.getElementById("ColorFetchBox2").style.display = "block";
		document.getElementById("ColorLabelBox").style.display = "none";
		document.getElementById("ColorSpecialsBox").style.display = "none";
		if (allColorsBox) allColorsBox.style.display = "none";
	}
}
