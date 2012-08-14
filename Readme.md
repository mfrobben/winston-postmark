# winston-postmark

A [Postmark][2] transport for [winston][0]. Inspired by [winston-graylog2][1] transport and [postmark.js][3].

## Installation
Tested on node-0.6.x, requires npm.

``` sh
  $ npm install winston-postmark
```

## Usage
``` js
  var winston = require('winston');
  winston.add(require('winston-postmark').Postmark, options);

```

Options are the following:

* __level:__ Level of messages this transport should log. (default: info)
* __silent:__ Boolean flag indicating whether to suppress output. (default: false)

* __postmarkApiKey:__ Your Postmark API key.
* __postmarkFrom:__ From email address.
* __postmarkTo:__ To email address
* __postmarkSubject:__ Email subject line

[0]: https://github.com/flatiron/winston
[1]: https://github.com/flite/winston-graylog2
[2]: http://www.postmarkapp2.org
[3]: https://github.com/voodootikigod/postmark.js