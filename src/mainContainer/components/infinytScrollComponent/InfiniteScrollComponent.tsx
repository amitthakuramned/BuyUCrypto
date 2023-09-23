import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


//Hight order component
const withInfiniteScroll = (WrappedComponent:any) => {
  return (props:any) => {
    const [data, setData] = useState<any>([]);
    const [hasMore, setHasMore] = useState(true);
    const fetchData = () => {
      setHasMore(data.length < 300); 
    };

    useEffect(() => {
      setData(props?.dataSource);
    }, [props?.dataSource]);

    return (
      <InfiniteScroll
        dataLength={data?.length}
        next={fetchData}
        hasMore={hasMore}
        loader={null}
      >
        <WrappedComponent {...props} data={data} />
      </InfiniteScroll>
    );
  };
};

export default withInfiniteScroll;
