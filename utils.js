export const test = async function (name, cb) {
    console.time(name);
    let result = await cb();
    console.timeEnd(name);

    return result;
}