export const getAllUsers = () => {
    return fetch('http://localhost:3000/users').then((response) =>
        response.json()
    );
};

export const getUser = (DNI) => {
    return fetch('http://localhost:3000/users/user', {
        method: 'POST',
        body: JSON.stringify({ userID: DNI }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};

export const editUser = (user) => {
    return fetch('http://localhost:3000/users/user', {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};

export const editUserStatus = (DNI, status) => {
    return fetch('http://localhost:3000/users/status', {
        method: 'PATCH',
        body: JSON.stringify({
            userDni: DNI,
            opt: status == 1 ? 0 : 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};
