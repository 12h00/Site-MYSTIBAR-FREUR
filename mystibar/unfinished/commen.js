export function isValidUserName(name) {
    return name.length >= 6;
}

export function isValidEmail(email) {
    // Regular expression to match the format of an email address
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email)
}

export function isValidDate(birthDate) {
    if (birthDate != '') {
        // Split the date into day, month, and year components
        const [day, month, year] = birthDate.split('/');

        // Create a new date object with the components
        // month - 1 because the month property is zero-indexed
        const date = new Date(year, month - 1, day);

        // Check if the date is valid
        return date.getDate() == day && date.getMonth() + 1 == month && date.getFullYear() == year;
    } else {
        return true;
    }
}

export function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
}