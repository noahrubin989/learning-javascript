let stocks = {
  fruits: ["apple", "banana", "pear", "mango", "bleuberry"],
  liquid: ["water", "ice"],
  holder: ["cup", "cone"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitIdx, callbackFn) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitIdx]}`);
    callbackFn();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("food has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("machine has been started");
          setTimeout(() => {
            console.log(`${stocks.holder[0]} was selected`);
            setTimeout(() => {
              console.log("serve ice cream");
            }, 1000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
