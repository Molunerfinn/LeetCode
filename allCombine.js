/**
 * 
 * @param {string} str 
 */
function allCombine (str) {
  let result = []
  for (let i = 1; i <= str.length; i++) {
    allCombineCore(str, '', result, 0, i)
  }
  return result
}

/**
 * 
 * @param {string} str 
 * @param {string} path 
 * @param {string[]} result 
 * @param {number} start 
 * @param {number} depth 
 */
function allCombineCore (str, path, result, start, depth) {
  if (path.length === depth) {
    return result.push(path)
  }

  for (let i = start; i < str.length; i++) {
    path += str[i]
    allCombineCore(str, path, result, i + 1, depth)
    path = path.substring(0, path.length - 1)
  }
}