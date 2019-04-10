export default function (className) {
    return $(className).children().toArray().map(function (currentSelect) {
        return Number(currentSelect.value);
    });
}