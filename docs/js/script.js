"use strict";function js_height_init(){!function(e){e(".js-height-full").height(e(window).height()),e(".js-height-parent").each(function(){e(this).height(e(this).parent().first().height())})}(jQuery)}function initMap(){var e={lat:39.743163,lng:-104.9971202},t=new google.maps.Map(document.getElementById("map"),{zoom:15,center:e});new google.maps.Marker({position:e,map:t})}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}$(window).load(function(){$("body").imagesLoaded(function(){$(".page-loader div").fadeOut(),$(".page-loader").delay(200).fadeOut("slow")}),$(window).trigger("scroll"),$(window).trigger("resize")}),$(document).ready(function(){$(window).trigger("resize")}),$(window).resize(function(){js_height_init()}),window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t=document.getElementsByClassName("dropdown-content"),n=void 0;for(n=0;n<t.length;n++){var i=t[n];i.classList.contains("show")&&i.classList.remove("show")}}};