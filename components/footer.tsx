

export default function Footer () {
    return (
        <footer>
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <p className="text-sm">© 2023 My Website. All rights reserved.</p>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-gray-400">Terms of Service</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}