import TypedText from '../components/TypedText'
export default function Header(){
    return(
        <>
        
        <div className="flex flex-col items-center bg-cover bg-center justify-center min-h-screen "
            style={{'background-image':'linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(/assets/lawyer.jpg)',}}>
    
                <div className="text-center">
                    <h1 className=" text-white mb-6 text-4xl font-bold uppercase md:text-6xl">Licoln Edwards <span className="text-blue-400"> & Company</span></h1>
                    {/* typed marketing animation */}
                    <TypedText />
                    <button className="mt-6 px-6 py-3  bg-blue-600 text-white text-sm uppercase font-medium rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">free consultancy</button>

                    <button className="mt-6 ml-3 px-6 py-3 bg-gray-800 bg-opacity-50 text-white text-sm uppercase font-medium rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Submit a case</button>
                </div>
                
            </div>
        </>
    )
}