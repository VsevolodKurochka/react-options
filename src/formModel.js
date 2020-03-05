import {checkIsFilled} from './utils/checkIsFilled';
import {removeLastSlash} from './utils/removeLastSlash';

const formModel = () => [
    {
        name: 'currentSite',
        label: 'Current Site',
        value: '',
        defaultParse: value => removeLastSlash(value),
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
        defaultParse: value => removeLastSlash(value),
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
