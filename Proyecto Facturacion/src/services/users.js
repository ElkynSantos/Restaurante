export const getAllUsers = () => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users`, {
        credentials: 'include',
    }).then((response) => response.json());
};

export const getUser = (DNI) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users/user`, {
        method: 'POST',
        body: JSON.stringify({ userID: DNI }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((response) => response.json());
};

export const editUser = (user) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users/user`, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((response) => response.json());
};

export const editUserStatus = (DNI, status) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users/status`, {
        method: 'PATCH',
        body: JSON.stringify({
            userDni: DNI,
            opt: status == 1 ? 0 : 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((response) => response.json());
};
