export const validateLogin = (formData) => {
    // Login validation code
    let Errors = {};

    if(!formData.email.trim()){
        Errors.email = "Email is required";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
        Errors.email = "Please enter a valid email";
    }

    // Password validation code
    if(!formData.password){
        Errors.password = "Password is required";
    }else if (formData.password.length < 8) {
        Errors.password = "Password must be at least 8 characters";
    } 

    return Errors
};