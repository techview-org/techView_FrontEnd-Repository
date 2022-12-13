import Context from './Context'
import { useState } from 'react'

function ContextProvider({children}){

const [hi, setHi] = useState('hi')

const state = {
hi,
setHi
}

return(
    <Context.Provider value ={state}>
      {children}
    </Context.Provider>
)

}

export default ContextProvider;