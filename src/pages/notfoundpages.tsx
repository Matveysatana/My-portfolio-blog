import {Link} from "react-router-dom";

function Notfoundpages () {
    return(
        <div className="notfound">
            Страница не найдена. Вернуться <Link to="/">домой</Link>
        </div>
    )
}

export  default  Notfoundpages;