import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
  debugger
    return (
        <main>
            {wpPage.content}
        </main>
    )
}

export const query = graphql`
  query MyQuery($id: String!) {
    wpPage (id: {eq: $id}){
        content
    }
  }
`

export default IndexPage
