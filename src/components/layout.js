import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
`

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    {children}
  </Wrapper>
)