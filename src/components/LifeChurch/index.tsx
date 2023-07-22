'use client';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&order=date&maxResults=5&channelId=UCIo_0VG0E1I-7L0F7hMINEQ`,
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

    return (
        <div>
            <h2>Latest Videos:</h2>
            <ul>
                {videos &&
                    videos.map((video) => (
                        <li key={video.id.videoId}>
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
        </div>
    );
}

//export default YouTubeFeed;
