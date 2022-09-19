import style from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [style.success]: type === 'success',
        [style.error]: type === 'error',
      })}
    >
      {children}
    </div>
  )
}
