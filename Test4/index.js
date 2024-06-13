// Explain what the bug is, if any and how you would fix it.

for (var i = 0; i < 5; i++) {
  (function () {
    setTimeout(function () {
      console.log("Index:", i);
    }, Math.random() * 1000);
  })();
}

// Fixed Code
for (let i = 0; i < 5; i++) {
  (function () {
    setTimeout(function () {
      console.log("Index:", i);
    }, Math.random() * 1000);
  })();
}
