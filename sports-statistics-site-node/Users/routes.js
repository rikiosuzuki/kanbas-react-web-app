import * as dao from "./dao.js";
import {findUserByCredentials} from "./dao.js";


function UserRoutes(app){
    const signIn = async (req, res) => {
        const {username, password} = req.body;

        const currentUser =  await findUserByCredentials(username, password);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    }


    app.post("/api/users/signin", signIn);

}

export default UserRoutes;