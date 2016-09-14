var module = angular.module('angularApp',['ui.router','ngRoute']);

module.controller('formCreation',function($scope){
// submit button
$scope.submitprocess = function(){
    var result = document.getElementsByClassName("alertmsg");
    var data = angular.element(result);
    //var valid = true;
    angular.forEach(data,function(e){
      var valid = validation(e);
    })
}
//ng-keyup
$scope.changevalid = function(event){
var data = event.currentTarget;
var valid = validation(data);
}
//phone number validation
function validatePhone(txtPhone) {
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(txtPhone)) {
        return true;
    }
    else {
        return false;
    }
}
//email validation
var emailvalidation = function(){
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
//common validation
var validation = function(e){
  if(e.value!=""){
    e.nextElementSibling.style.display='none';
  }
  else{
    e.nextElementSibling.textContent="please enter the "+e.placeholder;
    e.nextElementSibling.style.display='block';        //var valid = false;
  }
}
});
