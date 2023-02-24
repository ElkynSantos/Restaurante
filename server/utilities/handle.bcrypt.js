import bcrypt from 'bcrypt';

//TODO: Encriptación de contraseñas

const encrypt = async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
};

const comparePassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword);
};

export { encrypt, comparePassword };
