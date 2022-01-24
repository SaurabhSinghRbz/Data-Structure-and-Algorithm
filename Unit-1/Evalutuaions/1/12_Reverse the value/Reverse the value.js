function reverseTheValue(num) {
    var str = num.toString()
    var newStr = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    console.log(newStr)
}
reverseTheValue(197)