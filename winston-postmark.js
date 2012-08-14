(function() {
  var Postmark, winston,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  winston = require('winston');

  exports.Postmark = winston.transports.Postmark = Postmark = (function(_super) {

    __extends(Postmark, _super);

    function Postmark(options) {
      this.name = 'postmark';
      this.level = options.level || 'info';
      this.silent = options.silent || false;
      this.handleExceptions = options.handleExceptions || false;
      this.postmarkApiKey = options.postmarkApiKey || '';
      this.postmarkFrom = options.postmarkFrom || '';
      this.postmarkTo = options.postmarkTo || '';
      this.postmarkSubject = options.postmarkSubject || '';
      this.postmark = require('postmark')(this.postmarkApiKey);
    }

    Postmark.prototype.log = function(level, msg, meta, callback) {
      if (this.silent) return callback(null, true);
      this.postmark.send({
        'From': this.postmarkFrom,
        'To': this.postmarkTo,
        'Subject': this.postmarkSubject,
        'TextBody': "" + (JSON.stringify(msg)) + "\n\n\n" + (JSON.stringify(meta))
      });
      return callback(null, true);
    };

    return Postmark;

  })(winston.Transport);

}).call(this);
