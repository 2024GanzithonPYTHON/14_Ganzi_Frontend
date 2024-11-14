import React, { useState } from 'react';
import {
	Searchgroup,
	Searchinput,
	Typeselect,
} from '../../styles/ContentStyles';

const Searchbar = () => {
	const selectCategory = [
		'카테고리별',
		'웹/모바일/IT',
		'광고/마케팅',
		'기획/아이디어',
		'대외활동',
	];
	const [Selected, setSelected] = useState('');
	const handleSelect = (e) => {
		setSelected(e.target.value);
	};
	return (
		<>
			<Searchgroup>
				<Typeselect onChange={handleSelect} value={Selected}>
					{selectCategory.map((item) => (
						<option value={item} key={item}>
							{item}
						</option>
					))}
				</Typeselect>
				<Searchinput type='text' placeholder='            검색어 입력' />
			</Searchgroup>
		</>
	);
};

export default Searchbar;
