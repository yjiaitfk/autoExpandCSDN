$(function(){
	var count = 10;
	
	function expand(){
		var ok = false;
		var e = $('.check-adblock-bg');

		if(e.length > 0){
			ok = true;
			e.remove();
			$('.hide-article-box').remove();
			$('#article_content').removeAttr('style');
			for(var i = 1; i < 1000; i++) {
					clearTimeout(i);
			}
			// $('.check-adblock-bg').remove();
		}
		
		console.log("expand", ok, count);
		
		if(!ok && --count){
			setTimeout(expand, 500);
		}
	}
	
	expand();
});