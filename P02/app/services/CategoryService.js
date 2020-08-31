app.factory('categoryServices', function categoryServices($http){
    var categoryAPI = {};

    categoryAPI.getCategories = function(){
        return $http({
            method: 'JSONP',
            url: 'http://localhost:3000/category'
        })
    }

    return categoryAPI;
})