import React, { useEffect, useState } from 'react';
// import _ from 'lodash';

function CardListComponent() {
    const [listObj, setListObj] = useState([])
    
    useEffect(() => {        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            setListObj(JSON.parse(JSON.stringify(json)));
        })
    }, [])


    return (
        <>
            <div className='list-wrapper d-flex flex-wrap'>
                {
                    listObj.map((item, i) => {
                        return(
                            <div className="card mr-2 mb-2" key={i} style={{maxWidth: '32%'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                </div>
                            </div>
                        )
                    })
                }            
            </div>
        </>
    );
}

export default CardListComponent;