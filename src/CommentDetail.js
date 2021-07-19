import React from 'react';


const CommentDetail = (props) => {
    
    return (
            <div className = "comment">
                    <a href="/" className = "avatar">
                        <img alt = "avatar" src = "https://yt3.ggpht.com/ytc/AKedOLQnl-nZqCab_soGrfLxJSVZaQEB7YVKz9qpkVQbWA=s900-c-k-c0x00ffffff-no-rj" />
                    </a>
                    <div className = "content">
                        <a href="/" className = "author">
                            {props.author}
                        </a>
                        <div className = "metadata">
                            <span className = "date">{props.timeAgo}</span>
                        </div>
                        <div className = "text">I love Catan!</div>
                    </div>
            </div>
          
    );
}

export default CommentDetail;