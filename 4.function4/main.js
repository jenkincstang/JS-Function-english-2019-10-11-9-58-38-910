function countWords(message) {
    var totalSoFar = 0;
    message = message.trim();
    for (var i = 0; i < message.length; i++){
	    if (message.charAt(i) === " ") { // if a space is found in message
	        for(var j=i+1;j<message.length;j++){ //Remove consecutive spaces
	        	if(message.charAt(j) === " "){
	        		i++;
	        	}else{
	        		break;
	        	}
	        }
	        totalSoFar++; // add 1 to total so far
	    }
    }
    totalSoFar++;
    return totalSoFar;
}

console.log(countWords('Good morning, I love JavaScript.')); // should return 5
