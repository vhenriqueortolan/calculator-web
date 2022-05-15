import { useState } from 'react'
import { FooterButtons } from './components/FooterButtons'
import { HeadButtons } from './components/HeadButtons'
import { NumButtons } from './components/NumButtons'
import { OperationsButtons } from './components/OperatioonsButtons'
import { Screen } from './components/Screen'
import './main.css'

export function App() {
  const [onScreen, setOnScreen] = useState<string>('0')

  return (
    <>
      <div>
        <Screen onScreen={onScreen} />
      </div>
      <div className='flex gap-1 mt-2 font-main'>
        <div className='flex flex-col gap-1 w-[80%]'>
          <HeadButtons onScreen={onScreen} setOnScreen={setOnScreen}/>
          <NumButtons onScreen={onScreen} setOnScreen={setOnScreen}/>
          <FooterButtons onScreen={onScreen} setOnScreen={setOnScreen} />
        </div>
        <OperationsButtons />
      </div>
    </>
  )
}


