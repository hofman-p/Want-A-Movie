app.factory('Movie', function($rootScope, $http) {
  return {
    List: function(movieTitle) {
      return $http.get($rootScope.API_LINK
        + 'search/movie'
        + "?api_key=" + $rootScope.API_KEY
        + "&query=" + encodeURI(movieTitle));
    }
  }
})
