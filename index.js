fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for (let id = 0; id < newCollection.length; id++) {
        iteratee(newCollection[id], id, collection);
      }
      return collection;
    },


    map: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      const newestCollection = []

      for (let id = 0; id < newCollection.length; id++) {
        newestCollection.push(iteratee(newCollection[id], id, collection));
      }
      return newestCollection;
    },

    reduce: function(collection, iteratee, acc) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (let id = 0; id < collection.length; id++) {
      acc = iteratee(acc, collection[id], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    for (let id = 0; id < collection.length; id++) {
      if (predicate(collection[id])) {
        return collection[id]
      }
    }
    return undefined
  },

  filter: function(collection, predicate) {
  if (!(collection instanceof Array))
    collection = Object.values(collection)

  const newCollection = []

  for (let id = 0; id < collection.length; id++) {
    if (predicate(collection[id])) {
      newCollection.push(collection[id])
    }
  }
  return newCollection
},

  size: function(collection) {
  return (collection instanceof Array) ? collection.length : Object.keys(collection).length;

},

  first: function(array, n=false) {
    return (n) ? array.slice(0, n) : array[0];

  },

  last: function(array, n=false) {
     return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
   },

 compact: function(array) {
    const newArr = []

    for (let id = 0; id < array.length; id++) {
      if (!!array[id] == true) {
        newArr.push(array[id]);
      }
    }
    return newArr;
  },



  sortBy: function(array, callback) {
    const newArr = array
    // for (let val of array) {
    //   newArr.push(callback(val))
    //   // this.iSort(newArr)
      // }
    return newArr
   },

 uniq: function(array, sorted=false, iteratee=false) {
    if (sorted) {
      return function(array, iteratee) {
        const sorted = [array[0]]
        for (let id = 1; id < array.length; id++) {
          if (sorted[id-1] !== array[id])
          sorted.push(array[id])
    }
    return sorted
  }

} else if (!iteratee) {
  return Array.from(new Set(array))
} else {
  const modifiedVals = new Set()
  const uniqVals = new Set()
  for (let val of array) {
    const moddedVal = iteratee(val)
    if (!modifiedVals.has(moddedVal)) {
      modifiedVals.add(moddedVal)
      uniqVals.add(val)
      }
    }
    return Array.from(uniqVals)
  }

  },

  keys: function(object) {
    const keys = []
    for (let key in object) {
      keys.push(key)
    }
    return keys;
   },

   values: function(object) {
     const values = []
     for (let key in object) {
       values.push(object[key])
     }
     return values;
    },

    functions: function(object) {
      const functions = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort();
     },













  }
})()

fi.libraryMethod()
