import logo from "../../assets/images/logo.jpeg"

export const Navbar = () => {
    return (
        <header className="flex p-3 gap-3 border-b-4">
            <div className="w-12 h-12">
                <img className="w-full h-full" src={logo} alt="logo"/>
            </div>
            <h1 className="text-indigo-500 text-4xl font-black	">Note-it</h1>
        </header>
    )
}