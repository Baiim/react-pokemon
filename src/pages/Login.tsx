import axios from "axios"
import { useEffect, useState } from "react"

const Login = (_props: any) => {
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
    localStorage.setItem("phone", JSON.stringify(phone))
    localStorage.setItem("company", JSON.stringify(company))
  })
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name")
    const initialValue = saved ? JSON.parse(saved) : ""
    return initialValue || ""
  })
  const [phone, setPhone] = useState(() => {
    const saved = localStorage.getItem("phone")
    const initialValue = saved ? JSON.parse(saved) : ""
    return initialValue || ""
  })
  const [company, setCompany] = useState(() => {
    const saved = localStorage.getItem("company")
    const initialValue = saved ? JSON.parse(saved) : ""
    return initialValue || ""
  })
    localStorage.clear()
    useEffect(() => {
      const name = localStorage.getItem("name")
    })

  return (
    <>
      <div className='mt-8'>
        <h2
          className='
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        '
        >
        </h2>

        <p className='max-w-screen-md mx-auto text-center text-gray-500 md:text-lg'>
          Please fill in the details below so that we can get in contact with
          you.
        </p>
      </div>
      <div className='text-gray-600'>
        <div className='container flex flex-col flex-wrap px-5 py-4 mx-auto'>
          <div className='flex flex-col w-full text-center'>
            <div className='py-6 bg-white sm:py-8 lg:py-12'>
              <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
                <form className='max-w-screen-md mx-auto'>
                  <div className='flex flex-col mb-4'>
                    <label
                      htmlFor='name'
                      className='inline-flex mb-2 text-sm text-gray-800'
                    >
                      Please enter your name
                    </label>
                    <input
                      className='
                      w-full
                      px-3
                      py-2
                      text-gray-800
                      border
                      rounded
                      outline-none
                      bg-gray-50
                      focus:ring
                      ring-indigo-300
                    '
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label
                      htmlFor='phone'
                      className='inline-flex mb-2 text-sm text-gray-800'
                    >
                      Please enter a phone number
                    </label>
                    <input
                      className='
                      w-full
                      px-3
                      py-2
                      text-gray-800
                      border
                      rounded
                      outline-none
                      bg-gray-50
                      focus:ring
                      ring-indigo-300
                    '
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className='flex flex-col mb-2'>
                    <label
                      htmlFor='company'
                      className='inline-flex mb-2 text-sm text-gray-800'
                    >
                      Please enter your company name (optional)
                    </label>
                    <input
                      className='
                      w-full
                      px-3
                      py-2
                      text-gray-800
                      border
                      rounded
                      outline-none
                      bg-gray-50
                      focus:ring
                      ring-indigo-300
                    '
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className='flex items-center justify-between'>
                    <button
                      className='
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    '
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
