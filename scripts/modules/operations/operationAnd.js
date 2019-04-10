export default function (i7Signals, i6Signals) {
    return i7Signals.map(function (currentSignal, index) {
        if (currentSignal && i6Signals[index]) {
            return 1;
        }
        return 0;
    });
}