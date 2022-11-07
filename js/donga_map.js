document.addEventListener('DOMContentLoaded', function () {
  function naverMap() {
    var cityhall = new naver.maps.LatLng(37.5736005, 127.0302428);

    var map = new naver.maps.Map('map', {
      center: cityhall.destinationPoint(0, 50),
      zoom: 18,
    });

    var marker = new naver.maps.Marker({
      map: map,
      position: cityhall,
    });

    var contentString = '<div class="info">' + '<h3>동아오츠카 서울사무소</h3>' + '</div>';

    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,
    });

    naver.maps.Event.addListener(marker, 'click', function (e) {
      console.log(infowindow.getMap());
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });

    infowindow.open(map, marker);

    document.querySelector('#map .info').addEventListener('click', function () {
      infowindow.close();
    });
  }
  naverMap();
});
