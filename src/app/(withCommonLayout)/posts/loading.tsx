import React from 'react';

const PostLoading = () => {
    return (
      <>
        <div className="skeleton card bg-base-100 w-96 shadow-xl animate-pulse">
          <figure>
            <div className="skeleton h-56 bg-gray-200"></div>
          </figure>
          <div className="skeleton card-body">
            <h2 className="skeleton card-title">
              <div className="skeleton h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="skeleton badge p-3 h-6 bg-gray-200 rounded mt-2 w-1/2"></div>
            </h2>
            <div className="skeleton card-actions justify-end">
              <div className="skeleton h-4 bg-gray-200 rounded w-full mt-2"></div>
            </div>
            <div className="skeleton h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
          </div>
        </div>
      </>
    );
};

export default PostLoading;