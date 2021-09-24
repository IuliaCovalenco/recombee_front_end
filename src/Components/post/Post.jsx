import React, {useState} from 'react';
import Fav from '../../Assets/icons/fav.png';
import Share from '../../Assets/icons/Frame.png';
import { Link } from "react-router-dom";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const Post = ({ post }) => {

    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    
    const [showModal, setShowModal] = useState(false);
    const [showModalTwo, setShowModalTwo] = useState(false);

    const PF = "https://pressclubnode.herokuapp.com/images/";

    return (
            <>
                <div>
                    <div className="w-80 relative">

                        <article className="overflow-hidden rounded-lg shadow-lg">

                            <a>
                            <Link to={`/post/${post._id}`} className="link"><a className="no-underline hover:underline text-black" >
                                      
                                 
                            {post.photo &&  <img  className=" w-full h-80 no-repeat bg-no-repeat bg-center self-center inline-block  bg-red" style={{ backgroundImage: `url('${PF + post.photo}')`, backgroundSize: 'cover' }} />}
                            </a>
                                </Link> 
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
                                <a className="flex flex-wrap gap-2 g-4 text-left no-underline hover:underline text-black pb-12" style={{position: "absolute", bottom: "0"}} href="#">
                                {post.cities.map((citie) => (
                                    <p className="text-sm ">
                                         { citie}
                                    </p>
                                     ))}
                                </a>

                            </header>
                            <footer className="flex text-sm text-left justify-between leading-none lg:pt-8 pb-4 p-4 md:p-4 w-full" style={{position: "absolute", bottom: "0"}}>
                                <p className="text-grey-darker text-sm pt-4">
                                {new Date(post.createdAt).toLocaleDateString('pt-PT', options)}
                                </p>

                                <span className="flex  place-self-end itens-right pt-4">
                                <a onClick={() => setShowModalTwo(true)} className="no-underline text-grey-darker hover:text-red-dark pr-2" href="#">
                                    <span ><img src={Fav} /></span>
                                </a>
                                <a onClick={() => setShowModal(true)} className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                    <span ><img src={Share} /></span>
                                </a>
                                </span>

                                {showModal ? ( 
                                    <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-8 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 justify-center items-center rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex justify-between p-5 border-solid rounded-t pt-10">
                                            <h3 className="text-3xl font-semibold">
                                                Obrigado
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                                </span>
                                            </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                            <p className="mb-4 text-blueGray-500 text-lg leading-relaxed">
                                                O conteúdo selecionado foi patilhado com sucesso
                                            </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex  place-self-end itens-right pb-6">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                    Fechar
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                    ) :null }

                                {showModalTwo ? ( 
                                    <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-8 mx-auto max-w-2xl">
                                        {/*content*/}
                                        <div className="border-0 justify-center items-center rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex justify-between p-5 border-solid rounded-t pt-10">
                                            <h3 className="text-3xl font-semibold">
                                                Obrigado
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModalTwo(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                                </span>
                                            </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                            <p className="mb-4 text-blueGray-500 text-lg leading-relaxed">
                                                O artigo selecionado foi adicionado a lista dos conteúdos que poderá ler mais tarde
                                            </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex  place-self-end itens-right pb-6">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModalTwo(false)}
                                            >
                                                    Fechar
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                    ) :null }
                            </footer>
                            </div>
                        </article>
                    </div>    
                </div>
            </>
    );
}

export default Post;