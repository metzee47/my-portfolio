export const contactFormValidator = (email, name, subject, message) => {
    const errors = {}
    //email regex
    const emailRegex = /\S+@\S+\.\S+/
    const emailRegexError = "L'adresse email n'est pas valide."

    //helper
    const isEmptyField = (value, fieldName) => {
        if (!value || (typeof value === 'string' && value?.trim() === ''))
            errors[fieldName] = 'Ce champ ne peut pas etre vide.'
    }
    
    isEmptyField(email, 'email')
    isEmptyField(name, 'name')
    isEmptyField(subject, 'subject')
    isEmptyField(message, 'message')

    if (email && !emailRegex.test(email)) {
        errors.email = emailRegexError
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}