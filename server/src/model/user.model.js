class UserModel {
    username;
    email;
    hash;

    constructor(json) {
        Object.assign(this, json);
    }

}
