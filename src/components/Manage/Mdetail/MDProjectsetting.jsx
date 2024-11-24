import React from 'react';
import styled from 'styled-components';

const AIMeeting = ({ projectData }) => {
	console.log('MDAIMeeting received projectData:', projectData);

	if (!projectData) {
		return <div>Loading...</div>;
	}

	const Div4 = styled.div`
		height: 200vh;
	`;

	return <Div4></Div4>;
};

export default AIMeeting;
