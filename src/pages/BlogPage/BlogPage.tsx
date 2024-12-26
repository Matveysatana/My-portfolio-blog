import './BlogPages.css'
import BlogCards from 'components/BlogCards/BlogCards';



function BlogPages() {

    return (
        <>
            <div className="backgraund center">
                <h2 className="blog-title">
                    Blog
                </h2>
            </div>
            <div className="conteiner">
                <div className="greeting-page">
                    <div className="greeting">
                        <h3 className='greeting-title'>Планы на будущее для моего блога</h3>
                        <p className='greeting-description'> Это место, где я делюсь своими мыслями, идеями и историями, которые вдохновляют, мотивируют и побуждают к новым открытиям. Блог охватывает темы, близкие каждому, от повседневных размышлений до глубоких инсайтов.
                            Здесь каждый найдет что-то для себя, чтобы вдохновиться, научиться чему-то новому или просто провести время с пользой.</p>
                        <button className='greeting-button'>Читать далее!</button>
                    </div>

                    <div className="greeting">
                        <img src="/src/assets/images/blog.png" alt="фото блога" className="blog-img" />
                    </div>
                </div>

                <BlogCards />
            </div>
        </>
    )
}
export default BlogPages;