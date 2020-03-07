import {checkIsFilled} from './utils/checkIsFilled';
import {isValidURL} from './utils/isValidURL';

const formModel = () => [
    {
        name: 'currentSite',
        label: 'Current Site',
        value: '',
        validators: [
            {
                isValid: value => checkIsFilled(value),
                alert: 'Current site is empty'
            },
            {
                isValid: value => isValidURL(value),
                alert: 'Current site is not valid'
            }
        ]
    },
    {
        name: 'newSite',
        label: 'New Site',
        value: '',
        validators: [
            {
                isValid: value => checkIsFilled(value),
                alert: 'New site is empty'
            },
            {
                isValid: value => isValidURL(value),
                alert: 'New site is not valid'
            }
        ]
    }
];

export {
    formModel
};
