import operations from '../../../operations';
import getSignals from '../../../getSignals.js';

export default function () {
    let m2OperationIndex = getSignals('.M2-select-values');
    let i7Signals = getSignals('.i7-select-values');
    let i6Signals = getSignals('.i6-select-values');
    let operationsList = operations(i7Signals, i6Signals);
    return {
        label: 'M2 - diagram of changes',
        data: operationsList[m2OperationIndex],
        backgroundColor:
            [
                'rgba(82, 95, 251, 0.20)',
                'rgba(82, 95, 251, 0.20)',
                'rgba(82, 95, 251, 0.20)',
                'rgba(82, 95, 251, 0.20)',
                'rgba(82, 95, 251, 0.20)',
                'rgba(82, 95, 251, 0.20)'
            ],
        borderColor:
            [
                'rgba(82, 95, 251, 1)',
                'rgba(82, 95, 251, 1)',
                'rgba(82, 95, 251, 1)',
                'rgba(82, 95, 251, 1)',
                'rgba(82, 95, 251, 1)',
                'rgba(82, 95, 251, 1)'
            ],
        borderWidth:
            1
    }
};