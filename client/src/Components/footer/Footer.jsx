import React from 'react'
import Centro from '../../Assets/logo/coo.png';
import LogoG from '../../Assets/logo/logoG.png';



const Footer = () => {
    return (
        <>
            <div className="text-gray md:mt-10 lg:mt-10 xl:mt-10 container mx-auto pb-6 mt-12">
                <div className=" container mx-auto pt-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div className="side-footer1 w-full pt-8 md:pt-0 lg:pt-0 xl:pt-0">
                            <a href="http://www.centro.portugal2020.pt"><img src={LogoG} alt="centro_portugal" /></a>
                        </div>

                        <div className="flex p-4 side-footer2 pt-8 md:pt-0 lg:pt-0 xl:pt-0" >
                            <a href="#" className="text-base p-2">Ajuda</a>
                            <a href="#" className="text-base p-2">Termos de Condições</a>
                            <a href="#" className="text-base p-2">Politica e Privacidade</a>
                        </div>
                        <div className="pt-8 md:pt-0 lg:pt-0 xl:pt-0 flex" >
                            <div className="flex space-x-1">
                                <a href="http://www.centro.portugal2020.pt"><img src={Centro} alt="centro_portugal" /></a>

                            </div>

                        </div >
                    </div>
                </div>
            </div  >

        </>

    )

}




export default Footer;