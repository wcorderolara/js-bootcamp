import { redirect } from "react-router-dom";
import { deleteContact } from "../../../controllers/contacts";  

export async function action( {params} ){ 
    await deleteContact(params.contactId);
    return redirect("/");
}