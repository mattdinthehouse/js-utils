Date.prototype.toHHMMSS = function() {
  // Depends on String.prototype.leftPad
  var hours = (''+this.getHours()).leftPad('0', 2);
  var minutes = (''+this.getMinutes()).leftPad('0', 2);
  var seconds = (''+this.getSeconds()).leftPad('0', 2);

  return hours+':'+minutes+':'+seconds;
}
