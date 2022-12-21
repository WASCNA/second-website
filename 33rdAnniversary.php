<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WASCNA</title>

<link rel="icon" href="images/images/flavicon.ico">

<link rel="icon" href="images/images/flavicon.ico">
<meta name="description" content="The Wheeling Area of Narcotics Anonymous is a service area of Narcotics Anonymous, NA, meetings in Barnesville, Bridgeport, St. Clairsville, Steubenville, and Toronto, Ohio, and in New Martinsville, Payden City, and Wheeling, West Virginia, and is a member of the Tri-State Region of Narcotics Anonymous." />
<meta name="keywords" content="narcotics anonymous, na, steubenville, barnesville, bridgeport, st. clarisville, toronto, ohio, new martinsville, payden city, wheeling, west virginia, na steubenville, na barnesville, na bridgeport, na st. clarisville, na toronto, naohio, na new martinsville, na payden city, na wheeling, na west virginia, steubenville na, barnesville na, bridgeport na, st. clarisville na, toronto na, ohio na, new martinsville na, payden city na, wheeling na, west virginia na, meetings, literature, na literature, wascna, steubenville narcotics anonymous, barnesville narcotics anonymous, bridgeport narcotics anonymous, st. clarisville narcotics anonymous, toronto narcotics anonymous, ohio narcotics anonymous, new martinsville narcotics anonymous, payden city narcotics anonymous, wheeling narcotics anonymous, west virginia narcotics anonymous, na meetings steubenville, na meetings barnesville, na meetings bridgeport, na meetings st. clarisville, na meetings toronto, na meetings ohio, na meetings new martinsville, na meetings payden city, na meetings wheeling, na meetings west virginia, narcotics anonymous meetings, local na meetings, na meetings near me, na meeting list, 12 step, recovery,  WASCNA" />
<meta name="robots" content="index, nofollow">
<link href="wheelingAreaStyle.css" rel="stylesheet" type="text/css" />
<link href="general.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script>
<script type="text/javascript">
<!--
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
//-->


$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w,x=function(a,b){n.ev.on(i+a+j,b)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},A=function(b){if(b!==w||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),w=b;return n.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},C=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=C(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),t=a(document),n.popupsCache={}},open:function(b){s||(s=a(document.body));var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],v="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=t,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=y("bg").on("click"+j,function(){n.close()}),n.wrap=y("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=y("container",n.wrap)),n.contentContainer=y("content"),n.st.preloader&&(n.preloader=y("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}z("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(x(f,function(a,b,c,d){c.close_replaceWith=A(d.type)}),v+=" mfp-close-btn-in"):n.wrap.append(A())),n.st.alignTop&&(v+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:t.height(),position:"absolute"}),n.st.enableEscapeKey&&t.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&n.wrap.addClass(v);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),z("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||s),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),t.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),z(g),b},close:function(){if(!n.isOpen)return;z(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){z(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}t.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,z(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),z("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;z("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;z("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}u&&u!==b.type&&n.container.removeClass("mfp-"+u+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,z(h,b),u=b.type,n.container.prepend(n.contentContainer),z("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(A()):n.content=a:n.content="",z(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,z("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};z("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?t.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return B(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var D="inline",E,F,G,H=function(){G&&(F.after(G.addClass(E)).detach(),G=null)};a.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(D),x(b+"."+D,function(){H()})},getInline:function(b,c){H();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(F||(E=d.hiddenClass,F=y(E),E="mfp-"+E),G=e.after(F).detach().removeClass(E)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var I="ajax",J,K=function(){J&&s.removeClass(J)},L=function(){K(),n.req&&n.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(I),J=n.st.ajax.cursor,x(b+"."+I,L),x("BeforeChange."+I,L)},getAjax:function(b){J&&s.addClass(J),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};z("ParseAjax",f),n.appendContent(a(f.data),I),b.finished=!0,K(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),z("AjaxContentAdded")},error:function(){K(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var M,N=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=n.st.image,c=".image";n.types.push("image"),x(g+c,function(){n.currItem.type==="image"&&a.cursor&&s.addClass(a.cursor)}),x(b+c,function(){a.cursor&&s.removeClass(a.cursor),r.off("resize"+j)}),x("Resize"+c,n.resizeImage),n.isLowIE&&x("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,M&&clearInterval(M),a.isCheckingImgSize=!1,z("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){M&&clearInterval(M),M=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(M),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,z("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:N(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(M&&clearInterval(M),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var O,P=function(){return O===undefined&&(O=document.createElement("p").style.MozTransform!==undefined),O};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;x("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,z("ZoomAnimationEnded")},16)},f)},16)}}),x(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),x(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return P()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var Q="iframe",R="//about:blank",S=function(a){if(n.currTemplate[Q]){var b=n.currTemplate[Q].find("iframe");b.length&&(a||(b[0].src=R),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(Q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(Q),x("BeforeChange",function(a,b,c){b!==c&&(b===Q?S():c===Q&&S(!0))}),x(b+"."+Q,function(){S()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var T=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},U=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery",e=Boolean(a.fn.mfpFastClick);n.direction=!0;if(!c||!c.enabled)return!1;v+=" mfp-gallery",x(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),t.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),x("UpdateStatus"+d,function(a,b){b.text&&(b.text=U(b.text,n.currItem.index,n.items.length))}),x(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?U(c.tCounter,e.index,f):""}),x("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),f=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m),g=e?"mfpFastClick":"click";d[g](function(){n.prev()}),f[g](function(){n.next()}),n.isIE7&&(y("b",d[0],!1,!0),y("a",d[0],!1,!0),y("b",f[0],!1,!0),y("a",f[0],!1,!0)),n.container.append(d.add(f))}}),x(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),x(b+d,function(){t.off(d),n.wrap.off("click"+d),n.arrowLeft&&e&&n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=T(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=T(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=T(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),z("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,z("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var V="retina";a.magnificPopup.registerModule(V,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(x("ImageHasSize."+V,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),x("ElementParse."+V,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}(),B()})(window.jQuery||window.Zepto)


$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

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
<script src="/javascript/getColorDropDown.js" type="text/javascript" language="javascript1.2"></script>

<LINK href="/css/prod-detail.css" rel="stylesheet" type="text/css">
<script>
var gridChanged = false;
var gridMessage = false;
function colorInitial(){
}
function displayColorChart()
{
    var chartWindow = window.open("https://www.alphabroder.com/cgi-bin/online/webshr/colorChart.w?sc=G200","COLOR","scrollbars=no,width=700,height=800,resizable=yes,scrollbars=yes");
    chartWindow.focus();
}
function buyReg(cStyle,cColor) {
cStyle=encodeURIComponent(cStyle);
var cURL="https://www.alphabroder.com/cgi-bin/online";
cURL+="/webshr/prod-detail.w?sr=";
cURL+=cStyle;
cURL+="&currentColor=";
cURL+=cColor;
document.location=cURL;
}
function emailprodinfo(cStyle,cColor) {
cStyle=encodeURIComponent(cStyle);
var cURL="https://www.alphabroder.com/cgi-bin/online";
cURL+="/webshr/prodinfoEmail.w?sr=";
cURL+=cStyle;
cURL+="&currentColor=";
cURL+=cColor;
document.location=cURL;
}
function refreshcolor(colorsort) {
var ckname="ALPcs";
document.cookie = ckname + "=" + colorsort + "; path=/";
var cURL="https://www.alphabroder.com/cgi-bin/online";
cURL+="/webshr/prod-detail.w?sr=";
cURL+="G200&currentcolor=00&cs=";
cURL+=colorsort;
document.location=cURL;
}
function bycolortab(cStyle,cColor) {
cStyle=encodeURIComponent(cStyle);
var cURL="https://www.alphabroder.com/cgi-bin/online";
cURL+="/webshr/prod-detail.w?sr=";
cURL+=cStyle;
cURL+="&currentColor=";
cURL+=cColor;
cURL+="&tb=bycolor";
document.location=cURL;
}
function launchDS() {
var cURL="https://www.alphabroder.com/cgi-bin/online";
cURL+="/webshr/init-ds.w?st=";
cURL+="G200&co=WHITE";
document.location=cURL;
}
</script>

<style type="text/css">
	.logo	{
    padding: 5 em;
    }
</style>
</head>

<BODY onLoad="popup ('popup.html', 'ad')">

<body>

<div class="container">

 <img src="/images/images/Web Banner.jpg" alt="Insert Logo Here" name="Insert_logo" width="100%" height="170px" id="Insert_logo" style="background-color: #8090AB; display:block;" />
    
  <div class="sidebar1">
    <ul class="nav">
      <li><a href="index.php">WASCNA Home</a></li>
      <li><a href="areaMeetingList.html">NA Meetings</a></li>
      <li><a href="service.html">Area Service</a></li>
      <li><a href="calendar.html">NA Events</a></li>
      <li><a href="literature.html">NA Literature</a></li>
      <li><a href="cleanTimeCalculator.html">Cleantime Calculator</a></li>
      <li><a href="links.html">NA Links</a></li>
      <li><a href="forProfessionals.html">For Professionals</a></li>
      <li><a href="justForToday.html">Just for Today</a></li>
      <li><a href="spiritual.html" target="_blank">Spiritual Getaway</a></li>
      <li><a href="speakerTapes.html">Speaker Tapes</a></li>
     <!--  <li><a href="learningDay.html">Learning Day 2015</a></li>-->
      <li><a style="font-weight:700; color:gold;" href="33rdAnniversary.php">WASCNA 33rd Anniversary Merchandise!!!<span style="color:#00FF00;">&nbsp;&nbsp&nbspCups&nbsp;&nbsp&nbspShirts</a></li>
    </ul>
    
<br />
        <h5>G200 Gildan Ultra Cotton® 6 oz. T-Shirt</h5>
  <ul>    <li>100% preshrunk cotton</li>
<li>Double-needle stitching throughout</li>
<li>7/8&#34; Seamless collar</li>
<li>Taped shoulder-to-shoulder</li>
<li>Ash Grey 99/1, Antiques:(Cherry Red, Irish Green, Royal) & Sport Grey 90/10 </li>
<li>Dk Heather, Heathers:( Cardinal, Indigo, Navy, Sapphire) 50/50 cotton/poly </li>
<li>Safety Green, Safety Pink and Safety Orange are 50&#37; cotton, 50&#37; polyester<br/>
  </li></ul>
  <br />

    <!-- end .sidebar1 --></div>
    
  <div class="content">


<div class="popup-gallery">
<table width="100%">
	<tr>
		<th><h1 style="color:#FFFFFF;"><strong>WASCNA 33rd Anniversary Merchandise</strong></h1></th>
		<th>This page shows what will be available<br /> May 31st at <a href="/flyers/2014 Wheeling Area Anniversary.pdf">WASCNA's 33rd Anniversary</a><br />WASCNA is working to make online presales<br />for delivery at events available in the future</th>
        <th><b>Click on Image<br /> to Enlarge<br />- backarrow to return</b></th>
	</tr>
<tr>
		<td>WASCNA<br />33rd Anniversary 11 oz Coffee Mug<br /><b>$8</b></td>
		<td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary Coffee Cup FULL BRIDGE Background.jpg" title="WASCNA 33rd Anniversary Coffee Cup Wrap-Around Image" width="2550px" height="1086px" border="0"><img src="/images/images/WASCNA 33rd Anniversary Coffee Cup FULL BRIDGE Background.jpg" alt="WASCNA 33rd Anniversary Coffee Cup Wrap-Around Image Thumbnail"  border="0" height="85" width="200"></a><br />Coffee Mug Wrap-Around Image</td>
        
<td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary 11oz and 15oz coffee cups.jpg" title="WASCNA 33rd Anniversary 11oz coffee cup" width="836px" height="356px" border="0"><img src="/images/images/WASCNA 33rd Anniversary 11oz and 15oz coffee cups thumbnail.jpg" alt="WASCNA 33rd Anniversary 11oz coffee cup thumbnail"  border="0" height="85" width="200"></a><br />11 oz Coffee Mug</td>  
</tr>
<tr><td>&nbsp;</td>
</tr>
<tr><td>&nbsp;</td>
</tr>
<tr>      
		<td>WASCNA<br />33rd Anniversary T-Shirt<br /><b>$15</b></td>  
        <td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary BLACK shirt.jpg" title="WASCNA 33rd Anniversary BLACK shirt" width="551px" height="507px" border="0"><img src="/images/images/WASCNA 33rd Anniversary BLACK shirt thumbnail.jpg" width="200" height="85" border="3" alt="WASCNA 33rd Anniversary BLACK shirt thumbnail"></a><br />BACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRONT</td>
		

        <td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary SAPPHIRE (BASIC TEXT BLUE) shirt.jpg" title="WASCNA 33rd Anniversary SAPPHIRE (BASIC TEXT BLUE) shirt" width="551px" height="507px" border="0"><img src="/images/images/WASCNA 33rd Anniversary SAPPHIRE (BASIC TEXT BLUE) shirt thumbnail.jpg" width="200" height="85" border="3" alt="WASCNA 33rd Anniversary SAPPHIRE (BASIC TEXT BLUE) shirt thumbnail"  border="0" height="184" width="200"></a><br />BACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLUE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRONT</td>

</tr>

<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sizes Small-4X</td>
        <td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary CHARCOAL shirt.jpg" title="WASCNA 33rd Anniversary CHARCOAL shirt" width="551px" height="507px" border="0"><img src="/images/images/WASCNA 33rd Anniversary CHARCOAL shirt thumbnail.jpg" width="200" height="85" border="3" alt="WASCNA 33rd Anniversary CHARCOAL shirt thumbnail"  border="0"></a><br />BACK&nbsp;&nbsp;&nbsp;CHARCOAL&nbsp;&nbsp;&nbsp;FRONT</td>

        <td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary DAISY shirt.jpg" title="WASCNA 33rd Anniversary DAISY shirt" width="551px" height="507px" border="0"><img src="/images/images/WASCNA 33rd Anniversary DAISY shirt thumbnail.jpg" width="200" height="85" border="3" alt="WASCNA 33rd Anniversary DAISY shirt thumbnail"  border="0" ></a><br />BACK&nbsp;&nbsp;&nbsp;YELLOW&nbsp;&nbsp;&nbsp;FRONT</td>


<!--         <td><a href="http://wheelingna.org/images/images/WASCNA 33rd Anniversary PURPLE shirt.jpg" title="WASCNA 33rd Anniversary PURPLE shirt" width="551px" height="507px" border="0"><img src="/images/images/WASCNA 33rd Anniversary PURPLE shirt thumbnail.jpg" width="200" height="85" border="3" alt="WASCNA 33rd Anniversary PURPLE shirt thumbnail"  border="0"></a><br />BACK&nbsp;&nbsp;&nbsp;PURPLE&nbsp;&nbsp;&nbsp;FRONT</td>-->
</tr>

</table>

  
  <br class="clr" /><br />
</div>
    <!-- end .content --></div>
  <div class="footer">
    <p align="center">Helpline Phone Number (888) 251-2426</p>
	<p align="center">WASCNA, P.O. Box 6837, Wheeling, WV 26003</p>


	<p align="center">Please address issues with this website <a href="contactUs.php">here</a>.</p>
    <p style="font-size:x-small; align:center;">&copy;2018 WASCNA</p>
    
    
    
      <p align="center">
      <a href="index.php">Home</a>&nbsp; &nbsp; &nbsp; &nbsp;
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

<script type="text/javascript">
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgRight:
"SpryAssets/SpryMenuBarRightHover.gif"});

</script>
  
</body>
</html>
