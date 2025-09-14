var filter = function(arr, fn) {
  let filteredArr = [];
  let i;
  let j = 0;

  for (i = 0; i < arr.length; i++)
  {
    if (fn (arr[i], i))
    {
        filteredArr[j] = arr[i];
        j++;
    }    
  }
  return (filteredArr);
};
