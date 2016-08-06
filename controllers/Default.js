'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.alldetailsGET = function alldetailsGET (req, res, next) {
  Default.alldetailsGET(req.swagger.params, res, next);
};

module.exports.detailsGET = function detailsGET (req, res, next) {
  Default.detailsGET(req.swagger.params, res, next);
};

module.exports.packagefilesGET = function packagefilesGET (req, res, next) {
  Default.packagefilesGET(req.swagger.params, res, next);
};

module.exports.packagesGET = function packagesGET (req, res, next) {
  Default.packagesGET(req.swagger.params, res, next);
};

module.exports.repositoriesGET = function repositoriesGET (req, res, next) {
  Default.repositoriesGET(req.swagger.params, res, next);
};
