export const checkValidateData = (email, password, name)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName = /^[A-Za-z][A-Za-z\s'-]*$/.test(name);

    if(!isValidName)
        return "Name is Invalid";
    if(!isValidEmail)
        return "Email is Invalid";
    if(!isValidPassword)
        return "Password is Invalid";
    return null;
} 