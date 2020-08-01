import React, { useState, useEffect } from 'react';

export default function HookComponent(props) {

    const [count, setCount] = useState(1);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>点我</button>
        </div>
    );
}