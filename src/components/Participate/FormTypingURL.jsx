import React, { useState } from 'react';
import { FormTypeCompnt } from '../../styles/Modal/ModalFormStyle';

export default function FormTypingURL({ placeholder }) {
	const onChange = (e) => {
		console.log(e.target.value);
	};
	const [isInputFormClicked, setIsInputFormClicked] = useState(false);
	return (
		<div>
			<FormTypeCompnt
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
