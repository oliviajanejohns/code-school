var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.addPage = addPage;
service.addPoints = addPoints;
service.addLevel = addLevel;
service.getFriends = getFriends;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.getAll = getAll;
service.addFriend = addFriend;
service.getNonFriends = getNonFriends;

module.exports = service;

function getNonFriends(_id) {
    var deferred = Q.defer();
            db.users.findById(_id, function (err, user) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                if(user){
                    db.users.find({$and: [ { friends : {$ne : user.email}}, { email : {$ne : user.email}} ] }).toArray(function(err, users) {
                        // return users (without hashed passwords)
                        users = _.map(users, function (user) {
                            return _.omit(user, 'hash');
                        });
                        deferred.resolve(users);
                    });
                }
            });
    return deferred.promise;
}

function addPage(_id, page) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if(user){
            db.users.update(
                { _id: mongo.helper.toObjectID(_id) },
                { $set: { page: page } } ,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    
                    deferred.resolve();
                }
            );
        }
    });
    return deferred.promise;
}

function addPoints(_id, points) {
    console.log("add points - user.service.js");
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if(user){
            db.users.update(
                { _id: mongo.helper.toObjectID(_id) },
                { $set: { points: points } } ,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    
                    deferred.resolve();
                }
            );
        }
    });
    return deferred.promise;
}

function addLevel(_id, level) {
    console.log("add level - user.service.js");

    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if(user){
            db.users.update(
                { _id: mongo.helper.toObjectID(_id) },
                { $set: { level: level } } ,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    
                    deferred.resolve();
                }
            );
        }
    });
    return deferred.promise;
}

function authenticate(username, password) {
    var deferred = Q.defer();

    db.users.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                email: user.email,
                level: user.level,
                name: user.name,
                points: user.points,
                page: user.page,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getFriends(_id) {
    var deferred = Q.defer();
    var usersArray = [];

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if(user){
            if (user.friends instanceof Array) {
                var array = user.friends;
                var callbacks = array.length; // how many call backs are expected
                user.friends.forEach(function (email) {
                    db.users.findOne({email : email}, function(err, user) {
                        --callbacks;
                        if (err) {
                            deferred.reject(err);
                        }
                        else { 
                            if (user){
                                usersArray.push(_.omit(user, 'hash', 'friends'));
                            }
                            if (callbacks == 0){
                                deferred.resolve(usersArray);
                                return usersArray;
                            }
                        }
                    });
                }); // end of forEach
            } // end of array
        } // end of if user
    }); // end of db.users.findbyId
    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
    });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function addFriend(_id, friends) {
    var deferred = Q.defer();
    db.users.findOne({email : friends}, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if(user){
            db.users.update(
                { _id: mongo.helper.toObjectID(_id) },
                { $addToSet: { friends: friends } } ,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    
                    deferred.resolve();
                }
            );
        }
    });
    return deferred.promise;
}


function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            email: userParam.email,
            username: userParam.username,
            name: userParam.name
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    // db.users.findById(_id, function (err, user) {
    //     if (err) deferred.reject(err.name + ': ' + err.message);

    //     if (user) {
            
    //     }
    // });

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

