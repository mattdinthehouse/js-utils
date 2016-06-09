String.prototype.leftPad = function(pad, length) {
  pad = new Array(length).fill(pad).join('');
  var str = pad+this.toString();

  return str.substr(str.length - length, length);
}
