var Collection = require('models/Collection'),
    Course = require('models/Course');

module.exports = Collection.extend({
    url: 'http://localhost:8181/json/api/course',
    model: Course,

    search: function(letters) {
        if (letters == "") return this;

        var pattern = new RegExp(letters, "gi");
        var names = this.filter(function(data) {
            return pattern.test(data.get("name"));
        });
        var codes = this.filter(function(data) {
            return pattern.test(data.get("code"));
        });

        var result = _(_.union(names, codes));
        return result;
    }
});
