function func1(callbackFn) {
  console.log("step 1");
  callbackFn();
}

func1(
  (callbackFn = () => {
    console.log("callback function running step 2");
  })
);
