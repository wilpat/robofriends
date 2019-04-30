import React from 'react';

const SearchBox = ({searchChange}) =>{
	return (
		<div className='pa2'>
			<input
			aria-label = "Search Box"
			className = 'pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder ='search robots'
			onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;