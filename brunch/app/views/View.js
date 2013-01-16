module.exports = Backbone.View.extend({
    templateContext: function () {
        if (this.model) {
            return this.model.attributes;
        }
    },

    render: function () {
        this.$el.html(this.template(this.templateContext()));
        return this;
    }
});
