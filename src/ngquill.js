(function () {
  'use sctrict';

  var quillModule = angular.module('senior.social', ['ngQuill']);
  quillModule.config([
    'ngQuillConfigProvider',
    function (ngQuillConfigProvider) {
      ngQuillConfigProvider.set();
    },
  ]);
  quillModule.controller('ngQuillController', ngQuillController);

  function ngQuillController($scope) {
    var vm = this;
    vm.$scope = $scope;
    vm.model = '';
    vm.placeholder = 'Insira sua Mensagem'
    $scope.changeDetected = false;

    $scope.editorCreated = function (text) {
      console.log(text);
    };
    $scope.contentChanged = function (text) {
      $scope.changeDetected = true;
      console.log(text);
    };
  }
})();
