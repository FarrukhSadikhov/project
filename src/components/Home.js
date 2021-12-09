import React,{useLayoutEffect,useRef} from "react";
import on from "../images/on.png"
import video from "../video/vid.webm"
import foto from '../images/whey.jpeg'

function Home(){

//    let vidRef = useRef()
//     useLayoutEffect(() => {
//         vidRef.current.autoplay = true
    
        
//         vidRef.current.load()
//     },[])


    return (
        <div className="home" id="home">
            
            <video  loop={true} autoPlay={true} muted={true} className="video-box" >
                <source src={video} type="video/webm" codecs='vp8'></source>
            </video>
              <h1>100% orginal və <br/> keyfiyyətli məhsullar </h1>

              {/* <a href="#"><button className="btn">Start</button></a> */}
              <a  href="#"><img className="home-img" src={on}/></a>
                
              
            
              </div>
            //     <div className="footer">
            //     created by <a href="#">mr. Farrukh Sadikhov</a> | all rights reserved.
            //    </div>
             
              
         

        


        
     
       
        

    )
}
export default Home