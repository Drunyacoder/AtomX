var actual_pos = 0;    
$(document).ready(function($){
	$('.slider_3d').css({
		'MozUserSelect' : 'none'
	}).bind('selectstart', function() {
		return false;
	}).mousedown(function() {
		return false;
	});
 
	var r2_t = 40;  var r2_l = 735;
	var r2_w = 205; var r2_h = 126;
	
	var r1_t = 23;  var r1_l = 567;
	var r1_w = 279; var r1_h = 169;
	
	var c_t = -2;  var c_l = 297;
	var c_w = 366; var c_h = 226;
	
	
	var l1_t = 23;  var l1_l = 114;
	var l1_w = 279; var l1_h = 169;
	
	var l2_t = 40;  var l2_l = 20;
	var l2_w = 205; var l2_h = 126;
  
	function leftClick(){
		$('.slider_3d').attr('rel', 'animating');
		$('.slider_3d').find('div').eq(actual_pos - 3).css('z-index', '0');
		$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l+200, top:l2_t, width:l2_w, height: l2_h}, 0).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, 0);
		
		$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l1_w, height: l1_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:c_w, height: c_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:r1_w, height: r1_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:r2_w, height: r2_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r2_l-250, top:r2_t, width:r2_w, height: r2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r2_w, height: r2_h}, speed, function() {$('.slider_3d').attr('rel', '');});   
		
		rename(actual_pos -1);         
		setTimeout('lc();', speed/2);
	}
	
	function rightClick(){
		$('.slider_3d').attr('rel', 'animating');  
		$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l2_l + 200, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l2_w, height: l2_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:l2_w, height: l2_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:l1_w, height: l1_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:c_w, height: c_h}, speed);
		
		$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r1_w, height: r1_h}, speed);   
		$('.slider_3d').find('div').eq(actual_pos + 3).css('z-index', '0');
		$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l - 200, top:r2_t, width:r2_w, height: r2_h}, 0).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, 0);
		
		$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed).show(0);
		$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, speed, function() {$('.slider_3d').attr('rel', '');});   
		
		rename(actual_pos +1);         
		setTimeout('rc();', speed/2);
	}
  
  
  
	if(autoslide_time != 0){
		var auto_slide = setInterval(function(){
			$('.slider_3d').attr('rel', 'animating');  
			$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l2_l + 200, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l2_w, height: l2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:l2_w, height: l2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:l1_w, height: l1_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:c_w, height: c_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r1_w, height: r1_h}, speed);   
			$('.slider_3d').find('div').eq(actual_pos + 3).css('z-index', '0');
			$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l - 200, top:r2_t, width:r2_w, height: r2_h}, 0).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, 0);
			
			$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, speed, function() {$('.slider_3d').attr('rel', '');});   
			
			rename(actual_pos +1);         
			setTimeout('rc();', speed/2);
		}, autoslide_time); 
	}  
  var speed = 300;
  
  var r1 = $('.slider_3d_r1');
  var r2 = $('.slider_3d_r2');
  var c = $('.slider_3d_c');
  var l1 = $('.slider_3d_l1');
  var l2 = $('.slider_3d_l2');
   
  var items = $('.slider_3d').find('div').size();
  function rename(position){
     $('.slider_3d').find('div').attr('rel', '');
     $('.slider_3d').find('div').eq(position - 2).attr('rel', 'l2');
     $('.slider_3d').find('div').eq(position - 1).attr('rel', 'l1');
     $('.slider_3d').find('div').eq(position).attr('rel', 'c');  
     $('.slider_3d').find('div').eq(position + 1).attr('rel', 'r1');
     $('.slider_3d').find('div').eq(position + 2).attr('rel', 'r2');  
  }
  rename(0);

	$('.slider_3d').find('div').click(function(){ 
		clearInterval(auto_slide);
		var identify = items + actual_pos;
		if(identify > items) {identify = actual_pos;}
		if($('.slider_3d').attr('rel') == 'animating') {return false;}
		if($(this).attr('rel') == 'l1'){
			leftClick();
		}
		else  if($(this).attr('rel') == 'l2'){
			$('.slider_3d').attr('rel', 'animating');
			$('.slider_3d').find('div').eq(actual_pos - 3).css('z-index', '0');
			speed = speed /1.3;
			$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l+200, top:l2_t, width:l2_w, height: l2_h}, 0);
			$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, 0);
			
			$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l1_w, height: l1_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:c_w, height: c_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:r1_w, height: r1_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:r2_w, height: r2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r2_l-250, top:r2_t, width:r2_w, height: r2_h}, speed);
			$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r2_w, height: r2_h}, speed, function(){
				$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l+100, top:l2_t, width:l2_w, height: l2_h}, 0);
				$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, 0);
				
				$('.slider_3d').find('div').eq(actual_pos - 3).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos - 3).find('img').animate({width:l2_w, height: l2_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l1_w, height: l1_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:c_w, height: c_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:r1_w, height: r1_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:r2_w, height: r2_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r2_l-250, top:r2_t, width:r2_w, height: r2_h}, speed);
				$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r2_w, height: r2_h}, speed, function() {$('.slider_3d').attr('rel', '');});   
				rename(actual_pos -1);         
				setTimeout('lc();', speed/2);
				speed = speed *1.3;
			
			});   
			rename(actual_pos -1);         
			setTimeout('lc();', speed/2);
		}
		else  if($(this).attr('rel') == 'r1'){
			rightClick();
		}
		else  if($(this).attr('rel') == 'r2'){
			$('.slider_3d').attr('rel', 'animating');
			speed= speed / 1.3;
			$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l2_l + 200, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l2_w, height: l2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:l2_w, height: l2_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:l1_w, height: l1_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:c_w, height: c_h}, speed);
			
			$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r1_w, height: r1_h}, speed);   
			
			$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l - 200, top:r2_t, width:r2_w, height: r2_h}, 0).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, 0);
			
			$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed).show(0);
			$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, speed, function(){
			
				$('.slider_3d').find('div').eq(actual_pos - 2).animate({left:l2_l + 200, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos - 2).find('img').animate({width:l2_w, height: l2_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos - 1).animate({left:l2_l, top:l2_t, width:l2_w, height: l2_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos - 1).find('img').animate({width:l2_w, height: l2_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos).animate({left:l1_l, top:l1_t, width:l1_w, height: l1_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos).find('img').animate({width:l1_w, height: l1_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos + 1).animate({left:c_l, top:c_t, width:c_w, height: c_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos + 1).find('img').animate({width:c_w, height: c_h}, speed);
				
				$('.slider_3d').find('div').eq(actual_pos + 2).animate({left:r1_l, top:r1_t, width:r1_w, height: r1_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos + 2).find('img').animate({width:r1_w, height: r1_h}, speed);   
				
				$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l - 200, top:r2_t, width:r2_w, height: r2_h}, 0).show(0);
				$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, 0);
				
				$('.slider_3d').find('div').eq(actual_pos + 3).animate({left:r2_l, top:r2_t, width:r2_w, height: r2_h}, speed).show(0);
				$('.slider_3d').find('div').eq(actual_pos + 3).find('img').animate({width:r2_w, height: r2_h}, speed, function() {$('.slider_3d').attr('rel', '');});   
				
				rename(actual_pos +1);         
				setTimeout('rc();', speed/2);
				speed = speed * 1.3;
			});
			
			rename(actual_pos +1);         
			setTimeout('rc();', speed/2);
		}
	});
	$('.left_arr').click(function(){ 
		clearInterval(auto_slide);
		var identify = items + actual_pos;
		if(identify > items) {identify = actual_pos;}
		if($('.slider_3d').attr('rel') == 'animating') {return false;}
		leftClick();
	});
	$('.right_arr').click(function(){ 
		clearInterval(auto_slide);
		var identify = items + actual_pos;
		if(identify > items) {identify = actual_pos;}
		if($('.slider_3d').attr('rel') == 'animating') {return false;}
		rightClick();
	});
});  

function rc(){
	var items = jQuery('.slider_3d').find('div').size();
	jQuery('.slider_3d').find('div').eq(actual_pos + 3).css("z-index", "1");
	jQuery('.slider_3d').find('div').eq(actual_pos + 2).css("z-index", "2");
	jQuery('.slider_3d').find('div').eq(actual_pos).css("z-index", "2");
	jQuery('.slider_3d').find('div').eq(actual_pos + 1).css("z-index", "3");
	jQuery('.slider_3d').find('div').eq(actual_pos - 1).css("z-index", "1"); 
	actual_pos++;     
	
	if(actual_pos + 3 == (items)) {actual_pos =-3;}
}

function lc(){
	var items = jQuery('.slider_3d').find('div').size();
	jQuery('.slider_3d').find('div').eq(actual_pos - 3).css("z-index", "1");
	jQuery('.slider_3d').find('div').eq(actual_pos - 2).css("z-index", "2");
	jQuery('.slider_3d').find('div').eq(actual_pos).css("z-index", "2");
	jQuery('.slider_3d').find('div').eq(actual_pos - 1).css("z-index", "3");
	jQuery('.slider_3d').find('div').eq(actual_pos + 1).css("z-index", "1"); 
	actual_pos--;     
	
	if(actual_pos - 3 == (items)*-1) {actual_pos =3;}
}

function moveTo(id, callback) {
	var mod = $(window).height() - $('.'+id).outerHeight();
	mod = parseInt(mod / 2, 10);
	var scrollTop = $('.'+id).offset().top - mod;
	$('body,html').stop().animate({"scrollTop": scrollTop}, 700, function(){
		if (typeof callback != 'undefined') {
			callback();
		}
	});
}

function downloadVersion(url) {
	$('#download-link').attr('href', url);
	$('.popup').fadeIn();
}	
	