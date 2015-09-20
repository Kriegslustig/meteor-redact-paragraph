Package.describe({
  name: 'redact:paragraph',
  version: '0.0.0',
  documentation: 'README.md',
  repository: 'https://github.com/Kriegslustig/redact-paragraph.git',
  description: 'A extension that adds a parapgraph module to Redact '
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.3')
  api.use([
    'underscore',
    'templating',
    'redact:core'
  ])
  api.addFiles(['paragraph.html', 'paragraph.css'], 'client')
  api.addFiles(['paragraph.js'])
})