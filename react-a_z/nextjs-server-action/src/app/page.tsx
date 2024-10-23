import Image from "next/image";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

export default function Home() {

  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
}
