var app = angular.module('myApp.controllers', ["ui.bootstrap"]);
app.controller('productsController', function productsController($scope, $routeParams, $location, productsServices){
    $scope.products = [];
    $scope.product = {};
    $scope.id = $routeParams.id;
    $scope.categorySelect;
    $scope.nameFilter = '';

    // Get all product
    productsServices.getProducts()
        .then(function successCallback(response){
            $scope.products = response.data;
            //console.log( $scope.products);
            //Pagination 
            // $scope.curPage = 1;
            // $scope.itemsPerPage = 5;
            // $scope.maxSize = 5;

            // this.items = $scope.products;

            // $scope.numOfPages = function () {
            //     return Math.ceil($scope.products.length / $scope.itemsPerPage);
            // };

            // $scope.$watch("curPage + numPerPage", function () {
            //     var begin = ($scope.curPage - 1) * $scope.itemsPerPage,
            //     end = begin + $scope.itemsPerPage;

            //     $scope.productFilteredItems = $scope.products.slice(begin, end);
            //     console.log($scope.productFilteredItems);
            // });

        },function errorCallback(response){
            console.log('Error: ',response);
    });

    // Get product by id
    if($scope.id !== undefined){
        productsServices.getProductById($scope.id)
            .then(function successCallback(response){
                $scope.product = response.data;
            },function errorCallback(response){
                console.log('Error: ',response);
        });
    }

    // Function Delete product
    $scope.deleteProduct = function(id){
        productsServices.deleteById(id)
        .then(function successCallback(response){
            console.log('Delete success: ', response);
        },function errorCallback(response){
            alert('Error: ', response);
        });
    }

    // Function Insert product
    $scope.createOrUpdateProduct = function(){
        if($scope.product.id === undefined){
            productsServices.insertProduct($scope.product)
            .then(function successCallback(response){
                alert('Insert success');
                $location.path("#/products");
            }, function errorrCallback(response){
                alert('Error: ', response);
            })
        }else{
            productsServices.updateProduct($scope.product)
            .then(function successCallback(response){
                alert('Update success');
                $location.path("#/products");
            }, function errorrCallback(response){
                alert('Error: ', response);
            })
        }
    }

    // Function Update product
    $scope.updateProduct = function(){
        console.log($scope.product);
    }

    // Filter product by category
    $scope.filterProductByCategory = function(category){
        $scope.categorySelect = category;
        //$scope.productFilteredItems = $scope.products.filter(product => product.category_id === category);
    }

    // Filter product by name
    $scope.filterProductByName = function(name){
        $scope.nameFilter = name;
    }

    // Select input file img
    $scope.SelectFile = function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $scope.product.img = e.target.result;
            $scope.$apply();
        };
        reader.readAsDataURL(e.target.files[0]);
    };
})
