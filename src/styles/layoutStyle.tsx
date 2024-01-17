import React from "react";
import styled from "@emotion/styled";

// -------------------- Layout --------------------
export const LayoutDiv = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  font: inherit;
  vertical-align: baseline;
`

export const MainDiv = styled.div`
  position: relative;
  width: 100vw;
`

// -------------------- Header --------------------
export const HeaderDiv = styled.div`
  top: 0;
  width: 100%;
  height: 100px;
  position: fixed;
  color: #eee;
  background-color: rgba(0,0,0,0.17);
  backdrop-filter: blur(1.8px);
  z-index: 999;
`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`


export const GnbDiv = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 18px;
  text-transform: uppercase;
`

export const GnbUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`

export const GnbLi = styled.li`
  cursor: pointer;
`


// -------------------- Footer --------------------
export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: #000;
  bottom: 0;
  justify-content: end;
  align-items: end;
`

export const FooterP = styled.p`
  margin: 30px 100px;
`