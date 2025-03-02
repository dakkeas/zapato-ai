"use client"


export default function Header() {

    return (
        <header className="flex justify-between p-12 bg-custom-light-grey">
            <div>
                <div className="text-3xl font-bold">Zapato<span className="text-custom-dark-green">AI</span></div>
                {/* <img src="/path/to/logo.png" alt="Logo" className="h-10" /> */}
            </div>
            <div className="flex gap-4">
                {/* <Link href="/login" className="text-sm font-medium text-black px-10 py-4">
                    Log In
                </Link>
                <Link href="/signup" className="text-sm font-medium border border-black text-black px-10 py-4 rounded-sm">
                    Sign Up
                </Link> */}
            </div>
        </header>
    );
}