angular.module('myApp', [
    'myApp.controllers',
    'myApp.services',
    'ngRoute'
])
.config(function($sceDelegateProvider) {  
    $sceDelegateProvider.resourceUrlWhitelist(
        [
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain. **.
            'http://localhost:3000/**',
            'http://netdna.bootstrapcdn.com/**',
            'http://code.angularjs.org/**',
            'http://angular-ui.github.io/**'
        ])
})
.config(function($routeProvider){
    $routeProvider
        .when('/products', {templateUrl: 'product/products.html', controller: 'productsController'})
        .when('/products/details/:id', {templateUrl: 'product/product-details.html', controller: 'productsController'})
        .when('/products/edit/:id', {templateUrl: 'product/products-form.html', controller: 'productsController'})
        .when('/products/new', {templateUrl: 'product/products-form.html', controller: 'productsController'})
        .when('/category', {templateUrl: 'category/category.html', controller: 'categoryController'})
        .when('/supplier', {templateUrl: 'supplier/supplier.html', controller: 'supplierController'})
        .when('/employee', {templateUrl: 'employee/employee.html', controller: 'employeeController'})
        .otherwise({ redirectTo: '/products'});
})