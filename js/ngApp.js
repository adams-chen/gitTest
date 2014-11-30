var app = angular.module("app",[]);

app.controller("MainController",function($scope){
	$scope.photo = {
		url: "images/hr360-log.jpeg",
		//url: "http://upload.wikimedia.org/wikipedia/en/7/75/DowntownSF.jpg",
		date: "january 1, 2014"
	}
})

// app.directive("photo",function(){
// 	return {
// 		restrict: "E",
// 		template : '<figure><img width="500px"/><figcaption/></figure>',
// 		replace: true,
// 		link: function(scope,element,attrs){
// 			attrs.$observe("caption",function(value){
// 				element.find('figcaption').text(value)
// 			});
// 			attrs.$observe('photoSrc',function(value){
// 				element.find('img').attr('src',value)
// 			});
// 		}
// 	}
// })



app.directive('photo', function(){
	return {
		restrict: "E",
		template: '<figure>'+
		          '<img width="500px" ng-src="{{photoSrc}}"/>'+
		          '<figcaption>{{caption}}</figcaption>'+
		          '</figure>',
		replace : true,
		scope:{
			caption: "@",
			photoSrc: "@"
		}
	}
})


