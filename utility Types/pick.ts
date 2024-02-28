//pick constructs a type by picking the set of properties keys (string literal or union of string literals)from type


interface Todo{
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title'| 'completed'>;

const todo: TodoPreview = {
    title: 'Clean Room',
    completed: false,
};