

$(function () {

  $("#step1").hide();
  $("#step2").hide();

  $("#bttnstep1").click(function()
{
  $("#step1").show();
  $("#step2").hide();

});

$("#bttnstep2").click(function()
{
$("#step1").hide();
$("#step2").show();

});
});

console.log($("h1").attr("ng-reply"));



var myApp = angular.module('myApp',[]);

myApp.controller('mainController',function()
{


});
