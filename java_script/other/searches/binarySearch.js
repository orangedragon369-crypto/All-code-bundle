function binarySearch (find, from){
    function inHalf(find, from) {
        let mid = Math.round((from.length-1)/2);
        let add = 0
        if (from.length == 1 && from[0] !== find) return -1;
        if (find === from.at(mid)) return from.length/2;
        else {
            add += find < from.at(mid) ? 0 : part;
            add += inHalf (find, from = find < from.at(mid) ? from.slice(0, mid): from.slice(mid, from.length));
            return add;
        }
    }
    return inHalf(find, from);
}

const fruit = ["apple", "avacado", "banana", "cucumber","dragon fruit", "grape","kiwi","mango","melon","orange","peach","pear","plum", "strawberry","tomato"];
console.log(binarySearch("grape", fruit));