import { WritableSignal } from '@angular/core';

export const addToSignalMap = <K, V>(map: WritableSignal<Map<K, V>>, key: K, value: V): void => {
  const result = new Map<K, V>();
  for (const [k, v] of map().entries()) {
    result.set(k, v);
  }
  result.set(key, value);
  map.set(result);
};

export const removeFromSignalMap = <K, V>(map: WritableSignal<Map<K, V>>, key: K): void => {
  const result = new Map<K, V>();
  for (const [k, v] of map().entries()) {
    if (key === k) {
      continue;
    }
    result.set(k, v);
  }
  map.set(result);
};
