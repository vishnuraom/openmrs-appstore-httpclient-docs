'use strict';

exports.alldetailsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * repo (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "code" : 123
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.detailsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * repo (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.packagefilesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * repo (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.packagesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * repo (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "code" : 123
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.repositoriesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * repo (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "code" : 123
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

