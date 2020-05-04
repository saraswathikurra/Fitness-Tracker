const account = require('../config/profile.json');

const getinfo = () => {
    return account;
};

const editprofile = (profile) => {


    delete account[0];
    account.push(profile);
    account.splice(0, 1)

}

module.exports = {
    Login(email, password) {
        const user = account.find((x) => x.email == email);
        if (!user) throw Error("You put wrong email.");
        if (user.password != password) throw Error("You put wrong password");
        return user;
    },

    getinfo,
    editprofile,
};