import { task } from 'utils';

self.onmessage = function () {
  const total = task();

  self.postMessage({ total });
};
