
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
    if (typeof matrix == "object") {
        matrix.map((j, i) => ((i + 1) % 2 === 0 ? (j = j.reverse()) : (j = j)));
        let array = [];
        matrix.forEach((element) => {
            array.push(...element);
        });
        return array;
    } else return [];

}
