const postfix = ['', 'K', 'M', 'B'];
export const format = value => {
    if (Math.abs(value) < 10000) return value.toFixed(0);
    let k = 1;
    let current = value;
    while (Math.abs(current /= 1000) > 999) k++
    const precision = Math.max(4 - current.toFixed(0).length, 1);
    return current.toFixed(precision) + postfix[k];
}

export const complexFormat = value => {
    if (Math.abs(value) < 10000) return {
        int: value.toFixed(0),
        frac: '',
        abbr: ''
    }
    let k = 1;
    let current = value;
    while (Math.abs(current /= 1000) > 999) k++
    const precision = Math.max(4 - current.toFixed(0).length, 1);
    const frac = (toPrecession(current, precision) % 1);
    return {
        int: current.toFixed(0),
        frac: frac.toFixed(precision).substr(1),
        abbr: postfix[k]
    }
}

export const toPrecession = (value, precession) => {
    const coef = Math.pow(10, precession);
    return Math.ceil(value * coef) / coef;
}