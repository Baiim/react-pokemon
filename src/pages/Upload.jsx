import React, { useState, useMemo } from "react"
import axios from "axios"
import { useDropzone } from "react-dropzone"
const Upload = () => {
  const imgApi = "https://klinikme-api-panas.herokuapp.com/api/v1/upload/img"
  const docApi = "https://klinikme-api-panas.herokuapp.com/api/v1/upload/doc"
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#eeeeee",
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    color: "#bdbdbd",

    width: "100%"
  }
  const style = useMemo(
    () => ({
      ...baseStyle
    }),
    []
  )

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  }

  const [selectedFile, setSelectedFile] = useState([])
  const [selectedImage, setSelectedImage] = useState([])

  const { getRootProps: getRootfileProps, getInputProps: getInputfileProps } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFile) => {
        setSelectedFile(
          Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0])
          })
        )
      }
    })

  const {
    getRootProps: getRootGalleryProps,
    getInputProps: getInputGalleryProps
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      setSelectedImage(
        Object.assign(acceptedFile[0], {
          preview: URL.createObjectURL(acceptedFile[0])
        })
      )
    }
  })

  const post = async (event: any) => {
    event.preventDefault()
    const uploadData = new FormData()
    const uploadData2 = new FormData()
    uploadData.append("image", selectedFile)
    uploadData2.append("document", selectedImage)
    try {
      const resImage = await axios({
        method: "post",
        url: imgApi,
        headers: { "Content-Type": "multipart/form-data" },
        data: uploadData
      })
      console.log("image", resImage)

      if (resImage.status === 200) {
        const resDoc = await axios({
          method: "post",
          url: docApi,
          headers: { "Content-Type": "multipart/form-data" },
          data: uploadData2
        })

        if (resDoc.status === 200) {
          console.log("Berhasil ayee")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0])
  }

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
          Hello , {localStorage.getItem("name")}
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
                <form className='max-w-screen-md mx-auto' onSubmit={post}>
                  <div {...getRootfileProps({ style })}>
                    <label
                      htmlFor='company'
                      className='inline-flex mb-2 text-sm text-gray-800'
                    >
                      Please Upload your Image
                    </label>
                    <input {...getInputfileProps()} />
                  </div>
                  <div {...getRootGalleryProps({ style })}>
                    <label
                      htmlFor='company'
                      className='inline-flex mb-2 text-sm text-gray-800'
                    >
                      Please Upload your File
                    </label>
                    <input {...getInputGalleryProps()} />
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
                      type='submit'
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

export default Upload
