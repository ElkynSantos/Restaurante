const userIdGenerator = (name, lastname, dni, date) => {
    const usernameArray = [name, lastname, dni, date];
    let newUserName = usernameArray
        .map((e) => e.substring(0, 2).toUpperCase())
        .join('');
    return newUserName;
};
export default userIdGenerator;
