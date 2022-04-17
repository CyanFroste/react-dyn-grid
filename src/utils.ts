import React from 'react';
import type { Dimensions } from './types';

export const debounce = <F extends (...args: any[]) => any>(
  fn: F,
  delay = 300
) => {
  let handle: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(handle);
    handle = setTimeout(() => fn(...args), delay);
  };
};

export const createStyles = <T extends { [name: string]: React.CSSProperties }>(
  styles: T
): Record<keyof T, React.CSSProperties> => styles;

export const getDimensions = (
  component: HTMLElement | null
): Dimensions | null =>
  component
    ? {
        width: component.clientWidth,
        height: component.clientHeight,
      }
    : null;
