export const getAllCategoriesByUser = (username) => {
   return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/roles/categories`, {
      credentials: 'include'
   }).then(response => response.json())
};

export const getPermissionsByUser = () => {
   return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/roles/user-permissions`, {
      credentials: 'include'
   }).then(response => response.json())
};