import React from 'react'

const ChannelUploader = () => {
  return (
    <form className='grid bg-blue-700 px-14 py-6 rounded-md'>
      <h1 className='text-4xl justify-center font-bold text-center flex flex-wrap cursor-context-menu text-[#fff]'>Channel Uploader</h1>
      <div className="cardDetail_Channel grid ">
        <label htmlFor="">Channel Name</label>
        <input type="text" placeholder='Channel Name'/>
        <label htmlFor="">Channel Description</label>
        <textarea rows={5} cols={5} placeholder='Channel Description'/>
        <label htmlFor="">Channel Country</label>
        <input type="text" placeholder='Channel Country'/>
        <label htmlFor="">Channel Iframe Url</label>
        <input type="text" placeholder='URL'/>
        <label htmlFor="">Channel Pic</label>
        <input type="file" />
      </div>
    </form>
  )
}

export default ChannelUploader
