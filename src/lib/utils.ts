// https://dev.to/bwca/create-object-property-string-path-generator-with-typescript-13e3
type Primitive = string | number | bigint | boolean | undefined | symbol
export type PropertyStringPath<T, Prefix = ''> = {
  [K in keyof T]: T[K] extends Primitive | Array<any>
    ? `${string & Prefix}${string & K}`
    : `${string & Prefix}${string & K}` | PropertyStringPath<T[K], `${string & Prefix}${string & K}.`>
}[keyof T]
