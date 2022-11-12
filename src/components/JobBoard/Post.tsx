import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./JobBoard.css";
import "./Post.css";
import Rectangle from "../Img/Rectangle.png";

const Post = ({ post }: any) => {
  return (
    <div className="wrapper-post">
      <div>
        <img
          style={{
            width: "85px",
            height: "85px",
            borderRadius: "50%",
            marginTop: "24px",
            marginLeft: "16px",
            marginRight: "10px",
          }}
          src={post.pictures[0]}
          alt="img"
        />
      </div>
      <div className="wrapper-info-posting-time">
        <div className="wrapper-info">
          <p className="title">{post.title}</p>
          <p className="name">Departament name: {post.name}</p>
          <p className="address">{post.address}</p>
        </div>
        <div className="posting-time">
          <img
            style={{ width: "16px", height: "20px", marginRight: "24px" }}
            src={Rectangle}
            alt="img"
          />
          <p className="create-at" style={{ marginRight: "15px" }}>
            Posted {formatDistanceToNow(new Date(post.createdAt))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
