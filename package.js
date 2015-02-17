Package.describe({
  name: 'avital:react-in-blaze',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Use React components in Blaze template',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/avital/react-in-blaze',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('templating');
  api.use('hipertracker:reactjs@0.0.8');
  api.addFiles(['react-component.html', 'react-component.js'], 'client');
});

/*
 * TODO: add tests
 *
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('react-in-blaze');
  api.addFiles('react-in-blaze-tests.js');
});
 */
