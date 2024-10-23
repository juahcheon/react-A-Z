import Link from "next/link";
import React from "react";
import { Todo } from "./TodoList";
import { addTodo, deleteTodo } from "@/lib/actions";
import CheckBox from "./CheckBox";

const TodoItem = (todo: Todo) => {
  return (
    <form 
      action={addTodo}
      className='my-4 flex justify-between items-center'>
      <label htmlFor='completed' className='text-2xl hover:underline'>
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className='flex items-center gap-4'>
        <CheckBox todo={todo} />
        <button
          formAction={async () => {
            'use server';
            await deleteTodo(todo);
          }}
        >X</button>
      </div>
    </form>
  );
};

export default TodoItem;
