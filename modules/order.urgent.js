angular.module('app.order', ['ui.router']).config(config);

function config($stateProvider) {
  $stateProvider.state('root.user', {
    url: '/user',
    label: '用户管理',
    templateUrl: 'views/user.html'
  });
}
