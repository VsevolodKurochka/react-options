const pattern = new RegExp(/^(http|https):\/\/[^ "]+$/);

const isValidURL = (str) => !!pattern.test(str);

export {
    isValidURL
};