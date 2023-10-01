import Layout from '@/pages/Components/L/Layout'
import Head from 'next/head'
import React from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'

const index = () => {
    return (
        <>
            <Head>
                <title>Comments Read Reply</title>
            </Head>
            <Layout>
                <h1>Read and Reply</h1>
                <div className='comment_readbox w-[430px] grid justify-center text-justify gap-4 bg-[#fff] px-6 py-4 rounded-md'>
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos reiciendis nulla error distinctio et.</p>
                    </div>
                    <form>
                        <input type="text" placeholder='comment reply' />
                        <button type='submit'><HiPaperAirplane /></button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default index
