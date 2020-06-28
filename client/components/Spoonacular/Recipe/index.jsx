import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { requestApiRecipeInfo } from '../../../store/actions/spoonacular'

const index = (props) => {
  const recipeId = props.match.params.id

  useEffect(() => {
    props.requestApiRecipeInfo(recipeId)
  }, [])

  const recipeDetails = Object.keys(props.info)
  if (!recipeDetails.length) return <h1>No Recipe Info</h1>
  return (
    <div>
      <h1>{props.info.title}</h1>
      {recipeDetails.map((r, i) => {
        return (
          <div
            key={i}
            className="mb-5 mx-auto"
            style={{ width: '80%', border: '2px solid black' }}
          >
            <div>{r}</div>
            {Array.isArray(props.info[r]) ? (
              props.info[r].map((x, ind) => (
                <pre key={ind}>{JSON.stringify(x, null, 2)}</pre>
              ))
            ) : (
              <pre>{JSON.stringify(props.info[r], null, 3)}</pre>
            )}
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  info: state.spoonacular.recipe
})

export default connect(mapStateToProps, { requestApiRecipeInfo })(index)
