import {Link} from "react-router-dom";

function NotFoundPages () {
    return(
        <div className="notfound">
            Страница не найдена. Вернуться <Link to="/">на главную</Link>
        </div>
    )
}

export  default  NotFoundPages;