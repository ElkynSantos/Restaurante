const userIdGenerator = (name, lastname, date) => {
    const usernameArray = [
        name,
        lastname,
        Math.floor(Math.random() * 100)
            .toString()
            .padStart(2, '0'),
        date,
    ];
    let newUserName = '';
    for (let i = 0; i < usernameArray.length; i++) {
        newUserName += usernameArray[i].substring(0, 2).toUpperCase();
        if (newUserName.length >= 8) break;
    }
    newUserName = newUserName.substring(0, 8);
    return newUserName;
};

function generateToken() {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    const charLength = chars.length;
    const tokenLength = 12;

    for (let i = 0; i < tokenLength; i++) {
        token += chars.charAt(Math.floor(Math.random() * charLength));
    }

    return token;
}

export { userIdGenerator, generateToken };
