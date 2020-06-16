function palindrome(message){
  // wirte your code here
  var length = message.length;
  var middle = length+1/2;
  for(var i=0,j=length-1;i<middle;i++,j--){
  	if(message.charAt(i)==message.charAt(j)){
  	}else{
  		break;
  	}
  }
  if(i>=j){
  	return true;
  }else{
  	return false;
  }
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
