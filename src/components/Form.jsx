import { useState, useRef } from 'react'
import Error from './Error'

function Form () {
  const [empty, setEmpty] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const refPassword = useRef(null)

  const handleChange = e => {
    // console.log(e.target.value)
    // console.log(e.target.name)

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    if (e.target.value) {
      setEmpty(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!refPassword.current.value.trim()) {
      return setEmpty(true)
    }
    console.log(formData)
  }

  return (
    <div className='md:flex-1'>
      <div className='max-w-xl rounded-lg bg-[#6055a5] p-4 px-10 text-center text-white shadow-xl'>
        <p>
          <span className='font-semibold'>Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        action=''
        className='mt-5 flex w-full max-w-xl flex-col gap-5 rounded-lg bg-white p-5'
      >
        <div className='relative'>
          <input
            name='firstName'
            className='peer w-full rounded-md border border-slate-300 bg-white p-4 text-sm placeholder-slate-600/80
            focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            type='text'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            minLength='5'
            autoComplete='off'
          />
          <Error text='Must be at least 5 characters long.' />
        </div>

        <div className='relative'>
          <input
            name='lastName'
            className='peer w-full rounded-md border border-slate-300 bg-white p-4 text-sm placeholder-slate-600/80
            focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            type='text'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            minLength='5'
          />
          <Error text='Must be at least 5 characters long.' />
        </div>

        <div className='relative'>
          <input
            name='email'
            className='peer w-full rounded-md border border-slate-300 bg-white p-4 text-sm placeholder-slate-600/80
            focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            minLength='10'
          />
          <Error text='Please enter a valid email' />
        </div>

        <div className='relative'>
          <input
            ref={refPassword}
            name='password'
            className='peer w-full rounded-md border border-slate-300 bg-white p-4 text-sm placeholder-slate-600/80
            focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            type='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            minLength='8'
          />
          <Error text='Must be at least 8 characters long.' />
          {empty && (
            <p className='mt-2 text-right text-sm text-pink-600'>
              Password cannot be empty.
            </p>
          )}
        </div>

        <button
          className='rounded-md bg-[#38cc8c] py-4 uppercase text-white transition-all duration-300 hover:bg-emerald-400 hover:brightness-110'
          type='submit'
        >
          Claim your free trial
        </button>

        <p className='px-4 text-center text-[11px] text-slate-400/80'>
          By clicking the button, you are agreeing to our
          <span className='cursor-pointer font-bold text-[#ff7a7a] hover:underline'>
            {' '}
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  )
}

export default Form
