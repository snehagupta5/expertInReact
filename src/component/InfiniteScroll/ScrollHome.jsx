import react, { useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const ScrollHome = () => {
    const [data, setData] = useState(Array.from({ length: 20 }, (_, index) => { return index + 1 }));
    const [loading, setloading] = useState(false);

    const loadMore = () => {
        setloading(true);
        setTimeout(() => {
            setData(prev => {
                const start = prev.length + 1;
                const more = Array.from({ length: 20 }, (_, index) => { return start + index });
                return [...prev, ...more]
            })
            setloading(false)
        }, 1500)
    }

    const observer = useRef(null);

    const setLastItemRef = node => {
        if (observer.current) observer.current.disconnect();

        if (node) {
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && !loading) {
                    loadMore();
                }
            });
            observer.current.observe(node);
        }
    };


    const row = ({ index, style }) => {
        let isLast = index === data.length - 1;
        return (
            <div
                style={{
                    ...style,
                    backgroundColor: 'f0f0f0',
                    textAlign: 'center'
                }}
                ref={isLast ? setLastItemRef : null}
            >
                Item {data[index]}
            </div>
        )
    }
    return (
        // <div className='ScrollContainer'>
        //     <div className='center'>
        //         {data.map((row, index) => {
        //             return (
        //                 <div ref={index===data.length-1?lastElement:null}>{row}</div>
        //             )
        //         })}
        //     </div>
        //     {loading && <div>...loading</div>}
        // </div>
        <>
            <List
                height={400}
                itemCount={data.length}
                itemSize={30}
            >
                {row}
            </List>
            {loading && <div style={{ textAlign: 'center', marginTop: 10 }}>Loading...</div>}
        </>
    )
}

export default ScrollHome;