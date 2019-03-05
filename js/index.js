$(document).ready(function(){
	//点击开始
	$(".tishi").click(function(){
		$(this).fadeOut(500)
	});
	
	//信息的隐藏
		var $powers = $(".power");
		$powers.click(function(){
			$(".mess").slideToggle(500)
		})
	//开始跳转
	var $starts = $(".start");
	$starts.click(function(){
		if($twos.is(":visible")){
			$(".one").slideUp(500)
		}else{
			$(".one").slideUp(500),
			$twos.slideDown()
		}	
	});
	//经过变化
	var $two_bgs = $(".two-bg li");
		$two_bgs.mouseenter(function(){
			$(this).addClass("active")
		});
		$two_bgs.mouseleave(function(){
			$(this).removeClass("active")
		});
		//点击翻页
	
	var $twos = $(".two");

		$twos.click(function(){
			$(this).slideUp(500)
		});
		$twos.dblclick(function(){
			$(".one").slideDown(500)
		})
		
		// $twos.mousedown(function(){
		// 	$(".two").slideUp(500)
		// });
		//双击击返回一页
	var $threes = $(".three");
		$threes.dblclick(function(){
			$twos.slideDown(500)
		})
})