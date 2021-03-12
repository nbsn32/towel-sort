module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
      return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if(i % 2) {
        matrix[i].reverse();
      }
    }
    return [].concat(...matrix);
}
};
