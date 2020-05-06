const account = require('../config/profile.json');

const getinfo = () => {
    return account;
};
const fs = require('fs');

//... sign up with my profile
const register = (myinfo) => {

    console.log("+++++ Register info is +++++");
    console.log(myinfo);

    const path = 'server/config/profile.json'; //... nodemon   ---- command to start server with nodemon   
    const registerinfo = JSON.stringify(myinfo, null, 2)
    fs.writeFileSync(path, '', (err) => {
        if (err) {
            console.error(err)
            throw err
        }
    })
    fs.writeFileSync(path, registerinfo, (err) => {
        if (err) {
            console.error(err)
            throw err
        }
    })
} 

//... edit my profile
const editprofile = (profile) => {
    console.log("+++++My profile is+++++");
    console.log(profile);

    const path = 'server/config/profile.json';  //... npm run dev ---- command to start server with nodemon
    // const path = './config/profile.json'; //... nodemon   ---- command to start server with nodemon   
    const jsonProfile = JSON.stringify(profile, null, 2)
    fs.writeFileSync(path, '', (err) => {
        if (err) {
            console.error(err)
            throw err
        }
    })
    fs.writeFileSync(path, jsonProfile, (err) => {
        if (err) {
            console.error(err)
            throw err
        } 
    })
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