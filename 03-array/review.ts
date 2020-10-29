let reviews: number[] = [5, 5,5.5,4,1];
let total : number = 0;
for(let review of reviews){
    console.log(review);
    total+=review;
}

console.log(`Total review: ${total}`);