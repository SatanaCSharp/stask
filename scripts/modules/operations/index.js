import operationAnd from './operationAnd.js';
import operationNand from './operationNand.js';
import operationNor from './operationNor.js';
import operationNxor from './operationNxor.js';
import operationOr from './operationOr.js';
import operationXor from './operationXor.js';

export default function (i7Signals, i6Signals) {
    return [
        operationOr(i7Signals, i6Signals),
        operationAnd(i7Signals, i6Signals),
        operationXor(i7Signals, i6Signals),
        operationNor(i7Signals, i6Signals),
        operationNand(i7Signals, i6Signals),
        operationNxor(i7Signals, i6Signals)
    ];

}