app.controller('MovieShowCtrl', function($scope, $http, $stateParams) {
  $scope.movie = $stateParams.movieData;
  console.log($stateParams.movieData);
})
