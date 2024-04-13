export function minuteconvert(a , b) {
    function convertmin(a) {
        return a / 60
    }

    if (!convertmin(a) < b) {
        if (convertmin(a) * 60 > 60) {
            return convertmin(a).toFixed(2) + " minute"
        } else {
            return a + " second"
        }
    } else {
        return b + " minute"
    }
}

export function cyclecalculation(a, b) {
    return Math.ceil(a / b)
}