// is.ie relies on ultimateClientSideJavascriptSniff.js

function validateAndSubmit(objSubmitUIE) {

  var objForm; 
  var vProductInputsCount = 0;
  var objInput;
  var vAtLeastOneValidValue = false;
  var vTestInt;
  var vTestFloat;
  
  // get handle to inv form; else return
  try {objForm = document.forms['frmGetInventory']} catch(e) {return false;}

  // Validate positive integers
  for (vProductInputsCount = 0; vProductInputsCount < vProductInputs.length; vProductInputsCount++)
  {
    try
    {
      vInput = eval('objForm.' + vProductInputs[vProductInputsCount]);
    }
    catch(e)
    {
      alert('couldn\'t evaluate vInput object. error: ' + e);
      clickFlag = false;
      return false;
    }
    
    if (vInput.value != '' && vInput.value!=' Call ')
    {
      vTestInt = parseInt(vInput.value, 10);
      vTestFloat = parseFloat(vInput.value, 10);
      if ( (vTestInt != vTestFloat) || (vTestInt < 0) ) // not an integer or less than 1
      {
        alert('You must enter positive numbers only.  You entered \'' + vInput.value + '\'');
        clickFlag = false;
        return false;
      }
      vAtLeastOneValidValue = true; // make sure user enters at least 1 value in to the grid
    }
  } // each grid input

  // user hit 'add to cart' but no quantity
  if (objSubmitUIE.id == 'btnAddToCart' && vAtLeastOneValidValue != true)
  {
    alert('You must enter a quantity');
    clickFlag = false;
    return false;
  }

  if (vAtLeastOneValidValue || objSubmitUIE.id == 'btnCheckOut')
  {
    // validation passed
    // disable the other elements that would allow for a form submit
    disableSubmitUI(objSubmitUIE);
    objForm.submit();
  }
}

function disableSubmitUI(objSubmitUIE) {

  var objForm;
  var tempForm;

  try {objForm = document.forms['frmGetInventory']} catch(e) {return false;}

  // since we're disabling UI elements, their CGI values will not be passed;
  // set manually via form's action attribute
  tempForm = objForm.action;
  objForm.action = tempForm.replace(/#grid/,"");
  if (objSubmitUIE.id == 'colors') 
	{objForm.action = objForm.action + '&colors=' + objSubmitUIE.value;}
  else if (objSubmitUIE.id == 'btnCheckOut') 
	{objForm.action = objForm.action + '&btnCheckout=true';}
  else if (objSubmitUIE.id == 'btnAddToCart') 
	{objForm.action = objForm.action + '&btnAddToCart=true#grid';}

  displayProcessingMsg();
  return true;
}

function colorSubmit(colorObject) {
 if (checkClickFlag()) {
  displayProcessingMsg();
  if (colorObject)
   document.forms['frmGetInventory'].currentColor.value = colorObject.id.split("|")[2];
  document.forms['frmGetInventory'].submit();
  return true;
 }
}

//content tabs
function showTab(no){
	if(no==1){
		document.getElementById("overTab").className = "overTabAct";
		// document.getElementById("featTab").className = "featuresTab";
		if(document.getElementById("safetyTab")){
		document.getElementById("safetyTab").className = "safetyTab";}
		document.getElementById("specificationsTab").className = "specsTab";
		document.getElementById("overview").style.display = "block";
		if(document.getElementById("safety")){
		document.getElementById("safety").style.display = "none";}
		// document.getElementById("features").style.display = "none";
		document.getElementById("specs").style.display = "none";
	} else if(no==2){
		document.getElementById("overTab").className = "overTab";
		// document.getElementById("featTab").className = "featuresTabAct";
		if(document.getElementById("safetyTab")){
		document.getElementById("safetyTab").className = "safetyTab";}		
		document.getElementById("specificationsTab").className = "specsTab";
		document.getElementById("overview").style.display = "none";
		// document.getElementById("features").style.display = "block";
		document.getElementById("specs").style.display = "none";
		if(document.getElementById("safety")){
		document.getElementById("safety").style.display = "none";}
	} else if(no==3) {
		document.getElementById("overTab").className = "overTab";
		// document.getElementById("featTab").className = "featuresTab";
		document.getElementById("specificationsTab").className = "specsTabAct";
		if(document.getElementById("safetyTab")){
		document.getElementById("safetyTab").className = "safetyTab";}
		document.getElementById("overview").style.display = "none";
		// document.getElementById("features").style.display = "none";
		document.getElementById("specs").style.display = "block";
		if(document.getElementById("safety")){
		document.getElementById("safety").style.display = "none";}
	} else {
		document.getElementById("overTab").className = "overTab";
		// document.getElementById("featTab").className = "featuresTab";
		document.getElementById("specificationsTab").className = "specsTab";
		if(document.getElementById("safetyTab")){
		document.getElementById("safetyTab").className = "safetyTabAct";}
		document.getElementById("overview").style.display = "none";
		// document.getElementById("features").style.display = "none";
		document.getElementById("specs").style.display = "none";
		if(document.getElementById("safety")){
		document.getElementById("safety").style.display = "block";}
	}
}

//grid tabs
function showGrid(no){

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
		document.getElementById("allcolors").className = "allcolorsTab";
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
		document.getElementById("allcolors").className = "allcolorsTab";
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
		document.getElementById("allcolors").className = "allcolorsTabAct";
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

