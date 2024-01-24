import { FormNewTask } from "./components/FormNewTask"
import { HeaderTodo } from "./components/HeaderTodo"
import { TasksItems } from "./components/TasksItems"

const Todo = () => {
  return (
    <>
      <main className="max-w-[600px] m-auto">
        <section>
          <HeaderTodo/>
        </section>
        <section>
          <FormNewTask/>
        </section>
        <section>
          <TasksItems/>
        </section>
      </main>
    </>
  )
}

export { Todo }
