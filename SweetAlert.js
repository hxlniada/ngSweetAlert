/**
 * @file angular-sweet-alert
 * @author huangxueliang@baidu.com
*/

'use strict';

angular.module('ngSweetAlert', []).factory('SweetAlert', [
    '$rootScope', '$q', function ($rootScope, $q) {
        var swal = window.swal;

        // public methods
        var self = {

            swal: function (arg1, arg2) {
                var deferrd = $q.defer();

                swal(arg1, function (isConfirm) {
                    if (angular.isFunction(arg2)) {
                        arg2(isConfirm);
                    }

                    if (isConfirm) {
                        deferrd.resolve();
                    }
                    else {
                        deferrd.reject();
                    }
                });

                return deferrd.promise;
            },
            success: function (title, message) {
                $rootScope.$evalAsync(function () {
                    swal(title, message, 'success');
                });
            },
            error: function (title, message) {
                $rootScope.$evalAsync(function () {
                    swal(title, message, 'error');
                });
            },
            warning: function (title, message) {
                $rootScope.$evalAsync(function () {
                    swal(title, message, 'warning');
                });
            },
            info: function (title, message) {
                $rootScope.$evalAsync(function () {
                    swal(title, message, 'info');
                });
            },
            showInputError: function (message) {
		$rootScope.$evalAsync(function () {
    	            swal.showInputError(message);
    	        });
            },
            close: function () {
            	$rootScope.$evalAsync(function (){
    	            swal.close();
    	        });
            }
        };
        return self;
    }
]);
