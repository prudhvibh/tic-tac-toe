let isSubset = function(set,superSet){
  return set.every(function(element){
    return superSet.includes(element);
  })
}

// exports.isSubset = isSubset;
