import ProductUploader from '@/pages/Components/P/ProductUploader'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>E-commerce Product Uploader</title>
            </Head>
            <ProductUploader />
        </>
    )
}

export default index
