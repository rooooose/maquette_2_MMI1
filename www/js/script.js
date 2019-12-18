$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

// init Flickity with jQuery
var $carousel = $('.main-carousel1').flickity({
  imagesLoaded: true,
  percentPosition: false,
  prevNextButtons: false,
  cellAlign: 'left',
  contain: true
});
// get instance
var flkty = $carousel.data('flickity');

var slider_length = flkty.cells;
$('div#count span:last-of-type').text(slider_length.length);
// access properties
$carousel.on('change.flickity', function(event, index) {
  $('div#count span:first-of-type').text(index+1);
});


$('div#count div.previous').on( 'click', function() {
  $carousel.flickity('previous');
});


$('div#count div.next').on( 'click', function() {
  $carousel.flickity('next');
});


$(document).ready(function(){

$( '.likeempty1' ).click(function() {
  $('.like1').toggleClass("active");
});

$( '.likeempty1' ).click(function() {
  $('.likeempty1').toggleClass("inactive");
});

$( '.like1' ).click(function() {
  $('.like1').toggleClass("active");
});

$( '.like1' ).click(function() {
  $('.likeempty1').toggleClass("inactive");
});


$( '.likeempty2' ).click(function() {
  $('.like2').toggleClass("active");
});

$( '.likeempty2' ).click(function() {
  $('.likeempty2').toggleClass("inactive");
});

$( '.like2' ).click(function() {
  $('.like2').toggleClass("active");
});

$( '.like2' ).click(function() {
  $('.likeempty2').toggleClass("inactive");
});


$( '.likeempty3' ).click(function() {
  $('.like3').toggleClass("active");
});

$( '.likeempty3' ).click(function() {
  $('.likeempty3').toggleClass("inactive");
});

$( '.like3' ).click(function() {
  $('.like3').toggleClass("active");
});

$( '.like3' ).click(function() {
  $('.likeempty3').toggleClass("inactive");
});


});
