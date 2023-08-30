import React from "react";
import './popular.css'
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from 'react-icons/bs'

//import the images=======>
import img2 from '../../assets/image (2).jpg';
import img5 from '../../assets/image (5).jpg';
import img7 from '../../assets/image (5).png';
import img9 from '../../assets/india.jpg';

/*array method to display all the destination 
using map. list all destination in one array "Data" and 
later we call each destination by index/id.
*/

const Data = [
    {
        id:1,
        imgSrc: img2,
        destTitle:'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
    },
    {
        id:2,
        imgSrc: img5,
        destTitle:'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
    },
    {id:3,
    imgSrc: img7,
    destTitle:'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    },
    {id:4,
    imgSrc: img9,
    destTitle:'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    }
]

const Popular = () => {

    


    return(
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div  className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            From historical cities to natural specteculars, come see the best of the world!
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                       <BsArrowLeftShort className="icon lefticon"/>
                      < BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                   {
                    Data.map( ({id,imgSrc,destTitle,location,grade})=>{
                        return(
                            <div className="singleDestination">
                              <div className="destImage">
                                
                                < img src={imgSrc} alt='title '/>
    
                                <div className="overlayInfo">
                                    <h3>
                                        {destTitle}
                                    </h3>
                                    <p>
                                        {location}
                                    </p>
                                    <BsArrowRightShort className="icon"/>
                                </div>
    
                              </div>
    
                            <div className="destFooter">
                                <div className="number">
                                    {id}
                                </div>
    
                                <div className="desText flex">
                                    <h6>
                                        {location}
                                    </h6>
                                    <span className="flex">
                                        <span className="dot">
                                            <BsDot className="icon" />
                                        </span>
                                        Dot
                                    </span>
                                </div>
                            </div>    
                        </div>

                        )
                    })

                    
                   }
                </div>
            </div>
        </section>
        
    )
}

export default Popular;