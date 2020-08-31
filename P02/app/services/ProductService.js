var app = angular.module('myApp.services', [])
app.factory('productsServices', function productsServices($http){
    var productsAPI = {};

    productsAPI.getProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/products'
        });
    }

    productsAPI.getProductById = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/products/' + id
        });
    }

    productsAPI.deleteById = function(id){
        return $http({
            method: 'DELETE', 
            url: 'http://localhost:3000/products/' + id
        });
    }

    productsAPI.updateProduct = function(product){
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/products/' + product.id,
            data: product
        });
    }

    productsAPI.insertProduct = function(product){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/products',
            data: product
        });
    }

    return productsAPI;
})