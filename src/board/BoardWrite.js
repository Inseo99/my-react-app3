import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();
    const [board, setBoard] = useState(
        {subject : '',
         contents : '',
         writer : '',
         midx : '116',
        }
    );

    const{subject, contents, writer, midx} = board;

    const onChange = (event) => {
        const {value, name} = event.target; // event.target에서 name과 value만 가져오기
        setBoard({
            ...board,
            [name] : value,
        });
    };

    const saveBoard = async() => {  // 비동기방식
        await axios.post("/board/boardWriteActionReact.aws", board).then(
            (res) =>{
                alert("등록되었습니다.");
                navigate("/");
            });
    };
    return(
        <div>
            <div>
                <span>제목</span>
                <input type='text' name="subject" value={subject} onChange={onChange}/> 
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="contents" cols="50" rows="10" value={contents} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type='text' name="writer" value={writer} onChange={onChange}/>
            </div>
            <br/>
            <input type="hidden" name="midx" value={116}/>
            <button type="button" onClick={saveBoard}>저장</button>
        </div>
    );
    
};

export default BoardWrite;