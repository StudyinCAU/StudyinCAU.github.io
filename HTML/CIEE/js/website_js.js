// JavaScript Document

function changeBanner(){
	var banner = $("#banner").find("li")
	var icon = $("#banner").find("dd");
	var index = 0;
	
	setInterval(function(){
		if(index == banner.length-1){
			index = 0;	
		}else{
			index++;	
		}
		banner.eq(index).fadeIn(300).siblings("li").fadeOut(800);
		icon.eq(index).addClass("cur").siblings("dd").removeClass("cur");
	}, 3000)
	
	icon.click(function(){
		index = icon.index(this);
		
		banner.eq(index).fadeIn(300).siblings("li").fadeOut(800);
		icon.eq(index).addClass("cur").siblings("dd").removeClass("cur");
	})
}

function changeMenu(title, content){
	var menu_title = $("."+title);
	var menu_content = $("."+content);
	var index = 0;
	
	menu_title.click(function(){
		index = menu_title.index(this);
		
		$(this).addClass("cur").siblings("."+title).removeClass("cur");
		menu_content.eq(index).show().siblings("."+content).hide();	
	})
}

function changeImg(){
	var sImg = $(".simg_list").find("li");
	var bImg = $("#bImg");
	var leftIcon = $("#leftIcon");
	var rightIcon = $("#rightIcon");
	var index = 0;
	
	sImg.mouseenter(function(){
		var src = $(this).children("img").attr("src");
		
		bImg.attr("src", src.replace("s_", "460X460_"));
	})
	
	leftIcon.click(function(){
		if(index == 0){
			index = sImg.length-1;
		}else{
			index--;
		}
		var src = sImg.eq(index).children("img").attr("src");
		
		bImg.attr("src", src.replace("s_", "460X460_"));
	});
	
	rightIcon.click(function(){
		if(index == sImg.length-1){
			index = 0;
		}else{
			index++;
		}
		var src = sImg.eq(index).children("img").attr("src");
		
		bImg.attr("src", src.replace("s_", "460X460_"));
	})
}
