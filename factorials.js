/**Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer 
Print factorial of a given integer
*/

function extraLongFactorials(n) {
    let sum = 1
    for (let i = n; i > 0; i--) {
        sum = BigInt(sum) * BigInt(i)
    }
    console.log(BigInt(sum).toString())
}