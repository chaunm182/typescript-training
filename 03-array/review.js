var reviews = [5, 5, 5.5, 4, 1];
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    console.log(review);
    total += review;
}
console.log("Total review: " + total);
