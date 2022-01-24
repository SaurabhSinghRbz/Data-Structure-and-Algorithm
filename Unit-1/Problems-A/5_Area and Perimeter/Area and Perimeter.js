function areaAndPerimeter(L1, B1, L2, B2) {
    var area1 = (L1 * B1);
    var area2 = (L2 * B2);
    var perimeter1 = (2 * (L1 + B1));
    var perimeter2 = (2 * (L2 + B2));

    if (area1 > area2) {
        console.log(true);
    } else {
        console.log(false);
    } if (perimeter1 > perimeter2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
areaAndPerimeter(1, 2, 5, 6)