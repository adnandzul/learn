import Link from "next/link"
import InputSearch from "./inputsearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl hover:scale-110 hover:transition-all">CUYANIMELIST</Link>
                <InputSearch />
            </div>
        </header> 
   )
}

export default Navbar