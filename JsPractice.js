
//concat--可连接多个数组，不改变
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let arrC = arrA.concat(arrB);
console.log(arrC);

//join--把数组的所有元素放到一个字符串，不改变
let arr = arrA.join();
console.log(arr);

//push--末尾添加一个或多个数组，返回新的长度，改变
let arrPush = arrA.push(5);
console.log(arrPush);
console.log(arrA);

//pop--删除并返回最后一个元素，改变
let arrPop = arrA.pop();
console.log(arrPop);
console.log(arrA);

//shift--删除并返回第一个元素，改变
let arrShift = arrA.shift();
console.log(arrShift);
console.log(arrA);

//unshift--在开头添加一个或多个元素，返回新的长度，改变
let arrUnshift = arrA.unshift(1);
console.log(arrUnshift);
console.log(arrA);

//slice--返回选定元素,不改变
let arrSlice = arrA.slice(0,2);
console.log(arrSlice);

//splice--从选定位置删除/添加多个元素，改变
let arrSplice = arrA.splice(1,1,7,8,9);
console.log(arrSplice);
console.log(arrA);

//sort--按unicode进行排序，默认升序，改变
arrA.sort();
console.log(arrA);

//reverse--颠倒数组，改变
arrA.reverse();
console.log(arrA);

//indexOf--所查找的值的位置，存在输出位置，不存在-1，不改变
let index = arrA.indexOf(2);
console.log(index);

//lastIndexOf--从后往前查找，不改变
let indexLast = arrA.lastIndexOf(1);
console.log(indexLast);

//every--用指定函数判断每个元素是否都满足条件,不改变
function isBigEnough(element){
    return element < 6;
}
let arrEvery = arrA.every(isBigEnough);
console.log(arrEvery);

//some--检测数组中的是否有元素满足条件,不改变
function compare(element){
    return element < 6;
}
let arrSome = arrA.some(compare);
console.log(arrSome);

//filter--创建新数组，通过指定方法判断是否满足条件，不改变
let arrFilter = arrA.filter(isBigEnough);
console.log(arrFilter);

//map--对每一项都运行函数，形成新数组，不改变
let arrMap = arrA.map(
    function (x){
        return x*2;
    }
)
console.log(arrMap);

//forEach--调用数组的每个元素，不改变
let arrForEach = [];
arrA.forEach(function (e){
    arrForEach.push(e);
})
console.log(arrForEach);

//数组去重
let arrList = [1, 2, 3, 2, 3, 4, 5, 6, 3];
function repeat(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1;j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arrList;
}
let noRepeat = repeat(arrList);
console.log(noRepeat);