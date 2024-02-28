//Non-nullable constructs a type by excluding null and undefined from type.

type T1 = NonNullable<string | number | undefined>;
//type T1 = string | number

type T2 = NonNullable<string[] | null | undefined>;
//type T2 = string[]