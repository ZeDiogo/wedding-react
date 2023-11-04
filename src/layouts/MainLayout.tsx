import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function MainLayout() {
  
    return (
        <>
        <div className='h-screen flex text-black justify-center w-full'>
            <div className='flex flex-col w-full'>
                <Header/>
                <main className="grow w-full bg-green-500">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    </>
    );
  }