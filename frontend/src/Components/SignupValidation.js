function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "El nombre no debe estar vacio"
    }
    else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "El nombre no debe estar vacio"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "problemas con el email"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "la contrasena no debe estar vacia"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Contrasena no valida"
    } else {
        error.password = ""
    }
    return error;

}

export default Validation;