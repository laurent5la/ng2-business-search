(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Dun and Bradsteet Angular 2 Business Search App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
