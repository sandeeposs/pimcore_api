<?php
include('controller.php');
$objC = new controller();
$objC->showProducts();

$data = $objC->data;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="PUBLIC" />
    <title>Gogo Inflight Internet - Pricing</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <style>
    /*
    #whereToFind li#AmericanAirlines a {width:118px; background-position:-431px 0;}
    #whereToFind li#AlaskaAirlines a {width:101px; background-position:-323px 0;}
    */
    .pricing24hrWrap {
	min-height:114px;
        -webkit-box-shadow:	0px 8px 6px -6px #bbb;
        -moz-box-shadow:	0px 8px 6px -6px #bbb;
        box-shadow:			0px 8px 6px -6px #bbb;
    }
    .td_right_shadow {
        -webkit-box-shadow:	6px 0 6px -6px #BBBBBB;
        -moz-box-shadow:	6px 0 6px -6px #BBBBBB;
        box-shadow:			6px 0 6px -6px #BBBBBB;
        background:url(img/bg.png) top repeat;
    }
    .passWrap {background-image:url('');}
    .product_name {display: inline-block;margin-top:35px; width:345px; padding-left:10px; color:#fff; }
    .product_desc {width:330px; color:#595959; }
    .product_price {bottom:25px; position:relative;width:auto; display: inline-block; color:#ffffff; }
    .sup {position:relative; bottom:37px; display: inline-block; color:#fff;}
    .no_record {margin-top:35px; width:500px; padding-left:10px; font-size:24px; color:#d12e32;}
    .buy_now {left: 515px; position: absolute; top: 65px; z-index: 100;}
    .renews {left: 760px; position: absolute; top: 30px; z-index: 100;}
    .all_device {left: 850px; position: absolute; top: 30px; z-index: 100;}
    .all_airlines {left: 650px; position: absolute; top: 30px; z-index: 100;}
    table {
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid #aaa;
    }
    .passDeetsToggle {padding:0px;}
    .passDeetsToggle a {margin-left:0px;}
    .whereToFind ul {height:31px;}
    .whereToFind ul, .whereToFind li {margin:0; padding:0;}
    .whereToFind li {font-size:16px; display:block; float:left; height:31px; margin-top:16px; margin-left:7px; overflow:hidden;}
    .whereToFind li#where {margin-top:9px; width:179px; margin-left:-5px; background:url(img/WhereToFindGogo.png) no-repeat 0 0; text-indent:-99999px;}
    .whereToFind li a {color:#84949D; margin-top:10px;}
    .blue_color {color:#84949D;}
    
    .product_name {font-family: 'standard_ct_condensed_mediuMd'; font-size: 3.5em !important;}
    .product_price, .sup {font-family: 'standard_ct_condensed_mediuMd', sans-serif !important; text-align: center; }
    .product_price { font-size: 4em !important; }
    .sup { font-size: 2.5em !important; }
    .product_desc {font-family: 'kari_proitalic'; font-size:0.35em !important;}
    
    </style>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/popup.js"></script>
    <script>
    $(document).ready(function(){
        // show
        $(".passDeetsToggle a.lrn").click(function (){
            $(this).parent().prev().find('.passDeetsHidden').slideDown('slow');
            $(this).addClass("hidden");
            $(this).prev().removeClass("hidden");
            return false;
            //passDeetsHidden
        });
        // hide
        $(".passDeetsToggle a.close").click(function (){
            $(this).parent().prev().find('.passDeetsHidden').slideUp('slow');
            $(this).addClass("hidden");
            $(this).next().removeClass("hidden");
            return false;
        });
    });
    </script>
</head>

<body class="hasSidebar">
	<div id="wrap">
		<div id="wrapNew">
			<div id="header">
				<div id="brand">
					<a id="logo" href="#"><img class="pngFix"
						src="img/gogo-logo-lock.png"
						width="181" height="86" alt="gogo" /></a>
				</div>
				<!-- /brand -->

				<div id="navBar">
					<ul class="sf-menu sf-navbar sf-js-enabled sf-shadow"
						style="margin-left: 150px; margin-top: 12px;">
						<li id="connect"><a>CONNECT</a>
							<ul id="subnav_connect">
								<li class="current first"><a onclick='postUrl("Pricing");'
									class="" href='#'>Pricing</a></li>
								<li class=""><a onclick='postUrl("Create account");' class=""
									href='#'>Create
										account</a></li>
								<li class=""><a onclick='postUrl("Mobile App");' class=""
									href='#'>Mobile App</a></li>
								<li class=""><a onclick='postUrl("In-Air Services");' class=""
									href='#'>In-Air Services</a></li>
							</ul></li>
						<li id="coverage"><a>COVERAGE</a>
							<ul id="subnav_coverage">
								<li class="first"><a
									onclick='postUrl("Participating airlines");' class=""
									href='#'>Participating airlines</a></li>
								<li class=""><a onclick='postUrl("How Gogo works");' class=""
									href='#'>How Gogo works</a></li>
							</ul></li>
						<li id="airlineservices"><a>AIRLINE SERVICES</a>
							<ul id="subnav_airlineservices">
								<li class="first"><a target="_blank"
									onclick='postUrl("Airline Services");' class=""
									href='#'>Airline Services</a></li>
							</ul></li>
						<li id="aboutgogo"><a>ABOUT GOGO</a>
							<ul id="subnav_aboutgogo">
								<li class="first"><a onclick='postUrl("Company info");' class=""
									href='#'>Company info</a></li>
								<li class=""><a target="_blank" onclick='postUrl("Gogo Blog ");'
									class="" href='#'>Gogo Blog </a></li>
								<li class=""><a onclick='postUrl("Social Media");' class=""
									href='#'>Social Media</a></li>
								<li class=""><a onclick='postUrl("Partner with Gogo");' class=""
									href='#'>Partner with Gogo</a></li>
								<li class=""><a target="_blank" onclick='postUrl("Press Room");'
									class="" href='#'>Press Room</a></li>
								<li class=""><a target="_blank"
									onclick='postUrl("Investor Relations");' class=""
									href='#'>Investor Relations</a></li>
								<li class=""><a onclick='postUrl("Careers ");' class=""
									href='#'>Careers </a></li>
							</ul></li>
						<li id="concourse"><a>CONCOURSE</a>
							<ul id="subnav_concourse">
								<li class="first"><a target="_blank"
									onclick='postUrl("Concourse");' class=""
									href='#'>Concourse</a></li>
							</ul></li>
					</ul>

					<ul id="pageUtil">
						<li><a id="myLibrary"
							href="#">My Library</a></li>
						<li><a id="signIn" href='#'>Sign
								In</a></li>
						<li><a id="createAccount" href="#">Create Account</a></li>
						<li id="chatLink_item"><a id="chatLink"
							href="#">Live Help</a></li>
					</ul>
				</div>
				<!-- /navBar -->
			</div>

			<div id="pricingWrap">
				<div id="pricingIntro">
					<h1>Buy Before You Fly</h1>
					<p>Pack your bags with a Gogo pass to enjoy quick, easy sign in
						once you&rsquo;re in the air.</p>
				</div>
				<!-- /pricingIntro -->

				<div id="pricingPlans">
					<div class="GogoProdWrap" id="pricingHeaderWrap">
						<table cellspacing="0" class="GogoHiddenTbl" id="pricingHeaderTBL">
							<tbody>
								<tr>
									<th id="thInAirInt">In-Air Internet Passes</th>
									<th id="thAllPrtnr">All Patner Airlines</th>
									<th id="thAutoRen">Automatically Renews</th>
									<th id="thDevSup">Devices Supported</th>
								</tr>
							</tbody>
						</table>
					</div>


		    <!-- product listing start -->
                    <?php
                    if(empty($data['productListing'])) {
                        echo '<div class="no_record">There is no offer(s) found for <strong class="blue_color">'.$data['channelName'].'</strong>.</div>';
                    } else {
                        $i = 0;
                        foreach($data['productListing'] as $product)
			{
			    $i++;
			?>

			    <div class="GogoProdWrap pricing24hrWrap" style="background-image:url('')";>
				<table cellspacing="0" width="100%" height="114">
				    <tbody>
					<tr>
					    <td width="540" class="td_right_shadow">
						<div class="product_name">
						    <?php echo strtoupper($product['name']); ?>
						    <div class="product_desc">
							<?php 
							echo $product['desc'];
							if(empty($product['desc'])) {
							    echo "&nbsp;";
							}
							?>
						    </div>
						</div>						
						<div class="sup">&#036;</div>                       
						<div class="product_price"><?php echo (int)$product['price']; ?></div>
						<div class="sup">
						    <?php 
						    if(!is_float($product['price'])) {
							echo '00';
						    } else {
							echo substr($product['price'], strpos($product['price'], ".")+1, 2); 
						    }
						    ?>
						</div>
					
						<a class="buy_now"
						    href="#"
						    target="_blank"><img
						    src="img/BuyNow_Btn_2.png"
						    target="_blank" alt="Buy Now" /></a>
					    </td>
					    <td width="85" class="borderRight borderBttm shadowRight"><img
						src="img/checkmark.png"
						alt="Checkmark" class="renews" /></td>
					    <td width="85" class="borderRight borderBttm">&nbsp;</td>
					    <td width="90" class="borderRight borderBttm"><img
						src="img/devices_all.png"
						alt="Devices supported: Laptop, tablet, mobile" class="all_device" /></td>
					</tr>
				    </tbody>
				</table>
			    </div>
			    
			    <div class="passWrap" style="background-color:#eee; margin-bottom:20px; margin-left:13px;">
				<div class="passDeetsInner">
				    <div class="passDeetsHidden hidden">
					<div class="passValueProp">
					    <?php
					    $features = '';
					    if(isset($product['keyfeatures']) && !empty($product['keyfeatures']))
					    {
						$features .= '<ul>';
						foreach($product['keyfeatures'] as $productFeatures) 
						{
						    if(!empty($productFeatures)) {
							$features .= '<li>'.$productFeatures.'</li>';
						    }
						}
						$features .= '</ul>';
						echo $features;
					    }
					    ?>
					    <p class="BBYF_terms"><?php echo isset($product['notice'])?$product['notice']:''; ?></p>
					</div>
					<div class="passFindOutMore">
					    <h2>Get To Know Gogo</h2>
					    <ul>
						<li><a href="#">How Gogo Works</a></li>
						<li><a href="#">General FAQs</a></li>
						<li><a href="#">Terms &amp; Conditions</a></li>
					    </ul>
					</div>
				    </div>
				</div>

				<div class="passDeetsToggle">
				    <a href="#" class="close hidden">Close</a> 
				    <a href="#" class="lrn">Learn More</a>
				</div>
			    </div>
			    
			<?php
			} // end of Products loop

                    }
                    ?>
                    <!-- product end here -->
                </div>
				<div id="whereToFindWrap">
					<div class="whereToFind">
						<ul>
							<li id="where">WHERE TO FIND GOGO:</li>
                            <?php
                            $channelStr = '';
                            foreach($data['channelDropDown'] as $channels)
                            {
                                $channelStr .= '<li><a href="?channel='.$channels['name'].'">'.$channels['name'].'</a></li>';
                            }
                            echo $channelStr;
                            ?>
						</ul>
					</div>
					<!-- /whereToFind -->
					<p>Service available on select flights in the continental United
						States and Alaska.</p>
				</div>
				<!-- /whereToFindWrap -->
			</div>
		</div>
		<div id="footerNew">

			<div id="newsletterNew">
				<h3>
					Sign up for Gogo<sup>&reg;</sup> news
				</h3>
				<form id="newsletterSignup">
					<div>
						<label for="nlEmail">Email</label> <span class="roundInput"><input
							class="focusClear" type="text" id="nlEmail" name="nlEmail"
							value="Enter email here" /><i class="rCap"></i></span> <input
							type="image" id="nlSubmit"
							src="img/btn_smallRarrow.png" alt="submit" /> <span
							id="nlMessaging"></span>
					</div>
				</form>
			</div>
			<ul id="footerUtilNew">

				<li class="first"><a href='#'><img
						src="img/upwardPlane_illustration.png" /> AIRLINE
						SERVICES</a></li>
				<li><a id="feedback"
					href="#">*-)-
						Feedback</a></li>
				<li class="gogoBlog"><a href='#'
					target="_blank"> </a></li>

				<li class="fb"><a href='#'
					target="_blank"> </a></li>
				<li class="foursq"><a href='#'
					target="_blank"> </a></li>
				<li class="linkedin"><a href='#'
					target="_blank"> </a></li>
				<li class="tweet"><a href='#'
					target="_blank"> </a></li>
				<li class="youtube"><a href='#'
					target="_blank"> </a></li>
			</ul>
			<div id="footerLegalNew">
				<div id="copyright">&copy;2014&nbsp;Gogo LLC. All trademarks are the
					property of their respective owners.</div>

				<ul id="footerLegalSubNew">

					<li><a href="#">Site Map</a></li>
					<li><a href="#">Gift Card &amp; Promo
							Code Use</a></li>
					<li><a href='#'> Terms of Use</a></li>
					<li class="last"><a href='#'> Privacy & Cookie
							Policy</a></li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
