import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";
import { Services } from "../services";


export function PostCreateView(props) {
  const abortController = new AbortController();
  const usePost = Hooks.usePost();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [utilisateurs, setUtilisateurs] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      usePost.createPost(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/posts')
      })
      .catch(err => setIsDisabled(false));
    }
  const handleFileChange = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', event.target.files[0]);

    setIsDisabled(true);
    Services.FileService.store(formData, abortController.signal)
    .then(response => {
      let img_urls = usePost.img_urls ? JSON.parse(usePost.img_urls) : [];

      img_urls.push(response.img_url);
      usePost.setImg_urls(JSON.stringify(img_urls));

      setIsDisabled(false);
    })
    .catch(err => setIsDisabled(false));
    
  }

  const handleImageDeleteClick = (event, img_url) => {
    event.preventDefault();
    
    let img_urls = usePost.img_urls ? JSON.parse(usePost.img_urls) : [];

    img_urls.splice(img_urls.indexOf(img_url), 1);
    usePost.setImg_urls(JSON.stringify(img_urls));
  }


    useEffect(() => {
      Services.UtilisateurService.getAll(abortController.signal)
      .then(response => setUtilisateurs(response.utilisateurs));
      Services.CategorieService.getAll(abortController.signal)
      .then(response => setCategories(response.categories));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un post</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.PostForm usePost={usePost} isDisabled={isDisabled} 
                        utilisateurs={utilisateurs} categories={categories} 
                        handleFormSubmit={handleFormSubmit} handleFileChange={handleFileChange}
                        handleImageDeleteClick={handleImageDeleteClick}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 