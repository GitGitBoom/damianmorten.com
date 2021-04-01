import { useRef, createContext } from 'react'

export const StaggerContext = createContext({
  currentDelay: 0,
  getDelay: (): number => 0,
})

export interface Props {
  wait?: number
  staggerBy?: number
  children: React.ReactNode
}
export const StaggerTiming: React.FC<Props> = (props) => {
  const { wait = 0, staggerBy = 500, children } = props
  const currentDelay = useRef(wait)
  const getDelay = () => (currentDelay.current += staggerBy)

  return (
    <StaggerContext.Provider
      value={{
        currentDelay: currentDelay.current,
        getDelay,
      }}
    >
      {children}
    </StaggerContext.Provider>
  )
}
