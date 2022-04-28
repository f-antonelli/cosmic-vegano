import React from 'react'
import { Helmet } from 'react-helmet'

import PageNotFound from '../../components/PageNotFound'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Ups ! esto NO es vegano | Cosmic Vegano</title>
      </Helmet>
      <PageNotFound />
    </>
  )
}

export default NotFound
