import React from 'react';
import { AiListGPT, AiListperson } from '../../../styles/Partici_Mang/AIstyles';

const AiList = ({ aiSummaries }) => {
	return (
		<div>
			<h1>AI 요약 목록</h1>
			{aiSummaries && aiSummaries.length > 0 ? (
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
