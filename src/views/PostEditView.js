import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";


export function PostEditView(props) {
  const abortController = new AbortController();
  const usePost = Hooks.usePost();
  const navigate = useNavigate();
  const postId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);

  const [categories, setCategories] = useState([]);
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      usePost.updatePost(postId, abortController.signal)
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
      setIsDisabled(true);

      usePost.getPost(postId, abortController.signal)
      .then(response => {
        setImagesUrl(JSON.parse(response.post.img_urls));

        Promise.all([
          Services.UtilisateurService.getAll(abortController.signal),
          Services.CategorieService.getAll(abortController.signal)
        ])
        .then(responses => {
          setUtilisateurs(responses[0].utilisateurs);
          setCategories(responses[1].categories);
          setIsDisabled(false);
        })
        .catch(err => setIsDisabled(false));
        
      })
      .catch(err => setIsDisabled(false));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un post</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.PostForm usePost={usePost}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}
                        handleFileChange={handleFileChange} categories={categories} 
                        utilisateurs={utilisateurs} imagesUrl={imagesUrl} 
                        handleImageDeleteClick={handleImageDeleteClick}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 