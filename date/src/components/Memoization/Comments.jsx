import { useCallback } from "react";
import CommentsItem from "./CommentsItem";

function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log("test");
  }, []);

  return (
    <div>
      {commentList.map((item) => (
        <CommentsItem
          title={item.title}
          content={item.content}
          likes={item.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Comments;
