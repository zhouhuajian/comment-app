import React,{Component} from 'react';

class CommentInput extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            content:''
        }
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleConentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input placeholder={'请输入用户名'} value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论de内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleConentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;