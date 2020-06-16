function reverseString(message){
  // wirte your code here
  for(var i=message.length-1;i>=0;i--){
  	process.stdout.write(message.charAt(i));
  }
}
reverseString('hello'); // should return 'olleh'
