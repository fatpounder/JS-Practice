var cancellable = function(fn, args, t) {
    let timeoutId;
    const cancelFn = () => {
        clearTimeout(timeoutId);
    };
    timeoutId = setTimeout(() => {
        const result = fn(...args);
    }, t);
    return cancelFn;
}