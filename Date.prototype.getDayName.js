Date.prototype.getDayName = function() {
  var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return days[this.getDay()];
}
