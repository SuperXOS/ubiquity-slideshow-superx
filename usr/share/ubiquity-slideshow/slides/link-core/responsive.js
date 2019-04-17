$(document).ready(function () {
  var wheight = $(window).height();

  $(".background").css("height", wheight);

  $(window).resize(function () {
    wheight = $(window).height();

    $(".background").css("height", wheight);
  });
});



// var checkitem = function () {
//   var $this;
//   $this = $("#carouselExampleControls");
//   if ($("#carouselExampleControls .carousel-inner .carousel-item:first").hasClass("active")) {
//     $this.children("#prev-slide").hide();
//     $this.children("#next-slide").show();
//   } else if ($("#carouselExampleControls .carousel-inner .carousel-item:last").hasClass("active")) {
//     $this.children("#next-slide").hide();
//     $this.children("#prev-slide").show();
//   } else {
//     $this.children(".carousel-control").show();
//   }
// };

// // checkitem();

// $("#carouselExampleControls").on('slid.bs.carousel', function () {
//   var $this;
//   $this = $("#carouselExampleControls");
//   if ($("#carouselExampleControls .carousel-inner .carousel-item:first").hasClass("active")) {
//     $this.children("#prev-slide").hide();
//     $this.children("#next-slide").show();
//   } else if ($("#carouselExampleControls .carousel-inner .carousel-item:last").hasClass("active")) {
//     $this.children("#next-slide").hide();
//     $this.children("#prev-slide").show();
//   } else {
//     $this.children(".carousel-control").show();
//   }
// })