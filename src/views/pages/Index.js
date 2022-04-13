
import React, {useEffect, useState} from 'react'

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";


import {newsClient} from '../../apiClients';
import moment from "moment"

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  const [localNews, setLocalNews] = useState(null);
    
    useEffect(() => {
        console.log("Here....")
        newsClient.get('/search', {
          // countries: 'ug',
          q: 'world',
          //category: 'business',
          
        }).then((response)=>{
          console.log(response.data.articles)
          setLocalNews(response.data.articles)
        })  
      }, [])

  return (
    <>
      <IndexNavbar />
      <IndexHeader title="Global News"/>
      <div className="main">
        {
          localNews !== null ? 
          (
            <div>
              {localNews.slice(0, 10).map((story, key) =>
                <SectionCarousel 
                  title={story.title}
                  description={story.summary}
                  key={story._id}
                  image={story.media}
                />).reverse()
              }
            </div>
          ): null
        }
        <SectionNucleoIcons />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
