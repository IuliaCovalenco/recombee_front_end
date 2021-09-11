import React from 'react';
import Fav from '../../Assets/icons/fav.png';
import Share from '../../Assets/icons/Frame.png';
import { Link } from "react-router-dom";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Post = ({ post }) => {

    const PF = "https://pressclubnode.herokuapp.com/images/";

    return (
            <>
                <div>
                    <div className="w-80 relative">

                        <article className="overflow-hidden rounded-lg shadow-lg">

                            <a href="#">
                                
                            {post.photo &&  <img  className=" w-full h-80 no-repeat bg-no-repeat bg-center self-center inline-block  bg-red" style={{ backgroundImage: `url('${PF + post.photo}')`, backgroundSize: 'cover' }} />}
                            </a>

                            <div className="h-72">

                            <h1 className="text-xs text-left pl-4 pt-8 font-bold uppercase">
                            {post.categories.map((categorie, i) => (
                                <a className="no-underline hover:underline text-black" href="#" style={{ color: colors[i] }} key={i} >
                                    #{categorie}
                                </a>
                            ))}

                            </h1>


                            <header className="text-left justify-between leading-tight p-4 md:p-4">

                                <p className="text-base font-bold">
                                <Link to={`/post/${post._id}`} className="link"><a className="no-underline hover:underline text-black" href="#">
                                        {post.title}
                                    </a>
                                </Link> 
                                </p>
                                <a className="text-left no-underline hover:underline text-black" style={{position: "absolute", bottom: "0"}} href="#">
                                <Link to={`/?user=${post.cities}`} className="link">
                                {post.cities.map((citie) => (
                                    <p className=" pb-12 text-sm content-evenly">
                                        { citie}
                                    </p>
                                     ))}
                                </Link>
                                </a>

                            </header>
                            <footer className="flex text-sm text-left justify-between leading-none lg:pt-8 pb-4 p-4 md:p-4 w-full" style={{position: "absolute", bottom: "0"}}>
                                <p className="text-grey-darker text-sm pt-4">
                                {new Date(post.createdAt).toDateString()}
                                </p>

                                <span className="flex  place-self-end itens-right pt-4">
                                <a className="no-underline text-grey-darker hover:text-red-dark pr-2" href="#">
                                    <span ><img src={Fav} /></span>
                                </a>
                                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                    <span ><img src={Share} /></span>
                                </a>
                                </span>
                            </footer>
                            </div>
                        </article>
                    </div>    
                </div>
            </>
    );
}

export default Post;