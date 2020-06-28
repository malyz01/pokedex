import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { requestApiRecipeInfo } from '../../../store/actions/spoonacular'

const index = (props) => {
  const recipeId = props.match.params.id
  useEffect(() => {
    props.requestApiRecipeInfo(recipeId)
  }, [])
  return <div>Recipe details</div>
}

export default connect(null, { requestApiRecipeInfo })(index)
