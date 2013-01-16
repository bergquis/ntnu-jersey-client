var View = require('views/View'),
    Courses = require('models/Courses'),
    template = require('templates/courses'),
    courseitem = require('templates/courseitem');

module.exports = View.extend({
    template: template,

    events: {
        "click #searchBtn": "search",
        "submit #searchForm": "search",
        "keyup #searchForm": "search"
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    renderList: function(items) {
        var courseList = $('#courseList');
        courseList.html("");

        var txt = "";
        items.each(function(item) {
            txt += courseitem(item.toJSON());
        });
        courseList.html(txt);

        return this;
    },

    initialize: function() {
        this.collection.bind("reset", this.render, this);
    },

    search: function(e) {
        var letters = $('#searchCourse').val();
        this.renderList(this.collection.search(letters));
        return false; // stop propagation
    }
});
