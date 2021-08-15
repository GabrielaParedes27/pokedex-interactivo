import React from 'react';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;

    
    return(
        <div className="pagination">
            <button>◀️</button>
            <div>1 de 100</div>
            <button>▶️</button>
        </div>
    )
}

export default Pagination;