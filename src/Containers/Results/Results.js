import React from 'react'
import { connect } from 'react-redux';

import './Results.css'

export const Result = ({ apts, hood}) => {


  return (
    <section className='results'>
      <p>{hood}</p>

    </section>
  )
}

const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood
})

export default connect(mapStateToProps)(Result)