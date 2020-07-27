/* STRUCTURES */
const User = require("./User.js");
const Member = require("./Member.js");

class MemberArr {
    constructor(client) {
        this._client = client;
        this._members = [];
    }
    /* ACTIONS */
    find(query) {
        return this._members.find(query);
    }
    concat(arr) {
        arr.forEach(member => {
            member.id = member.user.id;
            member.user = new User(this._client, member.user);
            return new Member(this._client, member);
        });
        this._members = this._members.concat(arr);
    }
    list() {
        return this._members;
    }
}

module.exports = MemberArr;