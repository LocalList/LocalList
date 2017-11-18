let validPassword = function(password) {
    console.log('--this--', this);
    return this.password === password;
}

let users = [{
    username: 'brandon',
    password: 'password',
    id: 1,
    validPassword: validPassword
}];




module.exports = {
    findOne: (options, cb) => { 
        cb(null, users.find((user) => {
            console.log('--user2---', user);
            return user.username === options.username
        }));
    }
}