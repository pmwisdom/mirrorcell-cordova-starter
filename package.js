Package.describe({
    name: 'mirrorcell:cordova-starter',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Provides A One Stop Download For Useful Cordova Plugins',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Cordova.depends({
    'org.apache.cordova.vibration': '0.3.12',
    'org.apache.cordova.media': '0.2.15',
    'org.apache.cordova.battery-status': '0.2.12',
    'org.apache.cordova.console': '0.2.12',
    'org.apache.cordova.device': '0.2.13',
    'org.apache.cordova.geolocation': '0.3.11',
    'org.apache.cordova.statusbar': '0.1.9'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('mirrorcell:cordova-starter');
    api.addFiles('mirrorcell:cordova-starter-tests.js');
});
