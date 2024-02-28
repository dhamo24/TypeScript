// Omit constructs a type by picking all properties from Type and then removing kes (string literal or union of string literals).

interface Todo{
    title: string;
    description: string;
    completed: boolean;
    createdat: number;
}

type Todopreview = Omit<Todo, 'description'>;

const todo1: Todopreview={
    title: 'Clean Room',
    completed: false,
    createdat: 111555444886,
 };

type TodoInfo = Omit<Todo, 'completed' | 'createdat'>;

const todoInfo: TodoInfo = {
    title: 'pick up kids',
    description: 'Kingdergarten closes at 5pm',
};