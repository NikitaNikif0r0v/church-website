'use client';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import bgImage from '../../assets/images/intro_bg.jpg'
import styles from './styles.module.scss'

const API_KEY = 'AIzaSyA2fkCoH5QqdBMD6sbaHtlEHJr7u4O0www';

//const YouTubeFeed = () => {
interface Video {
    id: { videoId: string };
    snippet: { title: string; thumbnails: { medium: { url: string } } };
}

export default function LifeChurch() {
    //const YouTubeFeed = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&order=date&maxResults=4&channelId=UCIo_0VG0E1I-7L0F7hMINEQ`,
                );
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.log(data);
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage.src})` }}>
            
            <h2 className={styles.heading}>Posljednje propovijedi:</h2>
            {/* <Slider {...sliderSettings}> */}
              <ul className={styles.places}>
                {videos &&
                    videos.map((video) => (
                        <li className={styles.element} key={video.id.videoId}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {video.snippet.title}
                                <Image src={video.snippet.thumbnails.medium.url} alt='dads' width={320} height={180} />
                            </a>
                        </li>
                    ))}
             </ul>  
            {/* </Slider> */}
            
        </div>
    );
}

//export default YouTubeFeed;
