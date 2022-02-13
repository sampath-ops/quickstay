import './Follow.css';
// import SocialLogos from './SocialLogos';
const Follow = () => {
    const icons = [
        {
            name:"Instagram",
            alter:"insta-icon"
        },
        {
            name:"Facebook",
            alter:"facebook-icon"
        },
        {
            name:"LinkedIn",
            alter:"LinkedIn-icon"
        },
        {
            name:"Twitter",
            alter:"Twitter-icon"
        },
        {
            name:"YouTube",
            alter:"YouTube-icon"
        },
    ]
    return ( 
        <div className="follow-us">
            <div className="like-share">
                <p>FOLLOW. LIKE. SHARE. </p>
                <div className="social-icons-follow">
                {
                    icons.map((icon,index)=>{
                        const imagename = require(`../../../WebsiteMaterial/Home/Follow/${icon.name}.svg`);
                        return(
                            <img src={imagename.default} alt={icon.alter} key={index} />
                        )
                    })
                }
                </div>
            </div>
           
           {/* <SocialLogos/> */}
        </div>
     );
}
 
export default Follow;