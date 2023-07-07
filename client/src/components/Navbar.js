export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li>
                <a href="/bois">Bois</a>
            </li>
            <li>
                <a href="/fer">Fer</a>
            </li>
            <li>
                <a href="/plastique">Plastique</a>
            </li>
        </ul>
    </nav>
}