import { useEffect, useState } from "react";
import axios from "axios";
import { PostJobBoard } from "../../models";
import Post from "./Post";
import './JobBoard.css'

const JobBoard = () => {

  const [jobBar, setjobBar] = useState<PostJobBoard[]>([]);

  async function fetchJobBoard() {
    const response = await axios.get<PostJobBoard[]>("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
    setjobBar(response.data)
    console.log(response);
  }

  useEffect(() => {
    fetchJobBoard();
    
  }, []);
  return (
    <div className="wr">
      {jobBar.map(post => <Post post={post} key={post.id}/>)}
    </div>
  );
};

export default JobBoard;
