import React, { useState } from 'react';
import { FormTypeCompntText } from '../../styles/ModalFormStyle';

export default function FormTypingText({ placeholder }) {
	const onChange = (e) => {
		console.log(e.target.value);
	};
	const [isInputFormClicked, setIsInputFormClicked] = useState(false);
	return (
		<div>
			<FormTypeCompntText
				type='text'
				onChange={onChange}
				onFocus={() => {
					setIsInputFormClicked(true);
				}}
				onBlurCapture={() => {
					setIsInputFormClicked(false);
				}}
				placeholder={isInputFormClicked === true ? '' : placeholder}
			/>
		</div>
	);
}
