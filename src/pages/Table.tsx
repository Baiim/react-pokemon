import { useEffect, useState, Component, SetStateAction } from "react"
import axios from "axios"

const Table = () => {
  const [APIData, setAPIData] = useState([] as any[])
  const [filteredResults, setFilteredResults] = useState([] as any[])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data.name)
      console.log("test", JSON.stringify(response.data.name))
    })
  }, [])

  const searchItems = (searchValue: SetStateAction<string>) => {
    setSearchInput(searchValue)
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(APIData)
    }
  }

  const SEARCH_API =
    "https://klinikme-api-panas.herokuapp.com/api/v1/all_klinik?nama="

  const API_APP = "https://klinikme-api-panas.herokuapp.com/api/v1/all_klinik"

  const [klinik, setKlinik] = useState([] as any[])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getKlinik(API_APP)
  }, [])

  const getKlinik = (API: RequestInfo | URL) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setKlinik(data.data)
      })
  }

  const getKlinik1 = (API: RequestInfo | URL) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setKlinik(data.data)
      })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    if (searchTerm) {
      getKlinik(SEARCH_API + searchTerm)

      setSearchTerm("")
    }
  }

  const handleOnChange = (e: any) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className='container mx-auto mt-20 px-60'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto'>
            <div className='py-3 pl-2'>
              <div className='relative max-w-xs'>
                <label htmlFor='hs-table-search' className='sr-only'>
                  Search
                </label>
                <form onSubmit={handleOnSubmit}>
                  <input
                    className='search'
                    type='search'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleOnChange}
                  />
                </form>
              </div>
              <button onClick={handleOnSubmit}>klik</button>
            </div>

            <div className='p-1.5 w-full inline-block align-middle'>
              <div className='overflow-hidden border rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        ID
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {klinik.length > 0 &&
                      klinik.map((klinik) => {
                        return (
                          <>
                            <tr>
                              <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                                {klinik.Id_Number}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                {klinik.NamaKlinik}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                {klinik.StatusMember}
                              </td>
                            </tr>
                          </>
                        )
                      })}
                  </tbody>
                  {/* <tbody className='divide-y divide-gray-200'>
                    {searchInput.length > 1
                      ? filteredResults.map((item) => {
                          return (
                            <>
                              <tr>
                                <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                                  {item.id}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                  {item.name}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                  {item.username}
                                </td>
                              </tr>
                            </>
                          )
                        })
                      : APIData.map((item) => {
                          return (
                            <>
                              <tr>
                                <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                                  {item.id}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                  {item.name}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                  {item.username}
                                </td>
                              </tr>
                            </>
                          )
                        })}
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
