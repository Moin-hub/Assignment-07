import firstImage from '../../logos/logo.png';

const Navbar = () => {
    return (
        <div className="flex justify-between mx-10 mt-10 mx-auto">
            <div>
                    <img className='w-8' src={firstImage} alt="" />
                </div>
            <div>
                <div className="flex justify-between items-center gap-4">
                    <a className='font-bold' href="">Home</a>
                    <a className='font-bold' href="">Fixture</a>
                    <a className='font-bold' href="">Teams</a>
                    <a className='font-bold' href="">Schedules</a>
                    <div  id='totalBalance' className="btn p-2 border rounded-lg font-bold">0</div><span className='font-bold -ml-3'>M</span>
                    <button>Coin</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;