"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getClients = getClients;
exports.deleteClient = deleteClient;
exports.loginUser = loginUser;
exports.loginBygoogle = loginBygoogle;
exports.createClientGoogle = createClientGoogle;

var _Client = _interopRequireDefault(require("../models/Client.js"));

var _Clientbygoogle = _interopRequireDefault(require("../models/Clientbygoogle.js"));

var _Cart = _interopRequireDefault(require("../models/Cart.js"));

var _Favorite = _interopRequireDefault(require("../models/Favorite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createClient(_x, _x2) {
  return _createClient.apply(this, arguments);
}

function _createClient() {
  _createClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
<<<<<<< HEAD
    var _req$body, name, lastname, email, password, address, phone, dateBaseByClient, newClient;
=======
    var _req$body, name, lastname, email, password, address, phone, newClient, client_id;
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password, address = _req$body.address, phone = _req$body.phone;
            _context.next = 3;
            return _Client["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            dateBaseByClient = _context.sent;
            _context.prev = 4;

            if (dateBaseByClient) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return _Client["default"].create({
              name: name,
              lastname: lastname,
              email: email,
              password: password,
              address: address,
              phone: phone
            }, {
              fields: ['name', 'lastname', 'email', 'password', 'address', 'phone']
            });

          case 8:
            newClient = _context.sent;
<<<<<<< HEAD
=======

            if (!newClient) {
              _context.next = 15;
              break;
            }

            _context.next = 8;
            return _Client["default"].findOne({
              where: {
                name: newClient.name
              },
              attributes: ['id']
            });

          case 8:
            client_id = _context.sent;
            console.log(client_id.dataValues.id);
            _context.next = 12;
            return _Cart["default"].create({
              id_client: client_id.dataValues.id
            });

          case 12:
            _context.next = 14;
            return _Favorite["default"].create({
              id_client: client_id.dataValues.id
            });

          case 14:
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
            return _context.abrupt("return", res.json({
              message: 'Client created successfully',
              data: newClient
            }));

<<<<<<< HEAD
          case 12:
            return _context.abrupt("return", res.json({
              message: 'Usuario ya creado'
            }));

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](4);
=======
          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes Wrong',
              data: {}
            });

<<<<<<< HEAD
          case 19:
=======
          case 21:
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
          case "end":
            return _context.stop();
        }
      }
<<<<<<< HEAD
    }, _callee, null, [[4, 15]]);
=======
    }, _callee, null, [[1, 17]]);
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
  }));
  return _createClient.apply(this, arguments);
}

function getClients(_x3, _x4) {
  return _getClients.apply(this, arguments);
}

function _getClients() {
  _getClients = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var clients;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Client["default"].findAll();

          case 3:
            clients = _context2.sent;
            return _context2.abrupt("return", res.status(200).send(clients));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes Wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getClients.apply(this, arguments);
}

function deleteClient(_x5, _x6) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, client;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Client["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            client = _context3.sent;
            return _context3.abrupt("return", res.json({
              message: 'Client deleted successfully',
              data: client
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes Wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

function loginUser(_x7, _x8) {
  return _loginUser.apply(this, arguments);
}

<<<<<<< HEAD
function _loginUser() {
  _loginUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, email, password, dateBaseByClient;
=======
function _createClientGoogle() {
  _createClientGoogle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, givenName, familyName, email, googleId, newClient, client_id;
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context4.next = 3;
            return _Client["default"].findOne({
              where: {
                email: email,
                password: password
              }
            });

          case 3:
            dateBaseByClient = _context4.sent;
            _context4.prev = 4;

            if (!dateBaseByClient) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'User Login',
              data: dateBaseByClient
            }));

          case 9:
            return _context4.abrupt("return", res.json({
              message: 'User Login failed'
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](4);
            res.status(404).send(_context4.t0);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 12]]);
  }));
  return _loginUser.apply(this, arguments);
}

function loginBygoogle(_x9, _x10) {
  return _loginBygoogle.apply(this, arguments);
}

function _loginBygoogle() {
  _loginBygoogle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body3, googleId, email, dateBaseByGoogle;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, googleId = _req$body3.googleId, email = _req$body3.email;
            _context5.next = 3;
            return _Clientbygoogle["default"].findOne({
              where: {
                email: email,
                googleId: googleId
              }
            });

          case 3:
            dateBaseByGoogle = _context5.sent;
            _context5.prev = 4;

            if (!dateBaseByGoogle) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.json({
              message: 'User Login',
              data: dateBaseByGoogle
            }));

          case 9:
            return _context5.abrupt("return", res.json({
              message: 'User Login failed'
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](4);
            res.status(404).send(_context5.t0);
            console.log(_context5.t0);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 12]]);
  }));
  return _loginBygoogle.apply(this, arguments);
}

function createClientGoogle(_x11, _x12) {
  return _createClientGoogle.apply(this, arguments);
}

function _createClientGoogle() {
  _createClientGoogle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body4, givenName, familyName, email, googleId, dateBaseByGoogle, clientbygoogle;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, givenName = _req$body4.givenName, familyName = _req$body4.familyName, email = _req$body4.email, googleId = _req$body4.googleId;

            if (!(!givenName || !familyName || !email || !googleId)) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(404).send('Faltan datos'));

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return _Clientbygoogle["default"].findOne({
              where: {
                email: email
              }
            });

          case 6:
            dateBaseByGoogle = _context6.sent;

            if (dateBaseByGoogle) {
              _context6.next = 14;
              break;
            }

            _context6.next = 10;
            return _Clientbygoogle["default"].create({
              givenName: givenName,
              familyName: familyName,
              email: email,
              googleId: googleId
            });

<<<<<<< HEAD
          case 10:
            clientbygoogle = _context6.sent;
            res.status(200).send({
              message: 'user by google create',
              data: clientbygoogle
            });
            _context6.next = 15;
            break;

          case 14:
            res.status(200).send('Usuario ya creado');

          case 15:
            _context6.next = 20;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](3);
            console.error(_context6.t0);

          case 20:
=======
          case 7:
            newClient = _context4.sent;

            if (!newClient) {
              _context4.next = 18;
              break;
            }

            _context4.next = 11;
            return _Clientbygoogle["default"].findOne({
              where: {
                givenName: newClient.givenName
              },
              attributes: ['googleId']
            });

          case 11:
            client_id = _context4.sent;
            console.log(client_id);
            _context4.next = 15;
            return _Cart["default"].create({
              id_clientGoogle: client_id.dataValues.googleId
            });

          case 15:
            _context4.next = 17;
            return _Favorite["default"].create({
              id_clientGoogle: client_id.dataValues.googleId
            });

          case 17:
            return _context4.abrupt("return", res.status(200).send({
              message: 'user by google create',
              data: newClient
            }));

          case 18:
            _context4.next = 23;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](3);
            console.error(_context4.t0);

          case 23:
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
          case "end":
            return _context6.stop();
        }
      }
<<<<<<< HEAD
    }, _callee6, null, [[3, 17]]);
=======
    }, _callee4, null, [[3, 20]]);
>>>>>>> fd24989c48480e84f03e41b378a8f1279edfb876
  }));
  return _createClientGoogle.apply(this, arguments);
}