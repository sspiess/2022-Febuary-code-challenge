exports.computeTotalPrice = (productsArray) => {
    let productMap = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0};
    let discount = { 1: 1, 2: .95, 3: .90, 4: .80, 5: .75};
    let total = 0;

    productsArray.forEach( product => {
        productMap[product] += 1;
        total++;
    });

    price = 0;
    while (total > 0) {
       let match = 0;
       for(prop in productMap) {
           if (productMap[prop] > 0) {
               match++;
               total--;
               productMap[prop]--;
           }
       }
       price += match * 299 * discount[match];
       console.log(price);
    }
    
    return price.toLocaleString("en-US", {style:"currency", currency:"USD"});
}
