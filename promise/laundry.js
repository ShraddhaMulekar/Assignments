function loadClothes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are loaded into the washing machine");
      resolve();
    }, 2000);
  });
}
function startWashing() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Washing cycle started");
      resolve();
    }, 3000);
  });
}

function dryClothes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are dried");
      resolve();
    }, 2000);
  });
}

function foldClothes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are folded");
      resolve();
    }, 1000);
  });
}

function ironClothes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are ironed");
      resolve();
    }, 2000);
  });
}

loadClothes()
  .then(() => startWashing())
  .then(() => dryClothes())
  .then(() => foldClothes())
  .then(() => ironClothes())
  .then(() => {
    console.log("Laundry completed");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
