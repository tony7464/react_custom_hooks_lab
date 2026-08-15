import { useEffect, useState } from "react";

/**
 * Custom hook that keeps React state in sync with the browser's localStorage.
 * @param {string} key - The localStorage key (and form field name).
 * @param {*} initialValue - Fallback value when nothing is stored yet.
 * @returns {[any, Function]} The current value and a setter, just like useState.
 */
export function useLocalStorage(key, initialValue = null) {
  // Start from saved localStorage data if it exists; otherwise use initialValue.
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Whenever the key or the value changes, write it back to localStorage.
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
