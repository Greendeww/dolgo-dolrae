import React, { useState } from "react";
import search from "../../../assert/header/search.png";
import styled from "styled-components";

const ReviseMap = ({searchWords}) => {
    const [searchWord, setSearchWord] = useState(searchWords);
    const [modal, setModal] = useState(false)  
    const onClose = () => {
      setModal(false)
    };
  
    const onSubmitSearch = (e) => {
      if (e.key === "Enter") {
        if (searchWord === undefined) {
          alert("검색어를 입력해주세요.");
        } else {
          window.location.replace("/cose/revises/" + searchWord);
        }
      }
    };
  
    return (
      <>
        <SearchBox>
          <SearchContainer>
            <SearchDiv>
              <InputDiv >
                <input
                  type="text"
                  placeholder="코스에 추가하고 싶은 장소를 입력해주세요"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  onKeyPress={onSubmitSearch}
                  onClick={() => setModal(true)}
                />
                </InputDiv>
              <SearchA>
                <img
                  onClick={() => {
                    if (searchWord === undefined) {
                      alert("검색어를 입력해주세요.");
                    } else {
                      window.location.replace("/cose/revises/" + searchWord);
                    }}}
                  src={search}
                  alt="search"
                  style={{ color: "#FF8585" }}
                />
              </SearchA>
            </SearchDiv>
            </SearchContainer>
        </SearchBox>
      </>
    );
  };
  
  export default ReviseMap;
  
  const SearchBox = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    position: relative;
    background-color: #abd4e2;
    top: -1px;
    font-family: bold;
  `;
  const SearchContainer = styled.div`
  
  `
  const InputDiv = styled.div`
    width:87%;
    background-color:#fff;
    margin-right:1.3rem;
    /* border-radius:10px; */
    hr{
      margin-left:0.8rem;
      margin-right:1rem;
      border: 2px solid #abd4e2;
    }
    input {
      width:90%;
      color: rgb(102, 102, 102);
      flex-grow: 1;
      appearance: none;
      border: none;
      height: 2.5rem;
      font-weight: 700;
      padding-left: 1rem;
      font-size: 1rem;
      ::placeholder {
        color: rgb(179, 179, 179);
        font-weight: 500;
      }
      &:hover,
      :focus {
        outline: none;
      }
    }
  `
  const SearchDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px 15px;
    box-sizing: border-box;
  `;
  
  const SearchA = styled.a`
    color: rgb(33, 33, 33);
    text-decoration: none;
    margin-top:0.7rem;
    align-items:center;
    cursor: pointer;
    img {
      vertical-align: bottom;
      width: 18px;
      height: 20px;
      margin-right:0.8rem;
    }
  `;