export function print(str: string) {
    document.write(str + '<br/>')
}

export function printObject(object: Object) {
    document.write(JSON.stringify(object) + '<br/>')
}