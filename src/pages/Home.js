import { Link } from 'react-router-dom';

export default function Homepage(){
    return (
        <div>
            <h1>My Homepage</h1>
            
            <p>Go to <Link to= '/products'>the list of products </Link> </p>
            </div>
    )

}