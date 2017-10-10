var frameModule = require('ui/frame');
var page;
var email;
var observableModule = require('data/observable');
var user = UserViewModel();

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
  };

exports.signIn = function () {
      user.login();
    };

exports.register = function () {
    var topmost = frameModule.topmost();
    topmost.navigate('views/register/register');
  };
