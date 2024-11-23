import React from 'react';
import { Searchinput } from '../../styles/ContentStyles';

export default function SearchTyping({ setSearchTerm }) {
	const handleInputChange = (e) => {
		setSearchTerm(e.target.value); // 검색어 업데이트
	};

	return (
		<div>
			<Searchinput
				type='text'
				onChange={handleInputChange}
				placeholder='검색어를 입력하세요'
			/>
		</div>
	);
}
