import { useState } from "react"

export const NavDetails = () => {
  const itemsNav = ["Resumen", "Análisis", "Presupuestos", "Gastos"]
  const [activeItem, setActiveItem] = useState(0)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    // const $container-cards-details
    const $containerCardsDetails = document.querySelector(".container-cards-details")
    if (!$containerCardsDetails) return

    const target = event.currentTarget
    const index = itemsNav.indexOf(target.textContent || "")

    if (index === -1) return
    
    const scrollPosition = $containerCardsDetails.scrollWidth * (index / itemsNav.length)
    $containerCardsDetails.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    })
    setActiveItem(index)
  }

  return (
    <nav className="w-full">
      <ul className="grid grid-cols-4 gap-3 items-center justify-center bg-light-secondary dark:bg-dark-bg p-2 border border-light-border dark:border-dark-border rounded-full relative overflow-hidden">
        {
          itemsNav.map((item, idx) => (
            <li key={item} className="flex items-center justify-center">
              <a className="w-full text-center relative z-[1] py-1 cursor-pointer" onClick={handleClick}>{item}</a>
            </li>
          ))
        }
        <li className={`absolute inset-1 w-1/4 rounded-full bg-light-bg dark:bg-dark-card-bg pointer-events-none transition-transform duration-400 ease-in-out shadow-md dark:shadow-2xl border border-light-border dark:border-dark-border/30 ${activeItem === 0 ? "translate-x-0 left-1" : activeItem === 1 ? "translate-x-full left-0" : activeItem === 2 ? "translate-x-[200%] left-0" : "translate-x-[calc(300%-4px)] left-0"}`}></li>
      </ul>
    </nav>
  )
}