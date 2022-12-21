<?php
/*
=====================================================
Mobile version detection
-----------------------------------------------------
compliments of http://www.buchfelder.biz/
=====================================================
*/


$mobile = "http://wheelingna.org/Mobile/mIndex.html";
$text = $_SERVER['HTTP_USER_AGENT'];
$var[0] = 'Mozilla/4.';
$var[1] = 'Mozilla/3.0';
$var[2] = 'AvantGo';
$var[3] = 'ProxiNet';
$var[4] = 'Danger hiptop 1.0';
$var[5] = 'DoCoMo/';
$var[6] = 'Google CHTML Proxy/';
$var[7] = 'UP.Browser/';
$var[8] = 'SEMC-Browser/';
$var[9] = 'J-PHONE/';
$var[10] = 'PDXGW/';
$var[11] = 'ASTEL/';
$var[12] = 'Mozilla/1.22';
$var[13] = 'Handspring';
$var[14] = 'Windows CE';
$var[15] = 'PPC';
$var[16] = 'Mozilla/2.0';
$var[17] = 'Blazer/';
$var[18] = 'Palm';
$var[19] = 'WebPro/';
$var[20] = 'EPOC32-WTL/';
$var[21] = 'Tungsten';
$var[22] = 'Netfront/';
$var[23] = 'Mobile Content Viewer/';
$var[24] = 'PDA';
$var[25] = 'MMP/2.0';
$var[26] = 'Embedix/';
$var[27] = 'Qtopia/';
$var[28] = 'Xiino/';
$var[29] = 'BlackBerry';
$var[30] = 'Gecko/20031007';
$var[31] = 'MOT-';
$var[32] = 'UP.Link/';
$var[33] = 'Smartphone';
$var[34] = 'portalmmm/';
$var[35] = 'Nokia';
$var[36] = 'Symbian';
$var[37] = 'AppleWebKit/413';
$var[38] = 'UPG1 UP/';
$var[39] = 'RegKing';
$var[40] = 'STNC-WTL/';
$var[41] = 'J2ME';
$var[42] = 'Opera Mini/';
$var[43] = 'SEC-';
$var[44] = 'ReqwirelessWeb/';
$var[45] = 'AU-MIC/';
$var[46] = 'Sharp';
$var[47] = 'SIE-';
$var[48] = 'SonyEricsson';
$var[49] = 'Elaine/';
$var[50] = 'SAMSUNG-';
$var[51] = 'Panasonic';
$var[52] = 'Siemens';
$var[53] = 'Sony';
$var[54] = 'Verizon';
$var[55] = 'Cingular';
$var[56] = 'Sprint';
$var[57] = 'AT&T;';
$var[58] = 'Nextel';
$var[59] = 'Pocket PC';
$var[60] = 'T-Mobile';    
$var[61] = 'Orange';
$var[62] = 'Casio';
$var[63] = 'HTC';
$var[64] = 'Motorola';
$var[65] = 'Samsung';
$var[66] = 'NEC';

$result = count($var);

for ($i=0;$i<$result;$i++)
{    
    $ausg = stristr($text, $var[$i]);    
    if(strlen($ausg)>0)
    {
        header("location: $mobile");
        exit;
    }
    
}
?>
<?php
// iPhone Version:
if(strpos($_SERVER['HTTP_USER_AGENT'],'iPhone') !== FALSE || strpos($_SERVER['HTTP_USER_AGENT'],'iPod') !== FALSE)
{
  header('Location: http://www.wheelingna.org/Mobile/mIndex.html');
  exit();
}
// Android Version:
if(strpos($_SERVER['HTTP_USER_AGENT'],'Android') !== FALSE)
{
  header('Location: http://www.wheelingna.org/Mobile/mIndex.html');
  exit();
}
?>




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="google-site-verification" content="ZCBwD44VxdPBG9v3p4ASfBzZkVaBK-6XCuYAesEwvd4" />
<meta name="google-site-verification" content="CfEGahK8BPmKuhB3C7qXG3bGxnp8FTDMnUw24Z-LsPs" />

<title>WASCNA</title>

<link rel="icon" href="images/images/flavicon.ico">

<link rel="icon" href="images/images/flavicon.ico">
<meta name="description" content="The Wheeling Area of Narcotics Anonymous is a service area of Narcotics Anonymous, NA, meetings in Barnesville, Bridgeport, St. Clairsville, Steubenville, and Toronto, Ohio, and in New Martinsville, Payden City, and Wheeling, West Virginia, and is a member of the Tri-State Region of Narcotics Anonymous." />
<meta name="keywords" content="narcotics anonymous, na, steubenville, barnesville, bridgeport, st. clarisville, toronto, ohio, new martinsville, payden city, wheeling, west virginia, na steubenville, na barnesville, na bridgeport, na st. clarisville, na toronto, naohio, na new martinsville, na payden city, na wheeling, na west virginia, steubenville na, barnesville na, bridgeport na, st. clarisville na, toronto na, ohio na, new martinsville na, payden city na, wheeling na, west virginia na, meetings, literature, na literature, wascna, steubenville narcotics anonymous, barnesville narcotics anonymous, bridgeport narcotics anonymous, st. clarisville narcotics anonymous, toronto narcotics anonymous, ohio narcotics anonymous, new martinsville narcotics anonymous, payden city narcotics anonymous, wheeling narcotics anonymous, west virginia narcotics anonymous, na meetings steubenville, na meetings barnesville, na meetings bridgeport, na meetings st. clarisville, na meetings toronto, na meetings ohio, na meetings new martinsville, na meetings payden city, na meetings wheeling, na meetings west virginia, narcotics anonymous meetings, local na meetings, na meetings near me, na meeting list, 12 step, recovery,  WASCNA" />
<meta name="robots" content="index, nofollow" />
<link href="wheelingAreaStyle.css" rel="stylesheet" type="text/css" />

<!-- <link href="SpryAssets/SpryMenuBarVertical.css" rel="stylesheet" type="text/css" />
<script src="SpryAssets/SpryMenuBar.js" type="text/javascript"></script>-->
<script src="//use.edgefonts.net/alegreya;actor.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script>

 <SCRIPT TYPE="text/javascript">

function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=800,height=500,scrollbars=yes');
return false;
}





$(document).ready(function() {	

	if (once_per_session==0)
		loadpopup()
	else
	{
	if (get_cookie('popup')==''){
		loadpopup()
		document.cookie="popup=yes"
	}
	}

	

});



//Pop-under window II- By JavaScript Kit
//Credit notice must stay intact for use
//Visit http://javascriptkit.com for this script

//Pop-under only once per browser session? (0=no, 1=yes)
//Specifying 0 will cause popup to load every time page is loaded
var once_per_session=1

///No editing beyond here required/////

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
if (get_cookie('popup')==''){
loadpopup()
document.cookie="popup=yes"
}
}
function loadpopup(){
var id = '#popup';
			
		
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(2000);
		
			
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});	
}

</script>


<script type="text/javascript">

if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("http://www.wheelingna.org/Mobile/mIndex.html");
}

</script>

</head>

<!-- <BODY onLoad="popup ('popup.html', 'ad')"> -->

<div class="container">
 <span itemprop="logo"><img src="/images/images/Web Banner.jpg" alt="Insert Logo Here" name="Insert_logo" width="100%" height="170px" id="Insert_logo" style="background-color: #8090AB; display:block;" /></span>
    
  <div class="sidebar1">
    <ul class="nav">
      <li><a href="index.html">WASCNA Home</a></li>
      <li><a href="areaMeetingList.html">NA Meetings</a></li>
      <li><a href="service.html">Area Service</a></li>
      <li><a href="calendar.html">NA Events</a></li>
      <li><a href="literature.html">NA Literature</a></li>
      <li><a href="cleanTimeCalculator.html">Cleantime Calculator</a></li>
      <li><a href="links.html">NA Links</a></li>
      <li><a href="forProfessionals.html">For Professionals</a></li>
      <li><a href="spiritual.html" target="_blank">Spiritual Getaway</a></li>
      <li><a href="justForToday.html">Just for Today</a></li>
      <!-- 
      <li><a href="spiritual.html" target="_blank">Spiritual Getaway</a></li> -->
      <li><a href="speakerTapes.html">Speaker Tapes</a></li>
	    <!--  <li><a href="survey.html">Area Inventory Survey</a></li> -->
      <!-- <li><a href="flyers/WASCNA 2017 PR Workshop.pdf" target="_blank">PR Workshop  April 30</a></li>-->
    </ul>
    
    <!--<a style="color:#006fb5;" href="service.html"><h3>2016 Area Service Elections<br />December 20, 2016</h3></a>--> 
    
<!-- <p><a style="color:#006fb5; display:inline" href="/flyers/ICANA-WASCNA 2016 CAR Workshop.pdf" target="_blank">CAR Workshop<br />January 9, 2016</a></p>-->

<!-- <p><a href="/flyers/April WASCNA Website Subcommittee Meeting.pdf" target="_blank">WASCNA Website Subcommittee Meeting</a>&nbsp;&nbsp;&nbsp;&nbsp;April 10, 2015</p>

<p><a style="display:inline" href="/flyers/WASCNA Learning Day April 2015.pdf" target="_blank">WASCNA Learning Day</a><br />April 25, 2015</p>

<p><a style="display:inline" href="/flyers/2015 WASCNA 34th Anniversary.pdf" target="_blank">WASCNA 34th Anniversary</a><br />May 9, 2015</p><br />-->

<!--<p>Activities Subcommittee<br />December 3, 2017 Noon, Unity Center</p>
<p>New Year's Subcommittee<br />December 3, 2017 1 pm, Unity Center</p>-->
<!-- <p><a style="display:inline; font-size: 130%; color:blue;" href="/flyers/WASCNA Inventory of the Area Nov 4.pdf" target="_blank">Inventory of the Area</a><br />November 4, 2017<span style="float:right;">5 pm</span></p> -->

 <h4>Hospitals and Institutions (H&amp;I)<br />
 Public Relations  </h4>
<p class="indent" style="margin-top:-1.2em;">Meet at 3rd Sunday 3 pm:</p>
<h4>Spiritual Getaway</h4>
<p class="indent" style="margin-top:-1.2em;">Meet at 4th Sunday 3:30 pm:</p>
<p class="indent">Youth Services System Inc.<br />
4th Floor, Room 401<br />
87 15th and Jacob Street<br />
Wheeling, West Virginia<br />
<a style="color:#006fb5;" href="https://maps.google.com/maps?q=87+15th+Street,+Wheeling,+WV&amp;amp;hl=en&amp;amp;sll=40.365277,-82.669252&amp;sspn=6.946801,15.150146&amp;oq=87+15th+Street&amp;hnear=87+15th+St,+Wheeling,+West+Virginia+26003&amp;t=m&amp;z=17" target="_blank"><font size="2"><span class="yahoo">Map 
  and Directions</span></font></a><br /></p>

    <!--<h4  style= "color: #fff;">The message is hope.<br /><br />The promise is freedom from active addiction.</h4><br />
    <p align="center">Helpline<br /> Phone Number<br /><b>(888)251-2426</b></p>
	<p align="center">WASCNA<br />P.O. Box 6837<br />Wheeling, WV 26003</p>-->

    <!-- end .sidebar1 --></div>
    
  <div class="content">  
   <a style="display:inline;" href="Mobile/mIndex.html"><img src="/images/images/tinyPhone.png" alt="Tiny Mobile Phone Icon" width="10" height="23" align="left" style="margin-left:-1.5em" /><span style="color:#006fb5; font-size:xx-small; margin-left:-1em">Mobile<br />Site</span></a>
  <div class="logo">
  <img src="/images/images/Wheeling Area Service Committee of Narcotics Anonymous logo.png" alt="Wheeling Area Service Committee of Narcotics Anonymous logo" width="500" height="236" align="right" style="margin-top:-1.5em; padding-left:1em; padding-bottom:1em;" /></div>
  

          <br /><br /><h1 style="margin-top:-.5em; padding-left:2em;">Welcome, glad you're here!</h1>
    <h3 style= "color: #fff;">Our Primary Purpose<br /> - to carry the message to the addict who still suffers</h3>
    <div itemscope itemtype="http://schema.org/NGO">
  <p>The <span itemprop="name"><strong>Wheeling Area of Narcotics Anonymous</strong>—<strong>WASCNA</strong></span>—has been carrying the message of Narcotics Anonymous since 1981. It now serves 36 meetings in West Virginia and Ohio, including in <strong>Wheeling</strong>, <strong>Follensbee</strong>, and <strong>Glen Dale</strong> <strong>West Virginia</strong>, and in <strong>Barnesville</strong>, <strong>Bridgeport</strong>, <strong>St. Clairsville</strong>, and <strong>Steubenville</strong>, <strong>Ohio</strong>. Narcotics Anonymous is truly a world-wide multilingual multicultural fellowship with more than 67,000 weekly meetings in 139 countries. Narcotics Anonymous books and information pamphlets are currently available in 41 languages, with translations in process for 16 languages.</p>
    
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/IP/EN3122.pdf" target="_blank"><img src="images/images/croppedWelcome2.jpg" alt="Narcotics Anonymous Information Pamphlet, IP#22 &quot;Welcome to NA&quot;" width="105" height="228" align="right" /></a>
      
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/IP/EN3101.pdf" target="_blank"><img src="images/images/croppedWho2.jpg" alt="Narcotics Anonymous Information Pamphlet, IP#1 &quot;Who, What, How, and Why&quot;" width="105" height="228" align="right" /></a>
      
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/IP/EN3111.pdf" target="_blank"><img src="images/images/croppedSponsorship2.jpg" alt="Narcotics Anonymous Information Pamphlet, IP#11, &quot;Sponsorship&quot;" width="105" height="228" align="right" /></a>
      
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/IP/EN3116.pdf" target="_blank"><img src="images/images/croppedNewcomer2.jpg" alt="Narcotics Anonymous Information Pamphlet, IP#16 &quot;For the Newcomer&quot;" width="105" height="228" align="right" /></a>
      
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/IP/EN3107.pdf" target="_blank"><img src="images/images/croppedAddict2.jpg" alt="Narcotics Anonymous Information Pamphlet, IP#7 &quot;Am I an Addict?&quot;" width="105" height="228" align="right" /></a>
           
      <a style="cursor:url(images/images/CURSORNALogoSunburst1.ico) , auto;" href="http://www.na.org/admin/include/spaw2/uploads/files/EN3129.pdf" target="_blank"><img style="padding-left:0.2em" src="images/images/An Introduction to NA Meetings.JPG" alt="Narcotics Anonymous Service Pamphlet &quot;Introduction to Narcotics Anonymous Meetings&quot;" width="105" height="228" align="right" /></a>

      

      <br />
      <h2>What is the <strong>Narcotics<br /> Anonymous</strong> Program?</h2>
      <p>"NA is a nonprofit fellowship or society of men and women for
        whom drugs had become a major problem. We are recovering
        addicts who meet regularly to help each other stay clean. This
        is a program of complete abstinence from all drugs. There is
        only one requirement for membership, the desire to stop using.
        We are not interested in what or how much you used or who
        your connections were, what you have done in the past, how
        much or how little you have, but only in what you want to do
        about your problem and how we can help."</p>
    <p>The simple message of Narcotics Anonymous is… <strong>“That an addict, any addict, can stop using drugs, lose the desire to use and find a new way to live.”</strong></p>
          <p style="font-size:x-small; text-align:center">IP's and excerts from the Narcotics Anonymous Basic Text<br />Copyright © 1976, 1982, 1983, 1984, 1986, 1987, 1988, 2004, 2008, 2014<br /> 
Narcotics Anonymous World Services, Inc. Reprinted
by permission. All rights reserved.</p>
 
            </div>
    <br />

    <!-- end .content --></div>
  <div class="footer">
    <p align="center">Helpline Phone Number (888) 251-2426</p>
	<p align="center">WASCNA, P.O. Box 6837, Wheeling, WV 26003</p>


	<p align="center">Please address issues with this website <a href="contactUs.php">here</a>.</p>
    <p style="font-size:small; align:center; font:arial">&copy;2018 WASCNA</p>
    
    
    
      <p align="center">
      <a href="index.html">Home</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="areaMeetingList.html">Meetings</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="service.html">Area</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="calendar.html">Events</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="literature.html">Literature</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="cleanTimeCalculator.html">Cleantime</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="links.html">Links</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="contactUs.php">Contact Us</a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="Mobile/mIndex.html">Mobile Site</a></p>


  <!-- end .footer --></div>
  <!-- end .container --></div>

<!-- <script type="text/javascript">
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgRight:
"SpryAssets/SpryMenuBarRightHover.gif"});
-->
</script>
  
</BODY>
</html>
