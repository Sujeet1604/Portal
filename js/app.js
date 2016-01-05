(function(){

	"use strict";
	
	var app = angular.module('myApp',[
        'ap.lateralSlideMenu','ngAnimate', 'ui.bootstrap'
    ]);
	
	// service	
	app.service('number',  function() {
      return {
        isPositive: function(operationPrice) {
          return String(operationPrice).indexOf("-") == -1;
        }
      };
	});
    



app.controller("selectFilter",function($scope){
    
 

$scope.filters = [
        {
            filterId: 1,
            title: 'Home',
        },
        {
            filterId: 2,
            title: 'About',
        },
        {
            filterId: 3,
            title: 'Finance',
        },
        {
            filterId: 4,
            title: 'HR',
        },
        {
            filterId: 5,
            title: 'Social',
        }
    ]; 
$scope.selectedIndex = 0;

$scope.select= function(i) {
  $scope.selectedIndex=i;
};
    

});
	
})();




$(document).ready(function(){       
               
    var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
    
    
                });