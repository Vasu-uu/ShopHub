

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10;
}

function isValidCardNumber(cardNumber) {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleanNumber)) {
        return false;
    }
    
    
    return luhnCheck(cleanNumber);
}

function luhnCheck(cardNumber) {
    let sum = 0;
    let isEven = false;
    
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}

function isValidExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiryDate)) {
        return false;
    }
    
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; 
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year, 10);
    const expMonth = parseInt(month, 10);
    
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        return false;
    }
    
    return true;
}

function isValidCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

function isValidZipCode(zipCode) {
    
    return /^\d{5}(-\d{4})?$/.test(zipCode);
}

function isValidName(name) {
    
    return /^[a-zA-Z\s\-']{2,}$/.test(name.trim());
}

function isValidAddress(address) {
    
    return address.trim().length >= 5;
}

function isValidCity(city) {
    
    return /^[a-zA-Z\s\-']{2,}$/.test(city.trim());
}


function validateContactForm(formData) {
    const errors = {};
    
    if (!formData.name || !isValidName(formData.name)) {
        errors.name = 'Please enter a valid name (at least 2 characters)';
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject || formData.subject.trim().length < 3) {
        errors.subject = 'Please enter a subject (at least 3 characters)';
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Please enter a message (at least 10 characters)';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}


function validateSearchQuery(query) {
    const trimmedQuery = query.trim();
    
    if (trimmedQuery.length === 0) {
        return {
            isValid: false,
            error: 'Please enter a search term'
        };
    }
    
    if (trimmedQuery.length < 2) {
        return {
            isValid: false,
            error: 'Search term must be at least 2 characters long'
        };
    }
    
    if (trimmedQuery.length > 100) {
        return {
            isValid: false,
            error: 'Search term is too long'
        };
    }
    
    return {
        isValid: true,
        query: trimmedQuery
    };
}


function validateForm(form, validationRules) {
    const errors = {};
    const formData = new FormData(form);
    
    for (let [fieldName, value] of formData.entries()) {
        const rules = validationRules[fieldName];
        if (rules) {
            const fieldErrors = validateFieldWithRules(value, rules);
            if (fieldErrors.length > 0) {
                errors[fieldName] = fieldErrors;
            }
        }
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

function validateFieldWithRules(value, rules) {
    const errors = [];
    const trimmedValue = value.trim();
    
    if (rules.required && !trimmedValue) {
        errors.push('This field is required');
        return errors; 
    }
    
    if (rules.minLength && trimmedValue.length < rules.minLength) {
        errors.push(`Must be at least ${rules.minLength} characters long`);
    }
    
    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
        errors.push(`Must be no more than ${rules.maxLength} characters long`);
    }
    
    if (rules.pattern && !rules.pattern.test(trimmedValue)) {
        errors.push(rules.patternMessage || 'Invalid format');
    }
    
    if (rules.custom && typeof rules.custom === 'function') {
        const customResult = rules.custom(trimmedValue);
        if (customResult !== true) {
            errors.push(customResult);
        }
    }
    
    return errors;
}


function setupRealTimeValidation(form, validationRules) {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        const fieldName = input.name;
        const rules = validationRules[fieldName];
        
        if (rules) {
            
            input.addEventListener('blur', function() {
                validateSingleField(this, rules);
            });
            
            
            input.addEventListener('input', function() {
                clearFieldErrors(this);
            });
        }
    });
}

function validateSingleField(field, rules) {
    const errors = validateFieldWithRules(field.value, rules);
    
    if (errors.length > 0) {
        showFieldErrors(field, errors);
        return false;
    } else {
        clearFieldErrors(field);
        return true;
    }
}

function showFieldErrors(field, errors) {
    field.classList.add('border-red-500', 'focus:border-red-500');
    
    let errorContainer = field.parentNode.querySelector('.field-errors');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'field-errors mt-1';
        field.parentNode.appendChild(errorContainer);
    }
    
    errorContainer.innerHTML = errors.map(error => 
        `<p class="text-red-600 text-sm">${error}</p>`
    ).join('');
}

function clearFieldErrors(field) {
    field.classList.remove('border-red-500', 'focus:border-red-500');
    
    const errorContainer = field.parentNode.querySelector('.field-errors');
    if (errorContainer) {
        errorContainer.remove();
    }
}


function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    let formattedValue = value;
    
    if (value.length >= 6) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    
    input.value = formattedValue;
}


function formatCreditCard(input) {
    const value = input.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
}