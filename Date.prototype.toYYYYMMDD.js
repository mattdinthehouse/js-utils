Date.prototype.toYYYYMMDD = function() {
  // Depends on String.prototype.leftPad
  var year = this.getFullYear();
  var month = (''+this.getMonth()).leftPad('0', 2);
  var date = (''+this.getDate()).leftPad('0', 2);

  return year+'-'+month+'-'+date;
}
