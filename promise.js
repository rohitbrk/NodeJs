// normal promise
const normal_promise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
};

normal_promise().then((data) => console.log(data)); // true

// promise.all() and promise.allSettled()
const p1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(true);
    }, 1000);
  });
};
const p2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 2000);
  });
};
const p3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 3000);
  });
};

const res = async () => {
  const data = await Promise.allSettled([p1(), p2(), p3()]);
  console.log(data);
};
res();

/* [
  { status: 'rejected', reason: true },
  { status: 'fulfilled', value: true },
  { status: 'fulfilled', value: true }
]
*/

// promise.all() : if one of the promise fails, the entire event fails
// promise.allSettled() : if one of the promise fails, only that specific promise's status will be shown rejected
