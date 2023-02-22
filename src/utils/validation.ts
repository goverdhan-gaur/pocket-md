export type Validations = {
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    url?: boolean;
};

type ValidateInput = {
    value: string;
    validations: Validations;
};

type ErrorType = string | undefined

type ReturnObj = {
    hasError: boolean
    errorMessage: ErrorType
};

export const validateInput = ({ value, validations }: ValidateInput): ReturnObj => {

    const { minLength = 0, maxLength, required, url } = validations;

    let errorMessage: ErrorType;

    if (minLength && value.length < minLength) {
        errorMessage = `Minimum length is ${validations.minLength}`;
    }

    if (maxLength && value.length > maxLength) {
        errorMessage = `Maximum length is ${validations.maxLength}`;
    }

    if (url && value) {
        const urlPattern = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;
        const isValidUrl = urlPattern.test(value);
        if (!isValidUrl) {
            errorMessage = 'Invalid URL';
        }
    }
    if (required && !value.trim()) {
        errorMessage = 'This field is required';
    }

    const hasError = Boolean(errorMessage);

    return {
        hasError,
        errorMessage,
    };
};