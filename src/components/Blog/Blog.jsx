import React ,{useEffect}from "react";
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../assets/image (2).png'
import img2 from '../../assets/image (3).png'
import img3 from '../../assets/image (9).png'
import img4 from '../../assets/image (10).png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts=[
    {
        id:1,
        postImage:img,
        title:'Beautiful Morocco,let us travel!',
        desc: 'The Kingdom of Morocco is a muslim country in western North Africa,with coastlines on the Atlantic Ocean and Mediterranean Sea.'
    },
    {id:2,
        postImage:img2,
        title:'Romantic moments under Eiffel Tower',
        desc:'with vast swaths of desert in its east and west and the rich Nile River Valley at its heart,is site to one of the worlds earliest and greatest civilization'
       },
       {
        id:3,
        postImage: img3,
        title:'Let us have an adventure outside Tunisia',
        desc:'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region'
       },
       {
        id:4,
        postImage: img4,
        title:'Best country in East Africa',
        desc:'When Kenya claimed its independence from the U.K in 1963,leaders of the newly formed republic promoted a sense of national unity using the motto.'
       }


]
const Blog = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
     <section className="blog container section">
        <div className="secContainer">
            <div className="secIntro">
                <h2 className="secTitle">
                    Our Best Blog?
                </h2>
                <p>An insight to the incredible experience in the world.
                </p>
            </div>
            <div className="mainContainer grid">
                {
                    Posts.map(({id,postImage,title,desc})=>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2500" className="singlePost grid">
                            <div className="imgDiv">
                               < img src={postImage} alt={title}/>
                            </div>
                            <div className="postDetails">
                                <h3>
                                    {title}
                                </h3>
                                <p>
                                    {desc}
                                </p>
                            </div>
        
                            <a href="/#" className="flex">
                                <BsArrowRightShort className="icon"/>
                                Read More
                            </a>
                         </div>
                        )
                    }

                    )
                }
             

            </div>
        </div>
        </section>
    )
}

export default Blog;  