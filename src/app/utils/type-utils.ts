/**
 * Use this type to get the indices of a tuple as a union type.
 * For example, if you have a tuple type `const myTuple = ['a', 'b', 'c'] as const`,
 * then `Indices<typeof myTuple>` will be `0 | 1 | 2`.
 * This is useful for creating types that depend on the indices of a tuple.
 */
export type Indices<T extends readonly unknown[]> = Exclude<Partial<T>['length'], T['length']>;
