export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <article className={`bg-light-bg border border-light-border rounded-lg shadow-lg shadow-light-paragraph/10 dark:bg-dark-card-bg dark:border-dark-border dark:shadow-dark-secondary/50  overflow-hidden ${className}`}>
      {children}
    </article>
  )
}