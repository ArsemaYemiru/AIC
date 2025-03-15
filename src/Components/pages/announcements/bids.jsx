import Header from "../../nav/header";
import Footer from "../../nav/footer";

function Bids(){
    return (
        <>
            <Header/>
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold">Bids</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Bids;