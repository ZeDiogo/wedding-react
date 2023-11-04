import sabina from "../assets/photos/IMG_0829.JPG";

export default function HomePage() {
  
    return (
      <div className="grid grid-cols-3 grid-flow-row gap-4">
          <div className="col-span-3 bg-white">
              <img src={sabina}/>
          </div>
      </div>
    );
  }