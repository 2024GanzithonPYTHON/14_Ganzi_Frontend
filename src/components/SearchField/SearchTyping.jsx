import React, { useState } from 'react';
import { Searchinput } from '../../styles/ContentStyles';

export default function SearchTyping() {
	const onChange = (e) => {
		console.log(e.target.value);
	};
	const [isInputClicked, setIsInputClicked] = useState(false);
	return (
		<div>
			<Searchinput
				type='text'
				onChange={onChange}
				onFocus={() => {
					setIsInputClicked(true);
				}}
				onBlurCapture={() => {
					setIsInputClicked(false);
				}}
				placeholder={isInputClicked === true ? '' : '검색어를 입력하세요'}
			/>
		</div>
	);
}
