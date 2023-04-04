import React from 'react'

const Faq = ({Qtext, answer}) => {
  return (
    <>
              <h3 className="text-head-pros">{Qtext}</h3>
              <p className="text-muted">{answer}</p>
    </>
  )
}

export default Faq