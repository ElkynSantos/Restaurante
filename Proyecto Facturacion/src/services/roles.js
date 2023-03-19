export const getAllCategoriesByUser = (username) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/roles/categories`, {
        credentials: 'include',
    }).then((response) => response.json());
};

export const getPermissionsByUser = () => {
    return fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/roles/user-permissions`,
        {
            credentials: 'include',
        }
    ).then((response) => response.json());
};

export async function getAllRoles() {
    await fetch('http://localhost:3000/roles')
        .then((response) => response.json())
        .then((data) => {
            // console.log('================================');
            //   console.log(data.allRoles);

            //   handleInitRoles(data.allRoles);
            return data.allRoles;
            //setData(data.allRoles);
        })
        .catch((error) => {
            console.error(error);
        });
}