function readSyntax(syntax) {
 // code goes here
 let array = syntax.split('');
 let obj = {
     1: '}',
     2: '{',
     3: '[',
     4: ']',
     5: '(',
     6: ')',
     7: '<',
     8: '>'
 }
 console.log(array)
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== '}' && '{' || array[i] ==  '[' && ']' ||array[i] ==  '(' && ')'){
            return i
        } else {
            return 'ok'
        }  
    }
}


// module.exports = readSyntax;
console.log(readSyntax('[[<]'))
