Application = {
  initialize: function() {
    var Router = require('routers/Router');
    this.router = new Router();
    if (typeof Object.freeze === 'function') Object.freeze(this);
  }
}

module.exports = Application;
