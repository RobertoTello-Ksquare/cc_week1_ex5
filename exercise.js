/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
const result= [];
arr.forEach((item) => {
    if(Array.isArray(item)){
     result.push(...(item));
    } else {
    result.push(item);
    }
});
return result;

    /* Only make changes below this comment */






/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;