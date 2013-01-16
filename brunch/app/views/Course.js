var View = require('views/View');
var template = require('templates/course');

module.exports = View.extend({
    template: template,

    initialize: function() {
        this.model.bind("change", this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.templateContext()));
        return this;
    }
});
