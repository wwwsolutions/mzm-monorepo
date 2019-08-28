module.exports = {
  name: 'web-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
