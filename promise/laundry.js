function loadClothes(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are loaded into the washing machine");
      resolve();
    }, time);
  });
}
function startWashing(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Washing cycle started");
      resolve();
    }, time);
  });
}

function dryClothes(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are dried");
      resolve();
    }, time);
  });
}

function foldClothes(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are folded");
      resolve();
    }, time);
  });
}

function ironClothes(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Clothes are ironed");
      resolve();
    }, time);
  });
}

// loadClothes(2000)
//   .then(() => startWashing(3000))
//   .then(() => dryClothes(2000))
//   .then(() => foldClothes(1000))
//   .then(() => ironClothes(2000))
//   .then(() => {
//     console.log("Laundry completed");
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

async function doLaundry() {
    try {
        await loadClothes(2000);
        await startWashing(1000);
        await dryClothes(500);
        await foldClothes(1000);
        await ironClothes(2000);
        console.log("Laundry completed");
    } catch (error) {
        console.log("Error", error)
    }
}
doLaundry()
