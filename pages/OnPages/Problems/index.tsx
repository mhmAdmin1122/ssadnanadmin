import Layout from '@/pages/Components/L/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Problems Reader and solver</title>
            </Head>
            <Layout>
                <h1 className='text-4xl font-bold text-center mb-4'>Problems Reader and Solver</h1>
                <div className='comment_readbox relative w-[430px] grid justify-center text-justify gap-4 bg-[#fff] px-6 py-4 rounded-md'>
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos reiciendis nulla error distinctio et.</p>
                    </div>
                    <div>
                        <b>12-12-2023</b>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index
