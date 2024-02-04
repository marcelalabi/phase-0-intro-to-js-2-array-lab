const cats = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendCat (cat) {cats.push(cat)
}
function destructivelyPrependCat (cat) {cats.unshift(cat)
}
function destructivelyRemoveLastCat () {cats.pop()
}
function destructivelyRemoveFirstCat () {cats.shift()
}
function appendCat (cat) {
    const catsCopy = [...cats]
    catsCopy.push(cat)
    return catsCopy
}
function prependCat (cat) {
    const catsCopy = [...cats]
    catsCopy.unshift(cat)
    return catsCopy
}
function removeLastCat (cat) {
const catsCopy = cats.slice();
    catsCopy.pop();
    return catsCopy;
}
function removeFirstCat (cat) {
    const catsCopy = cats.slice()
    catsCopy.shift();
    return catsCopy;
}