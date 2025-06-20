interface props {
  title: string;
  description: string;
  className?: string;
}
export const CardHeader = ({title, description, className}: props) => {

  return (
    <header className={`${className}`}>
      <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">{title}</h2>
      <p className="text-light-paragraph dark:text-dark-paragraph text-sm">{description}</p>
    </header>
  )
}