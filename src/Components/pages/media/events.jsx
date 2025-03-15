import Header from "../../nav/header";
import Footer from "../../nav/footer";

function Events(){
    return (
        <>
            <Header/>
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold">Events</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Events;