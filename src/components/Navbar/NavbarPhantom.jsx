import './navbar.sass'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const NavbarPhantom = () => {

  const { ref, inView } = useInView({
    threshold:1
  })

  // setTimeout(() => {
  //   let navbar = document.getElementById("navbar")
  //   inView? navbar.classList.remove("shadow") : navbar.classList.add("shadow")
  // }, 10)



  return (
    <div ref={ref} id="phantom"></div>
  );
}

export default NavbarPhantom;