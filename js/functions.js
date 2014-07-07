// JavaScript Document

//var flashVersion = jQuery.fn.flash.hasFlash.playerVersion().split(",");

//var hasFlash = flashVersion[0] >= 7;



// scriptStrings object for any content that gets rendered via JavaScript

// error messages are defined in more depth in the errorStrings object

var fieldErrorMsg="";

var scriptStrings = {

    contactFormSuccess: "Thanks for taking the time to send us an email. We\'ll be in touch soon.",

    deviceSuccess: "Thank you for submitting your device!",

    enterTextHere: "Enter text here",

    enterCustomItem: "Enter a custom checklist item.",

    heartbeatFailed: "An error occurred submitting your data. Please try again.",

    modalFailed: "We're sorry - an error occurred when we tried to load that info. Please try again.",

    loadingMessage: "Loading...",

    newsletterEmailInvalid: "Invalid email format.",

	invalidcode: "Invalid code.",

    newsletterError: "Sorry, a error occurred.",

    newsletterSuccess: "Thanks for signing up!",

    pleaseTryAgain: "Please try again.",

    topErrorGeneric: "There are some errors on the form below.<br />Please update the indicated fields then try again.",

    topErrorMultipleBuy: "There are some errors on the form below.<br />Please update the indicated fields and click the Buy button.",

    topErrorMultipleNext: "There are some errors on the form below.<br />Please update the indicated fields click the Next button.",

    printFormatting: "<a href=\"#\" id=\"removePrintStyles\" class=\"backLink\">&laquo; Go back</a> We\'ve formatted the page for printing. <a id=\"printLink\"  href=\"javascript:window.print()\">Print</a>",

    promoError: "You have entered a promo code without clicking \"apply\".<br />Please click \"apply code\" or delete the promo code before continuing.",

    registrationFailed: "We are unable to register your account.  Please try again shortly or <a href=\"CHATURL\">Chat with Gogo Customer Care</a>."

};



// error message strings: defined as arrays, where [0] = the field level message and [1] = the top-of-page message

var errorStrings = {

    billingAddressRequired: ["Please enter an Address.", "Address 1 is required. Please update the indicated fields and click BUY."],


    cardNumberRequired: ["Please enter your Card Number.", "Card Number is required. Please update the indicated field and click BUY."],

    cardNumberSyntax: ["A Card Number must be 15 or 16 digits, numerals only.", "A Card Number must include 15 or 16 digits, numerals only."],

    cardTypeRequired: ["Please select a Card Type.", "Card Type is required. Please update the indicated field and click BUY."],

	characterRestrictionsName: ["Your entry cannot include these characters:<br />&amp; &lt; &gt; &quot;", "Name on card fields cannot accept the characters: &amp; &gt; &lt; &quot;"],

	characterRestrictionsAddress: ["Your entry cannot include the characters:<br />&amp; &lt; &gt; &quot; % | ^ \\ \/", "Address-related fields cannot accept the characters: &amp; &gt; &lt; &quot; % | ^ \\ \/"],

    characterRestrictionsAddress2: ["Your entry cannot include the characters:<br />&amp; &lt; &gt; &quot; % | ^ \\ \/", "Address-related fields cannot accept the characters: &amp; &gt; &lt; &quot; % | ^ \\ \/"],	

    characterRestrictionsGeneral: ["Your entry cannot include these characters:<br />&amp; &lt; &gt; &quot; \\", "Your entry cannot include these characters:<br />&amp; &gt; &lt; &quot; \\"],

    characterRestrictionsNonLatin: ["Your entry contains characters that we can\'t process. Please edit your entry and try again.", "Your entry contains characters that we can\'t process. Please edit your entry and try again."],

    characterRestrictionsUsername: ["The Username cannot contain spaces or the characters: ( ) , . ; : &gt; &lt; @ [ ] \/ \\ | _ % & ? \"", "The Username cannot contain certain special characters. Please try a simpler Username."],

	charactersTabsRestrictionsUsername: ["The Username cannot contain spaces, tabs or the characters: ( ) , . ; : &gt; &lt; @ [ ] \/ \\ | _ % & ? \"", "The Username cannot contain certain special characters. Please try a simpler Username."],

	charactersTabsRestrictionsContactUsername: ["The Username cannot contain spaces, tabs or the characters: ( ) , . ; : &gt; &lt; @ [ ] \/ \\ | _ % & \" ?", "The Username cannot contain certain special characters. Please try a simpler Username."],

    cityRequired: ["Please enter a City.", scriptStrings.topErrorMultipleBuy ],

    citySyntax: ["Please re-enter your City. Check your use of punctuation, special characters, and/or spaces.", scriptStrings.topErrorMultipleBuy ],

    contactRequired: ["Please provide at least one point of contact.", "Please provide at least one point of contact."],

    countryRequired: ["Please select a Country.", "Country is required. Please update the indicated fields and click BUY"],

    emailRequired: ["Please enter your Email Address.", "Email Address is required. Please update the indicated field and click Next.", "Please enter a valid Email Address."],

    emailInvalid: ["Please re-enter your Email Address. Check your use of punctuation, special characters, and/or spaces.", scriptStrings.topErrorMultipleNext],

    emailAlreadyUsed: ["Please enter a different Email Address.", "The Email Address you entered has already been used. Please update the indicated field and click Next."],

    emailConfirmRequired: ["Please re-enter your Email Address.", "Email confirmation is required. Please update the indicated field and click Next."],

    emailConfirmMismatch: ["Email Addresses do not match.", "Your Email Addresses do not match. Please update the indicated field and click Next."],

    expirationMonthAndYearRequired: ["Please select the Expiration Month and Year for this card.", "Card Expiration Month and Year are required. Please update the indicated fields and click BUY."],

    expirationMonthRequired: ["Please select the Expiration Month for this card.", "Card Expiration Month is required. Please update the indicated fields and click BUY."],

    expirationYearRequired: ["Please select the Expiration Year for this card.", "Card Expiration Year is required. Please update the indicated fields and click BUY."],

    firstNameRequired: ["Please enter your First Name.", "First Name is required. Please update the indicated field and click Next."],

    firstNameSyntax: ["Your entry cannot include the characters: & < > \" % | ^ \ /", scriptStrings.topErrorMultipleNext ],

    genericRequired: ["Required field.", scriptStrings.topErrorGeneric],

    lastNameRequired: ["Please enter your Last Name.", "Last Name is required. Please update the indicated field and click Next." ],

    lastNameSyntax: ["Your entry cannot include the characters: & < > \" % | ^ \ /", scriptStrings.topErrorMultipleNext ],

    checkSyntax: ["Your entry cannot include the characters: & < > \" % | ^ \ /", scriptStrings.topErrorMultipleNext ],

    nameRequired: ["Please enter your Name.", scriptStrings.topErrorGeneric],

    nameOnCardRequired: ["Name on card is required.", ""],

    passwordAlphanumeric: ["Password may contain letters and numbers only.", "Password may contain letters and numbers only."],

    passwordRequired: ["Please enter a Password.", "Password is required. Please update the indicated field and click Next."],

    passwordChars: ["Please re-enter a Password that is at least 6 characters.", "Password must be at least 6 characters. Please update the indicated field and click Next."],

    passwordWhitespace: ["Password cannot contain spaces or tabs.", "The Password cannot contain spaces or tabs. Please update the indicated field and click Next."],

    passwordConfirmMismatch: ["Passwords do not match.", "Your passwords do not match. Please update the indicated field and click Next."],

    passwordConfirmRequired: ["Please re-enter your Password.", "Password confirmation is required. Please update the indicated field and click Next."],

    passwordReminderRequired: ["Please choose a Reminder Question.", "A Password Reminder Question is required. Please update the indicated field and click Next."],

    passwordReminderAnswerRequired: ["Please enter a Reminder Answer.", "An answer to the Password Reminder Question is required. Please update the indicated field and click Next."],



    postalCodeRequired: ["Please enter a Zip/Postal Code.", "Zip/Postal code is required. Please update the indicated fields and click BUY."],

    postalCodeSyntax: ["Please re-enter your Zip/Postal Code. Check your use of punctuation, special characters, and/or spaces.", scriptStrings.topErrorMultipleBuy],

    phoneRequired: ["Please provide a Phone Number.", "Please provide a Phone Number."],

    phoneSyntax: ["Phone numbers cannot contain letters.", "Phone numbers cannot contain letters."],

    securityCodeRequired: ["Security Code is required.", "Security Code is required. Please update the indicated field and click BUY."],

    securityCodeSyntax: ["Security Code is 3 or 4 digits.", "Security Code is 3 or 4 digits."],

	securityCodeAmexSyntax: ["Please enter 4 digits Security Code", "Please enter 4 digits Security Code"], 

    stateRequired: ["Please select a State.", "State is required. Please update the indicated fields and click BUY."],

    termsRequired: ["Please accept the Terms of Use.", "Acceptance of Terms of use is required. Please update the indicated field and click Next."],

    usernameAlphanumeric: ["Username may contain letters and numbers only.", "Username may contain letters and numbers only."],

    usernameExists: ["Please enter a different Username.", "That Username is already taken. Please update the indicated field and click Next."],

    usernameRequired: ["Please enter a Username.", "Username is required. Please update the indicated field and click Next."],

	usernameRequiredSignIn: ["Please enter a Username or Email.", "Username or Email is required. Please update the indicated field and click Next."],

    usernameSyntax: ["Please re-enter your username. Check your use of punctuation, special characters, and/or spaces.", scriptStrings.topErrorMultipleNext],

    usernameWhitespace: ["Username cannot contain spaces or tabs.", "The Username cannot contain spaces or tabs. Please update the indicated field and click Next."],

    usernameConfirmRequired: ["Please re-enter your Username.", "Username confirmation is required. Please update the indicated field and click Next."],

    usernameConfirmMismatch: ["Please re-enter your Username.", "Your Usernames do not match. Please update the indicated field and click Next."],

    usernameReminderRequired: ["Please choose a Reminder Question.", "A Username Reminder Question is required. Please update the indicated field and click Next."],

    usernameReminderAnswerRequired: ["Please enter a Reminder Answer.", "An answer to the Username Reminder Question is required. Please update the indicated field and click Next."],

    usZipFormat: ["US Zip code format: ##### or #####-####.", "US Zip code format is invalid. Please use ##### or #####-####."]

 };



 //ADDED FOR DOTCOM NAVIGATION MENU ISSUES START

 

 // JavaScript Document

 

 //Java script added for promocode

 

 function log_js(msg)

			{

//				alert(msg);

			}

			

						// Removes leading whitespaces

			function LTrim( value ) {

				

				var re = /\s*((\S+\s*)*)/;

				return value.replace(re, "$1");

				

			}



			// Removes ending whitespaces

			function RTrim( value ) {

				

				var re = /((\s*\S+)*)\s*/;

				return value.replace(re, "$1");


				

			}



			// Removes leading and ending whitespaces

			function trim( value ) {

				

				return LTrim(RTrim(value));

				

			}



			function updateAjaxResult(xml_result)

			{

				try{

					log_js(xml_result);								

					node=xml_result.getElementsByTagName("valid")[0];

					log_js("valid_node:"+node);





					valid=node.firstChild.nodeValue;

					log_js("valid:"+valid);				

					valid=valid.toLowerCase();

					

					if(valid==='false')

					{

						log_js("invalid response");

						var pe=document.getElementById("promoerror");

						pe.innerHTML="The Promo code entered is not valid";

						return ;

					}

					

					node=xml_result.getElementsByTagName("total")[0];



					log_js("price_id_node:"+node);					

					log_js("price_id_node_firstChild:"+node.firstChild);

					price=node.firstChild.nodeValue;

					var tprice = parseFloat(price).toFixed(2); 

					log_js("price value:"+price);



					discount_from_server=0;					

					log_js("to check discount_from_server");

					discount_node=xml_result.getElementsByTagName("discount")[0];

					log_js("discount node:"+discount_node);		

					log_js("discount firstChild:"+discount_node.firstChild);										

					discount_from_server=discount_node.firstChild.nodeValue;

					var totalDiscount = parseFloat(discount_from_server).toFixed(2); 			

					log_js("discount value:"+discount_from_server);					

					

					log_js("price_string calcualting");

					price_string=tprice+"";

					log_js("price_string calcualted");

					var ts=document.getElementById("total");

					log_js("ts:"+ts);

					

					ts.innerHTML=price_string;

					log_js("ts_innerHTML:"+price_string);				

					discount_string=totalDiscount+"";

					var ds=document.getElementById("discount");

					ds.innerHTML= discount_string;

				

				

				}catch(err)

				{

					log_js("error:"+err.description);

				}

				

			}

			

		    function newXMLHttpRequest() {

			

                var xmlreq = false;

                if (window.XMLHttpRequest) {

					xmlreq = new XMLHttpRequest();

                } else if (window.ActiveXObject) {

                    try {

                        xmlreq = new ActiveXObject("Msxml2.XMLHTTP");

						log_js("Msxml2.XMLHTTP");

                    } catch (e1) {

                        try {

							xmlreq = new ActiveXObject("Microsoft.XMLHTTP");

							log_js("Microsoft.XMLHTTP");							

                        } catch (e2) {

							log_js("fatal error, failed to init ajax request");

                        }

                    }

                }



                if (xmlreq.overrideMimeType)

                {

					log_js("overrideMimeType supported");

                    xmlreq.overrideMimeType('text/xml');

                }else

				{

					log_js("overrideMimeType not supported");

				}

				

                return xmlreq;

				

            }

			

			

			 function apply_promotion_code() {

				pc=document.getElementById("promotion_code_input_id");

           var pe = document.getElementById("promoerror");

           if(pe!=null) {

            pe.innerHTML="";

           }

				if(pc==null)

				{

					log_js("invalid promotion code, need reinput");

                     

                      pe.innerHTML="Please enter the Promo Code.";

					return ;

				}

				

				if(pc.value==null || pc.value=="")

				{

					log_js("invalid promotion code");

                    

                      pe=document.getElementById("promoerror");

                      pe.innerHTML="Please enter the Promo Code.";

					return;

				}

				

				v=trim(pc.value);				

				log_js("apply_promotion_code:"+pc.value);

                 pc.value="";

				



				/**

				*Aaron

				*09-13-2011

				*fix defect #123

				*/				

				/***----------------------------***/

				var error_msg_node=document.getElementById("promoerror");

				error_msg_node.innerHTML="";														

				/***----------------------------***/

				

				

                var req = newXMLHttpRequest();

                var handlerFunction = getReadyStateHandler(req, updateAjaxResult);

                req.onreadystatechange = handlerFunction;

                var url="promotionCodeAjaxController.do";

                req.open("POST",url, true);

                req.setRequestHeader("Content-Type", 

                "application/x-www-form-urlencoded");

                req.send("promotionCode="+v);

				if(req.overrideMimeType)

				{

					req.overrideMimeType('text/xml');  

				}else

				{

					log_js("overrideMimeType not supported");

				}

				

                return false;

            }

			

			



			function getReadyStateHandler(req, responseXmlHandler) {



                return function () {	

					log_js("calling the ajax client code, code:"+req.readyState);


                    if (req.readyState == 4) {     

                        if (req.status == 200) {

						

							log_js("req status is 200");

							xml=req.responseXML;

							log_js("xml:"+xml);

							if(req.responseText)

							{

								log_js("responseText");

								text=req.responseText;

								log_js(text);								

								//xml=text;

							}else

							{

								log_js("NO responseText");

							}

                            responseXmlHandler(xml);

							

						

							

							

                        } else {

                        }

                    }

                }

            }

            

            

            //End



(function($){

	/* hoverIntent by Brian Cherne */

	$.fn.hoverIntent = function(f,g) {

		// default configuration options

		var cfg = {

			sensitivity: 7,

			interval: 100,

			timeout: 0

		};

		// override configuration options with user supplied object

		cfg = $.extend(cfg, g ? { over: f, out: g } : f );



		// instantiate variables

		// cX, cY = current X and Y position of mouse, updated by mousemove event

		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval

		var cX, cY, pX, pY;



		// A private function for getting mouse position

		var track = function(ev) {

			cX = ev.pageX;

			cY = ev.pageY;

		};



		// A private function for comparing current and previous mouse position

		var compare = function(ev,ob) {

			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);

			// compare mouse positions to see if they've crossed the threshold

			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {

				$(ob).unbind("mousemove",track);

				// set hoverIntent state to true (so mouseOut can be called)

				ob.hoverIntent_s = 1;

				return cfg.over.apply(ob,[ev]);

			} else {

				// set previous coordinates for next time

				pX = cX; pY = cY;

				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)

				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );

			}

		};



		// A private function for delaying the mouseOut function

		var delay = function(ev,ob) {

			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);

			ob.hoverIntent_s = 0;

			return cfg.out.apply(ob,[ev]);

		};



		// A private function for handling mouse 'hovering'

		var handleHover = function(e) {

			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut

			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;

			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }

			if ( p == this ) { return false; }



			// copy objects to be passed into t (required for event object to be passed in IE)

			var ev = jQuery.extend({},e);

			var ob = this;



			// cancel hoverIntent timer if it exists

			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }



			// else e.type == "onmouseover"

			if (e.type == "mouseover") {

				// set "previous" X and Y position based on initial entry point

				pX = ev.pageX; pY = ev.pageY;

				// update "current" X and Y position based on mousemove

				$(ob).bind("mousemove",track);

				// start polling interval (self-calling timeout) to compare mouse coordinates over time

				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}



			// else e.type == "onmouseout"

			} else {

				// unbind expensive mousemove event

				$(ob).unbind("mousemove",track);

				// if hoverIntent state is true, then call the mouseOut function after the specified delay

				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}

			}

		};



		// bind the function to the two event listeners

		return this.mouseover(handleHover).mouseout(handleHover);

	};

	

})(jQuery);




// JavaScript Document



/**

 * --------------------------------------------------------------------

 * jQuery-Plugin "pngFix"

 * Version: 1.1, 11.09.2007

 * by Andreas Eberhard, andreas.eberhard@gmail.com

 *                      http://jquery.andreaseberhard.de/

 *

 * Copyright (c) 2007 Andreas Eberhard

 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)

 *

 * Changelog:

 *    11.09.2007 Version 1.1

 *    - removed noConflict

 *    - added png-support for input type=image

 *    - 01.08.2007 CSS background-image support extension added by Scott Jehl, scott@filamentgroup.com, http://www.filamentgroup.com

 *    31.05.2007 initial Version 1.0

 * --------------------------------------------------------------------

 * @example $(function(){$(document).pngFix();});

 * @desc Fixes all PNG's in the document on document.ready

 *

 * jQuery(function(){jQuery(document).pngFix();});

 * @desc Fixes all PNG's in the document on document.ready when using noConflict

 *

 * @example $(function(){$('div.examples').pngFix();});

 * @desc Fixes all PNG's within div with class examples

 *

 * @example $(function(){$('div.examples').pngFix( { blankgif:'ext.gif' } );});

 * @desc Fixes all PNG's within div with class examples, provides blank gif for input with png

 * --------------------------------------------------------------------

 */



(function($) {



jQuery.fn.pngFix = function(settings) {



	// Settings

	settings = jQuery.extend({

		blankgif: 'blank.gif'

	}, settings);



	var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);

	var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);



	if (jQuery.browser.msie && (ie55 || ie6)) {



		//fix images with png-source

		jQuery(this).find("img[@src$=.png]").each(function() {



			jQuery(this).attr('width',jQuery(this).width());

			jQuery(this).attr('height',jQuery(this).height());



			var prevStyle = '';

			var strNewHTML = '';

			var imgId = (jQuery(this).attr('id')) ? 'id="' + jQuery(this).attr('id') + '" ' : '';

			var imgClass = (jQuery(this).attr('class')) ? 'class="' + jQuery(this).attr('class') + '" ' : '';

			var imgTitle = (jQuery(this).attr('title')) ? 'title="' + jQuery(this).attr('title') + '" ' : '';

			var imgAlt = (jQuery(this).attr('alt')) ? 'alt="' + jQuery(this).attr('alt') + '" ' : '';

			var imgAlign = (jQuery(this).attr('align')) ? 'float:' + jQuery(this).attr('align') + ';' : '';

			var imgHand = (jQuery(this).parent().attr('href')) ? 'cursor:hand;' : '';

			if (this.style.border) {

				prevStyle += 'border:'+this.style.border+';';

				this.style.border = '';

			}

			if (this.style.padding) {

				prevStyle += 'padding:'+this.style.padding+';';

				this.style.padding = '';

			}

			if (this.style.margin) {

				prevStyle += 'margin:'+this.style.margin+';';

				this.style.margin = '';

			}

			var imgStyle = (this.style.cssText);



			strNewHTML += '<span '+imgId+imgClass+imgTitle+imgAlt;

			strNewHTML += 'style="position:relative;white-space:pre-line;display:inline-block;background:transparent;'+imgAlign+imgHand;

			strNewHTML += 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;';

			strNewHTML += 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + jQuery(this).attr('src') + '\', sizingMethod=\'scale\');';

			strNewHTML += imgStyle+'"></span>';

			if (prevStyle != ''){

				strNewHTML = '<span style="position:relative;display:inline-block;'+prevStyle+imgHand+'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;'+'">' + strNewHTML + '</span>';

			}



			jQuery(this).hide();

			jQuery(this).after(strNewHTML);



		});



		// fix css background pngs

		jQuery(this).find("*").each(function(){

			var bgIMG = jQuery(this).css('background-image');

			if(bgIMG.indexOf(".png")!=-1){

				var iebg = bgIMG.split('url("')[1].split('")')[0];

				jQuery(this).css('background-image', 'none');

				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";

			}

		});

		

		//fix input with png-source

		jQuery(this).find("input[@src$=.png]").each(function() {

			var bgIMG = jQuery(this).attr('src');

			jQuery(this).get(0).runtimeStyle.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + bgIMG + '\', sizingMethod=\'scale\');';

   		jQuery(this).attr('src', settings.blankgif)

		});

	

	}

	

	return jQuery;



};



})(jQuery);



// JavaScript Document



/*

 * Superfish v1.4.8 - jQuery menu widget

 * Copyright (c) 2008 Joel Birch

 *

 * Dual licensed under the MIT and GPL licenses:

 * 	http://www.opensource.org/licenses/mit-license.php

 * 	http://www.gnu.org/licenses/gpl.html

 *

 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt

 */



;(function($){

	$.fn.superfish = function(op){



		var sf = $.fn.superfish,

			c = sf.c,

			menuActive = false,

			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),

			click = function(){

				var $$ = $(this), menu = getMenu($$), o = sf.op;

				if (o.firstOnClick && !menuActive && $$.parent()[0] == menu) {

					menuActive = true;

					clearTimeout(menu.sfTimer);

					$$.showSuperfishUl().siblings().hideSuperfishUl();

					return false; // prevent redirect to anchor target href

				}

			},

			over = function(){

				var $$ = $(this), menu = getMenu($$), o = sf.op;

				if (!o.firstOnClick || menuActive || $$.parent()[0] != menu) {

					clearTimeout(menu.sfTimer);

					$$.showSuperfishUl().siblings().hideSuperfishUl();

				}

			},

			out = function(){

				var $$ = $(this), menu = getMenu($$), o = sf.op;

				clearTimeout(menu.sfTimer);

				menu.sfTimer=setTimeout(function(){

					o.retainPath=($.inArray($$[0],o.$path)>-1);

					$$.hideSuperfishUl();

					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}

					else {menuActive = false;}

				},o.delay);

			},

			getMenu = function($menu){

				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];

				sf.op = sf.o[menu.serial];

				return menu;

			},

			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };



		return this.each(function() {

			var s = this.serial = sf.o.length;

			var o = $.extend({},sf.defaults,op);

			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){

				$(this).addClass([o.hoverClass,c.bcClass].join(' '))

					.filter('li:has(ul)').removeClass(o.pathClass);

			});

			sf.o[s] = sf.op = o;



			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out)

			.click(click)

			.each(function() {

				if (o.autoArrows) addArrow( $('>a:first-child',this) );

			})

			.not('.'+c.bcClass)

				.hideSuperfishUl();



			var $a = $('a',this);

			$a.each(function(i){

				var $li = $a.eq(i).parents('li');

				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});

			});

			o.onInit.call(this);



		}).each(function() {

			var menuClasses = [c.menuClass];

			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);

			$(this).addClass(menuClasses.join(' '));

		});

	};




	var sf = $.fn.superfish;

	sf.o = [];

	sf.op = {};

	sf.IE7fix = function(){

		var o = sf.op;

		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)

			this.toggleClass(sf.c.shadowClass+'-off');

		};

	sf.c = {

		bcClass     : 'sf-breadcrumb',

		menuClass   : 'sf-js-enabled',

		anchorClass : 'sf-with-ul',

		arrowClass  : 'sf-sub-indicator',

		shadowClass : 'sf-shadow'

	};

	sf.defaults = {

		hoverClass	: 'sfHover',

		pathClass	: 'overideThisToUse',

		pathLevels	: 1,

		delay		: 800,

		animation	: {opacity:'show'},

		speed		: 'normal',

		autoArrows	: true,

		dropShadows : true,

		disableHI	: false,		// true disables hoverIntent detection

		onInit		: function(){}, // callback functions

		onBeforeShow: function(){},

		onShow		: function(){},

		onHide		: function(){},

		firstOnClick : false // true - open first level on click (like classic application menu)

	};

	$.fn.extend({

		hideSuperfishUl : function(){

			var o = sf.op,

				not = (o.retainPath===true) ? o.$path : '';

			o.retainPath = false;

			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)

					.find('>ul').hide().css('visibility','hidden');

			o.onHide.call($ul);

			return this;

		},


		showSuperfishUl : function(){

			var o = sf.op,

				sh = sf.c.shadowClass+'-off',

				$ul = this.addClass(o.hoverClass)

					.find('>ul:hidden').css('visibility','visible');

			sf.IE7fix.call($ul);

			o.onBeforeShow.call($ul);

			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });

			return this;

		}

	});



})(jQuery);



// JavaScript Document



/*

 * Supersubs v0.2b - jQuery plugin

 * Copyright (c) 2008 Joel Birch

 *

 * Dual licensed under the MIT and GPL licenses:

 * 	http://www.opensource.org/licenses/mit-license.php

 * 	http://www.gnu.org/licenses/gpl.html

 *

 *

 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of

 * their longest list item children. If you use this, please expect bugs and report them

 * to the jQuery Google Group with the word 'Superfish' in the subject line.

 *

 */



;(function($){ // $ will refer to jQuery within this closure



	$.fn.supersubs = function(options){

		var opts = $.extend({}, $.fn.supersubs.defaults, options);

		// return original object to support chaining

		return this.each(function() {

			// cache selections

			var $$ = $(this);

			// support metadata

			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;

			// get the font size of menu.

			// .css('fontSize') returns various results cross-browser, so measure an em dash instead

			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({

				'padding' : 0,

				'position' : 'absolute',

				'top' : '-999em',

				'width' : 'auto'

			}).appendTo($$).width(); //clientWidth is faster, but was incorrect here

			// remove em dash

			$('#menu-fontsize').remove();

			// cache all ul elements

			$ULs = $$.find('ul');

			// loop through each ul in menu

			$ULs.each(function(i) {	

				// cache this ul

				var $ul = $ULs.eq(i);

				// get all (li) children of this ul

				var $LIs = $ul.children();

				// get all anchor grand-children

				var $As = $LIs.children('a');

				// force content to one line and save current float property

				var liFloat = $LIs.css('white-space','nowrap').css('float');

				// remove width restrictions and floats so elements remain vertically stacked

				var emWidth = $ul.add($LIs).add($As).css({

					'float' : 'none',

					'width'	: 'auto'

				})

				// this ul will now be shrink-wrapped to longest li due to position:absolute

				// so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer

				.end().end()[0].clientWidth / fontsize;

				// add more width to ensure lines don't turn over at certain sizes in various browsers

				emWidth += o.extraWidth;

				// restrict to at least minWidth and at most maxWidth

				if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }

				else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }

				emWidth += 'em';

				// set ul to width in ems

				$ul.css('width',emWidth);

				// restore li floats to avoid IE bugs

				// set li width to full width of this ul

				// revert white-space to normal

				$LIs.css({

					'float' : liFloat,

					'width' : '100%',

					'white-space' : 'normal'

				})

				// update offset position of descendant ul to reflect new width of parent

				.each(function(){

					var $childUl = $('>ul',this);

					var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';

					$childUl.css(offsetDirection,emWidth);

				});

			});

			

		});

	};

	// expose defaults

	$.fn.supersubs.defaults = {

		minWidth		: 9,		// requires em unit.

		maxWidth		: 25,		// requires em unit.



		extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values

	};

	

})(jQuery); // plugin code ends




 //$(document).ready(function(){ $('#navBar').pngFix(); });

      // initialise plugins

    jQuery(function(){

        jQuery('ul.sf-menu').superfish({

        pathClass:  'current',

        animation:   {opacity:'show',height:'show'}

        /*

        onHide : function(){$('.sf-navbar').css('height','0em')},

        onShow : function(){$('.sf-navbar').css('height','2.5em');},

        onBeforeShow : function(){$('.sf-navbar').css('height','2.5em');}

        */

      })

    });

function HoverLink(TRID,OnClass,showdiv)

		{

		document.getElementById(TRID).className=OnClass;

		document.getElementById(showdiv).style.display='block';

		

		if (showdiv != "AC"){document.getElementById("AC").style.display='none';}

		if (showdiv != "FL"){document.getElementById("FL").style.display='none';}

		if (showdiv != "AS"){document.getElementById("AS").style.display='none';}

		if (showdiv != "AA"){document.getElementById("AA").style.display='none';}

		if (showdiv != "DL"){document.getElementById("DL").style.display='none';}

		if (showdiv != "F9"){document.getElementById("F9").style.display='none';}

		if (showdiv != "UA"){document.getElementById("UA").style.display='none';}

		if (showdiv != "US"){document.getElementById("US").style.display='none';}

		if (showdiv != "VX"){document.getElementById("VX").style.display='none';}

		

		if (TRID != "link1"){document.getElementById("link1").className="MainLink";}

		if (TRID != "link2"){document.getElementById("link2").className="MainLink";}

		if (TRID != "link3"){document.getElementById("link3").className="MainLink";}

		if (TRID != "link4"){document.getElementById("link4").className="MainLink";}

		if (TRID != "link5"){document.getElementById("link5").className="MainLink";}

		if (TRID != "link6"){document.getElementById("link6").className="MainLink";}

		if (TRID != "link7"){document.getElementById("link7").className="MainLink";}

		if (TRID != "link8"){document.getElementById("link8").className="MainLink";}

		if (TRID != "link9"){document.getElementById("link9").className="MainLink";}

		

		}



		

 

 //ADDED FOR DOTCOM NAVIGATION MENU ISSUES END

 

 



// allows CSS-driven tooltips to also work with keyboard focus in IE6+7

function bindIEfocusHelpers()

{ 

    $('a.formHelp').focus(function()

    {

        $(this).addClass('focusedFormHelp');

    }).blur(function()

    {

        $(this).removeClass('focusedFormHelp');            

    });

}



// signout function

function signOut(logoutURL)

{

    var check=window.confirm("Are you sure you want to sign out?\nIf you have a session running, this will disable your internet connection.");

    if(check)

    {

        //dcsMultiTrack('DCS.dcsuri', '/abp/log_in/log_out_success.htm', 'WT.ti', 'Gogo Inflight Internet - Log out Success', 'WT.cg_n', 'Log_in', 'WT.cg_s', 'Log_out_success');

        window.parent.top.location.href = logoutURL;

   }

    else

    {

        return false;

    }

}



// participating airlines nav opacity treatment

function airlinesNavOpacity() {

    $("#airlinesNav img").not("#airlinesNav li.current img").css('opacity',0.85);

}



function analyzeUserNameAvailabilityResult(data)

{

	alert(data);

}

function checkUserNameAvailability(userNameValueToCheck)

{

	alert("checking username:"+userNameValueToCheck);	

	AjaxServiceManager.isUserNameAvailabe(objectEval("\""+userNameValueToCheck+"\""), analyzeUserNameAvailabilityResult);

	return true;

}



function validateEmailAlertsForm($form)

{



    $form.validate("", [

    {

		

        field: "#emailAddress",

        rules: {

            required: [ errorStrings.emailRequired[0], "" ],

            email: [ errorStrings.emailInvalid[0], "" ]

        }

    }

    ]); 

    return !$form.hasClass("hasError");

}



// modals

(function($)

{

    var isIE6 = $.browser.msie && $.browser.version == "6.0";


    

    var globals = 

        {

            text: "Processing, please wait",

            logo: "#logo",

            image: "img/animated_planes.gif",

            loadRequest: {},

            isVisible: false

        };

        

    $.fn.gogoModal = function(options)

        {

            if (this.length == 0) return this;

            var opts = $.extend({}, $.fn.gogoModal.defaults, options);

            if (isNaN(opts.timeout))

            {

                opts.timeout = $.fn.gogoModal.defaults.timeout;

            }

            init();

            return this.each(function()

                {

                    var $this = $(this);

                    if ($this.is("a"))

                    {

                        var urlToLoad = $this.attr('href');

                        $this.click(function() 

                            {

                                try

                                {

                                    $("#gogoModalBackground").css('opacity', 0).show().fadeTo(150, 0.65, function() {

                                        if(isIE6)

                                        {

                                            var scrollTop = $(document).scrollTop();

                                            var windowHeight = $(window).height();

                                            var topPos = $(document).scrollTop() + (windowHeight / 2) - 16;

                                            $('#gogoModalLoading').css('top', topPos);

                                        }

                                        $('#gogoModalLoading').show();

                                    });

                                    if (opts.iframe)

									//db allow transparency IE fix below

                                    {

                                        loadRequest = 'iframed';

                                        $('#modalContent').html('<iframe src="'+urlToLoad+'"id="modalIframe" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');

                                        showModal(opts.size);

                                    }

                                    else

                                    {

                                        loadRequest = $.ajax(

                                        {

                                            url: urlToLoad,

                                            cache: false,

                                            error: function() {

								                hideModal(false, opts.complete);

                                                alert(scriptStrings.modalFailed);

                                            },

                                            success: function(response){

                                                $("#modalContent").html(response);

                                                showModal(opts.size);

                                            }

                                        });

                                    }

                                }

                                catch (ex)

                                {

                                    hideModal(false, opts.complete);

                                    alert(scriptStrings.modalFailed);

                                }

                                return false;

                            });

                    }

                });

        };



    $.fn.gogoModal.defaults = 

        {

            validation: "",

            complete: "",

            size: "normal",

            iframe: false

        };



    $.gogoModal = {};

    $.gogoModal.setGlobals = function(options)

        {

            var opts = $.extend({}, globals, options);

            $.each(opts, function(key, value)

                {

                    if (globals[key])

                    {

                        globals[key] = value || globals[key];

                    }

                });

        };

        

    function init()

        {

            if ($("#gogoModalBackground").length == 0)

            {

                var html = '<div id="gogoModalBackground"></div><div id="gogoModalLoading"></div><div id="gogoModal"><div id="modalTopCap"></div><div id="modalContent"></div><div id="modalBottomCap"></div><a href="#" id="modalClose">Close</a></div>';

                $("body").append(html);

                $("#gogoModalBackground, #modalClose").click(function() { hideModal(); return false; });

                $(document).keydown(function (e) {

                    if($.gogoModal.isVisible)

                    {

                        if (e == null) { // ie

                            keycode = event.keyCode;

                        } else { // mozilla

                            keycode = e.which;

                        }

                        if(keycode == 27){ // esc key

							hideModal();

                        }

                    }

                });

                if (isIE6)

                {

                    $(window).scroll(redraw).resize(redraw);

                }

            }

        };



    function redraw(eventObject)

        {

            $("#gogoModalBackground").height($(document).height());

            var content = $("#gogoModal");

            var topPos = $(document).scrollTop() - ($("#gogoModal").height() / 2);

            content.stop().animate({ marginTop: topPos }, 250, "linear");

        };  

        

    function showModal(size) 

        {

            $.gogoModal.isVisible = true;

            var scrollTop = $(document).scrollTop();

            var modalHeight = $('#gogoModal').height();

            var windowHeight = $(window).height();

            if (size === 'small')

            {

                $("#gogoModal").addClass('smallModal');

            }

			

			

			

			

			//db Pre Purchase Window Size added: width: 531px 

			 if (size === 'prePur')

            {

                $("#gogoModal").addClass('prePurModal');

            }

			

			

			//db Inflight Purchase Window Size added: width: 590px 

			 if (size === 'infPur')

            {

                $("#gogoModal").addClass('infPurModal');

            }

			

			

			

			

			

			

			

            if (isIE6)

            {

                $("select").hide();

                var topPos =  scrollTop - (modalHeight / 2);

            } 

            else

            {

                var topPos = -(modalHeight / 2);

            }

            //handle the edge case: modal height taller than viewport

            if ( modalHeight > windowHeight ) {

                var topPos = - ( windowHeight / 2) + scrollTop + 5;

                $('#gogoModal').css('position', 'absolute');

                if (isIE6)

                {

                    $(window).unbind('scroll', redraw).unbind('resize', redraw);

                }

            }

            $("#gogoModal").css('margin-top', topPos).slideDown(150, function() {

                if (isIE6)

                {

                    $("#gogoModalBackground").height($(document).height());

                }

                $('#gogoModalLoading').hide();

            });

            setTimeout(replaceModalHeader, 0);

        };

        

    function hideModal(success, complete)

        {



            if ($('#setupVideo').length > 0 && $('#setupVideo').css('display') != 'none')

            {

                $('#swfWrap')[0].stopVideo();

            }

            

            $.gogoModal.isVisible = false;

            if (typeof(loadRequest) == 'object')

            {

                loadRequest.abort();

            }

            $("#gogoModalBackground").fadeTo(50, 0.0, function() 

            {

                $(this).add('#gogoModalLoading').hide();

                $("#gogoModal").slideUp(100, function() 

                {

                    $(this).hide().removeClass('smallModal').attr('style', '');

              

				

				

				

				 // db Add: new prePur class: hide

					 $(this).hide().removeClass('prePurModal').attr('style', '');

					 

				//  db Add: new infPur class: hide

					 $(this).hide().removeClass('infPurModal').attr('style', '');

					 

					 

					  }); 

					 

					 

                if (isIE6)

                {

                    $("select").show();

                }                                

                if ($.isFunction(complete))

                {

                    complete(success);

                }

            });

            $('#modalIframe').remove();

            if (isIE6) {

                $(window).scroll(redraw).resize(redraw);

            }

            loadRequest = {};

        };

        

    function replaceModalHeader()

        {

            if(typeof sIFR == "function"){

                sIFR.replaceElement("#modalHeader", named({sFlashSrc: "/static/dotcom/js/GothamLight.swf", sTextAlign: "left", sColor: "#3C3C3C"}));

            };

        };

        

})(jQuery);



// Error plug-in

(function($)

{

    var id = "error";

    

    $.error = 

    {

        

        log: function(message)

            {

                if (message == undefined) return;

                var $this = $("#" + id);

                if ($this.length == 0)

                {

                    $("#primary h1:first").after("<div class=\"error\" id=\"" + id + "\"></div>");

                    $this = $("#" + id);

                }

                if ($this.length > 0)

                {

                    var alert = false;

                    if (arguments.length > 1)

                    {

                        if (arguments[1] === true)

                        {

                            alert = true;

                        }

                    }

                    if ($this.css("display") == "none")

                    {

                        if (alert)

                        {

                            $this.addClass("alert");

                        }

                        else

                        {

                            $this.removeClass("alert");

                        }

                        $this.html(message).fadeIn(250, function() 

                            {

                                var top = $this.offset().top;

                                if ($(document).scrollTop() > top)

                                {

                                    $("body,html").stop().animate({ scrollTop: top }, 250);

                                }

                            });

                    }

                    else

                    {

                        $this.stop().fadeOut(250, function() 

                            {

                                $.error.log(message, alert);

                            });

                    }

                }

            },

        

        clear: function()

            {

                $("#" + id).fadeOut(250, function() 

                    {

                        $(this).html("");

                    });

            }

    };

    

})(jQuery);



// Form validation plug-in

(function($)

{

        

    $.fn.validate = function(genericError, fields)

        {

            if (this.length == 0) return this;

            if (genericError == undefined)

            {

                genericError = "";

            }

            fields = fields ? $.makeArray(fields) : [];

            $.each(fields, function(field, value) 

                {

                    fields[field] = $.extend({}, $.fn.validate.field, value);

                    fields[field].$field = $(fields[field].field);

                    fields[field].rules = $.extend({}, fields[field].rules);

                    $.each(fields[field].rules, function(rule, value) 

                        {

                            try

                            {

                                if (typeof(value) == "string")

                                {

                                    value = { message: value, formMessage: value };

                                }

                                else if (value.constructor.toString().indexOf('Array') > -1 && value.length == 2)

                                {

                                    value = { message: value[0], formMessage: value[1] };

                                }

                                fields[field].rules[rule] = $.extend({}, $.fn.validate.field.rules, value);

                            }

                            catch (ex)

                            {

                            }

                        });

                    if (fields[field].rules.required) 

                    {

                        var value = fields[field].rules.required;

                        delete fields[field].rules.required;

                        fields[field].rules = $.extend({ required: value }, fields[field].rules);

                    }

                });

            var completeCallback = arguments.length > 2 ? arguments[2] : "";

            return this.each(function()

                {

                    var $this = $(this);

                    if ($this.is("form"))

                    {

                        $.validate.clear($this);

                        var failed = [];

                        var errorMessage = genericError;

                        $.each(fields, function(index, value) 

                            {

                                if (this.$field.length == 1) 

                                {

                                    var $field = this.$field;

                                    $.each(this.rules, function(key, rule) 

                                        {

                                            if (!$.isFunction(key)) {

                                                key = eval(key);

                                            }

                                            if ($.isFunction(key)) {

                                                var params = $.makeArray(rule.params);

                                                params.unshift($field);

                                                if (!key.apply(this, params)) {

                                                    $.validate.showError($field, rule.message);

                                                    failed.push(value.field);

                                                    errorMessage = failed.length == 1 ? rule.formMessage : genericError;

                                                    return false;

                                                }

                                            }

                                        });

                                }

                            });

                        if (failed.length > 0)

                        {

							webtrendsClientSideValidationsError(fieldErrorMsg);

							fieldErrorMsg="";

                            $this.addClass("hasError");

                            if (errorMessage != "")

                            {

                                $.error.log(errorMessage, true);

                            }

                            if ($.isFunction(completeCallback))

                            {

                                completeCallback.call(document, failed);

                            }

                        }

                    }

                });

        };

    

    $.fn.validate.field = 

        {

            field: "",

            rules: {}

        };

    $.fn.validate.field.rule = 

        {

            message: "",

            formMessage: "",

            params: []

        };

    

    $.validate = {

        clear: function($form)

            {

                $form.removeClass("hasError");

                $form.find("div.error, div#error").remove();

                $form.find(":input.error").removeClass("error");

            },

            

        showError: function($target, message)

            {

                var prependSelf = arguments.length == 3 && arguments[2] == true;

				if(message !="") {

					fieldErrorMsg=fieldErrorMsg+message+';';

				}

                if (prependSelf) 

                {

                    writeError($target, message);

                } 

                else 

                {

                    writeError($target.closest("div"), message);

                    $target.addClass("error");

                }

            },

        

        validateWith: function($field, validator)

            {

                validator = eval(validator);

                if ($.isFunction(validator)) {

                    var params = [];

                    if (arguments.length > 2) {

                        for (var i = 2; i < arguments.length; i++) {

                            params.push(arguments[i]);

                        }

                    }

                    params.unshift($field);

                    return validator.apply(this, params);

                }                

                return false;

            }

            

    };



    function writeError($target, message) 

    {

		if(message=="Security Code is 3 or 4 digits." && $('#cardType option:selected').val()=='AMEX'  )

		{

			if ($('#securityCode').val().length>0 && $('#securityCode').val().length<4)

			message=errorStrings.securityCodeAmexSyntax[0];

		}

      // clear current error

		$target.find("div.error, div#error").remove();

		$target.find("div.input_error_arrow, div#input_error_arrow").remove();



		if (message && message != "")

      {

         $target.prepend('<div class="error">' + message +"</div>" + '<div class="input_error_arrow"></div>');

      }

    };

        

    function value($field) 

    {

        return $.trim($field.val());

    };

                

    function required($field)

    {

        if ($field.is(":radio, :checkbox")) 

        {

            return $field.is(":checked");

        }

        return value($field) != "";

    };

    

    function passwordRequired($field)

    {

	    if(/\s/.test($field.val())){

		   return true;

	    }

	    else{			 

        return value($field) != "";        

    }    

    };

    function characterRestrictionsGeneral($field)

    {

        return /^[^&<>\\"]+$/i.test(value($field));  

    };



    function characterRestrictionsAddress($field)

    {

        return /^[^&<>"%\|\^\\\/]+$/i.test(value($field));  

    };

	

	function characterRestrictionsName($field)

    {

        return /^[^&<>"]+$/i.test(value($field));  

    };

    

    

    function characterRestrictionsAddress2($field)

    {

	   if($('#billingAddress2').val() != '')

	{

	   return /^[^&<>"%\|\^\\\/]+$/i.test(value($field));  

	}

	 else

        {

            return true;

        }

    };

        

    function characterRestrictionsNonLatin($field)

    {

        var val = value($field);

        var len = val.length;

        for (var i = 0; i < len; i++)

        {

            if (val.charCodeAt(i) > 255 || val.charCodeAt(i) < 32)

            {

                return false;

            }   

        }

        return true;

    };



    function characterRestrictionsUsername($field)

    {

        return /^[^\s\(\)\[\]\.\\\|,;:><"\/?@_%&]+$/i.test(value($field));  

    };



    function alphanumeric($field)

    {

        return /^[a-z0-9]+$/i.test(value($field));  

    };

            

    function email($field)

    {

        return /^[a-z0-9\'+_-]+(?:\.[a-z0-9\'+_-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value($field));

    };

        

    function confirm($field, selector)

    {

        return value($field) == value($(selector));

    };

    

    function minLength($field, minLength)

    { 

        return value($field).toString().length >= minLength;

    };

        

    function maxLength($field, maxLength)

    {

        var truncate = arguments.length == 3 && arguments[2] == true;

        var val = value($field).toString();

        var valid = val.length <= maxLength;

        if (!valid && truncate)

        {

            $field.val(val.substr(0, maxLength));

            return true;

        }

        return valid;

    };

    

    function noWhitespace($field)

    {

        return !(/\s/.test($field.val()));

    };

    

    function usZip($field)

    {

        if($('#country').val() === 'US')

        {

            return /^\d{5}([\-]\d{4})?$/.test(value($field));

        }

        else

        {

            return true;

        }

    };

    

    function creditCardNumber($field)

    {

        return /^[0-9]{15,16}$/.test(value($field));   

    };

    

    function securityCode($field)

    {

      if($('#cardType option:selected').val()=='AMEX')

		{

			return /^[0-9]{4}$/.test(value($field));

		}

		else

		{

			return /^[0-9]{3}$/.test(value($field));

		}

    };

	

	function firstname($field)

    {

        return /^[^&<>"%\|\^\\\/]+$/i.test(value($field));

    };

    

    function lastname($field)

    {

        return /^[^&<>"%\|\^\\\/]+$/i.test(value($field));

    };

    function syntax($field)

    {

        return /^[^&<>"%\|\^\\\/]+$/i.test(value($field));

    };  

	

	function phoneNumber($field)

    {

        return /^[^A-Z]+$/i.test(value($field));

    }

    

})(jQuery);



// side tabs plug-in

(function($)

{       

    $.fn.gogoSideTabs = function()

    {

        $this = $(this);

        $this.children('div').not('div:first').hide();

        $($('.tertiaryNav li')[0]).addClass('current');

        $('.tertiaryNav a').click(function()

        {

            $('.tertiaryNav li').removeClass('current');

            $(this).parent('li').addClass('current');

            var targetContent = $(this).attr('href');

            $this.children('div').hide();                  

            if($(this).attr('id') === 'viewAll')

            {

                $this.children('div').fadeIn('fast');

            }

            else

            {

                $(targetContent).fadeIn('fast');

            }

            return false;

        });

    };

})(jQuery);



// headers+expanders plugin

(function($)

{       

    $.fn.gogoExpanders = function(options)

    {

        settings = jQuery.extend({

            trigger: ".expandTrigger",

            target: ".expandTarget",

            expandFirstItem: true,

            speed: 250

        }, options);

        $this = $(this);

        $(settings.target, ($this)).hide();

        $(settings.trigger).addClass('expander').toggle(

            function()

            {

                $(this).addClass('expanded').next(settings.target).slideDown(settings.speed, function()

                {

                    $(this).addClass('expanded');

                });

            },

            function()

            {

                $(this).removeClass('expanded').next(settings.target).removeClass('expanded').slideUp(settings.speed);

            }

        );

        if (settings.expandFirstItem)

        {

            $(settings.trigger + ':first').click();

        }

    };

})(jQuery);





// textarea character counter

function remainingCharacters(limit, textareaID, counterID)

{

    var text = $('#' + textareaID).val();

    var characters = text.length;

    var remaining = limit - characters;

    if (characters >= limit)


    {

        $('#' + textareaID).val(text.substr(0,limit));

        $('#' + counterID).html('0');

        return false;

    }

    else

    {

        $('#' + counterID).html(remaining);

        return true;

    }

}



// simple textarea limiter (no counter)

function limitCharacters(limit, textarea)

{

    var text = textarea.val();

    var characters = text.length;

    var remaining = limit - characters;

    if (characters >= limit)

    {

        textarea.val(text.substr(0,limit));

        return false;

    }

    else

    {

        return true;

    }

}



// basic email checker

function checkEmailFormat(email)

{

        return /^[a-z0-9'+_-]+(?:\.[a-z0-9'+_-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(email);

}



function webtrends(dcsURI,quest,topic,szTi)





{

	var question=  quest.replace( /^\s*/, "" ).replace( /\s*$/, "" );

	replaceValue("WT.ti",szTi)

	if(szTi=="ABP-LiveChat")

	{

		replaceValue("WT.cg_n","Customer Care");

		replaceValue("WT.cg_s","Live Chat");

	}

	if(szTi=="ABP-Search")

	{ 

		replaceValue("WT.cg_n","Miscellaneous");

		replaceValue("WT.cg_s","Search");

	}

	else if(szTi=="ABP-Search")

	{

		replaceValue("DCS.dcsuri",dcsURI);

		var WTossVal=$("#googleSearchBoxVal").val(); 

		keyValueString=keyValueString+",'WT.z_faq_topic'"+",'"+topic+"','WT.z_faq','"+question+"','WT.ti'"+",'"+szTi+"','WT.oss'"+",'"+WTossVal+"'";;

	}

	if (dcsURI==null || dcsURI.length==0)

	{

		keyValueString=keyValueString+",'WT.z_faq_topic'"+",'"+topic+"','WT.z_faq','"+question+"'";

		eval('dcsMultiTrack('+keyValueString+')');		

	}else

	{		



		if(szTi=="ABP-LiveChat")

		{

			replaceValue("DCS.dcsuri",dcsURI);

			keyValueString=keyValueString+",'WT.z_faq_topic'"+",'"+topic+"','WT.z_faq','"+question+"','WT.ti'"+",'"+szTi+"'";;

		}

		else if(szTi=="ABP-Search")

		{

			replaceValue("DCS.dcsuri",dcsURI);

			var WTossVal=$("#googleSearchBoxVal").val();

			keyValueString=keyValueString+",'WT.z_faq_topic'"+",'"+topic+"','WT.z_faq','"+question+"','WT.ti'"+",'"+szTi+"','WT.oss'"+",'"+WTossVal+"'";;

		}

		else

		{

			keyValueString="'DCS.dcsuri','"+dcsURI+"','WT.z_faq_topic'"+",'"+topic+"','WT.z_faq','"+question+"','WT.ti'"+",'"+szTi+"'";;

		}      

		eval('dcsMultiTrack('+keyValueString+')');   

	}





} 



function webtrendsCreateAccount(szTi,dcsURI,cgs,ti,zerror)

{

	if(szTi=="register2")

	{

		replaceValue("WT.ti","Dotcom ? SignUp Payment");

		replaceValue("DCS.dcsuri","/com/create_account/sign_up/add_credit_card.htm");

		replaceValue("WT.cg_s","Payment");

		keyValueString="'WT.z_error','"+zerror+"','DCS.dcsuri','"+dcsURI+"','WT.cg_s'"+",'"+cgs+"','WT.ti'"+",'"+ti+"'";;

		eval('dcsMultiTrack('+keyValueString+')');   

	}

}



function webtrendsPayment(szTi,desc,dcsURI,cgs,ti,zerror)

{

	if(szTi=="payment2")

	{

		replaceValue("WT.ti","Dotcom - Payment");

		replaceValue("DCS.dcsuri","/com/payment.htm");

		replaceValue("WT.cg_s","Error");

		replaceValue("Description","Payment");

		keyValueString="'WT.z_error','"+zerror+"','Description','"+desc+"','DCS.dcsuri','"+dcsURI+"','WT.cg_s'"+",'"+cgs+"','WT.ti'"+",'"+ti+"'";;

		eval('dcsMultiTrack('+keyValueString+')');   

	}

}



function webtrendsMarquee(index)

{

		if(index == 1) {

		dcsURI = "/com/gogo/promotions.htm";

		} else if(index == 2){

		dcsURI = "/com/gogo/promotions.htm";

		}		

		var keyValStr="'WT.z_error','Marquee_z_error','DCS.dcsuri','"+dcsURI+"','WT.cg_s'"+",'Marquee_cg_s','WT.ti'"+",'Marquee_ti'";;

		eval('dcsMultiTrack('+keyValStr+')');   

	

}



function webtrendsVCDownload()

{	

		dcsURI = "/com/gogo/VideoClientInstall.htm";		

		var keyValStr="'DCS.dcsuri','"+dcsURI+"','WT.cg_s'"+",'Dotcom_Video_LandingPage','WT.ti'"+",'Video'";;

		eval('dcsMultiTrack('+keyValStr+')');   

	

}



/**

				 * Executes the webtrends event call when the client side validation error occurs

				**/

				function webtrendsClientSideValidationsError(errorMsg){

					errorMsg=errorMsg.substring(0, errorMsg.length-1)

					keyValueString=keyValueString+",'WT.z_error'"+",'"+errorMsg+"'";

					eval('dcsMultiTrack('+keyValueString+')'); 

					errorMsg='';

					}



function replaceValue(key,value)

{

	

	var pos1=keyValueString.indexOf(key);

	

	var strtemp1=keyValueString.substring(0,pos1+(key.length+3));

	

	var strtemp2=keyValueString.substring(pos1+(key.length+3),keyValueString.length);

	

	strtemp2=strtemp2.substring(strtemp2.indexOf("'"),strtemp2.length);

	



	keyValueString=strtemp1+value+strtemp2;

	



}





// modals' sIFR + binding close commands

function bindIFramedModalBehaviors()

{

    if(typeof sIFR == "function")

    {

        sIFR.replaceElement("#modalHeader", named({sFlashSrc: "/static/dotcom/js/GothamLight.swf", sTextAlign: "left", sColor: "#3C3C3C"}));

    };



    $(document).keydown(function (e)

    {

        if (e == null) { // ie

            keycode = event.keyCode;

        } else { // mozilla

            keycode = e.which;

        }

        if(keycode == 27){ // 

            var p = window.parent;

            p.$('#modalClose').click();

        }

    });

}



// AddThis plugin variables & behavior setup

var addthis_hover_delay = 100;

var addthis_offset_top = -2;

var addthis_offset_left = -75;

var addthis_header_color = "#ffffff";

var addthis_header_background = "#289728";

//var addthis_brand = "Gogo";

var addthis_pub="gogoinflightdotcom";

var addthis_options = 'email, favorites, delicious, digg, facebook, google, linkedin, stumbleupon, technorati, twitter, yahoobkm, more';

//var addthis_script = '<script type="text/javascript" src="http://s7.addthis.com/js/200/addthis_widget.js"></script>';



// begin dom-ready behavior binding

// (for sitewide behaviors only -- page specific behaviors go in block near the bottom of each page)

$(document).ready(function(){  



	$(".toggle_container").hide();



	$("h2.trigger").click(function(){

		$(this).toggleClass("active").next().slideToggle("medium");

	});

	$("h2.triggerM").click(function(){

		$(this).toggleClass("active").next().slideToggle("medium");

	});



	$('#splashPricing_btn').click(function()

{

		dcsURI = "/com/gogo/splashPricing.htm";		

		var keyValStr="'DCS.dcsuri','"+dcsURI+"','WT.cg_s'"+",'Dotcom_Splash_Pricing','WT.ti'"+",'Pricing'";;

		eval('dcsMultiTrack('+keyValStr+')');  

});





$('#advertise_btn').click(function()

{

	var usrName =  $.trim($('#usrName').val());	 		 

	if(usrName == null || usrName.length ==0){

			$('#usrNameErrorDiv').addClass('error').show();

			return false;

		}

	if (!checkEmailFormat($('#emailAddress').val()))

        {

            $('#emailErrorDiv').addClass('error').show();

            return false;

        }

	 

	$('#frmAdvertise').submit();	

	 return true;

});



$('#returningRadio').click(function()

{

	$('#returningRadio').attr("name","_eventId_next");

	$('#signInSignUp').submit();

});



// Start Added for enterprise Portal AJAX

$('#singup_btn').click(function()

    {

        $('#frm_ipass').submit();

        return false;

    });

 



   $("#frm_ipass").bind("submit", function(e)

    {

         var $form = $(this);

		 var compCode =  $.trim($('#companyCode').val());

	 		 

		if(compCode == null || compCode.length ==0){

			alert("Please Enter Company Code.");			

			return false;

		}else{

				$('#companyCode').removeClass('error');

				e.preventDefault();

        

			    $.ajax(

		            {

		                type: "POST",

						url: '/gogo/enterpriseLanding.do',

		                timeout: '15000',

		                cache: false,

						dataType: 'html',

		                data: 'companyCode=' + compCode,

                error: function (XMLHttpRequest, textStatus, errorThrown)

                    {   

						alert ("Could not validate the Company Code due to technical difficulties. Please Try Again.");

                    },

                success: function (data, textStatus) 

                    {

												

						if(data=='200')

						{							

							//dcsMultiTrack('DCS.dcsuri', '/com/enterprise_landing_homepage.htm', 'WT.cg_n', 'Enterprise Landing', 'WT.cg_s', 'Enterprise_Landing', 'WT.rv', '0', 'WT.seg_1', 'Landing', 'WT.ti', 'Gogo Inflight Internet - Enterprise Landing Success');

							document.frm_ipass.submit();

                      

					 	}

						else if(data=='400')

						{

							alert("Invalid Company Code Entered.Please Try Again.");

							$('#companyCode').val('');

							//dcsMultiTrack('DCS.dcsuri', '/enterprise/homepage.htm', 'WT.cg_n', 'Miscellaneous', 'WT.cg_s', 'Enterprise_Landing', 'WT.rv', '0', 'WT.seg_1', 'Landing', 'WT.z_error', 'Invalid Company Code', 'WT.ti', 'Gogo Inflight Internet - Enterprise Landing Failure');

							return false;

						}

                     

                    }

		            });

	    

        }


    });

	

// END Added for enterprise Portal AJAX



// Added Script flash and toggle coverage



                $('#coverageDisclaimer').hide();

                $('#disclaimerToggle').show().toggle(function()

                {

                    $('#coverageDisclaimer').slideDown(250);

                    return false;    

                },

                function() {

                    $('#coverageDisclaimer').slideUp(100);

                    return false;    

                });

                

                var flashvars = {

                    flv: '/static/dotcom/flv/howGogoWorks.flv',

                    autoplay: true

                };

                var params = {

                    menu: false

                };

                var attributes = {};                

                swfobject.embedSWF("/static/dotcom/swf/GogoVideoPlayer.swf", "swfWrap", "368", "240", "9.0.0","", flashvars, params, attributes);

// ENDAdded Script flash and toggle coverage







    //$('body').append(addthis_script);

    var addthis_hover_delay = 100;

    $('#addThisPlugin').show();

    $('#addThisLink')

        .mouseenter(function()

        {

            return addthis_open(this, '', '[URL]', '[TITLE]');

        }).mouseleave(function()

        {

            addthis_close();

        }).click(function()

        {

            return addthis_sendto();

        });    

    

    // testimonial rotation

    // AIRCELL DEV: this is demo code and would best be replaced with server-side randomization   

   /* $('img.testimonialDisc').each(function()

    {

        var prefix ="img/testimonials/testimonial_";

        var num = Math.floor(Math.random()*12+1);

        var leadingZero = "";

        if (num < 10)

        {

            leadingZero = "0";

        }

        var suffix =".png";

        var newSrc = prefix + leadingZero + num + suffix;

        $(this).attr('src', newSrc);    

    });*/



    // replace H1s with brand font

    if(typeof sIFR == "function")

    {

        sIFR.replaceElement("h1", named({sFlashSrc: "/static/dotcom/js/GothamLight.swf", sWmode: "transparent", sTextAlign: "left", sColor: "#3C3C3C"}));

    };

    

    // navigation

    $('#nav').addClass('js');

    

    $('#nav>li.current').attr('currentNav', 'true').addClass('showSubnav'); 

    

    $('#nav>li').mouseover( function()

    {

        $(this).siblings().removeClass('showSubnav');

        $(this).addClass('showSubnav'); 

    });

    

    $('#nav>li').mouseout(function()

    {

        $(this).removeClass('showSubnav');

        $('#nav li[currentNav]').addClass('showSubnav');

    });

    

    $('#nav>li>a').click(function()

    {

        return false;

    }).focus(function()

    { 

        $(this).parent().siblings().mouseout();

        $(this).parent().mouseover();

    });

    

    $('#pageUtil a:first, #brand a:last').focus(function()

    {

        $('#nav>li').mouseout();

    });





    // bind signout modal

    $('#signOut').gogoModal({size: 'small'});

//	$('#returnSiginSignup').gogoModal({size: 'small', iframe: true});



// bind chat popup launcher to all chat links    

/*

    $('a#brand, a.brand').bind('click', function()

    {

        var dest = $(this).attr('href');

        window.open(dest,'_self'); 

        return false;

    });

*/



	$('a#new, a.new').bind('click', function()

    {

		/*
		var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=1020,height=1200,top="+posY+",left="+posX+",toolbar=yes,menubar=yes,scrollbars=yes,resizable=no";

        window.open(dest, 'chatWindow', features); 

        return false; */

        var dest = $(this).attr('href');

        window.open(dest,'_self'); 

        return false;
		
    });
	
	

/*
	$('a#coverage, a.coverage').bind('click', function()
    {

		var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=1020,height=1200,top="+posY+",left="+posX+",toolbar=yes,menubar=yes,scrollbars=yes,resizable=no";

        window.open(dest, 'chatWindow', features); 

        return false;

    });
*/


    // bind chat popup launcher to all chat links    

    $('a#chatLink, a.chatLink').bind('click', function()

    {

        var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=620,height=600,top="+posY+",left="+posX+",toolbar=no,menubar=no,scrollbars=yes,resizable=no";

        window.open(dest, 'chatWindow', features); 



        return false;

    });

	

	  // bind chat popup launcher to all chat links 

	    $('a#chatLink1, a.chatLink1').bind('click', function()

    {

        var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=620,height=600,top="+posY+",left="+posX+",toolbar=no,menubar=no,scrollbars=yes,resizable=no";

        window.open(dest, 'chatWindow', features); 

        return false;

    });

	

	    // bind chat popup launcher to all chat links    

    $('a#freqaskedQuestions, a.freqaskedQuestions').bind('click', function()

    {

        var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=620,height=600,top="+posY+",left="+posX+",toolbar=no,menubar=no,scrollbars=yes,resizable=no";

        window.open(dest, 'chatWindow', features); 

        return false;

    });

    

    // reveal feedback link since JS is available, bind survey launcher

    $('a#feedback').show().click(function()

    {

		//O_LC(); return false;

		var dest = $(this).attr('href');

        var posX = ($(window).width() / 2) - 300;

        var posY = ($(window).height() / 2)  - 250;

        var features = "width=570,height=700,top="+posY+",left="+posX+",toolbar=no,menubar=no,scrollbars=yes,resizable=no";

        window.open(dest, 'feedbackWindow', features); 

        return false;

    });

	



    

    // focus the first field a form if it's in #primary

    //if ($('#primary form').length > 0)

    //{

    //    $('#primary form :input')[0].focus();

    //}

    



    // set up clear-on-focus for fields w/ pre-shown value

    $(".focusClear").bind("focus", function()

    {

        if (!$(this).attr("initval"))

        {

            var initVal = $(this).val();

            $(this).attr("initval",initVal);

        }

        if ($(this).val() == $(this).attr("initval"))

        {

            $(this).val("");

        }

    }).bind("blur", function()

    {

        if ($(this).val().match(/^\s*$/))

        {

            var initVal = $(this).attr("initval");

            $(this).val(initVal);

        }

    });



    // newsletter form

    $('#nlSubmit').click(function()

    {

        $('#newsletterSignup').submit();

        return false;

    });

    

    $('#nlMessaging').click(function()

    {

        $(this).hide().empty();

        $('#nlEmail')[0].focus();

    });



    $('#nlEmail').keydown(function()

    {

        if ($('#nlMessaging:visible')) {

            $('#nlMessaging').hide().empty();

        }

    });



    // field validation, newsletter signup form 

    $("#newsletterSignup").bind("submit", function(e)


    {

        var $form = $(this);

        var email = $('#nlEmail').val();

        $('#nlEmail').val('');

        if (!checkEmailFormat(email))

        {

            $('#nlMessaging').html(scriptStrings.newsletterEmailInvalid).addClass('error').show();

            $('#nlEmail').addClass('error');

            return false;

        }

        else

        {

            $('#nlEmail').removeClass('error');

            e.preventDefault();

            $.ajax(

            {

                type: "POST",

                url: 'http://content.gogoair.com/CMS/campaign/riForms/riFormSubmit_nl.php', // REPLACE WITH REAL URL OF NEWSLETTER SIGN-UP SCRIPT AJAX HANDLER

                timeout: '5000',

                cache: false,

                data: 'nlEmail=' + email,

                error: function (XMLHttpRequest, textStatus, errorThrown)

                {

                    $('#nlMessaging').html(scriptStrings.newsletterError).addClass('error').show();

                    function updateNewsletterError() { $('#nlMessaging').html(scriptStrings.pleaseTryAgain); }

                    setTimeout(updateNewsletterError, 1500);

                    $('body').append('text status: '+ textStatus + ', error thrown: ' + errorThrown);

                },

                success: function (data, textStatus) 

                {

                    $('#nlMessaging').empty().html(scriptStrings.newsletterSuccess).addClass('success').removeClass('error').show();

                    function theFade() { $('#nlMessaging').fadeOut('fast', function() { $(this).empty(); }); }

                    setTimeout(theFade,3000);

                }

            });

        }

    });

   // load sign in page asynchronously into modal    

    $('#signIn,#signIn1,#fgtUserNm,#siteMapSignIn,#returnSiginSignup').gogoModal({ size: 'small', iframe: true });

	

	

	

	//db load viewDetailsPre page asynchronously into modal   

	$('.viewDetailsPre').gogoModal({ size: 'prePur', iframe: true });

	

	//db load viewDetailsInf asynchronously into modal   

	$('.viewDetailsInf').gogoModal({ size: 'infPur', iframe: true });









	

	if ((typeof(enterpriseConf) != 'undefined' ) && enterpriseConf!='')

	{

		$("#dotcomConfirmation").css('display', 'none');

		$("#enterpriseConfirmation").css('display', 'block');

	}

	

});//end dom-ready behavior binding







// more info - Bubble Popup

$(document).ready(function(){

	//create a bubble popup for each <DIV> element with class attribute as ".button"

	$('div.more_info').CreateBubblePopup();

	

	//set different position and align options for each <DIV>

	var positions = {

		'twentyfour'  : {position: 'left',   align: '' },

		'unlimited'  : {position: 'left',   align: '' }

	};

	

	// twentyfour

	for(var id in positions){

		//set customized options for each bubble popup

		$('#'+'twentyfour').SetBubblePopupOptions({

			position : positions[id].position,

			align	 : positions[id].align,

			tail	 : {align: positions[id].align},

			innerHtml: 'The Gogo Day Pass allows access to the Internet on<br />Gogo equipped flights on the same airline, from the<br />time of initial sign-in, through the date of activation &ndash;<br />a great value for travelers with multiple flights in<br />the same day. <b>Valid for use on Gogo equipped flights<br>operating between destinations within the United States,<br>Canada and Mexico, where network coverage exists.<b><br /><br /> '+

			positions[id].align.toUpperCase(),

			innerHtmlStyle: {

				  color:'#FFFFFF', 

				  'text-align':'left',

				  'padding':'10px',

				  'font-size':'11px'

				  

			  },

			themeName: 	'all-blue',

			themePath: 	'/static/dotcom/img/jquerybubblepopup-theme',

			alwaysVisible: false,

			closingDelay: 3000

		});

	}; //end loop

		

		

	// unlimited

	for(var id in positions){

		//set customized options for each bubble popup

		$('#'+'unlimited').SetBubblePopupOptions({

			position : positions[id].position,

			align	 : positions[id].align,

			tail	 : {align: positions[id].align},

			innerHtml: ' Monthly, unlimited Internet on all Gogo<br />equipped flights. Starts immediately, renews<br />automatically, cancel anytime.<b>Valid for use <br>on Gogo equipped flights operating between <br>destinations within the United States, Canada <br>and Mexico, where network coverage exists.<br><br>Get online as often as you want; the more<br>you connect the more you save.</b>  '+
			
			positions[id].align.toUpperCase(),

			innerHtmlStyle: {

				color:'#FFFFFF', 

				'text-align':'left',

				'padding':'10px',

				'font-size':'11px'

			},

			themeName: 	'all-blue',

			themePath: 	'/static/dotcom/img/jquerybubblepopup-theme',

			alwaysVisible: false,

			closingDelay: 3000

		});

	}; //end loop

});





/**

 * Gogo Vision (In-Air Services) Video Functions

 */

var site_section;

var contentTransitioning = false;

var flashVideoSrc="marketing.gogoair.com/prod/video/InAirServices.flv";

var splashImageSrc="marketing.gogoair.com/prod/video/videoPlaceholder.jpg";

var fallbackImageSrc="marketing.gogoair.com/prod/video/videoPlaceholder.jpg";

var targetFpVersion = "10.0.32";

var videoplaying = false;

var autoplayVideo = true;



$(window).load(function() {

	init();

});



function init()

{

	$('#video_stage').css("background-image", "url("+splashImageSrc+")");

	if(swfobject.hasFlashPlayerVersion(targetFpVersion))

	{

		var favp = "false";

        if(autoplayVideo == true) favp = "true";

		var flashvars = {"videosrc":flashVideoSrc,"videosplash":splashImageSrc,"autoplay":autoplayVideo};

		var flashparams = {"allowFullScreen":"true","wmode":"direct","allowScriptAccess":"sameDomain"};

		swfobject.embedSWF("/static/dotcom/swf/videoPlayer.swf","video_stage", "640", "360", "10.0.32", "/static/dotcom/swf/expressInstall.swf", flashvars, flashparams);

	}

	else

	{

		if(Modernizr.video)

		{

			var apvs = "";

            if(autoplayVideo == true) apvs = "autoplay='autoplay' ";

			var videoTags = "<video width='640' height='360' id='splashvideo' "+apvs+"poster='"+splashImageSrc+"' controls><source src='"+videoPath+videoFilename+".mp4' type='video/mp4' /><source src='"+videoPath+videoFilename+".ogv' type='video/ogg' /><source src='"+videoPath+videoFilename+".webm' type='video/webm' /></video>";

			$('#video_stage').html(videoTags);

			attachVideoEventListeners();

		}

		else

		{

			$('#video_stage').css("background-image", "url("+fallbackImageSrc+")");

		}

	}

	var hashString = location.hash;

	//navigateTo(location.hash.substring(1));

}



function attachVideoEventListeners()

{

	var video = document.getElementsByTagName('video')[0];

	video.addEventListener("play", onVideoPlaybackStart, false);

	video.addEventListener("ended", onVideoPlaybackComplete, false);

}



function onVideoPlaybackStart(e)

{

	if(!videoplaying)

	{

		videoplaying = true;

		updateAnalytics("videoStart","");

	}

}



function onVideoPlaybackComplete(e)

{

	videoplaying = false;

	updateAnalytics("videoComplete","");

}



// Modernizr v1.7  www.modernizr.com

window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)



/*

 * SWFObject v2.2 <http://code.google.com/p/swfobject/>

 * is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>

 */

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();



$(document).ready(function() {

	$(".vis_content").hide();

	$("ul.GogoVisionTabs li:first").addClass("active").show();

	$(".vis_content:first").show();

	

	$("ul.GogoVisionTabs li").click(function() {

		$("ul.GogoVisionTabs li").removeClass("active");

		$(this).addClass("active");

		$(".vis_content").hide();

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content

		$(activeTab).fadeIn(); //Fade in the active ID content

		

		return false;

	});

});


//Pricing page 

//To change travellers pass image price in IE
function changeTravellersPrice(selectobj){

	var selVal = $(selectobj).get(0).value;
    if (selVal == "aamsp") 
    {
		$("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/AA_US.png)");
    }
	else if (selVal == "asmsp") 
    {
		$("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Alaska.png)");
    }
	else if (selVal == "dlmsp") 
    {
		$("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Delta.png)");
    }
	else if (selVal == "vxmsp") 
    {
		$("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Virgin.png)");
    }
	else
	{
	    $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Airline.png)");
	}
	 
}
	 
 $(document).ready(function(){
 
	/*	$(".notincluded").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/pricingTravPassnodiscount2.png)");
        });
        $(".included").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Pricing_TravPass_Tbl.png)");
        }); */
		// $(".extra").click(function(){
            //$("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Pricing_TravPass.png)");
        //});	
		$(".aaincluded").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/AA_US.png)");
        });
        $(".asincluded").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Alaska.png)");
        });
		 $(".dlincluded").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Delta.png)");
        });
		$(".vxincluded").click(function(){
            $("#pricingTravPassWrap").css("background-image","url(/static/dotcom/img/Virgin.png)");
        });
		// 1-hr PASS TABLE:
		// ---------------------------------------------- //
		// show
		$("#ProdDeetsOne a.lrn").click(function (){
			$("#ProdDeetsOne .passDeetsHidden").slideDown("slow");
			$("#ProdDeetsOne a.lrn").addClass("hidden");
			$("#ProdDeetsOne a.close").removeClass("hidden");
			return false;
		});
		// hide
		$("#ProdDeetsOne a.close").click(function (){
			$("#ProdDeetsOne .passDeetsHidden").slideUp("slow");
			$("#ProdDeetsOne a.close").addClass("hidden");
			$("#ProdDeetsOne a.lrn").removeClass("hidden");
			return false;
		});

		
		// 24-HR PASS TABLE:
		// ---------------------------------------------- //
		// show
		$("#ProdDeets24HR a.lrn").click(function (){
			$("#ProdDeets24HR .passDeetsHidden").slideDown("slow");
			$("#ProdDeets24HR a.lrn").addClass("hidden");
			$("#ProdDeets24HR a.close").removeClass("hidden");
			return false;
		});
		// hide
		$("#ProdDeets24HR a.close").click(function (){
			$("#ProdDeets24HR .passDeetsHidden").slideUp("slow");
			$("#ProdDeets24HR a.close").addClass("hidden");
			$("#ProdDeets24HR a.lrn").removeClass("hidden");
			return false;
		});
		
		// GOGO UNLIMITED TABLE:
		// ---------------------------------------------- //
		// show
		$("#ProdDeetsGU a.lrn").click(function (){
			$("#ProdDeetsGU .passDeetsHidden").slideDown("slow");
			$("#ProdDeetsGU a.lrn").addClass("hidden");
			$("#ProdDeetsGU a.close").removeClass("hidden");
			return false;
		});
		// hide
		$("#ProdDeetsGU a.close").click(function (){
			$("#ProdDeetsGU .passDeetsHidden").slideUp("slow");
			$("#ProdDeetsGU a.close").addClass("hidden");
			$("#ProdDeetsGU a.lrn").removeClass("hidden");
			return false;
		});
		
		// TRAVELER PASS TABLE:
		// ---------------------------------------------- //
		// show
		$("#ProdDeetsTravPass a.lrn").click(function (){
			$("#ProdDeetsTravPass .passDeetsHidden").slideDown("slow");
			$("#ProdDeetsTravPass a.lrn").addClass("hidden");
			$("#ProdDeetsTravPass a.close").removeClass("hidden");
			return false;
		});
		// hide
		$("#ProdDeetsTravPass a.close").click(function (){
			$("#ProdDeetsTravPass .passDeetsHidden").slideUp("slow");
			$("#ProdDeetsTravPass a.close").addClass("hidden");
			$("#ProdDeetsTravPass a.lrn").removeClass("hidden");
			return false;
		});
 });
