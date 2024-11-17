import React, { useState } from 'react';
import {
	Dropdown,
	DropdownItem,
	DropdownList,
	Searchgroup,
	SelectedItem,
} from '../../styles/ContentStyles';
import SearchTyping from './SearchTyping';

const Searchbar = () => {
	const selectCategory = [
		'카테고리별',
		'웹/모바일/IT',
		'광고/마케팅',
		'기획/아이디어',
		'대외활동',
	];
	const [selected, setSelected] = useState('카테고리별');
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (item) => {
		setSelected(item);
		setIsOpen(false);
	};

	return (
		<>
			<Searchgroup>
				<Dropdown>
					<SelectedItem onClick={() => setIsOpen(!isOpen)}>
						{selected}
						<span>▼</span>
					</SelectedItem>
					{isOpen && (
						<DropdownList>
							{selectCategory.map((item) => (
								<DropdownItem key={item} onClick={() => handleSelect(item)}>
									{item}
								</DropdownItem>
							))}
						</DropdownList>
					)}
				</Dropdown>
				<SearchTyping />
			</Searchgroup>
		</>
	);
};

export default Searchbar;
