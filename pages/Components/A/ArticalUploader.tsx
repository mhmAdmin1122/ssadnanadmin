import React from 'react'
import Layout from '../L/Layout'

const ArticalUploader = () => {
    return (
        <Layout>
            <form action="" className='article-form flex items-center gap-4'>


                <div className='grid bg-blue-800 px-6 py-4 rounded-md'>
                    <h1 className='text-4xl font-bold text-[#fff]'>Card Detail</h1>
                    <label htmlFor="">Card Title</label>
                    <input type="text" placeholder='Card Title' />
                    <label htmlFor="">Card Description</label>
                    <textarea rows={5} cols={5} placeholder='Description' />
                    <label htmlFor="">Card Pic</label>
                    <input type="file" />
                </div>

                <div className='grid bg-green-800 px-6 py-4 rounded-md'>
                    <h1 className='text-4xl font-bold text-[#fff]'>Post Detail</h1>
                    <label htmlFor="">Second Title</label>
                    <input type="text" placeholder='Card Title' />
                    <label htmlFor="">Second Description</label>
                    <textarea rows={5} cols={5} placeholder='Description' />
                    <label htmlFor="">Second Pic</label>
                    <input type="file" />
                </div>

                <div className='flex flex-wrap justify-center items-center gap-4'>
                    <div className='grid bg-red-800 px-6 py-4 rounded-md'>
                        <h1 className='text-4xl font-bold text-[#fff]'>More Detail</h1>
                        <label htmlFor="">Third Title</label>
                        <input type="text" placeholder='Card Title' />
                        <label htmlFor="">Third Description</label>
                        <textarea rows={5} cols={5} placeholder='Description' />
                    </div>
                    <div className='grid bg-pink-800 px-6 py-4 rounded-md'>
                        <label htmlFor="">Third_A Pic</label>
                        <input type="file" />
                        <label htmlFor="">Third_B Pic</label>
                        <input type="file" />
                        <label htmlFor="">Third_C Pic</label>
                        <input type="file" />
                    </div>
                </div>

                <button className='w-fit rounded-md' type='submit'>Post Article</button>

            </form>
        </Layout>
    )
}

export default ArticalUploader
