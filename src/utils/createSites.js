const createSites = (inputs) => inputs.reduce((obj, input) => {
    obj[input.name] = input.value;
    return obj;
}, {});

export {
    createSites
};
