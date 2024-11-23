import React, { useState } from 'react';
import {
	AiListContainer,
	AiListstyle,
	GptComment,
	MeetingDetails,
	MeetingItem,
	MeetingTitle,
} from '../../../styles/Partici_Mang/AIstyles';

const AiList = ({ meetingData }) => {
	const [showItem, setShowItem] = useState({});

	// 토글 함수
	const toggleItem = (id) => {
		setShowItem((prevShowItem) => ({
			...prevShowItem,
			[id]: !prevShowItem[id],
		}));
	};

	return (
		<AiListContainer>
			{meetingData.map((list) => (
				<MeetingItem key={list.userId}>
					<MeetingTitle onClick={() => toggleItem(list.userId)}>
						{list.userId}번째 회의
						<span>{showItem[list.userId] ? '▲' : '▼'}</span>
					</MeetingTitle>
					{showItem[list.userId] && (
						<MeetingDetails>
							<AiListstyle>
								<li>내용: {list.content}</li>
								<li>gpt 내용: {list.gptComment}</li>
							</AiListstyle>
						</MeetingDetails>
					)}
				</MeetingItem>
			))}
		</AiListContainer>
	);
};

export default AiList;
