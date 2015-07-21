var myApp = angular.module('myApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/landing.html',
      controller: 'LandingController',
    })
   .when('/content/', {
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
   .when('/teaching/', {
    templateUrl: 'templates/teaching.html',
    controller: 'TeachingController',
  })
  .when('/projects/', {
    templateUrl: 'templates/projects.html',
    controller: 'ProjectsController',
  })
})
// Main controller
.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

// Landing page controller
.controller('LandingController', function($scope){
  $scope.number = 10
})

// About page controller
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page.  It was built using angular, and is being used as an exercise to teach multi-page architecture."
})

// Content controller
.controller('TeachingController', function($scope, TeachingData){
  TeachingData.then(function(data){
    $scope.courses = data
  })
})

// Projects controller
.controller('ProjectsController', function($scope, ProjectData){
  ProjectData.then(function(data){
    $scope.projects = data
  })
})


// Landing page data
.factory('ProjectData', ['$http','$sce', function($http, $sce){
  var ProjectData = $http.get("data/projects.csv").then(function(response){
     arr = CSVToArray(response.data);
     // Allow HTML rendering
     arr.map(function(d) {d.description = $sce.trustAsHtml(d.description);})
     return arr
  })
  return ProjectData
}])


// Teaching page data
.factory('TeachingData', ['$http','$sce', function($http, $sce){
  var TeachingData = $http.get("data/courses.csv").then(function(response){
     arr = CSVToArray(response.data);
    
     // Allow HTML rendering
     arr.map(function(d) {d.description = $sce.trustAsHtml(d.description);})
     return arr
  })
  return TeachingData
}])
