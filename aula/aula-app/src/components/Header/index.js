import { Link } from 'react-router-dom';
export default function Header(){
    return (
        <header>
            <h1>Header da página</h1>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
        </header>
    );

}