/**
 * @file angular-sweet-alert
 * @author huangxueliang@baidu.com
*/

'use strict';

angular.module('ngSweetAlert', []).factory('SweetAlert', [
    '$rootScope', function ($rootScope, $q) {
        var swal = window.swal;

        // public methods
        var self = {

            swal: function (arg1) {
                var deferrd = $q.defer();

                swal(arg1, function (isConfirm) {
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
            }

        };
        return self;
    }
]);
