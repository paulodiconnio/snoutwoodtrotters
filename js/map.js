function initialize() {
var myLatlng = new google.maps.LatLng(53.3928275,-2.6701292);
var mapOptions = {
        center:myLatlng,
        zoom:10,
        scrollwheel:false,
        disableDefaultUI:false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
        }
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

var markerImage = 'images/pigpin.png';

var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: markerImage
        });
}

google.maps.event.addDomListener(window, 'load', initialize);
