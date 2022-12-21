// getColorDropDown.js

var agt=navigator.userAgent.toLowerCase();

// Note: On IE5, these return 4, so use is_ie5up to detect IE5.
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

//IE Browser Sniffing
var is_ie      = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie5     = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1));
var is_ie5_5   = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie6     = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie7     = (is_ie && (is_major == 4) && (agt.indexOf("msie 7.")!=-1) );
var is_ie6up   = (is_ie && !is_ie5 && !is_ie5_5);
var ie_7up     = (is_ie && is_ie6up && !is_ie6);

var selectedColors  = new Array();
var savedColorDD    = null;
var savedColorValue = null;
var savedColorId    = null;

function createTable(id)
{
 var parentDiv = document.getElementById("colPick" + id);
 var table = document.createElement("table");
 var tbody = document.createElement("tbody");
 
 table.id = id + "_table";
 table.cellPadding = "0";
 table.cellSpacing = "0";
 table.border = "0";
 table.style.visibility = "visible";
 table.style.display = "block";  

 table.appendChild(tbody);
 parentDiv.appendChild(table);
}

function createColor(id,index,colorCode,colorDesc,colorValue)
{       
 var table    = document.getElementById(id + "_table");
 var tbody    = table.firstChild;
 var row      = document.createElement("tr");
 var cell     = document.createElement("td");
 
 /* Do not change this sequence - IE security bug with appendChild */
 tbody.appendChild(row);
 row.appendChild(cell);
 cell.appendChild(document.createTextNode(colorDesc));
 /* end */
 
 if (colorValue == "" || colorValue == "#" || colorValue == " ")
  colorValue = "#ffffff";

 if (colorCode == "DIV") 
  cell.className = "colorDivider";
 else {
  cell.className = "tdDat";     
  cell.style.backgroundImage = "url('/images/color_bg.gif')"; 
 }

 cell.id        = "color|" + id + "|" + colorCode;
 cell.name      = cell.id + "|" + index;
 cell.value     = colorDesc;
 cell.style.visibility = "visible";
 cell.style.display = "block";  

 if (colorValue.length == 7)
  cell.style.backgroundColor = colorValue; 
 
 if (is_ie) {
  cell.onclick	= clickColor;
  cell.onmouseover = mouseOverColor;
  cell.onmouseout  = mouseOutColor;  
 }
 else {  
  cell.addEventListener("click",clickColor,false);
  cell.addEventListener("mouseover",mouseOverColor,false);
  cell.addEventListener("mouseout",mouseOutColor,false);  
 }
}

function mouseOverColor(e)
{
 var targ = getTarget(e);

 if (targ) 
 {              
  var idBeg    = targ.id.indexOf("|") + 1;
  var idEnd    = targ.id.indexOf("|",idBeg + 1);
  var id       = targ.id.substring(idBeg,idEnd);
  var inputObj = document.getElementById("color" + id);
  var row      = targ.parentNode;
  var table    = row.parentNode;

  resetColors(table);
  if (targ.className != "colorDivider")
   targ.className = "tdDatHL";
  inputObj.value = targ.value;
  var colorIndex  = targ.name.substring(targ.name.lastIndexOf("|") + 1);
  setColorSelection(id,targ.value,colorIndex,targ.id);
 } 
}

function mouseOutColor(e)
{
 var targ = getTarget(e);

 if (targ && targ.className != "colorDivider") 
  targ.className = "tdDat";
}

function clickColor(e)
{
 var targ = getTarget(e);
}

function submitColor(e)
{
 var targ = getTarget(e);
 if (targ)
   colorSubmit(targ);
}

function colorSelection (id,color,index)
{
 this.id    = id;
 this.color = color;
 this.index = index;
}

function getColorSelection(id)
{
 for (var i=0; i<selectedColors.length; i++)
 {
  if (selectedColors[i].id == id)
   return selectedColors[i];
 }
 return null; 
}

function setColorSelection(id,color,index,cellid)
{
 for (var i=0; i<selectedColors.length; i++)
 {
  if (selectedColors[i].id == id) {
   selectedColors[i].color = color;
   selectedColors[i].index = index;
   selectedColors[i].cellid = cellid;
   break;
  }
 }
}

function jumpTo(inputObj,dir)
{      
 var selectValue = "";
 var inputValue  = "";
 var inputName   = inputObj.name;   
 var id          = inputName.replace(/color/,"");
 var selectedIndex = 0;
 var divObj = document.getElementById("colPick" + inputObj.name.replace(/color/,""));
 var selectedNode;
 var found = false;          
 var k = 0;
 var up = false;
 
 if (dir && dir == "up")
    up = true;
    
 inputValue = inputObj.value.toUpperCase();
 
 for (i=0; i<divObj.childNodes.length; i++)
 {            
  var node = divObj.childNodes[i];

  if (node.id && node.id.indexOf("_table") != -1)
  {
     var tableObj = divObj.childNodes[i];
     tbody = tableObj.firstChild;
     
     // Get possible color options for input
     var colorResults = new Array();
     colorResults = getResults(tbody,inputValue);
     
     // Get current selected Color
     var selectedColor = getColorSelection(id);

     k=0;
     
     /* If already selected a color and it starts with the input then we need 
        to jump to the next color that starts with that letter */   
      if (selectedColor.color != null && selectedColor.color.indexOf(inputValue) == 0)
      {
       for(k=0; k<colorResults.length; k++)
       {                      
        if (colorResults[k].value == selectedColor.color && k == selectedColor.index && colorResults[k].id.split("|")[2] != "DIV")
        {
         found = true;
         break;
        }
       }                   
       
       if (found)
       {
        if (up)
        {
         if (k == 0 && inputValue != "")
           k=colorResults.length - 1;
         else if (k-1 != -1)
           k--;
         while (colorResults[k].id.split("|")[2] == "DIV")
           {
             if (k == 0)
              k = colorResults.length - 1;
             else k--;
           }
        }
        else
        {
         if (k + 1 == colorResults.length && inputValue != "")
           k=0;
         else if (k+1 != colorResults.length)
           k++;
         while (colorResults[k].id.split("|")[2] == "DIV")
           {
             if (k == colorResults.length)
              k=0;
             else k++;
           }
        }
       } // if found
       else
          k=0;   
      } // if color already selected and it starts with what was typed
     
     for (var j=k; j<colorResults.length; j++)
     {
      if (colorResults[j].value.indexOf(inputValue) == 0 && colorResults[j].id.split("|")[2] != "DIV")
      {
       selectedNode = colorResults[j];
       break;
      }
     }

     /* If typed something in and didn't find a match, the next match may 
	be at the top of the list so start back at the beginning. */
     if (!selectedNode) {
      for (var j=0; j<colorResults.length; j++)
      {
       if (colorResults[j].value.indexOf(inputValue) == 0 && colorResults[j].id.split("|")[2] != "DIV")
       {
        selectedNode = colorResults[j];
        break;
       }
      }
     }

     /* User typed something in that doesn't exist so just go back to what
	was selected before. */
     if (!selectedNode)
					{
      for (var j=0; j<colorResults.length; j++)
      {
	 if (colorResults[j].value == selectedColor.color && 
	     j == selectedColor.index)
       {
        selectedNode = colorResults[j];
        break;
       }
      }

     }
     
     break; // always break, there should only be 1 table element
  } // if table
 } // div children
 
 if (selectedNode)
 {                           
  resetColors(tbody);
  var colorHeight = eval(selectedNode.style.height.substring(0,selectedNode.style.height.indexOf("px")));
  var colorIndex  = selectedNode.name.substring(selectedNode.name.lastIndexOf("|") + 1);

  if (is_ie)
	colorHeight += 5;
  else
	colorHeight +=6;

  divObj.scrollTop = colorHeight * colorIndex;
		if (selectedNode.className != "colorDivider")
   selectedNode.className = "tdDatHL";    
  setColorSelection(id,selectedNode.value,colorIndex,selectedNode.id);
 }
 
 if (selectedNode)
  inputObj.value = selectedNode.value;

} // jumpTo

function resetColors(tableObj)
{
 for (var i=0; i<tableObj.childNodes.length; i++)
 {
  var rowObj = tableObj.childNodes[i];
		if (rowObj.firstChild.className != "colorDivider")
   rowObj.firstChild.className = "tdDat"; 
 }
}

function getResults(tableObj,inputValue)
{
 var results = new Array();
 var i = 0;
 
 for (j=0; j<tableObj.childNodes.length; j++)
 { 
  rowObj = tableObj.childNodes[j];
  
  for (k=0; k<rowObj.childNodes.length; k++)
  {
   colorValue = rowObj.childNodes[k].value.toUpperCase();
   
	/* Removed inputValue check.   
   if (colorValue.indexOf(inputValue) == 0)
	*/
   {
    results[i] = rowObj.childNodes[k];
    i++;
   } 
  } // row children
  
 } // table children 
 
 return results;
 
} // getResults
 
function applyChar(e)
{
 var code = getCode(e);
 var targ = getTarget(e);
 
 if (targ && targ.type)
 {
  if (code == 8 && savedColorValue) // Backspace
  {
   savedColorId.value = savedColorValue;
   return;
  } 

  if (validChar(code) || code == 40 || code == 38)
  {
   if (code == 38 || code == 40)
    targ.value = "";
   else
    targ.value = String.fromCharCode(code);

   var id = targ.id.replace(/color/,"");
   showDd2('colPick'+id,true);

   if (code == 38)
    jumpTo(targ,"up");
   else
    jumpTo(targ,"down");
  }
 }  
}
 
function applySpecial(e)
{            
 var code = getCode(e);
 var targ = getTarget(e);
 var found = false;
 var colorValue = "";
 
 if (targ && targ.type && code == 13) // Enter
 {
  savedColorDD.style.visibility = "hidden";
  savedColorDD.style.display = "none"; 
  closeColorDD(e);
  return;
 }
}

function getCode(e)
{
 var code;
 if (!e) var e = window.event;

 if (e.keyCode) code = e.keyCode;
 else if (e.which) code = e.which;

 return code;
}            

function getTarget(e)
{
 var targ;
 if (!e) var e = window.event;
 if (e && e.target) targ = e.target;
 else if (e && e.srcElement) targ = e.srcElement;
 if (targ && targ.nodeType && targ.nodeType == 3) // defeat Safari bug
	targ = targ.parentNode; 
 if (targ && (targ.className == "colorInput" || targ.className == "tdDat" || targ.className == "tdDatHL" || targ.id.indexOf("spacer") != -1))
  return targ;
 else
  return null;
}

function validChar(code)
{   
 if (code >= 65 && code <= 90)
    return true;
 else
    return false;
}

document.onkeypress = function(event)
{
 applySpecial(event);
}

document.onkeyup = function(event)
{
 applyChar(event);
} 

var lastExpanded = "";

function showDd2(dvName,show)
{
 var dvId = document.getElementById(dvName);

 if(dvId.style.visibility == "visible" && !show)
 {
  lastExpanded = "";
  dvId.style.visibility = "hidden";
  dvId.style.display = "none";
 } 
 else 
 {
  if (lastExpanded > "" && lastExpanded != dvName)
   closeColorDD();
  
  var id = dvName.substring(dvName.indexOf("colPick") + 7);

  if (lastExpanded != dvName)
  {
   savedColorDD = dvId;
   savedColorId = document.getElementById("color" + id);
   if (savedColorId.cM3)
    savedColorValue = savedColorId.cM3; // value prior to updates
   else
    savedColorValue = savedColorId.value;
  }

  lastExpanded = dvName;
  dvId.style.visibility = "visible";
  dvId.style.display = "inline";
 
  
  for (var i=0; i<selectedColors.length; i++)
  {
   if (selectedColors[i].id == id && selectedColors[i].color != null)
   {
    var div   = document.getElementById("colPick" + id)
    var table = document.getElementById(id + "_table");
    var tbody = table.firstChild;
    for (var j=0; j<tbody.childNodes.length; j++)
    {
     var row = tbody.childNodes[j];
     var cell = row.firstChild;
     var colorIndex = cell.name.substring(cell.name.lastIndexOf("|") + 1);
 
     if (cell.value == selectedColors[i].color && selectedColors[i].index == colorIndex)
     {
      resetColors(tbody);
      var colorHeight = eval(cell.style.height.substring(0,cell.style.height.indexOf("px")));

      if (is_ie)
       colorHeight += 5;
      else
       colorHeight +=6;

      div.scrollTop = colorHeight * colorIndex;
      if (cell.className != "colorDivider")
       cell.className = "tdDatHL";    
      setColorSelection(id,cell.value,colorIndex,cell.id);
 
     } // found selected color
    } // row loop
   } // table loop
  } // selectedColors loop
 }
}

function closeColorDD(e)
{
 var targ = getTarget(e);
 if (targ && targ.id.indexOf("color") != -1)
  var id = targ.id.replace(/color/,"");
 else if (targ && targ.id.indexOf("spacer") != -1)
  var id = targ.id.replace(/spacer/,"");

 var colPickId = "colPick" + id;
 var spacerId  = "spacer" + id;
 var colorId   = "color" + id;

 if(lastExpanded > "" && lastExpanded != colPickId)
 {
  document.getElementById(lastExpanded).style.visibility = "hidden";
  document.getElementById(lastExpanded).style.display = "none";
  lastExpanded = "";
 }

 if (savedColorValue && savedColorId && savedColorId.value != savedColorValue){
  if (targ && (targ.id == colorId || targ.id == colPickId || targ.id == spacerId || targ.offsetParent.offsetParent.id == colPickid))
   {
    var id            = savedColorId.id.replace(/color/,"");
    var selectedColor = getColorSelection(id);
    colorSubmit(document.getElementById(selectedColor.cellid));
   }
  else
   savedColorId.value = savedColorValue;
 }
}

