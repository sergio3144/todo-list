
import { Todo } from "../Todo/Todo"
import { Header } from "../header/Header"

const CompletedApplication = () => {
  return (
    <>
      <main>
        <section className="relative">
          <Header/>
        </section>
        <section className="absolute top-[150px] left-0 right-0">
          <Todo/>
        </section>
      </main>
    </>
  )
}

export { CompletedApplication }
