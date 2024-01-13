import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../../controllers/contacts";

export async function loader() {
    const contacts = await getContacts();
    return { contacts } 
}

export async function action() {
    const contact = await createContact();
    return { contact }
}

function Contacts() {
    const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router - Ejemplo</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              placeholder="Buscar Contacto"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true}></div>
          </form>
          <Form method="post">
            <button type="submit">Nuevo</button>
          </Form>
        </div>
        <nav>
           {
            contacts.length ? (
                <ul>
                    {
                        contacts.map( (contact) => {
                            <li key={contact.id}>
                                <Link to={`contacta/${contact.id}`}>
                                   { contact.first || contact.last ? (
                                    <>
                                        {contact.first} {contact.last}
                                    </>
                                   ): (
                                    <i>Sin Nombre ni Apellido</i>
                                   )} {" "}
                                   {contact.favorite && <span>★</span>}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            ): (
                <p><i>No Hay Contactos</i></p>
            )
           }
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}

export default Contacts;
