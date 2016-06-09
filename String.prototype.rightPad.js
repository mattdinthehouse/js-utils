String.prototype.rightPad = function(pad, length) {
  // Depends on String.prototype.leftPad
  pad = pad.leftPad(pad, length);
  var str = this.toString()+pad;

  return str.substr(0, length);
}
