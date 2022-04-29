import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";

export function PostListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const usePost = Hooks.usePost();

    const [posts, setPosts] = useState([]);
    
    const tableHead = ['id', 'titre', 'prix', 'categorie', 'utilisateur'];
    const tableActions = ['edit', 'delete'];

    const findPostIndex = data => {
        return posts.findIndex(post => parseInt(post.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/posts/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const postCopy = [...posts];
        const index = findPostIndex(data);

        postCopy.splice(index, 1);
        setPosts(postCopy);
        usePost.deletePost(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.PostService.getAll(abortController.signal)
        .then(response => {
            const postCopy = response.posts.map(post => {
                return {
                    id: post.id,
                    titre: post.titre,
                    description: post.description,
                    img_urls: post.img_urls,
                    prix: post.prix,
                    categorie: post.categorie.nom,
                    utilisateur: post.utilisateur.nom_prenoms
                };
            })

            setPosts(postCopy);
        });
      return () => {
        // abortController.abort();
      }
    }, []);

    return (
        <>
            <h2>Liste des posts</h2>
                <div className="card">
                    <div className="col-12 mt-3 text-right">
                        <Link to="/posts/creer" className="btn btn-info">Creer un post</Link>
                    </div>
                    <div className="card-body">
                        <Components.Table {...props} tableHead={tableHead} tableData={posts} 
                            tableActions={tableActions} tableName="posts"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}/>
                    </div>
            </div>
        </>
    )
}