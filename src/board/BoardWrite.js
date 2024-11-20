import React from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();
    const [board, setBoard] = useState(
        {subject : '',
         contents : '',
         writer : '',
        }
    );
    const{subject, contents, writer, midx} = board;
    const saveBoard = async() => {
        await axios.post("//localhost/board/boardWriteActionReact.aws", board).then(
            (res) =>{
                alert("등록되었습니다.");
                navigate("/");
            });
    };
    return(
        <div>
        <div>
            <span>제목</span>
            <input type='text' name="subject"/> 
        </div>
        <br/>
        <div>
            <span>내용</span>
            <textarea name="contents" cols="50" rows="10"/>
        </div>
        <br/>
        <div>
            <span>작성자</span>
            <input type='text' name="writer"/>
        </div>
        <br/>
        <input type="hidden" name="midx" value={116}/>
        <button type="button" onClick={saveBoard}>저장</button>
    </div>
    );
    
};

const saveBoard = async() => {

};

export default BoardWrite;