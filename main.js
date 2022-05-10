
/* 
* Comparison is case sensitive.
* Function prints the result and does not return it.
* Characters are not repeated in the output.
*/
function exclusiveSubString(a = '', b = '') {
    
    // Convert strings to array of single character
    const _a = a.split('')
    const _b = b.split('')

    let aNotB = [], bNotA = []
    _a.forEach(val => {
        if (!(_b.includes(val)) && !(aNotB.includes(val))) {
            aNotB.push(val)
        }
    })

    _b.forEach(val => {
        if (!(_a.includes(val)) && !(bNotA.includes(val))) {
            bNotA.push(val)
        }
    })

    const _aNotB = aNotB.length > 0 ? aNotB.join('') : null
    const _bNotA = bNotA.length > 0 ? bNotA.join('') : null

    console.log(`str1: ${a}`)
    console.log(`str2: ${b}`)
    console.log(`op1: ${_aNotB}`)
    console.log(`op2: ${_bNotA}`)
}

exclusiveSubString('ABC', 'BC')
exclusiveSubString('BC', 'BANGALORE')

// Third TC to demonstrate that the solution excludes duplicates.
exclusiveSubString('BC', 'BANGALORELORE')