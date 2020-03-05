import {useState} from 'react';

const useForm = (initModel, onSubmit) => {
    const [inputs, setInputs] = useState(initModel);

    const handleChange = (name, event) => {
        event.persist();
        inputs.forEach((input) => {
            if (input.name === name) {
                input.value = event.target.value;
                parseInput(input);
                validateInput(input);
            }
        });
        setInputs([...inputs]);
    };

    const parseInput = input => input.value = input.defaultParse ? input.defaultParse(input.value) : input.value;

    const validateInput = (input) => {
        let alert = null;
        input.validators && input.validators.forEach((validator) => {
            alert = validator.isValid && !validator.isValid(input.value) ? validator.alert : null;
        });
        input.alert = alert;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.forEach((input) => validateInput(input));
        inputs.some(input => input.alert) ? setInputs([...inputs]) : onSubmit();
    };

    return {
        inputs,
        handleChange,
        handleSubmit
    };
};

export {
    useForm
};

