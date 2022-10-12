import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { _deleteComment } from "../../redux/modules/comment";
import { useNavigate, useParams } from "react-router-dom";
import Star from "../star/Star";
import DetailRevise from "./DetailRevise";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import ModalPortal from "../modal/ModalPortal";
import Modal from "../modal/Modal";
import { getCookie } from "../../shared/Cookie";

const CommentModal = ({ comment }) => {
  const [modalOn, setModalOn] = useState(false);
  const nickname = localStorage.getItem("nickname");
  const getToken = getCookie("ACCESS_TOKEN");
  const navigate = useNavigate();

  const handleModal = () => {
    setModalOn(false);
  };
  const deleteModal = () => {
    setModalOn(true);
  };
  const noLogin = (e) => {
    e.preventDefault();
    alert("로그인이 필요한 서비스 입니다");
    navigate("/login");
  };

  return (
    <>
      <ComDiv key={comment.comment_id}>
        <BoxDiv>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}></div>
            <div style={{ textAlign: "center" }}>
              {comment.imageList.map((image, index) => {
                return <DetailImg key={index} alt="" src={image} />;
              })}
            </div>
            <Star key={comment.comment_id} comment={comment} />
            <p style={{ marginTop: "20px", lineHeight: "28px" }}>
              {comment.content}
            </p>
            {getToken === undefined
              ? <ModalPortal>
              {modalOn && <Modal onClose={handleModal} comment={comment} />}
              </ModalPortal>
              :<div>
              {nickname === comment.nickname ? (
              <ButtonDiv>
                <ReviseBut onClick={deleteModal}>삭제하기</ReviseBut>
                <DelBut
                  onClick={() =>
                    navigate(
                      "/detail/update/" +
                        comment.place_id +
                        "/" +
                        comment.comment_id
                    )
                  }
                >
                    수정하기
                  </DelBut>
                </ButtonDiv>
              ) : null}
              <ModalPortal>
                {modalOn && <Modal onClose={handleModal} comment={comment} />}
              </ModalPortal>
              </div>
              }
          </div>
        </BoxDiv>
      </ComDiv>
    </>
  );
};

export default CommentModal;

const ComDiv = styled.div`
  width: 95%;
  padding-bottom: 2rem;
  margin: 0 auto;
`;
const BoxDiv = styled.div`
  margin: 0rem 1rem 0rem 1rem;
`;

const ReviseBut = styled.button`
  cursor: pointer;
  font-weight: 600;
  color: #abd4e2;
  background-color: white;
  border: 3px solid #abd4e2;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  line-height: 2.1rem;
  /* margin-left:1rem; */
  width: 100%;
`;
const DelBut = styled.button`
  cursor: pointer;
  color: white;
  background-color: #abd4e2;
  border: 0px;
  height: 2.5rem;
  border-radius: 5px;
  line-height: 2.5rem;
  /* margin-right:1rem; */
  width: 100%;
  font-weight: bold;
`;
const DetailImg = styled.img`
  width: 300px;
  border-radius: 20px;
  margin-top: 1rem;
  /* border: 1px solid rgb(195, 194, 204); */
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
