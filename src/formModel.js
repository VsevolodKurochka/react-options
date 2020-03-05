import {checkIsFilled} from './services/checkIsFilled';

const formModel = () => [
    {
        name: 'currentSite',
        label: 'Current Site',
        value: '',
        validators: [
            {
                isValid: value => checkIsFilled(value),
                alert: 'Current site is empty'
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
            }
        ]
    }
];

export {
    formModel
};
