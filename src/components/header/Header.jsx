
import profile from "../../images/profile.png";
const Header = () => {
    return (
        <div className="flex justify-between items-center  my-4 border-b-2 py-4">
           <h1 className='text-6xl'>Knowledge cafe</h1> 
           <img src={profile} alt="" /> 
        </div>
    );
};

export default Header;