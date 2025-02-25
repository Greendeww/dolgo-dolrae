import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import basicImg from "../../assert/image/basic.png";
import { instance } from "../../shared/Api";
import { useLocation } from "react-router";
import { FaStar } from "react-icons/fa";
import filter from "../../assert/header/filter.png";
import CoseHeader from "../header/CoseHeader";
import CoseSelectModal from "../modal/CoseSelectModal";

const MapSearchSel = () => {
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [modalOn, setModalOn] = useState(false);
  const observerTargetEl = useRef(null);
  const page = useRef(0);
  const navigate = useNavigate();
  let [cose, setCose] = useState(
   JSON.parse(sessionStorage.getItem('TITLE_NAME')) || []
  );
  const { pathname } = useLocation();
  const {searchWord} = useParams();
  const { si } = useParams();
  const { area } = useParams();
  const AREA_NAME = window.sessionStorage.getItem("AREA_NAME");
  const SIGUNGU_NAME = window.sessionStorage.getItem("SIGUNGU_NAME");
  const fetch = useCallback(async () => {
    try {
      const {data} = await instance.get(
        `/api/place/search?keyword=${searchWord}&pageNum=${page.current}&areaCode=${area}&sigunguCode=${si}`
      );
      setPosts((prevPosts) => [...prevPosts, ...data.content]);
      setHasNextPage(data.content.length === 10);
      if (data.content.length) {
        page.current += 1;
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('TITLE_NAME', JSON.stringify(cose))
  },[cose]);


  const handleAddKeyword = (text,index) => {
    const newKeyword = {
      id: Date.now(),
      title : text[0],
      placeId: text[1]
    }
    setCose([...cose,newKeyword])
    window.location.replace('/cose/add')

  } 

  const initialization = (e) => {
    sessionStorage.removeItem("Title");
  };


  useEffect(() => {
    initialization();
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetch();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [fetch, hasNextPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const close = () => {
    setModalOn(false);
  }
  return (
    <StList>
      <CoseHeader searchWords={searchWord}/>
      <HeadTitle>
        <div>
          <p>{AREA_NAME}</p>
        </div>
        <p>‣</p>
        <div>
          <p>{SIGUNGU_NAME}</p>
        </div>
        <p
          style={{ cursor: "pointer", paddingLeft: "2rem" }}
          onClick={() => navigate(-1)}
        >
          ↺
        </p>
      </HeadTitle>
      <HelpP>추가하고 싶은 장소를 상단 검색창에 입력해주세요</HelpP>
      <CancelBut onClick={() => navigate('/cose/add')}>뒤로가기</CancelBut>
      {modalOn === true
      ?<CoseSelectModal close={close} searchWord={searchWord}/>
      :null
      }
      <Content>
        {posts &&
          posts.map((list) => (
            <Card key={list.placeId} 
                onClick={() => {
                    handleAddKeyword([list.title,list.placeId])
                }}>
              {list.image == null ? (
                <>
                  <BasicImg src={basicImg}/>
                  <Name>
                    <ListTitle style={{ color: "#414141" }}>
                      {list.title}
                    </ListTitle>
                    <div style={{ display: "flex" }}>
                      <FaStar
                        style={{ color: "#fcc419", marginRight: "0.3rem", marginTop: "0.2rem" }}
                      />
                      {list.star}
                    </div>
                  </Name>
                </>
              ) : (
                <>
                  <ImgShadow>
                    <ImgBox>
                      <Img src={list.image} />
                    </ImgBox>
                  </ImgShadow>
                  <Name>
                    <ListTitle>{list.title}</ListTitle>
                    <div style={{ display: "flex" }}>
                    <FaStar
                        style={{ color: "#fcc419", marginRight: "0.3rem", marginTop: "0.2rem" }}
                      /> {list.star}
                    </div>
                  </Name>
                </>
              )}
            </Card>
          ))}
      </Content>
      <div ref={observerTargetEl} />
    </StList>
  );
};

export default MapSearchSel;

const StList = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;

  & button {
    margin-left: 15px;
    margin-top: 30px;
    background: #ffc0c0;
    height: 40px;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    color: #ffffff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const HeadTitle = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  top: 80px;
  height: 150px;
  max-width: 428px;
  width: 100%;
  z-index: 3;

  & div {
    width: 90px;
    height: 50px;
    background-color: #c4e0ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: auto 15px;
  }

  & p {
    color: #ffc0c0;
    font-size: 45px;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  & div > p {
    display: flex;
    justify-content: center;
    margin-block-start: 8px;
    margin-block-end: 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: normal;
    text-shadow: none;
    margin-top: 13px;
  }
`;
const HelpP = styled.p`
  max-width: 428px;
  width:100%;
  padding-top:8.8rem;
  justify-content: flex-start;
  text-align:start;
  color:rgb(255, 133, 133);
  background-color: #ffffff;
  display: flex;
  position:fixed;
  height:107px;
  z-index:2;
`
const Card = styled.div`
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  top: 330px;
`;

const BasicImg = styled.img`
  position: relative;
  width: 100%;
  height: 234px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

const ImgShadow = styled.div`
  margin: 0 auto;
  width: 420px;
  height: 235px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const ImgBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 235px;
  border-radius: 20px;
  box-shadow: inset 0 -30px 70px #2e2e2e;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 234px;
  z-index: -2;
  border-radius: 20px;
`;

const Name = styled.div`
  display: flex;
  position: relative;
  top: -55px;
  text-align: initial;
  margin-left: 35px;
  color: #ffffff;
  font-size: 23px;
  line-height: 33px;
  margin-block-end: 0;
  margin-block-start: 0;
  gap: 20px;
`;

const ListTitle = styled.div`
  display: block;
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CancelBut = styled.p`
  cursor: pointer;
  font-weight: bold;
  color: #abd4e2;
  background-color: white;
  border: 3px solid #abd4e2;
  height: 3.5rem;
  top:15.5rem;
  border-radius: 5px;
  line-height: 3.5rem;
  position:fixed;
  width:100%;
  z-index:1;
  max-width:420px;
  display:flex;
  justify-content:center;
  font-size:1.6rem;
`;