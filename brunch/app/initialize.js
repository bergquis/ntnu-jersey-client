var application = require('Application');

$(function() {
    application.initialize();
    return Backbone.history.start();
});
