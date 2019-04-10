import operations from '../../../operations';
import getSignals from '../../../getSignals.js';

export default function () {
    let m1OperationIndex = getSignals('.M1-select-values');
    let i7Signals = getSignals('.i7-select-values');
    let i6Signals = getSignals('.i6-select-values');
    let operationsList = operations(i7Signals, i6Signals);
    return {
        label: 'M1 - diagram of changes',
        data: operationsList[m1OperationIndex],
        backgroundColor: [
            'rgba(137, 255, 109, 0.2)',
            'rgba(137, 255, 109, 0.2)',
            'rgba(137, 255, 109, 0.2)',
            'rgba(137, 255, 109, 0.2)',
            'rgba(137, 255, 109, 0.2)',
            'rgba(137, 255, 109, 0.2)'
        ],
        borderColor: [
            'rgba(137, 255, 109, 1)',
            'rgba(137, 255, 109, 1)',
            'rgba(137, 255, 109, 1)',
            'rgba(137, 255, 109, 1)',
            'rgba(137, 255, 109, 1)',
            'rgba(137, 255, 109, 1)',
        ],
        borderWidth: 1
    }
};