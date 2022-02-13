import Template from "../BoxTemplate";
import Description from "../Description";
import '../Description.css';
import './whystay.css';
const WhyStay = () => {
    const heading = ["Why stay at","QuickStay?"]
    const description = "We want to help you simplify your life and cut out the unnecessary husstle of finding a perfect rental stay."
    const WhyStay = [
        {
            id:0,
            name:'WhyStay/Genuine Property Details',
            alter:'GenuinePropertyDetails',
            text:'Genuine Property Details'
        },
        {
            id:1,
            name:'WhyStay/Customer Support',
            alter:'CustomerSupport',
            text:'End to End Customer Support'
        },
        {
            id:2,
            name:'WhyStay/Time Saving',
            alter:'TimeSaving',
            text:'Time Saving & Hassle-Free '
        },
    ]
    return ( 
        <div className="whystay">
            <Description head={heading} para={description}/>
            <Template images={WhyStay} />
        </div>
     );
}
 
export default WhyStay;