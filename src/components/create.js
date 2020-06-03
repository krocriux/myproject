import React ,{useState}  from "react";
import { Redirect } from 'react-router';
import { useDispatch } from "react-redux";
import { createPost } from "../actions/create";


const Create = () =>{

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [cover, setCover] = useState("");

    const [routeRedirect, setRedirect] = useState("");   
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
    const createPostAction = (post) => dispatch(createPost(post));
  

    const addPost = async(e) =>{
        e.preventDefault();
        setLoading(true);
        let post = {
            title,
            content, 
            cover: cover[0]
        }

        await createPostAction(post);
        setLoading(false);
        setRedirect(true);
    }

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />  
    }

    let form;
   
    if(loading){
        form = 
        <div className="processing">
            <p>Se esta subiendo su solicitud</p>
            <div className="loader">Un momento...</div>
        </div>
    }else{


        
        form = <form onSubmit={addPost}>




            
        <p>¿Como te podemos ayudar?</p>
            
            <label htmlFor="title">Titulo</label>
            <input style = {{borderColor: 'black'}} type="text" name="title" placeholder=" Por ejemplo: Calefont Junkers Ionizado 13lts " onChange={(e) => setTitle(e.target.value)} />
            
            <label htmlFor="content">Breve descripcion de su trabajo</label>
            <textarea name="content"  placeholder=" Por ejemplo: No prende, poca presión, necesito hacer mantenimiento, necesito instalar uno desde cero, etc..." onChange={(e) => setContent(e.target.value)}  ></textarea>
           
            <label htmlFor="cover" className="cover">¡Para darle un estimado, es importante que suba una foto/video de su trabajo a realizar!</label>
            <input type="file" onChange={(e) => setCover(e.target.files)} />

            <input type="submit" value="create post" />



        </form>
    }
    return(
        <React.Fragment>
            {form}
        </React.Fragment>
    )
}

export default Create;