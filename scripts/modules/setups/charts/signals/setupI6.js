import getSignals from '../../../getSignals.js';

export default function () {
    return {
        label: 'I6 - diagram of changes',
        data: getSignals('.i6-select-values'),
        backgroundColor: [
            'rgba(211, 22, 111, 0.2)',
            'rgba(211, 22, 111, 0.2)',
            'rgba(211, 22, 111, 0.2)',
            'rgba(211, 22, 111, 0.2)',
            'rgba(211, 22, 111, 0.2)',
            'rgba(211, 22, 111, 0.2)',
        ],
        borderColor: [
            'rgba(211,22,111,1)',
            'rgba(211,22,111,1)',
            'rgba(211,22,111,1)',
            'rgba(211,22,111,1)',
            'rgba(211,22,111,1)',
            'rgba(211,22,111,1)',
        ],
        borderWidth: 1
    }
};