(function() {
    angular.module('app.pictures').controller('List', function($scope, Instagram) {
        Instagram
            .getPictures()
            .then(function(pics) {
                $scope.pictures = pics;
            });
    });
})();
