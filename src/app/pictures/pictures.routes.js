(function() {
    angular.module('app.pictures').config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'List',
                templateUrl: 'app/pictures/list.html'
            });
    });
})();
