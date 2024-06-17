import { debounce } from './debo';
import { describe, expect, beforeEach, afterEach, jest, test } from '@jest/globals';


describe('debounce module', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("funcionamiento correcto de la función debounce", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(100);
    debounced();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(499);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toBeCalledTimes(1);
  });
})

