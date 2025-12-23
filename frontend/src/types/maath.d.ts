declare module 'maath/random/dist/maath-random.esm' {
  export * from 'maath/random';
}

declare module 'maath/random' {
  export function inSphere(buffer: Float32Array, options?: { radius?: number; center?: number[] }): Float32Array;
  export function onSphere(buffer: Float32Array, options?: { radius?: number; center?: number[] }): Float32Array;
  export function inCircle(buffer: Float32Array, options?: { radius?: number; center?: number[] }): Float32Array;
  export function onCircle(buffer: Float32Array, options?: { radius?: number; center?: number[] }): Float32Array;
  export function inRect<T extends Float32Array>(buffer: T, options?: { sides?: number | number[] }): T;
  export function onRect(buffer: Float32Array, options?: { sides?: number | number[] }): Float32Array;
  export function inBox(buffer: Float32Array, options?: { sides?: number[] | number; center?: number[] }): Float32Array;
  export function onBox(buffer: Float32Array, options?: { sides?: number[] | number; center?: number[] }): Float32Array;
  export * as noise from 'maath/random';
}