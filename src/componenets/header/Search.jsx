import React, { useState } from "react";
import search from "../../assert/header/search.png";
import styled from "styled-components";

const Search = ({ title }) => {
  const [searchWord, setSearchWord] = useState(title);

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      if (searchWord === undefined) {
        alert("검색어를 입력해주세요.");
      } else {
        window.location.replace("/search/" + searchWord);
      }
    }
  };

  return (
    <>
      <SearchBox>
        <SearchDiv>
          <input
            type="text"
            placeholder="찾고 싶은 장소를 입력해주세요."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyPress={onSubmitSearch}
          />
          <SearchA>
            <img
              onClick={() => {
                if (searchWord === undefined) {
                  alert("검색어를 입력해주세요.");
                } else {
                  window.location.replace("/search/" + searchWord);
                }}}
              src={search}
              alt="search"
              style={{ color: "#FF8585" }}
            />
          </SearchA>
        </SearchDiv>
      </SearchBox>
    </>
  );
};

export default Search;

const SearchBox = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: relative;
  background-color: #abd4e2;
  top: -1px;
`;
const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  input {
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    height: 2.5rem;
    border-radius: 10px;
    margin-right: 1rem;
    font-weight: 700;
    padding-left: 1rem;
    font-size: 1rem;
    ::placeholder {
      color: rgb(179, 179, 179);
      /* text-align:center; */
      font-weight: 500;
    }
    &:hover,
    :focus {
      outline: none;
    }
  }
`;
const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 18px;
    height: 20px;
  }
`;
