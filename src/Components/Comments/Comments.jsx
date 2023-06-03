import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from '../Comments/Comments.module.css';


export function Comments({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  return (
    
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Demi Lovevavo</strong>
            </div>

            <button onClick={handleDeleteComment} title="Delete Comment">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}Insert comment here</p>
        </div>

      </div>
    </div>
  );
}
