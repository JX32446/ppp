import React,{Component} from 'react'
import './search.css'

class Search extends Component{
    constructor(){
        super()
        this.state={
            historylist:[]
        }
        this.toSearch = this.toSearch.bind(this);
        this.toHistory = this.toHistory.bind(this);
    }
    render(){
        let {historylist} = this.state;
        return <div id="search">
            <header>
                <input type="text" placeholder='搜索你想找的商品' ref='keyWords'/>
                <button onClick={this.toSearch}>搜索</button>
            </header>
            <section className='urecent-search'>
                <p>最近搜索<span className='del' onClick={this.toHistory}>删除</span></p>
                {
                    historylist.length==0?<p>暂无搜索记录....</p>:<ul className='ks-clear'>
                        {
                            this.state.historylist.map((item,index) => {
                                return <li key={index} onClick={()=>{this.toResult(item)}}>{item}</li>
                            })
                        }
                    </ul>
                }
            </section>
            <section className="common-search">
                <p>大家都在搜</p>
                <ol className='ks-clear'>
                    <li>去取</li>
                </ol> 
            </section>
        </div>
    }
    toHistory(){
        localStorage.removeItem('SearchHistory')
        this.setState({
            historylist:[]
        })
    }
    toResult(keyWords){
        this.props.history.push('/index/result',{
            key_words:this.refs.keyWords.value
        })
    }
    toSearch(){
        if(!this.refs.keyWords.value) return;
        let keyWords = this.refs.keyWords.value;
        let ls = window.localStorage;
        if(ls.getItem('SearchHistory')){
            let shArr = JSON.parse(ls.getItem('SearchHistory'));
            if(shArr.indexOf(keyWords)>-1)return;
            shArr.push(keyWords);
            ls.setItem('SearchHistory',JSON.stringify(shArr))
        }else{
            ls.setItem('SearchHistory',JSON.stringify([keyWords]))
        }
        
        this.props.history.push('/index/result',{
            key_words:this.refs.keyWords.value
        })
    }
    componentDidMount(){
        if(localStorage.getItem('SearchHistory')){
            this.setState({
                historylist:JSON.parse(localStorage.getItem('SearchHistory'))
            })
        }
    }
}

export default Search;