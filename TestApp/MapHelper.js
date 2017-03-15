class MapHelper {
  constructor() {
    this.markerTypes = ['Break-In','Burglary','Assault','Murder'];
  }

  genMarkers = (number,zipcenter) => {
    var tempmarkers = [];
    for (var i = 0; i < number-1; i++) {
      var marker = this.randomGeo(zipcenter,6000)
      marker.type = this.markerTypes[this.getRandomInt(0,3)];
      marker.key = i;
      tempmarkers.push(marker)
    }
    return tempmarkers;
  }

 randomGeo = (center, radius) => {
   var y0 = center.latitude;
   var x0 = center.longitude;
   var rd = radius / 111300; //about 111300 meters in one degree

   var u = Math.random();
   var v = Math.random();

   var w = rd * Math.sqrt(u);
   var t = 2 * Math.PI * v;
   var x = w * Math.cos(t);
   var y = w * Math.sin(t);

   //Adjust the x-coordinate for the shrinking of the east-west distances
   var xp = x / Math.cos(y0);

   var newlat = y + y0;
   var newlon = x + x0;
   var newlon2 = xp + x0;

   return {
       'latitude': parseFloat(newlat.toFixed(5)),
       'longitude': parseFloat(newlon.toFixed(5))
   };
  }

  getRandomInt = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default new MapHelper();
