const integerSanitizer = (number) => {
    const newNumber = number.replace(/\D/g, '');

    return newNumber;
};

export { integerSanitizer };
