import React from "react";
import styled from "styled-components";
import Section from "./Section";

const StyledSections = styled.div`
  margion: 0;
`;

function Sections() {
  // dispatch 하기
  const sections = [
    {
      key: 1,
      title: `dodoist와 함께 체계적으로 일하세요`,
      content: [
        {
          subTitle: "",
          subContent: [`맥 앱스토어에서 다운로드`],
          addInfos: [],
        },
      ],
      subContents: [],
    },
    {
      key: 2,
      title: `기억 공간을 확보하세요`,
      content: [
        {
          subTitle: "",
          subContent: [
            `모든 작업을 머릿속에서 꺼내어 할일 목록으로 옮기고 명료성과 평온함을 되찾으세요 (어디에서나 모든 기기에서 가능).\nTodoist 기능 살펴보기Todoist 실행 방법 보기`,
          ],
          addInfos: [],
        },
      ],
      subContents: [],
    },
    {
      key: 3,
      title: "Section3",
      content: [
        {
          subTitle: "구글 플레이",
          subContent: ["★★★★★", "에디터 초이스 별 4.7, 187K+ 리뷰"],
          addInfos: [],
        },
        {
          subTitle: "앱스토어",
          subContent: ["★★★★★", "추천 앱별 4.8, 30K+ 리뷰"],
          addInfos: [],
        },
        {
          subTitle: "The Verge",
          subContent: [
            `9/10“최고의 할일 목록 앱"`,
            "Todoist는 1억 5천만개의 프로젝트에서 수백만명의 사람들이 15억개 이상의 작업을 완료하는 것을 도왔습니다.",
          ],
          addInfos: [],
        },
      ],
      subContents: [],
    },
    {
      key: 4,
      title: "Section4",
      content: [
        {
          subTitle: "",
          subContent: [
            "Todoist의 도움 없이 업무 처리 또는 모든 사업 관리를 할 수 없었습니다.",
          ],
          addInfos: [],
        },
        { subTitle: "", subContent: ["Khoi Vinh"], addInfos: [] },
        { subTitle: "", subContent: ["Adobe 수석 디자이너"], addInfos: [] },
      ],
      subContents: [],
    },
    {
      key: 5,
      title: "항상 신뢰할 수 있는 작업 관리자",
      content: [
        {
          subTitle: "",
          subContent: [
            "15년 그리고 11일 만에 Todoist를 구축해 왔으며, 매진 또는 인수를 고려한 적이 없습니다.",
          ],
          addInfos: [],
        },
        {
          subTitle: "",
          subContent: [
            "저희 팀은 저희 앱을 필요로 하는 한 독립적이고 신뢰를 얻는 데 최선을 다하고 있습니다.",
          ],
          addInfos: [],
        },
        ,
      ],
      subContents: [],
    },
  ];

  return (
    <StyledSections>
      {sections.map((section, idx) => (
        <Section key={section.key} title={section.title} />
      ))}
    </StyledSections>
  );
}

export default Sections;
