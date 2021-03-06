import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'; // 카드 관련 컨텐츠
import Typography from '@material-ui/core/Typography'; // 간단히 텍스트 문장 출력 시, Typography로 감싸줌

const databaseURL = "https://word-cloud-45740.firebaseio.com"; // firebase 프로젝트 URL

class Words extends React.Component {
    constructor() {
        super();
        this.state = {
            words : {}
        };
    }

    _get() {
        fetch(`${databaseURL}/words.json`).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words => this.setState({words: words}));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.words != this.state.words;
    }

    componentDidMount() { 
        this._get();
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.words).map(id => {
                    const word = this.state.words[id];
                    return(
                        /* 
                            react에서 list 정보는 key 속성을 명시하는 것을 권고
                            명시 안할 경우, 스크립트 에러발생
                        */
                        <div key={id}> 
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        가중치 : {word.weight}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {word.word}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Words;