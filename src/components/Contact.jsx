import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#dde6d5] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a3b899] text-[#667b68]'>Contact</p>
                <p className='text-[#667b68] py-4'>Send me a message</p>
            </div>
            <input className='bg-white p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#667b68] border-2 border-[#667b68] rounded-md hover:bg-[#667b68] hover:border-[#667b68] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </div>
  )
}
export default Contact