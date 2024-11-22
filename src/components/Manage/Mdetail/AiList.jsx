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
				<MeetingItem key={list.meetingId}>
					<MeetingTitle onClick={() => toggleItem(list.meetingId)}>
						{list.title}

						<span>{showItem[list.meetingId] ? '▲' : '▼'}</span>
					</MeetingTitle>
					{showItem[list.meetingId] && (
						<MeetingDetails>
							<AiListstyle>
								<li>내용: {list.content}</li>
							</AiListstyle>
						</MeetingDetails>
					)}
				</MeetingItem>
			))}
		</AiListContainer>
	);
};

export default AiList;
