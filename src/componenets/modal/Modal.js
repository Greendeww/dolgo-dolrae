import React from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { _deleteComment } from "../../redux/modules/comment";

const Modal = ({ onClose, comment}) => {
  const dispatch = useDispatch();

  return (
      <Background>
        <Content>
          <DivBack>
            <PageDel>
              <p>정말 삭제하시겠습니까?</p>
              <Button>
                <Jimbut
                  onClick={() => {
                    dispatch(_deleteComment(comment));
                  }}
                >
                  삭제
                </Jimbut>
                <Bunbut
                  onClick={() => {
                    onClose(false);
                  }}
                >
                  취소
                </Bunbut>
              </Button>
            </PageDel>
          </DivBack>
        </Content>
      </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링
const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 10;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: 70px; */
  position: relative;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.6);
`;

const DivBack = styled.div`
  /* z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); */
`;
const PageDel = styled.div`
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  width: 296px;
  height: 141px;
  border: 3px solid #79B9D3;
  background-color: rgb(255, 255, 255);
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  border-radius:20px;
`;
const Button = styled.div`
  width: 160px;
  height: 35px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  margin-top: 20px;
`;
const Jimbut = styled.button`
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  align-items: center;
  background: white;
  border: 3px solid #79B9D3;
  color: #79B9D3;
  cursor: pointer;
  border-radius:5px;
`;
const Bunbut = styled.button`
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  align-items: center;
  background: #79B9D3;
  border: 1px solid #79B9D3;
  color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius:5px;
`;