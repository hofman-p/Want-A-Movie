app.controller('MovieListCtrl', function($scope, $http, Movie) {
  $scope.movie = {
    title: ""
  }

  $scope.movies = [];
  // Searching movie
  $scope.searchMovie = function () {
    if ($scope.movie.title == "") {
      $scope.movies = [];
      return ;
    }
    console.log("SEARCHING");
    Movie.List($scope.movie.title)
    .success(function(data) {
      console.log("Searching with " + $scope.movie.title);
      console.log(data);
      $scope.movies = data.results;
    })
    .error(function(err) {
      console.error("Error searching movies");
      console.error(err);
    })
  }
})
