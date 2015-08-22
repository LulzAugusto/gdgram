(function() {
    angular.module('app.pictures').factory('Instagram', function($http) {
        return {
            getPictures: function() {
                var url = 'https://api.instagram.com/v1/tags/nofilter/media/recent';
                var params = {
                    client_id: 'a4022a9946a84831aa6d7473ad6061af',
                    callback: 'JSON_CALLBACK'
                };

                return $http
                    .jsonp(url, {params:params})
                    .then(function(response) {
                        return response.data.data;
                    });
            }
        }
    });
})();
