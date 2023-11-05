const HTMLPreprocessor = ( HTMLstring:string):string => {
    return HTMLstring.replace(/(>[\s]?)(<)/g, '$1\n$2');
} 

export default HTMLPreprocessor
