import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-20 px-52">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-gray-600">© 2025 Zapato AI. All rights reserved.</p>
                    <p className="text-gray-600">Multi-purpose Hall, J. Chanyungco St, Marikina, 1800 Metro Manila</p>
                    <p className="text-gray-600">Marikina Science High School</p>
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2">Company</h4>
                        <a href="#" className="text-gray-600">About Us</a>
                        <a href="#" className="text-gray-600">Careers</a>
                        <a href="#" className="text-gray-600">Contact</a>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2">Support</h4>
                        <a href="#" className="text-gray-600">Help Center</a>
                        <a href="#" className="text-gray-600">Terms of Service</a>
                        <a href="#" className="text-gray-600">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2">Follow Us</h4>
                        <a href="#" className="text-gray-600">Twitter</a>
                        <a href="#" className="text-gray-600">LinkedIn</a>
                        <a href="#" className="text-gray-600">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
