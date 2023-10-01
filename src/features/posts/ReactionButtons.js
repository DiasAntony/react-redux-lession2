import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  // name:emoji like key value
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  // const reactionButtons = Object.entries(reactionEmoji) return [['thumbsUp', '👍'], ['wow', '😮'],['heart', '❤️'],...] like that then we map the funcion

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {/* post is a individual post like we mapped in postlist component so like ---- post[0].reactions['wow'0] */}
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
