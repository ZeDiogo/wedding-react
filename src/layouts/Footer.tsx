import { FaInstagram, IconName } from "react-icons/fa6";

export default function Footer() {
  
    return (
        <footer className='flex flex-none justify-center px-6 items-center w-full sticky py-2 h-20 shadow-md'>
            <div className='p-2'>
            www.sabinajose.com
            </div>
            <div className='p-2'>
                <a href="https://www.quintadoeden.com" rel="noopener" target="_blank">
                quintadoeden.com
                </a>
            </div>
            <div className='p-2'>
            <FaInstagram />
            </div>  
        </footer>
    );
}