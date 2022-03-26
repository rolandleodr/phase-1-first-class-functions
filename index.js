function receivesAFunction (callback) {
    console.log(callback());
}
const returnsANamedFunction = () => {
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction() {
    let fn = () => ''
    return () => '';
}