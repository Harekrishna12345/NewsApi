import React from 'react';
import Loader from "react-js-loader";
import "./News.css";

const NewsDesign = (props) => {
    console.log(props.apiData, '...apiData');
    return (
        <div className='row'>

            {props.apiData && props.apiData.length > 0 ?
                props.apiData.map((val, i) => {
                    return (
                            <div className='cpl-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <div key={i} className='nft'>
                                    <div className='main'>
                                        <div className='tokenImage'><img className='toimage' src={val.urlToImage} alt="News Image" /></div>
                                        <div className='main_author'><p className='author'>{val.author} </p></div>
                                        <div className='main_title modernWay2'><p className='title'>{val.title} </p></div>
                                        <div className='description modernWay'><p className='description'>{val.description} </p></div>
                                        <div className='main_publishedAt'><p className='duration'>{val.publishedAt} </p></div>
                                        <a className="read-more" href={val.url} target='_blank'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        
                    );
                })
                :
                <Loader type="skeleton-circle" bgColor={'white'} color={'white'} title={"𝙡𝙤𝙖𝙙𝙞𝙣𝙜..."} size={77} />
            }

        </div>
    )
}

export default NewsDesign;
