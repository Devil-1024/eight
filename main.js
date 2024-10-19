const eightTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const eightTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const eight1 = document.querySelector("#eight1");
const eight2 = document.querySelector("#eight2");
const eight3 = document.querySelector("#eight3");

//回调地狱版本


/*
eight1.animate(eightTumbling, eightTiming).finished
  .then(() => {
    return eight2.animate(eightTumbling, eightTiming).finished;
  })
  .then(() => {
    return eight3.animate(eightTumbling, eightTiming).finished;
  })
  .catch(error => {
    console.error("动画发生错误:", error);
  });
*/


// Promise 链版本

/*
eight1.animate(eightTumbling, eightTiming).finished
  .then(() => eight2.animate(eightTumbling, eightTiming).finished)
  .then(() => eight3.animate(eightTumbling, eightTiming).finished)
  .catch(error => {
    console.error("动画发生错误:", error);
  });
*/


  // async/await 版本

const animateSequentially = async () => {
  try {
    await eight1.animate(eightTumbling, eightTiming).finished;
    await eight2.animate(eightTumbling, eightTiming).finished;
    await eight3.animate(eightTumbling, eightTiming).finished;
  } catch (error) {
    console.error("动画发生错误:", error);
  }
};

animateSequentially();