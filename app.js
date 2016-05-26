app.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/',
      {
        templateUrl: 'templates/index.html'
      }
    )
    .when('/projetos',
      {
        templateUrl: 'templates/projetos.html'
      }
    )
    .when('/habilidades',
      {
        templateUrl: 'templates/habilidades.html'
      }
    )
    .when('/curriculo',
      {
        templateUrl: 'templates/info.html'
      }
    )
    
    .otherwise({redirectTo: '/'});
}]);
