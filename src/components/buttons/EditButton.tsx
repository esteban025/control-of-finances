const ChangeIcon = ({ className }: { className: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M14.515.456a1.555 1.555 0 00-2.2 0L6.58 6.19a1.556 1.556 0 00-.396.673l-.825 2.89a.667.667 0 00.824.824l2.89-.826c.254-.072.485-.209.672-.396l5.735-5.734a1.556 1.556 0 000-2.2l-.965-.965zm-1.257.942a.222.222 0 01.314 0l.965.966a.222.222 0 010 .314L13.415 3.8l-1.28-1.28 1.123-1.122zm-2.065 2.066l1.279 1.279-3.67 3.67a.221.221 0 01-.096.056l-1.736.496.496-1.736c.01-.036.03-.07.057-.096l3.67-3.67zM1.639 4.778a2.25 2.25 0 012.25-2.25h3.154a.75.75 0 000-1.5H3.889a3.75 3.75 0 00-3.75 3.75v7.333a3.75 3.75 0 003.75 3.75h7.333a3.75 3.75 0 003.75-3.75V8.445a.75.75 0 00-1.5 0v3.666a2.25 2.25 0 01-2.25 2.25H3.889a2.25 2.25 0 01-2.25-2.25V4.778z"></path></svg>
)

export const EditButton = () => {
  return (
    <div className="flex items-center gap-4 relative group">
      <button className="bg-light-secondary rounded-md p-1.5 border border-light-border cursor-pointer dark:bg-dark-bg/10 dark:border-dark-border dark:text-white/50 hover:bg-light-border/50 dark:hover:bg-dark-bg/50 transition-colors duration-300" onClick={() => handleChangeLimit(category.name)}>
        <ChangeIcon className="size-4" />
      </button>
      <div className="absolute top-[115%] left-1/2 -translate-x-2/3 bg-light-secondary rounded-lg border border-light-border text-xs p-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 dark:bg-dark-bg dark:border-dark-border dark:text-white/50 z-10">Configura {category.name} </div>
    </div>
  )
}