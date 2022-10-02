import { Link } from "react-router-dom";
const NotFoundPage = () => {

    return <section>
        <h1>Página no encontrada</h1>
        <Link to = {'/'}> Ir a Inicio</Link>
    </section>
}

export default NotFoundPage;