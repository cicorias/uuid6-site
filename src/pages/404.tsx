import * as React from "react"
import { Link } from "gatsby"
import {css} from "../styles/css"


// markup
const NotFoundPage = () => {
  return (
    <main style={css.pageStyles}>
      <title>Not found</title>
      <h1 style={css.headingStyles}>Page not found</h1>
      <p style={css.paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={css.codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
