const styles = {
  base: 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  primary: 'bg-accent text-slate-950 hover:brightness-110 focus-visible:outline-accent',
  ghost: 'border border-border text-text hover:border-accent focus-visible:outline-accent',
}

const Button = ({ as: Component = 'button', variant = 'primary', className = '', ...props }) => {
  return <Component className={`${styles.base} ${styles[variant]} ${className}`} {...props} />
}

export default Button

