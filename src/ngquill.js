(function () {
  'use sctrict';

var quillModule = angular.module('senior.social', ['ngQuill']);
quillModule.config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    ngQuillConfigProvider.set();
}]);
quillModule.controller('ngQuillController', [
    '$scope',
    function($scope) {
        $scope.title = '';
        $scope.changeDetected = false;

        $scope.editorCreated = function (editor) {
            console.log(editor);
        };
        $scope.contentChanged = function (editor, html, text) {
            $scope.changeDetected = true;
        };
    }
]);


}())
