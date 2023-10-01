import ChannelUploader from '@/pages/Components/C/ChannelUploader'
import Layout from '@/pages/Components/L/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Channel Uploader</title>
      </Head>
      <Layout>
        <ChannelUploader />
      </Layout>
    </>
  )
}

export default index;