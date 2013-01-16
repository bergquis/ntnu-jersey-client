exports.config =
  paths:
    public: '../app'
      
  plugins:
    uglify: {mangle_options: {mangle: false}}

  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
      order:
        before: [
          'vendor/scripts/jquery.js',
          'vendor/scripts/underscore.js',
          'vendor/scripts/backbone.js',
          'vendor/scripts/backbone-mediator'
        ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'css/app.css'
      order:
        before: ['vendor/styles/bootstrap.css', 'vendor/styles/bootstrap-responsive.css']

    templates:
      defaultExtension: 'hbs'
      joinTo: 'js/templates.js'
