interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">{subtitle}</p>}
    </div>
  )
}
