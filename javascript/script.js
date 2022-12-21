/* Internet Explorer Version Detection */
// convert all characters to lowercase to simplify testing
var agt=navigator.userAgent.toLowerCase();

// Note: On IE5, these return 4, so use is_ie5up to detect IE5.
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

var pgId;
var currentMenu;
var menuTimer;
var clearTimer;

//IE Browser Sniffing
var is_ie      = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie5     = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5   = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie6     = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie7     = (is_ie && (is_major == 4) && (agt.indexOf("msie 7.")!=-1) );
var is_ie6up   = (is_ie && !is_ie5 && !is_ie5_5);
var ie_7up     = (is_ie && is_ie6up && !is_ie6);
var safari = navigator.appVersion.search(/Safari/);
var is_chrome  = (agt.indexOf("chrome") != -1);
var is_firefox = (agt.indexOf("firefox") != -1);
var is_safari  = (agt.indexOf("apple") != -1 && agt.indexOf("safari")!= -1);

/* Array to display Colors */
var colorCode = new Array("#FFF","#FF23FF","#FF0000","#00FFFF","#0000FF","#000000","#22FFFF","#FF0000","#00FFFF","#0000FF","#000000","#FFF212","#FF0000","#00FFFF","#0000FF");
var colorVal = new Array("Select","Ash","Azalea","Azure","Bermuda","Black","Blue Dusk","Brick","Cardinal","Carolina Blue","Cedar","Charcoal","Chestnut","Coral","Daisy");

var flag=false;
var popUpWin=0;

function popUpWindow(URLStr, left, top, width, height, scrolls, resizes)
{
  if(popUpWin)
  {
    if(!popUpWin.closed) popUpWin.close();
  }
  popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars='+scrolls+',resizable='+resizes+',copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
}

function hideProcessingMsg()
{
  showProcMsg(1);
  document.getElementById("processingMsg").style.display = "none";
  // document.getElementById("processingMsg").style.visibility = "hidden";
}

function displayProcessingMsg()
{
  //prevent ugly display in heading
  if(pgId=="advSearch"){
    document.getElementById("searchByBrand").style.display = "none";
    document.getElementById("searchByCategory").style.display = "none";
  }
  showProcMsg(0);
  document.getElementById("processingMsg").style.display = "block";
  document.getElementById("processingMsg").style.visibility = "visible";
  document.body.setAttribute('onpagehide', 'setTimeout("window.location.reload()", 0);'); // 010001 - Firefox back button fix
}

function showTab1(no){
	if(no==1){
		document.getElementById("settingTab").className = "shipngAddTab1On";
		document.getElementById("ordersTab").className = "shipngAddTab2Off";
		document.getElementById("statementTab").className = "shipngAddTab3Off";
		document.getElementById("savedItemsTab").className = "shipngAddTab4Off";
		document.getElementById("tabTblSetting").style.display = "block";
		document.getElementById("tabTblOrders").style.display = "none";
		document.getElementById("tabTblStatements").style.display = "none";
		document.getElementById("tabTblSavedItems").style.display = "none";
		document.getElementById('tabTblSettingEdit').style.display = 'none';
		document.getElementById('tabTblSettingAddAddr').style.display = 'none';
		document.getElementById('shipngAddAcInfo').style.display = 'none';
	} else if(no==2){
		document.getElementById("settingTab").className = "shipngAddTab1Off";
		document.getElementById("ordersTab").className = "shipngAddTab2On";
		document.getElementById("statementTab").className = "shipngAddTab3Off";
		document.getElementById("savedItemsTab").className = "shipngAddTab4Off";
		document.getElementById("tabTblSetting").style.display = "none";
		document.getElementById("tabTblOrders").style.display = "block";
		document.getElementById("tabTblStatements").style.display = "none";
		document.getElementById("tabTblSavedItems").style.display = "none";
		document.getElementById('tabTblSettingEdit').style.display = 'none';
		document.getElementById('tabTblSettingAddAddr').style.display = 'none';
		document.getElementById('shipngAddAcInfo').style.display = 'none';
	} else if(no==3){
		document.getElementById("settingTab").className = "shipngAddTab1Off";
		document.getElementById("ordersTab").className = "shipngAddTab2Off";
		document.getElementById("statementTab").className = "shipngAddTab3On";
		document.getElementById("savedItemsTab").className = "shipngAddTab4Off";
		document.getElementById("tabTblSetting").style.display = "none";
		document.getElementById("tabTblOrders").style.display = "none";
		document.getElementById("tabTblStatements").style.display = "block";
		document.getElementById("tabTblSavedItems").style.display = "none";
		document.getElementById('tabTblSettingEdit').style.display = 'none';
		document.getElementById('tabTblSettingAddAddr').style.display = 'none';
		document.getElementById('shipngAddAcInfo').style.display = 'none';
	}else {
		document.getElementById("settingTab").className = "shipngAddTab1Off";
		document.getElementById("ordersTab").className = "shipngAddTab2Off";
		document.getElementById("statementTab").className = "shipngAddTab3Off";
		document.getElementById("savedItemsTab").className = "shipngAddTab4On";
		document.getElementById("tabTblSetting").style.display = "none";
		document.getElementById("tabTblOrders").style.display = "none";
		document.getElementById("tabTblStatements").style.display = "none";
		document.getElementById("tabTblSavedItems").style.display = "block";
		document.getElementById('tabTblSettingEdit').style.display = 'none';
		document.getElementById('tabTblSettingAddAddr').style.display = 'none';
		document.getElementById('shipngAddAcInfo').style.display = 'none';

	}
}

//promo tabs
function showPromo(no){
	if(no==1){
		document.getElementById("comp").className = "compTabAct";
		document.getElementById("acces").className = "asscrTab";
		document.getElementById("rtCompareContainer").style.display = "block";
		document.getElementById("rtAccessoriesContainer").style.display = "none";
	} else {
		document.getElementById("comp").className = "compTab";
		document.getElementById("acces").className = "asscrTabAct";
		document.getElementById("rtCompareContainer").style.display = "none";
		document.getElementById("rtAccessoriesContainer").style.display = "block";
	}
}

/* Function to show hide Details */
function showHideDtls(imgObj,obj){
	if(document.getElementById(obj).style.display == '' || document.getElementById(obj).style.display == 'block'){
		document.getElementById(obj).style.display = "none";
		imgObj.className = 'hideDtls';
	} else {
		document.getElementById(obj).style.display = "block";
		imgObj.className = 'showDtls';
	}
}

function showPanel(imgObj,obj){
	if(document.getElementById(obj).style.display == '' || document.getElementById(obj).style.display == 'block'){
		document.getElementById(obj).style.display = "none";
		imgObj.className = 'hidePanel';
	} else {
		document.getElementById(obj).style.display = "block";
		imgObj.className = 'showPanel';
	}
}


//Script for Advanced Search Redio buttons Starts
function showData(which){
	if(which==1){
		document.getElementById("searchByCategory").style.display="inline";
		document.getElementById("searchByBrand").style.display="none";
		document.getElementById("searchByEvent").style.display="none";
		document.getElementById("tblSelectColor").style.display="none";
		document.getElementById("tblVariables").style.display="block";
		document.getElementById("tblEvents").style.display="none";
	}
	if(which==2){
		document.getElementById("searchByCategory").style.display="none";
		document.getElementById("searchByBrand").style.display="inline";
		document.getElementById("searchByEvent").style.display="none";
		document.getElementById("tblSelectColor").style.display="none";
		document.getElementById("tblVariables").style.display="block";
		document.getElementById("tblEvents").style.display="none";
	}
	if(which==3){
		document.getElementById("searchByCategory").style.display="none";
		document.getElementById("searchByBrand").style.display="none";
		document.getElementById("searchByEvent").style.display="block";
		document.getElementById("tblSelectColor").style.display="none";
		document.getElementById("tblVariables").style.display="none";
		document.getElementById("tblEvents").style.display="block";
	}
	if(which==4){
		document.getElementById("searchByCategory").style.display="none";
		document.getElementById("searchByBrand").style.display="none";
		document.getElementById("searchByEvent").style.display="none";
		document.getElementById("tblVariables").style.display="none";
		document.getElementById("tblSelectColor").style.display="block";
		document.getElementById("tblEvents").style.display="none";
	}	
	if(which==5){
		document.getElementById('colData').style.display = "block";
	}
}

/* Old Menu Function */
function changeClass2(obj,st){
	objTab = document.getElementById(obj);
	if(st == 0) {
		obj.className = 'menuTxtOvr';
	} else {
		obj.className = 'menuTxt';
	}
}

/* Menu Function */
// isnew added by gpw 02/06/13 web redesign
function changeClass(obj,no,isnew){
    if(isnew == ""){isnew = 'no';}
    if (document.getElementById(obj) != undefined){
	    objTab = document.getElementById(obj);
	    rows = objTab.getElementsByTagName('td')
	    for(i = 0; i < rows.length-1; i++){
		    if(no == i+1){
                        if(isnew){
			    document.getElementById(obj+eval(i+1)).className = 'menuTxtNewOvr';
                        }else
			    document.getElementById(obj+eval(i+1)).className = 'menuTxtOvr';
		    }
	    }
    }
}

// isnew added by gpw 02/06/13 web redesign
function deactAll(obj,isnew){
        if(isnew == ""){isnew = 'no';}
	objTab = document.getElementById(obj);
	rows = objTab.getElementsByTagName('tr')
	for(i = 0; i < rows.length-1; i++){

// gpw 1/25/07 allow missing elements
//		document.getElementById(obj+eval(i+1)).className = 'menuTxt';

        if(document.getElementById(obj+eval(i+1)) != undefined){
            if(isnew){
                document.getElementById(obj+eval(i+1)).className = 'menuTxtNew';
            } else
		document.getElementById(obj+eval(i+1)).className = 'menuTxt';
        }
	}
}

/* Show Sub Menu - Firefox 1.0 Fix*/
function showSubMenu(no,st){
	if(st==0){
		document.getElementById('subMenu'+no).style.display = 'block';
		document.getElementById('subMenu'+no).style.visibility = 'visible'
	} else {
		document.getElementById('subMenu'+no).style.display = 'none';
		document.getElementById('subMenu'+no).style.visibility = 'hidden';
	}
}

function showHideCombo(no,st){
	menuHt1 = 500; //342
	menuHt2 = 500; //416
	menuHt3 = 500; //398
	menuHt4 = 500; //450
	menuHt5 = 500;
	menuHt6 = 500; //307
	menuHt1sm1 = 800;
	menuHt1sm2 = 800;
 var doStateSwitch = false;
 var comboX = 0;
 var menuX  = 0;

 var comboWidth;
 var menuEnd;

    if(pgId == 'hotBuys' || pgId == 'closeouts' || pgId == 'Index'){
        comboWidth = 270; } else {comboWidth = 143;}
 
	objCombo = document.getElementsByTagName("select");
	if(objCombo[0]!= undefined){
		for(i=0;i<objCombo.length;i++){
			if(objCombo[i].style.visibility != "hidden" && document.getElementById('subMenu'+no).style.visibility == 'visible'){
				if(findPosY(objCombo[i]) < eval("menuHt" + no)){
//  			   if((findPosX(objCombo[i]) > findPosX(document.getElementById('subMenu'+no)) && findPosX(objCombo[i]) < eval(findPosX(document.getElementById('subMenu'+no))+147)) || (eval(findPosX(objCombo[i]) + 157)  >  findPosX(document.getElementById('subMenu'+no)) && eval(findPosX(objCombo[i]) + 157)  < eval(findPosX(document.getElementById('subMenu'+no))+147))){

       comboX = findPosX(objCombo[i]);
       menuX  = findPosX(document.getElementById('subMenu'+no));
       menuEnd   = menuX +347;
       comboEnd   = comboX + comboWidth;

       if(
           ( (comboX > menuX) && (comboX < menuEnd) ) ||
           ( (comboEnd > menuX) && (comboEnd < menuEnd) )  ||
           ( (comboX < menuX) && (comboEnd > menuEnd) )
         ) {doStateSwitch = true;}


/*  removed gpw 2.12.07   ***************
       
       switch (pgId)
	 {
		case "hotBuys":
		{
	        	if ( (comboX > menuX && comboX < menuX + 270) ||   
			(comboX < menuX && comboX + 270 > menuX) ||
			(comboX + 270 > menuX && comboX + 270 < menuX + 147) 
			)   
			{
			   doStateSwitch = true;
       		      	}
			break;
		}

		case "closeouts":
		{
			if ( (comboX > menuX && comboX < menuX + 270) ||   
			(comboX < menuX && comboX + 270 > menuX) ||
			(comboX + 270 > menuX && comboX + 270 < menuX + 147) 
	                )   
       			{
			   doStateSwitch = true;
       			}
			break;
		}

		case "Index":
		{
			if ( (comboX > menuX && comboX < menuX + 297) ||
			(comboX + 200 > menuX)
                	)
             		{
			   doStateSwitch = true;
             		}
			break;
		}
												default :
		{}
       } // switch
*******************/
       
       if (doStateSwitch)
       {
    	if(st==0)
    		objCombo[i].style.visibility = "hidden";
    	else
    		objCombo[i].style.visibility = "visible";
       }
/*
                   if( ((pgId == 'hotBuys' || pgId == 'closeouts' || pgId == 'Index') &&
					  ((findPosX(objCombo[i]) > findPosX(document.getElementById('subMenu'+no)) && findPosX(objCombo[i]) < eval(findPosX(document.getElementById('subMenu'+no))+147)) || (eval(findPosX(objCombo[i]) + 207)  >  findPosX(document.getElementById('subMenu'+no)) && eval(findPosX(objCombo[i]) + 207)  < eval(findPosX(document.getElementById('subMenu'+no))+147))) )
                   || ((findPosX(objCombo[i]) > findPosX(document.getElementById('subMenu'+no)) && findPosX(objCombo[i]) < eval(findPosX(document.getElementById('subMenu'+no))+147)) || (eval(findPosX(objCombo[i]) + 157)  >  findPosX(document.getElementById('subMenu'+no)) && eval(findPosX(objCombo[i]) + 157)  < eval(findPosX(document.getElementById('subMenu'+no))+147))) ){
						if(st==0){
							objCombo[i].style.visibility = "hidden";
						} else {
							objCombo[i].style.visibility = "visible";
						}
					}
*/
				}
			}
		}
	}
}

function showHideComboOut(){
	objCombo = document.getElementsByTagName("select");
	if(objCombo[0]!= undefined){
		for(i=0;i<objCombo.length;i++){
			objCombo[i].style.visibility = "visible";
		}
	}
}

totMenus = 6;

// if you are changing menus, set delay but, since every move within a menu
// also fires this you have to let it go immediately when WITHIN a menu, or the selection
// boxes don't stay hidden; so.. you have to reset currentMenu ONLY if you
// are really out and only way to detect that is to put a delay on that
// and then clear the delay immediately in mouseover!!

// isnew  (use new Css) added by gpw 02/06/13 web redesign
function showMenu(obj,no,st,isnew){
   if(isnew == ""){isnew = 'no';}
   if (st == 0){
     if(currentMenu != no){
       menuTimer=setTimeout(function() {showMenu2(obj,no,st,isnew)},500);
     } else {showMenu2(obj,no,st,isnew);}
   } else {
     if (st == 1){
         clearTimeout(menuTimer);
         showMenu2(obj,no,st,isnew);
     }
   }
}

// isnew added by gpw 02/06/13 web redesign
function showMenu2(obj,no,st,isnew){
	document.getElementById("nav").style.zIndex = 2;
	if(st==0){
        clearTimeout(clearTimer);
        currentMenu = no;

	document.getElementById('subMenu'+no).style.visibility = 'visible'
	document.getElementById('subMenu'+no).style.display = 'block';
        if(isnew=='yes'){obj.className = 'menuNew'+no+'on';}
        else
	obj.className = 'menu'+no+'on';
	for(i=1; i<=totMenus;i++){
	//	if(i!=no){
        //  web redesign
		if(i!=no && (i > 1 || pgId != 'Index')){
			document.getElementById('subMenu'+i).style.visibility = 'hidden'
			document.getElementById('subMenu'+i).style.display = 'none';
		}
	}
		
	if(is_ie && !ie_7up){
			showHideCombo(no,st);

			if(typeof(rowManager)!='undefined'){
				var rowID = rowManager.getFirstRowID();
				//alpha and nes's website dont have this menu overlay/IE<=6-specific problem
				if (SITE_NAME_FLAG == 'broder' && rowID != null && (no == 1 || no == 2)){
					$('colors'+rowID).style.display = "none";
					spacer = document.createElement('img');
					spacer.src = '/images/spacer.gif';
					spacer.id = 'spacerIMG';
					spacer.height = 10;
					spacer.width = 161;
					$('quantities'+rowID).cells[1].appendChild(spacer);
				}
			}
		}
	} else { 
		for(i=1; i<=totMenus;i++){
                   if(i > 1 || pgId != 'Index') {
			document.getElementById('subMenu'+i).style.visibility = 'hidden'
			document.getElementById('subMenu'+i).style.display = 'none';
                        }
		}
                if(isnew=='yes'){obj.className = 'menuNew'+no;}
                else
		obj.className = 'menu'+no;
		if(is_ie && !ie_7up){

            clearTimer=setTimeout("currentMenu = 0",500);
			showHideComboOut(); // 12.27.06

			if(typeof(rowManager)!='undefined'){
				var rowID = rowManager.getFirstRowID();
				//alpha and nes's website dont have this menu overlay/IE<=6-specific problem
				if (SITE_NAME_FLAG == 'broder' && rowID != null && (no == 1 || no == 2)){
					var spacerParent = spacer.parentNode;
					spacerParent.removeChild(spacer);
					$('quantities'+rowID).cells[2].height = "10";
					$('colors'+rowID).style.display = "";
				}
			}
		}
	}
}

function showSubMenu(obj,no,st)
{
	if(st==0)
	{
		document.getElementById('subMenu'+no).style.visibility = 'visible';
		document.getElementById('subMenu'+no).style.display = 'block';
		showHideCombo(no,st);
	} 
	else 
	{
		document.getElementById('subMenu'+no).style.visibility = 'hidden';
		document.getElementById('subMenu'+no).style.display = 'none';
		showHideComboOut();
	}
}

function showObj(id)
{
		var obj = document.getElementById(id);
		obj.style.visibility = 'visible';
		obj.style.display = 'block';
}

function hideObj(id)
{
		var obj = document.getElementById(id);
		obj.style.visibility = 'hidden';
		obj.style.display = 'none';
}

var brandNo = -1;
/* Browse brand all dropdown */
function findPosXY(obj, objNo){
	divObj = document.getElementById("brwsBrndDD");
	tdObj = document.getElementById("brand"+objNo);
	if(brandNo!= -1){
		prevObj = document.getElementById("brand"+brandNo);
	}
	if(objNo != brandNo){
		var curleft = 0;
		var curtop = 0;
		objX = obj;
		objY = obj;
		if(objX.offsetParent){
			while(1) 
			{
			  curleft += objX.offsetLeft;
			  if(!objX.offsetParent)
				break;
			  objX = objX.offsetParent;
			}
		}
		else if(objX.x)
			curleft += obj.x;
	
		if(objY.offsetParent)
			while(1)
			{
			  curtop += objY.offsetTop;
			  if(!objY.offsetParent)
				break;
			  objY = objY.offsetParent;
			}
		else if(objY.y)
		curtop += objY.y;
		divObj.style.left = curleft - 2 + "px";
		divObj.style.top = curtop + 16 + "px";
		divObj.style.visibility = "visible";
		if(safari != -1) {
			//outpuntObj=document.getElementById("output");
			divObj.style.left = curleft + 10 + "px";
			divObj.style.top = curtop + 208 + "px";
			//outpuntObj.style.top=-100 +"px";
		}
		tdObj.className = "brwsBrndLogoNameBgUp";
		if(brandNo!= -1){
			prevObj.className = "brwsBrndLogoNameBg";
		}
		brandNo = objNo;
	} else {
		divObj.style.visibility = "hidden";
		if(brandNo!= -1){
			prevObj.className = "brwsBrndLogoNameBg";
		}
		brandNo = -1;
    }
}
  
function editAddrs(type){
	if(type==1){
	document.getElementById('tabTblSetting').style.display = 'none';
	document.getElementById('tabTblSettingEdit').style.display = 'block';
	document.getElementById('tabTblSettingAddAddr').style.display = 'none';
	document.getElementById('shipngAddAcInfo').style.display = 'none';
	}else if(type==2){
	document.getElementById('tabTblSetting').style.display = 'none';
	document.getElementById('tabTblSettingEdit').style.display = 'none';
	document.getElementById('tabTblSettingAddAddr').style.display = 'block';
	document.getElementById('shipngAddAcInfo').style.display = 'none';
	}else {
	document.getElementById('tabTblSetting').style.display = 'block';
	document.getElementById('tabTblSettingEdit').style.display = 'none';
	document.getElementById('tabTblSettingAddAddr').style.display = 'none';
	document.getElementById('shipngAddAcInfo').style.display = 'none';
	}
}
/*Script for text box drop down starts here*/
var suggestions = new Array("035X","054X","055X","12000","1202","12100","122","1220","12479","12500","1293","1301","136","1382","13V0110","13V0113","13V0114","13V521","13V522","13Z0042","13Z0043","13Z0044","13Z053","13Z055","1402","1441","1444","145","1452","14800","1500","1501","156","158","16230R","1630","176","18000",
"18000B","1801Z","1805Z","1808Z","18130","18200","18230","18430","185","18500","18500B","18600","188LS","188M","2000B","2000G","2000L","20010","2002","20230","2100","2100G","2101","21020","2102A","2108","2111","2112","2113","215","215B","2184","21M","2200","2300G","2400","2400A","2400B","2415","2500G","2600","2700","2800",
"29B","29BL","29LS","29M","29MP","29W","31000","32000","323","325","3281","3326","3380","3580","36000","3611","3619","3633","363B","363LS","363M","363MP","3642","3646","37000","379","3800","3930","3930B","3930P","3976","4002","41","421M","4305","4311","4313","433M","436MP","4377","437M","437ML","437Y","437YL","438M","440M",
"440Y","447M","4483","4528M","4603","4610","4662B","4662M","479","479B","480M","481M","4822","4850MP","4930","4997M","4999","49M","5000B","5000G","5001","50020","5004","5005","5011","5032","504","5077","5124","5125","5170","5180","5186","5190","5226","5227","5250","5280","5286","5296","5300","5370","5380","5399","5400","54550","5480","562B","562M",
"562W","56800","56850","56900","56R","5909","5929","5930","5930B","5930P","59800","59850","6002","6003","6091","6092","610","611","612","613","6180","6188","622","623","624","6240","625","6277","6363V","63640","6377","6377CA","6404","6408","641","6477","6506","6512","652","6572","6577CD","6606","66M","6808","6988VC","7077",
"7930","8000","8000B","81234","81364","815","8187","8300","8306","8400","852","8602","862M","879","8800","8900","897M","9000","905B","923","923B","9500","973B","973M","978","979","99299","993B","993M","996M","996Y","A01","A02","A03","A04","A05","A06","A07","A08","A09","A10","A11","A12","A13","A14","A15","A16","A17","A18",
"A19","A20","A21","A22","A23","A24","A4600","B1302","B1305","B164","B174","B260","B270","BB002","BB057","BB100","BB1013","BB101N","BB2631","BB265","BB265Y","BB2669","BB331A", "BB850","BB9365","BB9453","BB9491","BB9499","BB9515","BB9516","BB9544","BB9551","BB9559","BB9561","BB9579","BB9589","BB9595","BB9595Y","BB9735","BB9753",
"BB9761","BB9762","BB9764","BB9795","BB9799","C3S0988","C3S5402","C5540","C6SW01","C6SW02","C6SW03","CC88","CC9000","CH100","CH100W","CH110","CH130","CH130W","CH150","CH150W","CH160","CH160W","CH170","CH170W","CH180","CH180W","CH200","CH220W","CH230","CH310","CH320","CH330","CH370","CH370W","CH500","CH500W","CH505","CH510",
"CH510W","CH530","CH530W","CH550","CH550W","CH580","CH580W","CH590","CH590W","CH595","CH595W","CH605","CH605W","CH700","CH705","CH710W","CH720","CH720W","CH760","CH800","CH805","CH810","CH815","CH820","CH825","CH830","CH835","CH840","CH850","CH855","CH860","CH865","CH870","CH875","CH900","CH900W","CH905","CH910","CH930",
"CH930W","CH950","CH960","CH970","CM108","CM110","CM111","CM112","CM175","CM176","CW406","CW407","CW408","DW110","DW115","DW120","DW200","DW210","DW215","DW220","DW310","DW320","DW330","DW450","DW500","DW505","DW510","DW520","DW520Y","DW600","DW605","DW610","DW615","DW700","DW800","DW805","DW810","DW815","DW820","DW850",
"DW855","DW860","DW865","DW870","DW880","F170","F260","F280","GR100","GR101","GR102","GR103","GR104","GR105","GR106","GR109","GR110","GR111","GR112","GR115","GR151","GR152","GR153","GR154","GR155","GR157","GR160","GR200","GR302","GR303","GR355","GR800","GR801","GR802","GR803","GR804","GR805","GR850","GR852","GR855","GR857","GR859","GR860","GR862","GR865","GR870","GR872","GR875","H500","H550","J100","J200","J200W","J300","L-3587","L-3631","LS-3906","M100","M100W","M140",
"M140W","M150","M200","M200W","M210","M220","M230","M250","M300","M304","M500","M500S","M500W","M550","M550S","M550W","M600","M600S","M600W","M700","M710","M740","M800","M805","M810","M815","M820","M825","M830","M835","M840","M845","M850","M855","M860","M865","M870","M890","M891","M892","M893","M900","M902","M905","M907",
"M910","M912","M915","M917","M920","M925","M927","M930","M932","M935","M937","M940","M942","M945","M947","M950","M952","M955","M960","M965","M970","OB11","OB12","P160","P170","P2170","P2443","P360","RS1000","RS1003","RS3301","RS3311","RS3317","RS3400","RS3401","RS3417","RS4400","RS4426","RS4434","RS4438","RS4450","S1049",
"S1051","S10C","S122","S14C","S1780","S1781","S1795","S1796","S22C","S244","S2442","SL00","STYLE","T1394","T1396","T1397","T2102","T2207","T2302","T250","T340","T407","T457","T525","T600","T60G","T680","T68G","WP2545","WP4000","WP4001","WP4010","WP4030","WP5000","WP5001","WP5002","WP5009","WP5705","WP672","WP675","WP998",
"Adams","Adidas","American Apparel","Anvil","Cotton Deluxe","Apples &amp; Oranges","Augusta","Authentic Pigment","BAGedge","Big Accessories","Broder Bros. Co.","Catalogues","Champion","Chestnut Hill","Columbia","Cross Creek","CubaveraDesert Wash","Fruit of the Loom","Gildan","Hanes","Hanes Printables","Harriton","Harvard Square",
"HYP","Izod","Jerzees Activewear","Cross Creek","Jonathan Corey","LA T","Lee","Gitano","Wrangler","Luna Pier","MV Sport","Outer Banks","Jasper Textiles","Rabbit Skins","Russell","Stedman","Toppers","Van Heusen","Yupoong","ZKAPZ");
	var outp;
	var oldins;
	var posi = -1;
	var words = new Array();
	var input;
	var key;

	function setVisible(visi){
		var x = document.getElementById("shadow");
		var t = document.getElementsByName("text")[0];
		x.style.position = 'absolute';
		x.style.top =  (findPosY(t)+3)+"px";
		x.style.left = (findPosX(t)+2)+"px";
		x.style.visibility = visi;
	}

	function init(){
		outp = document.getElementById("output");
		window.setInterval("lookAt()", 100);
		setVisible("hidden");
		document.onkeydown = keygetter; //needed for Opera...
		document.onkeyup = keyHandler;
	}

	function findPosX(obj)
	{
		var curleft = 0;
		if (obj && obj.offsetParent) 
		{ 
			while (obj.offsetParent){
				curleft += obj.offsetLeft;
				obj = obj.offsetParent;
			}
		}
		else if (obj && obj.x)
			curleft += obj.x;
		return curleft;
	}

	function findPosY(obj)
	{
		var curtop = 0;
		if (obj.offsetParent){
			curtop += obj.offsetHeight;
			while (obj.offsetParent){
				curtop += obj.offsetTop;
				obj = obj.offsetParent;
			}
		}
		else if (obj.y){
			curtop += obj.y;
			curtop += obj.height;
		}
		return curtop;
	}

	function lookAt(){
		var ins = document.getElementsByName("text")[0].value;
		if (oldins == ins) return;
		else if (posi > -1);
		else if (ins.length > 0){
			words = getWord(ins);
			if (words.length > 0){
				clearOutput();
				for (var i=0;i<words.length; ++i) addWord (words[i]);
				setVisible("visible");
				input = document.getElementsByName("text")[0].value;
			}
			else{
				setVisible("hidden");
				posi = -1;
			}
		}
		else{
			setVisible("hidden");
			posi = -1;
		}
		oldins = ins;
	}
	
	function addWord(word){
		var sp = document.createElement("div");
		sp.appendChild(document.createTextNode(word));
		sp.onmouseover = mouseHandler;
		sp.onmouseout = mouseHandlerOut;
		sp.onclick = mouseClick;
		outp.appendChild(sp);
	}
	
	function clearOutput(){
		while (outp.hasChildNodes()){
			noten=outp.firstChild;
			outp.removeChild(noten);
		}
		posi = -1;
	}
	
	function getWord(beginning){
		var words = new Array();
		for (var i=0;i<suggestions.length; ++i){
			var j = -1;
			var correct = 1;
			while (correct == 1 && ++j < beginning.length){
				if (suggestions[i].charAt(j) != beginning.charAt(j)) correct = 0;
			}
			if (correct == 1) words[words.length] = suggestions[i];
		}
		return words;
	}
	
	function setColor (_posi, _color, _forg){
		outp.childNodes[_posi].style.background = _color;
		outp.childNodes[_posi].style.color = _forg;
	}
	
	function keygetter(event){
		if (!event && window.event) event = window.event;
		if (event) key = event.keyCode;
		else key = event.which;
		outputObj=document.getElementById("output");
		shadowObj=document.getElementById("shadow");
		document.getElementById("nav").style.zIndex = 0;
		outputObj.style.zIndex = 1;
		shadowObj.style.zIndex = 1;
	}
		
	function keyHandler(event){
		if (document.getElementById("shadow").style.visibility == "visible"){
		var textfield = document.getElementsByName("text")[0];
		if (key == 40){ //Key down
			if (words.length > 0 && posi < words.length-1){
				if (posi >=0) setColor(posi, "#fff", "black");
				else input = textfield.value;
				setColor(++posi, "gray", "white");
				textfield.value = outp.childNodes[posi].firstChild.nodeValue;
			}
		}
		else if (key == 38){ //Key up
			if (words.length > 0 && posi >= 0){
				if (posi >=1){
					setColor(posi, "#fff", "black");
					setColor(--posi, "gray", "white");
					textfield.value = outp.childNodes[posi].firstChild.nodeValue;
				}
				else{
					setColor(posi, "#fff", "black");
					textfield.value = input;
					textfield.focus();
					posi--;
				}
			}
		}
		else if (key == 27){ // Esc
			textfield.value = input;
			setVisible("hidden");
			posi = -1;
			oldins = input;
		}
		else if (key == 8){ // Backspace
			posi = -1;
			oldins=-1;
		}
		}
	}
	
	var mouseHandler=function(){
		for (var i=0;i<words.length;++i)
			setColor (i, "white", "#666");
	
		this.style.background = "white";
		this.style.color= "#666";
	}
	
	var mouseHandlerOut=function(){
		this.style.background = "white";
		this.style.color= "black";
	}
	
	var mouseClick=function(){
		document.getElementsByName("text")[0].value = this.firstChild.nodeValue;
		setVisible("hidden");
		posi = -1;
		oldins = this.firstChild.nodeValue;
		outpuntObj=document.getElementById("output");
		shadowObj=document.getElementById("shadow");
		if(outpuntObj.style.display=="block" || outpuntObj.style.visibility=="visible"){
		outpuntObj.style.display = "none";
		shadowObj.style.display = "none";
	}

}


function showProcMsg(st){
// st=0 to hide, 1 to unhide
//	document.getElementById("processingMsg").style.zIndex = 2;
	objCombo = document.getElementsByTagName("select");
	
	if(objCombo[0] != undefined && objCombo.length >=1 && pgId == 'advSearch'){
		len = 12;
	} else if(objCombo[0] != undefined && objCombo.length >=4){
		len = 4;
	} else if(objCombo[0] != undefined){
		len =  objCombo.length;
	}
	
	if(st==0){
		if(is_ie && !ie_7up){
		if(objCombo[0] != undefined){
			for(i=0;i<len;i++){
              if(objCombo[i] != undefined){
//				objCombo[i].style.visibility = 'hidden';
                // correcting re-appearance on mouse-over
				objCombo[i].style.display = 'none';
              }
			}
			}
			if(typeof(rowManager)!='undefined'){
				var rowID = rowManager.getFirstRowID();
				//alpha and nes's website dont have this menu overlay/IE<=6-specific problem
				if (SITE_NAME_FLAG == 'broder' && rowID != null && (no == 1 || no == 2)){
					$('colors'+rowID).style.display = "none";
					spacer = document.createElement('img');
					spacer.src = '/images/spacer.gif';
					spacer.id = 'spacerIMG';
					spacer.height = 10;
					spacer.width = 161;
					$('quantities'+rowID).cells[1].appendChild(spacer);
				}
			}
		}
	} else {
		if(is_ie && !ie_7up){
			if(objCombo[0] != undefined){
				for(i=0;i<len;i++){
                  if(objCombo[i] != undefined){
    				objCombo[i].style.display = 'block';
					objCombo[i].style.visibility = 'visible';
                  }
			}
			}
			if(typeof(rowManager)!='undefined'){
				var rowID = rowManager.getFirstRowID();
				//alpha and nes's website dont have this menu overlay/IE<=6-specific problem
				if (SITE_NAME_FLAG == 'broder' && rowID != null && (no == 1 || no == 2)){
					var spacerParent = spacer.parentNode;
					spacerParent.removeChild(spacer);
					$('quantities'+rowID).cells[2].height = "10";
					$('colors'+rowID).style.display = "";
				}
			}
		}
	}
}

function checkForward(cStyle,cQuestion){
    var cCookie = getCookie("srForward");
    if(cCookie.length>2){
        document.cookie="srForward=''; path=/";
        history.go(-1);
    } else {
    document.cookie="srForward='forwarded'; path=/";
    var cURL = chostURL;
    cURL += cappURL;
    cURL += '/webshr/prod-detail.w?sr=' + cStyle + '&q=' + cQuestion;
    location.href = cURL;
    }
}

function checkGromFwd(cStyle,cQuestion){
    var cCookie = getCookie("srForward");
    if(cCookie.length>2){
        document.cookie="srForward=''; path=/";
        history.go(-1);
    } else {
    document.cookie="srForward='forwarded'; path=/";
    var cURL = chostURL;
    cURL += cappURL;
    cURL += '/webshr/grommet-prod-det.w?sr=' + cStyle + '&q=' + cQuestion;
    location.href = cURL;
    }
}

/*Script for text box drop down Ends here*/
/*Script for tab navigation starts here*/
function openWin(pgName){
	window.top.location = pgName + ".shtml";
}
/*Script for tab navigation Ends here*/

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

