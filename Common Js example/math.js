exports.add = function(a,b){
    return a+b;
};
// eg 2

const getFullName = (name) =>{
    return name;
};
export default getFullName;  // 
module.exports.getFullName = getFullName;