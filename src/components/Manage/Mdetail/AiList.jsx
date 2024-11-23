import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiListGPT, AiListperson } from '../../../styles/Partici_Mang/AIstyles';

const AiList = ({ projectId }) => {
	const [aiSummaries, setAiSummaries] = useState([]); // 요약 데이터 상태

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/project/${projectId}/meeting`, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

				console.log('받은 데이터:', response.data);
				setAiSummaries(response.data); // 요약 데이터 설정
			} catch (error) {
				console.error('Error fetching AI summaries:', error);
			}
		};

		fetchData();
	}, [projectId]);

	return (
		<div>
			<h1>AI 요약 목록</h1>
			{aiSummaries.length > 0 ? (
				<ul>
					{aiSummaries.map((summary, index) => (
						<li key={index}>
							<AiListperson>
								<strong>주제:</strong> {summary.message}
							</AiListperson>
							<AiListGPT>
								<strong>요약:</strong> {summary.result}
							</AiListGPT>
						</li>
					))}
				</ul>
			) : (
				<p>요약된 내용이 없습니다.</p>
			)}
		</div>
	);
};

export default AiList;
