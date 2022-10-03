import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState("Dyes")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            history.push('/')
        })

        //console.log(blog)
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea           
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Dyes">Dyes</option>
                    <option value="Mkuru">El_Mkuru</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
     );
}
 
export default Create;

//Going to 28