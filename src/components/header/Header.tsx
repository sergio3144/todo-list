import darkImageMode from '../../assets/bg-desktop-dark.jpg'

/* type PropsHeader = {
  children: ReactNode
} */

const Header = () => {
  return (
    <>
      <main>
        <figure>
          <img className="w-full h-[40vh] object-cover" src={ darkImageMode } alt="dark-image" />
        </figure>
      </main>
    </>
  )
}

export { Header }