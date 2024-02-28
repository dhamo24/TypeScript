// typescript provides the readonly modifier that allows you to mark the properties of class immutable. the assigment to a readonly property can only ocur in one of two places.

interface Todo{
    title: string;
}

const todo2: Readonly<Todo> = {
    title: 'complete Today task',
};

todo2.title = 'hello';
//canot assign to title because it is a read-only property