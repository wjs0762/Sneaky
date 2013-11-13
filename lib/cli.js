// Generated by CoffeeScript 1.6.3
(function() {
  var cli, commander, config, deploy, init, _, _p;

  commander = require('commander');

  _ = require('underscore');

  _p = require('../package');

  deploy = require('./deploy');

  init = require('./init');

  config = require('./config');

  cli = function() {
    var args;
    commander.version(_p.version).usage('<command> [options] [projects]');
    commander.command('deploy').usage('[options] [projects]').description('deploy local projects to servers').option('-f, --force', 'force deploy repository').option('-c, --config <config>', 'user defined configure file').action(function() {
      var options, _options;
      options = _.last(arguments);
      _options = {
        projects: _.first(arguments, arguments.length - 1),
        force: options.force || false,
        config: options.config || null
      };
      return deploy(_options);
    });
    commander.command('init').description('init configure file in ~/.sneakyrc').action(function() {
      return console.log('comming soon');
    });
    commander.command('config').description('add or update your configure file').action(function() {
      return console.log('comming soon');
    });
    args = commander.parse(process.argv);
    if (process.argv.length < 3) {
      return commander.help();
    }
  };

  module.exports = cli;

}).call(this);