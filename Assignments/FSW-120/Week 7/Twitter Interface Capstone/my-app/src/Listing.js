import React, {Component} from 'react'
import Post from './Post'

class Listing extends Component {
    showTweets = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;
        return(
            <div><React.Fragment>
                {Object.keys(posts).map(post =>(
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                        />
                ))}    
            </React.Fragment></div>
        )
    }
    render() {
        return(
            <div>
                {this.showTweets}
            </div>
        )
    }
}

export default Listing