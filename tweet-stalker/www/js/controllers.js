angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TimeLineCtrl', function($scope, twitterAPIService) {
  // twitterAPIService.clearCache();
  twitterAPIService.initialize();
  $scope.isConnected = twitterAPIService.isReady();
  if($scope.isConnected){
    getTweets();
  }
  $scope.connectTwitter = function(){
    twitterAPIService.connectTwitter().then(function(){
      if(twitterAPIService.isReady()){
        $scope.isConnected = true;
        getTweets();
      }
    });
  };

  function getTweets(){
    twitterAPIService.getLatestTweets().then(function(data) {
        $scope.tweets = data;
    }, function() {
        $scope.rateLimitError = true;
    });
  };
})
.controller('StalkCtrl', function($scope, Stalks){
  $scope.stalks = Stalks.all();
  $scope.activeStalk = $scope.stalks[Stalks.getLastActiveIndex()];
  $scope.createStalk = function(username){
    var newStalk = Stalks.newStalk(username);
    $scope.stalks.push(newStalk);
    Stalks.save($scope.stalks);
    $scope.selectStalk(newStalk, $scope.stalks.length - 1);
  };
  $scope.selectStalk = function(stalk, index) {
   $scope.activeProject = stalk;
   Stalks.setLastActiveIndex(index);
 };
})
.controller('MenuCtrl', function($scope, Stalk){
  $scope.stalks = Stalk.index();
}).
controller('NewStalkCtrl', function($scope, Stalk){
  $scope.stalk = {"twitter_user_id" : 0,
                  "url" : "",
                  "notification" : false};
  $scope.saveStalk = function(stalk){
    Stalk.create(stalk)
  };

});
