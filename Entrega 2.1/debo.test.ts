import { debounce } from './debo';
import { describe, expect, beforeEach, afterEach, jest, test } from '@jest/globals';


describe('mòdul debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("funcionamient correcte de la funció debounce", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(499);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toBeCalledTimes(1);

    jest.advanceTimersByTime(1);
    expect(callback).toBeCalledTimes(1);

    debounced();
    jest.advanceTimersByTime(500);
    expect(callback).toBeCalledTimes(2);
  });
})

