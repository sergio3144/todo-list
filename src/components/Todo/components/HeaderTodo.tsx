import { IoSunnyOutline } from "react-icons/io5";

const HeaderTodo = () => {
  return (
    <>
      <main className="w-full flex justify-between items-center">
        <h1 className="text-baseColor text-4xl font-semibold">TODO</h1>
        <span className="cursor-pointer">
          <IoSunnyOutline className="text-baseColor" size={ 30 }/>
        </span>
      </main>
    </>
  )
}

export { HeaderTodo }
