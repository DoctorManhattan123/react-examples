
/**
 * Todo: more type safety
 * @param _function
 * @param repeatArray 
 * @param repeatTimes 
 * @param nargs 
 */
export function repeatFunctionWithDifferentArgs1<A, RT>(_function: (a: A) => RT, repeatArray: Array<A>, repeatTimes: number): Array<RT> {
    let tmp = []
    for (let i = 0; i < repeatTimes; i++) {
        const retValue: RT = _function(repeatArray[i % repeatArray.length]);
        tmp.push(retValue);
    }
    return tmp;
}

/**
 * Todo: more type safety
 * @param _function
 * @param repeatArray 
 * @param repeatTimes 
 * @param nargs 
 */
 export function repeatFunctionWithDifferentArgs2<A, B, RT>(_function: (a: A, b: B) => RT, repeatArray: Array<A | B>, repeatTimes: number): Array<RT> {
    let tmp = []
    for (let i = 0; i < repeatTimes; i++) {
        const retValue: RT = _function(repeatArray[i % repeatArray.length] as A, repeatArray[(i+1) % repeatArray.length] as B);
        tmp.push(retValue);
    }
    return tmp;
}

/**
 * Todo: more type safety
 * @param _function
 * @param repeatArray 
 * @param repeatTimes 
 * @param nargs 
 */
 export function repeatFunctionWithDifferentArgs3<A, B, C, RT>(_function: (a: A, b: B, c: C) => RT, repeatArray: Array<A | B | C>, repeatTimes: number): Array<RT> {
    let tmp = []
    for (let i = 0; i < repeatTimes; i++) {
        const retValue: RT = _function(repeatArray[i % repeatArray.length] as A, repeatArray[(i+1) % repeatArray.length] as B, repeatArray[(i+1) % repeatArray.length] as C);
        tmp.push(retValue);
    }
    return tmp;
}