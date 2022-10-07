import React from 'react'
import { instance } from '../../shared/Api';
import styled from "styled-components";
import { useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Like from '../like/Like';
import Header from '../header/Header';
import basicImg from "../../assert/image/basic.png";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const RandomSelect = () => {
    const {si} = useParams();
    const {area} =useParams();
    console.log(si)
    console.log(area)
    const navigate = useNavigate();

    const [random, setRandom] = useState();
    const fetch = async () => {
        const response = await instance.get(`/api/place/random?sigunguCode=${si}&areaCode=${area}`); 
        console.log(response.data)
        setRandom(response.data)
        }
    useEffect(() => {
        window.scrollTo(0,0)
        fetch()
    }, []);
   
    // console.log(random?.placeList[0]?.id)
    // console.log(random?.placeList[1]?.id)
    // console.log(random?.placeList[2]?.id)
    // console.log(random?.placeList[3]?.id)

    const onRandom = (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        let timerInterval
        Swal.fire({
            title: '지역을 선정중입니다',
            html: '잠시만 기다려주세요',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
              fetch();
              window.location.reload();
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
        console.log("작동")
    }

    return (
     <>
     <BoxDiv>
     <Header/>
     <Box>
       <LocDiv>
         <PTitle>이번엔 </PTitle>
         <SpanRandom>{random?.area}</SpanRandom>
         <PTitle2>어때요? </PTitle2> 
       </LocDiv>
       <TemaDiv>
         <TemaBox>
            <TemaP>
                <TemaName>관광</TemaName>
            </TemaP>
            <TemaImgBox >
                {random?.placeList[0]?.image === null
                ?<TemaImg onClick={() => navigate('/detail/'+random?.placeList[0].id)} alt='' src={basicImg}/>
                :<TemaImg onClick={() => navigate('/detail/'+random?.placeList[0].id)} alt='' src={random?.placeList[0]?.image}/>
                }
                {/* <TemaImg alt='' src={random?.placeList[0]?.image}/> */}
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>{random?.placeList[0]?.title}</TemaTilte>
                        <TemaStar>
                            <FaStar style={{color:"#fcc419",marginLeft:"0.3rem", marginRight:"0.1rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>{random?.placeList[0]?.star}</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart><Like id={random?.placeList[0]?.id} /></TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>관람</TemaName>
            </TemaP>
            <TemaImgBox >
                {random?.placeList[1]?.image === null
                ?<TemaImg onClick={() => navigate('/detail/'+random?.placeList[1].id)} alt='' src={basicImg}/>
                :<TemaImg onClick={() => navigate('/detail/'+random?.placeList[1].id)} alt='' src={random?.placeList[1]?.image}/>
                }
                {/* <TemaImg alt='' src={random?.placeList[1]?.image}/> */}
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>{random?.placeList[1]?.title}</TemaTilte>
                        <TemaStar>
                        <FaStar style={{color:"#fcc419",marginLeft:"0.3rem", marginRight:"0.1rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>{random?.placeList[1]?.star}</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart><Like id={random?.placeList[1]?.id} /></TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>액티비티</TemaName>
            </TemaP>
            <TemaImgBox >
                 {random?.placeList[2]?.image === null
                ?<TemaImg onClick={() => navigate('/detail/'+random?.placeList[2].id)} alt='' src={basicImg}/>
                :<TemaImg onClick={() => navigate('/detail/'+random?.placeList[2].id)} alt='' src={random?.placeList[2]?.image}/>
                }
                {/* <TemaImg alt='' src={random?.placeList[2]?.image}/> */}
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>{random?.placeList[2]?.title}</TemaTilte>
                        <TemaStar>
                        <FaStar style={{color:"#fcc419",marginLeft:"0.3rem", marginRight:"0.1rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>{random?.placeList[2]?.star}</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart><Like id={random?.placeList[2]?.id} /></TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>식도락</TemaName>
            </TemaP>
            <TemaImgBox>
                {random?.placeList[3]?.image === null
                ?<TemaImg onClick={() => navigate('/detail/'+random?.placeList[3].id)} alt='' src={basicImg}/>
                :<TemaImg onClick={() => navigate('/detail/'+random?.placeList[3].id)} alt='' src={random?.placeList[3]?.image}/>
                }
                {/* <TemaImg alt='' src={random?.placeList[3]?.image}/> */}
                <TemaDesc>
                    <div style={{display:"flex",width:"90%"}}>
                        <TemaTilte>{random?.placeList[3]?.title}</TemaTilte>
                        <TemaStar>
                        <FaStar style={{color:"#fcc419",marginLeft:"0.3rem", marginRight:"0.1rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>{random?.placeList[3]?.star}</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart><Like id={random?.placeList[3]?.id}/></TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <ButDiv>
            <RandomBut><ButText onClick={()=>{onRandom()}}>다시 돌리기</ButText></RandomBut>
            <RandomBut><ButText onClick={()=>navigate('/rndLocation')}>＜ 지역 다시 선택하기</ButText></RandomBut>
         </ButDiv>
       </TemaDiv>
     </Box>
     </BoxDiv>
    </>
    )
    }

export default RandomSelect;
<<<<<<< HEAD
const BoxDiv = styled.div`
    width: 100%;
    max-width:428px;
    margin: 0 auto;
    border:2px solid #79B9D3;
    line-height:40px;
    height:100%;
`
const Box = styled.div`
    padding-top:2.5rem;
    width: 100%;
    max-width:428px;
    margin: 0 auto;
    /* border:2px solid #79B9D3; */
    line-height:40px;
    height:100%;
=======

const Box = styled.div`
  padding-top: 70px;
  width: 100%;
  max-width: 428px;
  margin: 0 auto;
  line-height: 40px;
  height: 100%;
>>>>>>> 7b0ae381ba0d74f30401f8191c284921692acc97
`;
const LocDiv = styled.div`
  width: 90%;
  margin: 60px auto;
  text-align: center;
  color: #bfb8b8;
`;
const PTitle = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  margin-left: 2rem;
  text-align: start;
`;
const PTitle2 = styled.p`
  font-size: 2rem;
  margin-top: 0.7rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  text-align: end;
`;
const SpanRandom = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 54.5px;
  color: #acd4e4;
`;
const TemaDiv = styled.div`
  flex-shrink: 0;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const TemaBox = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;
const TemaP = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const TemaName = styled.span`
  font-size: 30px;
  line-height: 42.3px;
  color: #ffaeae;
  font-weight: 700;
  padding-bottom: 5px;
`;
const TemaHeart = styled.span`
  font-size: 2rem;
  line-height: 0.5rem;
  cursor: pointer;
  color: #ff8585;
`;
const TemaImgBox = styled.div`
  flex-shrink: 0;
  max-width: 428px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
`;
const TemaImg = styled.img`
  width: 100%;
  min-height: 230px;
  max-height: 230px;
  border-radius: 20px;
`;
const TemaDesc = styled.div`
  width: 95%;
  text-align: start;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const TemaTilte = styled.span`
  font-size: 20px;
  line-height: 1.1rem;
`;
const TemaStar = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  line-height: 1rem;
`;

const ButDiv = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 80px;
`;
const RandomBut = styled.button`
  cursor: pointer;
  color: white;
  background-color: #ABD4E2;
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
`;
const ButText = styled.p`
  font-weight: 700;
  line-height: 0.6rem;
  font-size: 1rem;
`;