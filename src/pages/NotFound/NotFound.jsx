import Header from "../../components/Header"

const NotFound = () => {
  return (
    <>
     <Header/>
    <div className="w-full h-screen flex items-center justify-center">
         <div>
            <h1 className="text-9xl text-black">Page Not Found 😞</h1>
         </div>
    </div>
    </>
  )
}

export default NotFound