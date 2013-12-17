$(function(){
	$('#lo1').click(function(){
		$('#lo1').addClass('selected_layout');
		$('#lo2').removeClass('selected_layout');
		$('#lo3').removeClass('selected_layout');
		$('#lo4').removeClass('selected_layout');
		$('#lo5').removeClass('selected_layout');
		$('#background_body').empty();
		
		$('<div id="l1_wrapper"></div>').prependTo('#background_body');
		$('<div id="l1_left_column"></div>').appendTo('#l1_wrapper');
			$('<img src="images/your_logo.png" />').appendTo('#l1_left_column');
			$('<p class="menu_item">menu item_1</p><p class="menu_item">menu item_2</p><p class="menu_item">menu item_3</p><p class="menu_item">menu item_4</p><p class="menu_item">menu item_5</p>').appendTo('#l1_left_column');
		$('<div id="l1_main_column"></div>').appendTo('#l1_wrapper');
			$('<h1>Title of Page</h1><h1 id="l1_h">Main Body</h1><p>Safe Colors is a webtool that allows you to find the colors that will suit your website.</p><p>All You have to do is:</p><p>1) Pick a color that you like.</p><p>2) We will then calculate the colors that suit the page.</p><p>3) If unsure use our page layouts for comparison.</p>').appendTo('#l1_main_column');
	})
	
	$('#lo2').click(function(){
		$('#lo1').removeClass('selected_layout');
		$('#lo2').addClass('selected_layout');
		$('#lo3').removeClass('selected_layout');
		$('#lo4').removeClass('selected_layout');
		$('#lo5').removeClass('selected_layout');
		$('#background_body').empty();
		
		$('<div id="l2_wrapper"></div>').prependTo('#background_body');
		$('<div id="l2_header"></div>').prependTo('#l2_wrapper');
			$('<img src="images/your_logo.png" />').appendTo('#l2_header');
			$('<h1 id="l2_title">Title of Page</h1>').appendTo('#l2_header');
		$('<div id="l2_left_column"></div>').appendTo('#l2_wrapper');
			$('<p class="menu_item">menu item_1</p><p class="menu_item">menu item_2</p><p class="menu_item">menu item_3</p><p class="menu_item">menu item_4</p><p class="menu_item">menu item_5</p>').appendTo('#l2_left_column');
		$('<div id="l2_main_column"></div>').appendTo('#l2_wrapper');
			$('<h1 id="l2_h">Main Body</h1><p>Safe Colors is a webtool that allows you to find the colors that will suit your website.</p><p>All You have to do is:</p><p>1) Pick a color that you like.</p><p>2) We will then calculate the colors that suit the page.</p><p>3) If unsure use our page layouts for comparison.</p>').appendTo('#l2_main_column');
	})
	
	$('#lo3').click(function(){
		$('#lo1').removeClass('selected_layout');
		$('#lo2').removeClass('selected_layout');
		$('#lo3').addClass('selected_layout');
		$('#lo4').removeClass('selected_layout');
		$('#lo5').removeClass('selected_layout');
		$('#background_body').empty();
		
		$('<div id="l3_wrapper"></div>').prependTo('#background_body');
		$('<div id="l3_header"></div>').prependTo('#l3_wrapper');
			$('<img src="images/your_logo.png" />').appendTo('#l3_header');
			$('<h1 id="l3_title">Title of Page</h1>').appendTo('#l3_header');
		$('<div id="l3_left_column"></div>').appendTo('#l3_wrapper');
			$('<p class="menu_item">menu item_1</p><p class="menu_item">menu item_2</p><p class="menu_item">menu item_3</p><p class="menu_item">menu item_4</p><p class="menu_item">menu item_5</p>').appendTo('#l3_left_column');
		$('<div id="l3_main_column"></div>').appendTo('#l3_wrapper');
			$('<h1 id="l3_h">Main Body</h1><p>Safe Colors is a webtool that allows you to find the colors that will suit your website.</p><p>All You have to do is:</p><p>1) Pick a color that you like.</p><p>2) We will then calculate the colors that suit the page.</p><p>3) If unsure use our page layouts for comparison.</p>').appendTo('#l3_main_column');
		$('<div id="l3_footer"></div>').appendTo('#l3_wrapper');
			$('<p>&copy; Copyright</p>').appendTo('#l3_footer');
	})
	
	$('#lo4').click(function(){
		$('#lo1').removeClass('selected_layout');
		$('#lo2').removeClass('selected_layout');
		$('#lo3').removeClass('selected_layout');
		$('#lo4').addClass('selected_layout');
		$('#lo5').removeClass('selected_layout');
		$('#background_body').empty();
		
		$('<div id="l4_wrapper"></div>').prependTo('#background_body');
		$('<div id="l4_header"></div>').prependTo('#l4_wrapper');
			$('<img src="images/your_logo.png" />').appendTo('#l4_header');
			$('<h1 id="l4_title">Title of Page</h1>').appendTo('#l4_header');
		$('<div id="l4_menu_bar"></div>').appendTo('#l4_wrapper');
			$('<ul><li title="Home">Home</li><li title="About Us">About Us</li><li title="History">History</li><li title="Contact US">Contact Us</li></ul>').appendTo('#l4_menu_bar');
		$('<div id="l4_left_column"></div>').appendTo('#l4_wrapper');
			$('<p class="menu_item">menu item_1</p><p class="menu_item">menu item_2</p><p class="menu_item">menu item_3</p><p class="menu_item">menu item_4</p><p class="menu_item">menu item_5</p>').appendTo('#l4_left_column');
		$('<div id="l4_main_column"></div>').appendTo('#l4_wrapper');
			$('<h1 id="l4_h">Main Body</h1><p>Safe Colors is a webtool that allows you to find the colors that will suit your website.</p><p>All You have to do is:</p><p>1) Pick a color that you like.</p><p>2) We will then calculate the colors that suit the page.</p><p>3) If unsure use our page layouts for comparison.</p>').appendTo('#l4_main_column');
		$('<div id="l4_footer"></div>').appendTo('#l4_wrapper');
			$('<p>&copy; Copyright</p>').appendTo('#l4_footer');
	})
	
	$('#lo5').click(function(){
		$('#lo1').removeClass('selected_layout');
		$('#lo2').removeClass('selected_layout');
		$('#lo3').removeClass('selected_layout');
		$('#lo4').removeClass('selected_layout');
		$('#lo5').addClass('selected_layout');
		$('#background_body').empty();
		
		$('<div id="l5_wrapper"></div>').prependTo('#background_body');
		$('<div id="l5_header"></div>').prependTo('#l5_wrapper');
			$('<img src="images/your_logo.png" />').appendTo('#l5_header');
			$('<h1 id="l5_title">Title of Page</h1>').appendTo('#l5_header');
		$('<div id="l5_menu_bar"></div>').appendTo('#l5_wrapper');
			$('<ul><li title="Home">Home</li><li title="About Us">About Us</li><li title="History">History</li><li title="Contact US">Contact Us</li></ul>').appendTo('#l5_menu_bar');
		$('<div id="l5_left_column"></div>').appendTo('#l5_wrapper');
			$('<p class="menu_item">menu item_1</p><p class="menu_item">menu item_2</p><p class="menu_item">menu item_3</p><p class="menu_item">menu item_4</p><p class="menu_item">menu item_5</p>').appendTo('#l5_left_column');
		$('<div id="l5_main_column"></div>').appendTo('#l5_wrapper');
			$('<h1 id="l5_h">Main Body</h1><p>Safe Colors is a webtool that allows you to find the colors that will suit your website.</p><p>All You have to do is:</p><p>1) Pick a color that you like.</p><p>2) We will then calculate the colors that suit the page.</p><p>3) If unsure use our page layouts for comparison.</p>').appendTo('#l5_main_column');
		$('<div id="l5_right_column"></div>').appendTo('#l5_wrapper');
			$('<img src="images/image_holder.png" />').appendTo('#l5_right_column');
			$('<img src="images/image_holder.png" />').appendTo('#l5_right_column');
			$('<img src="images/image_holder.png" />').appendTo('#l5_right_column');
		$('<div id="l5_footer"></div>').appendTo('#l5_wrapper');
			$('<p>&copy; Copyright</p>').appendTo('#l5_footer');
	})
	
	$('#info').one('click', function(){
		$('<div id="info_screen"></div>').appendTo('body');
		$('<img src="images+logo/images/x_button.png" id="x" />').appendTo('#info_screen');
		$('<h1 id="h">How To Use!</h1>').appendTo('#info_screen');
		$('<p class="info_p">Safe Colors allows you to create a simple monochrome web color palette.</p><p class="info_p">Use the text fields to dynamically select the area you want to style. We will generate an appropriate color palette for that.</p><p class="info_p">We also leave you with the options of using color theories, though we do not not recommend it for web design.</p>').appendTo('#info_screen');
		
		$('#x').click(function(){
			$('#info_screen').remove();
		})
	})
})
            function colorChange(color) {
			var tiny = tinycolor(color);

			var combines = $("#HEX_val").toggleClass("invisible", !tiny.ok);

			 var mono = tinycolor.monochromatic(tiny);
			 combines.find(".body_color").html($.map(mono, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));
			 
			  var combines = $("#combine-output").toggleClass("invisible", !tiny.ok);

			 var triad = tinycolor.triad(tiny);
			 combines.find(".triad").html($.map(triad, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));

			 var tetrad = tinycolor.tetrad(tiny);
			 combines.find(".tetrad").html($.map(tetrad, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));

			 var mono = tinycolor.monochromatic(tiny);
			 combines.find(".mono").html($.map(mono, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));

			 var analogous = tinycolor.analogous(tiny);
			 combines.find(".analogous").html($.map(analogous, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));

			 var sc = tinycolor.splitcomplement(tiny);
			 combines.find(".sc").html($.map(sc, function(e) {
			     return '<span style="background:'+e.toHexString()+'"></span>'
			 }).join(''));
			 
			 var theBody = $('.mono span:first-child').css("background-color");
			 $('#default_main_column, #l1_main_column, #l2_main_column, #l3_main_column, #l4_main_column, #l5_main_column').css("background-color",             theBody);
			 
			 var theBackground = $('.mono span:nth-child(2)').css("background-color");
			 $('#background_body, #bg_field').css("background-color", theBackground);
			 
			 var theHead = $('.mono span:nth-child(3)').css("background-color");
			 $('#l2_header, #l3_header, #l4_header, #l5_header, #head_field').css("background-color", theHead);
			 
			 var theFoot = $('.mono span:nth-child(4)').css("background-color");
			 $('#l3_footer, #l4_footer, #l5_footer, #foot_field').css("background-color", theFoot);
			 
			 var theLeftAndRight = $('.mono span:nth-child(5)').css("background-color");
			 $('#default_left_column, #l1_left_column, #l2_left_column, #l3_left_column, #l4_left_column, #l5_left_column, #l5_right_column, #lr_field').css("background-color", theLeftAndRight);
			 
			 var theMenu = $('.mono span:nth-child(6)').css("background-color");
			 $('#l4_menu_bar, #l5_menu_bar, #menu_field').css("background-color", theMenu);
		}

		$(function() {
			
			$("#color").bind("keyup change", function() {
				colorChange($(this).val());
			});
			colorChange({r: 204, g: 204, b: 204});

			$("#inputter a").click(function() {
			     $("#color").val($(this).text()).trigger("change");
                return false;
			});
		});