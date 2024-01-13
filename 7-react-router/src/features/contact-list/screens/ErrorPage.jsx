import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Lo sentimos</h1>
            <p>Ha ocurrido un Error, ver el detalle en el mensaje de abajo</p>
            <p>
                <b>{error.status}</b><br/>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}