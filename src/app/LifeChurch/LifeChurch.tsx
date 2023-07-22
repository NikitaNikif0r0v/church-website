'use client' 
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

//const YouTubeFeed = () => {
  interface Video {
    id: { videoId: string };
    snippet: { title: string };
  }
  export default function LifeChurch() {
  //const YouTubeFeed = () => {
    const [videos, setVideos] = useState<Video[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA2fkCoH5QqdBMD6sbaHtlEHJr7u4O0www&channelId=@jevaneoskacrkvarijecbozija6608&part=snippet,id&order=date&maxResults=5`
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
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.snippet.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

//export default YouTubeFeed;
      