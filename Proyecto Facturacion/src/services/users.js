export const getAllUsers = async () => {
   return fetch('http://localhost:3000/users').then(response => response.json())
};

export const editUserStatus = async (DNI, status) => {
   return fetch('http://localhost:3000/users/status', {
      method: 'PATCH',
      body: JSON.stringify({
          userDni: DNI,
          opt: status == 1 ? 0 : 1,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
   })
      .then(response => response.json())
};