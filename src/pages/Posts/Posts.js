import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response=> response.json())
        .then(data=> setPosts(data));
    }, []);

    const cartAddHandler = (id) => {
        posts.forEach(post => {
            if(post.id === id){
                setCart(cart => [...cart, post]);
            }
        });
    }

    const itemDeleteHandler = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    const searchTextEnterHandler = (event) => {
        setSearchText(event.target.value);
    }

    const searchSubmitHandler =(event) => {
        event.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchText}&_limit=5`).then(res => res.json()).then(post => {
            setPosts(post);
        });
    }

    const logoutHandler = () => {
        localStorage.clear();
    }

    return (
        <div>
            <h2 style={{textAlign: "center", marginTop:"10px"}}>Welcome, {localStorage.getItem("name")}</h2>
            <Link style={{padding: '10px', margin: '20px', border: '1px solid blue', textDecoration: 'none', color: 'black'}} onClick={logoutHandler} to="/">Logout</Link>
            <form style={{margin: '0 auto', marginTop:'50px', width: "70%"}} onSubmit={searchSubmitHandler}>
                <input style={{width: '80%'}} type="text" placeholder="Search Posts" name="searchpost" value={searchText} onChange={searchTextEnterHandler}/>
                <button type="submit">Search</button>
                <p><em>This search query will return only 5 matching elements</em></p> 
            </form>
            <Cart items = {cart} itemDelete={itemDeleteHandler}/>
            {props.token ? posts ? posts.map(post=>{
                return <div key={post.id}><h1 style={{margin: '40px', textAlign:'center'}}>{post.title}</h1><button style={{display: 'block', margin: '0 auto'}}onClick={cartAddHandler.bind(null, post.id)}>Add to Cart</button></div>
            }): <h1>Loading...!</h1> : <h1>You are not authenticated.</h1>}
        </div>
    );
};

export default Posts;
