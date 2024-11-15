import React, { useState } from 'react';
import { Searchgroup, Typeselect } from '../../styles/ContentStyles';
import SearchTyping from './SearchTyping';

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
				<SearchTyping />
			</Searchgroup>
		</>
	);
};

export default Searchbar;
