function twoPrimes(a, b) {
    var prime1 = true;
    for (var i = 2; i * i <= a; i++) {
        if (a % i == 0) {
            prime1 = false;
            break;
        }
    }
    var prime2 = true;
    for (var j = 2; j * j <= b; j++) {
        if (b % j == 0) {
            prime2 = false;
            break;
        }
    }

    if (prime1 == true && prime2 == true && a != 1 && b != 1) {
        console.log("True");
    } else {
        console.log("False");
    }
}
twoPrimes(11, 17)