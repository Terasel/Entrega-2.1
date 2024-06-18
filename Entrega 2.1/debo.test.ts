import { debounce } from './debo';
import { describe, expect, beforeEach, afterEach, jest, test } from '@jest/globals';


describe('mòdul debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("la funció no s'executa abans d'acabar el delay", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(499);
    expect(callback).not.toBeCalled();
  });
  test("la funció s'executa quan s'acaba el delay", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    jest.advanceTimersByTime(500);
    expect(callback).toBeCalledTimes(1);
  });
  test("la funció només s'executa una vegada per delay", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    debounced();
    debounced();
    jest.advanceTimersByTime(500);
    expect(callback).toBeCalledTimes(1);
  });
  test("el delay es reinicia cada vegada que es crida a la funció", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    jest.advanceTimersByTime(50);
    debounced();
    jest.advanceTimersByTime(50);
    debounced();
    jest.advanceTimersByTime(499);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toBeCalledTimes(1);
  });
  test("la funció debounce es pot activar més d'una vegada", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);
    debounced();
    jest.advanceTimersByTime(500);
    debounced();
    jest.advanceTimersByTime(500);
    expect(callback).toBeCalledTimes(2);
  });
})

