var knickKnacks = angular.module("KnickKnacks", []);

//first custom directive
knickKnacks.directive("superman", function(){
	return {
		restrict: "E", //E for "element"
		template: "<div>Here I am to save the day!</div>"
	}
});


//controller to play with second custom directive
knickKnacks.controller('Ghost', function(){
	var ghost = this;
	ghost.message = "boo!!!";
});

//second custom directive
knickKnacks.directive("sayBoo", function(){
	return function(scope, element, attrs){ //this is called a linking function
		console.log(scope.ghost.message);
		element.text(scope.ghost.message + " \n " + attrs.scaree + " runs away!");  //.text is part of jquery lite, included with angular
	}
});


//Notes: not the best example b/c it would be easier to do this with templates, 
//and you typically DON'T want to inherit scope like we did above.  There are better ways
