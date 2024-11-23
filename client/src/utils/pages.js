export const getPages = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPageNumbers = (totalPages) => {
  let numbers = [];
  for(let i = 0; i < totalPages; i++) {
    numbers.push(i + 1);
  }

  return numbers;
}