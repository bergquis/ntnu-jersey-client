var CoursesView = require('views/Courses'),
    CourseView = require('views/Course'),
    Course = require('models/Course'),
    Courses = require('models/Courses');

module.exports = Backbone.Router.extend({
    routes: {
        ':code': 'course',
        '*default': 'courselist'
    },

    courselist: function() {
        if (this.courseView) {
            $('#content').html(this.coursesView.render().el);
            return;
        }

        var courses = new Courses();
        courses.fetch({
            success: function(data) {
                this.coursesView = new CoursesView({collection: data});
                $('#content').html(this.coursesView.render().el);
            }
        });
    },

    course: function(code) {
        var course = new Course({id: code});
        course.fetch({
            success: function(data) {
                this.courseView = new CourseView({model: data});
                $('#content').html(this.courseView.render().el);
                $(document).scrollTop(0);
            }
        });
    }
});
