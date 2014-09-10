angular.module("app.controllers",[]),angular.module("app.directives",[]),angular.module("app.services",[]),angular.module("app.routes",["ngRoute"]).config(["$locationProvider","$routeProvider",function(a){a.html5Mode(!1).hashPrefix("!")}]),angular.module("app",["app.controllers","app.directives","app.services","app.routes"]),angular.module("app.controllers").controller("UserController",["$http","$scope","UserAPI",function(a,b,c){var d=function(){c.add(b.UserVO).then(function(a){b.vos.push({userid:a.id,username:b.UserVO.username,flag:Number(b.UserVO.flag)}),console.log(a)}).catch(function(a){alert(a.message)})},e=function(a){c.resign({id:a.userid}).then(function(){f()}).catch(function(a){alert(a.message)})},f=function(){c.load().then(function(a){b.vos=a.map(function(a){return{username:a.username,flag:a.flag,userid:a.id}})})};b.save=d,b.resign=e,f()}]),angular.module("app.routes").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/user.html"})}]),angular.module("app.services").factory("UserAPI",["$http","$q",function(a,b){return{add:function(c){var d=b.defer();return a.post("//192.168.247.128:10010/api/user",c).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},resign:function(c){var d=b.defer();return a.post("//192.168.247.128:10010/api/user/resign",c).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},load:function(){var c=b.defer();return a.get("//192.168.247.128:10010/api/user").success(function(a){c.resolve(a)}).error(function(a){c.reject(a)}),c.promise}}}]);