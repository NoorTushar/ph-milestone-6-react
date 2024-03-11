const Post = ({ post }) => {
   const { title, body } = post;
   return (
      <div className="box">
         <h3>Title: {title}</h3>
         <p>{body}</p>
      </div>
   );
};

export default Post;
