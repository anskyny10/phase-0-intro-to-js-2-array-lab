// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//name = "Ralph"
function destructivelyAppendCat(name) {
    cats.push(name)
    return cats;
}

//name = "Garfield"
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats;
}

//remove last
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
}

//remove first
function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}

//append
function appendCat(name) {
    const newCats = [...cats, name]
    return newCats;
}

//prepend
function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats;
}

//remove last
function removeLastCat() {
    const newCats = cats.slice(0, -1)
    return newCats;
}

//remove first
function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats;
}