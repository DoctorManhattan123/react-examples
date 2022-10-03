export function isEmpty<T>(array: T[]): boolean {
    return array === undefined || array.length===0;
}

export function isNil<T>(obj: T) {
    return obj === undefined || obj === null;
}

export function repeat(repeatString: string, repeatTimes: number): string {
    if (repeatString === undefined || repeatString === "" || repeatTimes === 0 || repeatTimes === NaN) return "";
    let tmp = "";
    for (let i = 0; i < repeatTimes; i++) {
        tmp += repeatString
    }
    return tmp;
}

export function isBadString(str: string): boolean {
    return str === undefined || str === null  || str === "";
}

export function trim(inputString: string): string {
    if (isBadString(inputString)) return "";
    
    let firstNotSpace = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === " ") {
            firstNotSpace++;
        } else {
            break;
        }
    }
    let firstNotSpaceReverse = inputString.length;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[inputString.length-i-1] === " ") {
            firstNotSpaceReverse--;
        } else {
            break;
        }
    }
    let tmp = inputString.substring(firstNotSpace, firstNotSpaceReverse);
    return tmp;
}