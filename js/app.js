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
   .when('/about/', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
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
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})
// Projects controller
.controller('ProjectsController', function($scope, ProjectData){
  ProjectData.then(function(data){
    $scope.projects = data
    console.log('projects', $scope.projects)
  })
})


// Landing page data
.factory('ProjectData', ['$http','$sce', function($http, $sce){
  var Url   = "data/projects.csv";
  var ProjectData = $http.get(Url).then(function(response){
     arr = CSVToArray(response.data);

     // Allow HTML rendering
     arr.map(function(d) {d.description = $sce.trustAsHtml(d.description);})
     return arr
  })
  return ProjectData
}])

