(() => {
  // src/hello.ts
  function helloFromUtilsPackage() {
    console.log("hi from package utils.");
  }

  // src/transformations/object.ts
  function isEmpty(array) {
    return array === void 0 || array.length === 0;
  }
})();
