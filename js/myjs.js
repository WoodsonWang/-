$(function(){
	var text = $("#container").text().trim();
	$("#container").html("");
	for(var i = 0;i < text.length;i++){
		$("#container").append("<span>"+text[i]+"</span>")
	}
	var s = 0;
	var tim = setInterval(function(){
		$("#container span").eq(s++).css("color",getColor()).show();
		if(s == text.length){
			clearInterval(tim)
		}
	}, 100)
	function getColor(){
		return "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
	
	
})