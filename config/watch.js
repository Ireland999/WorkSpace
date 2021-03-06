module.exports = {
  "js": {
    "files": "<%= config.app %>/**/*.js",
    "tasks": ["includeSource"],
    "options": {
      "spawn": false
    }
  },
  "dev": {
    "files": "<%= config.app %>/**/*.*",
    "options": {
      "livereload": true
    }
  }
};
