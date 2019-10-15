
		
		var timeArray = [1];
		var start = new Date().getTime();
		//to give just additional trial
		document.getElementById("shape").ondblclick = function(){ alert("the shape is double clicked");}
				
		document.getElementById("shape").onclick = function(){ 			
			
				
			var width = Math.floor(Math.random() * 200) + 10;
			var height = Math.floor(Math.random() * 200) + 10;
			var top = Math.floor(Math.random() * 400);
			var left = Math.floor(Math.random() * 400);
			document.getElementById("shape").style.width = width + "px";
			document.getElementById("shape").style.height =  width +"px";
			document.getElementById("shape").style.backgroundColor = getRandomColor();
			document.getElementById("shape").style.top =  top + "px";
			document.getElementById("shape").style.left = left + "px";
			
			if(width % 2 == 0){
				document.getElementById("shape").style.borderRadius = "50%";
			}else{
				document.getElementById("shape").style.borderRadius = "0%";
			}
			
			var end = new Date().getTime();
			var timeTaken = (end -start)/1000;
			timeArray.push(timeTaken);
			
			
			
			
			if(timeTaken == getMinOfArray(timeArray)){
				document.getElementById("record").innerHTML = timeTaken + "s";
				
				
					$("#shape").animate({width:"400px" , height:"600px", top:"0px", left:"0px"},4000,function(){
						$("#shape").fadeOut("slow", function(){
							$("#shape").fadeIn("slow");
						});
					});
				
				alert("Congratulation!!!! You hit in lowest min! Let us go for break another  record");
			}
			
			document.getElementById("delay").innerHTML = timeTaken + "s";	
			console.log(timeArray);
			
			start = new Date().getTime();
						
		}
		
		function getMinOfArray(numArray){
			return Math.min.apply(null,numArray);
		
		}
		
	
		
		 function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}			
		