import React from 'react';

const SearchForm = () => {
    return ( 
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="Movie to search..."/>
            </div>
            <div className="control">
                <button className="button is-info">
                    Search
                </button>
            </div>
        </div>
     );
}
 
export default SearchForm;