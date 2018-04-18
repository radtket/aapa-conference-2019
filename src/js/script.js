$(window).load(() => {
  // Page loader

  $('body').imagesLoaded(() => {
    $('.page-loader div').fadeOut();
    $('.page-loader')
      .delay(200)
      .fadeOut('slow');
  });

  $(window).trigger('scroll');
  $(window).trigger('resize');
});

$(document).ready(() => {
  $(window).trigger('resize');
});

$(window).resize(() => {
  js_height_init();
});

function js_height_init() {
  (function($) {
    $('.js-height-full').height($(window).height());
    $('.js-height-parent').each(function() {
      $(this).height(
        $(this)
          .parent()
          .first()
          .height()
      );
    });
  })(jQuery);
}

function initMap() {
  const bounds = new google.maps.LatLngBounds();

  const locations = [
    ['Colorado Convention Center', 39.743163, -104.9971202, 1],
    ['Hyatt Regency Denver at Colorado Convention Center', 39.7433585, -104.995759, 2],
  ];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(39.743163, -104.9971202),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();

  let marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map,
    });

    bounds.extend(marker.position);

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
  map.fitBounds(bounds);
}

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
