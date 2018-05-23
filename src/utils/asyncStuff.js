// Write a test that just tests that the resolved string is correct
// e.g. promises('to buy you a car') -> 'I promise to buy you a car!'
export default function promises(myPromise) {
  if (myPromise === '') {
    return Promise.reject('You need to promise something!');
  }
  return Promise.resolve(`I promise to ${myPromise}!`);
}
