import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      {/*<div>*/}
      {/*  <a href="https://www.alf5.com.br" target="_blank" rel="noopener noreferrer">*/}
      {/*    ALF5 Sistemas*/}
      {/*  </a>*/}
      {/*  <span className="ms-1">&copy; 2023</span>*/}
      {/*</div>*/}
      <div className="ms-auto">
        <span className="me-1">Criado por</span>
        <a href="https://www.alf5.com.br" target="_blank" rel="noopener noreferrer">
          ALF5 Sistemas <span className="ms-1">&copy; 2023</span>
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
