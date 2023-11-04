import { useNavigate } from "react-router-dom";

const HeaderItem = (props: {
    text: string,
    link: string,
}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(props.link);
    }

    return (
        <div className='p-2 text-center hover:cursor-pointer hover:font-bold' onClick={handleClick}>
          {props.text}
        </div>
    );
}


 const Header = () => {
  
    return (
      <header className='flex flex-none justify-center px-6 items-center sticky w-full py-2 h-20 shadow-md'>
        <HeaderItem text="Página Inicial" link="/home" />
        <HeaderItem text="Confirma presença" link="/register" />
        <HeaderItem text="Fotografias" link="/photos" />
      </header>
    );
}

export default Header;