import React, { useContext, useEffect, useState } from "react";
import { AppContext} from '../../App.js'
import { Cards } from 'react-responsive-cards';
import first from '../first.jpg';
import second from '../second.jpg';
import third from '../third.jpg';

export default function Communitylist() {
    let valueFromFormInput = useContext(AppContext)
   
    const [data, setData] = useState("");

    const details = [
        {
            title: 'Emotional Support',
            image: first ,
            handleOnClick: () => window.open("https://www.churchescare.com/loneliness?audience=keyword_targeting&utm_source=bing&utm_medium=search&utm_campaign=Connect_NTL_ENG_2022_Fall&utm_content=Loneliness4G_2022_Spring&utm_term=dealing%20with%20loneliness&hsa_acc=4162855862&hsa_cam=16697944227&hsa_grp=1351301432979779&hsa_ad=&hsa_src=o&hsa_tgt=kwd-84457330166497:loc-190&hsa_kw=dealing%20with%20loneliness&hsa_mt=b&hsa_net=adwords&hsa_ver=3&msclkid=687612b6c0df11b5d8827131019d63bb")
        }, {
            title: 'Professional Etiquette',
            image:  second ,
            handleOnClick: () => window.open("https://everhour.com/blog/business-etiquette/#:~:text=Some%20proper%20workplace%20etiquette%20includes%3A%201%20Greeting%20everyone%3B,open%2C%20proactive%2C%20and%20helping%20out%20others%20when%20needed.")
        },
        {
            title: 'Latest Industry News',
            image:  third ,
            handleOnClick: () => window.open("https://www.businesswire.com/portal/site/home/news/industry/?vnsId=31121")
        }
    ]

    let map1 = details.map(v => {return <img src={v.image} alt="1" id="img"></img> })
    return (
        <div>
         <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" onChange={(event) => {
                valueFromFormInput.useInputValueForFetch()
            }} />
            <button type="button" className="btn btn-success" onClick={() => {
                valueFromFormInput.processInputUsingButton()
            }}>Search</button>
            
           <div className="cards"><Cards details={details} /></div> 
        </div>
    )
}





