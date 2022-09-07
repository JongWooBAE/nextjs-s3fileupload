import { APIRoute } from "next-s3-upload";


export default APIRoute.configure({
    key(req, filename){
        let id = req.body.id
        return `${id}/${filename}`;
    }
});