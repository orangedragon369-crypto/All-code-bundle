async function lineSearch (find, array) {
    try{
        let i = 0;
        while (array[i] !== find) {
            i++;
        }
        return i;
    } catch (error) {
        return -1;
    }
}