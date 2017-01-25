import { showLoading, hideLoading } from './loading_bar_ducks'

export default ({ dispatch }) => next => (action) => {
  if (action.meta) {

    if (action.meta.loading === true) {
      dispatch(showLoading())
    } else if (action.meta.loading === false) {
      dispatch(hideLoading())
    }
  }

  return next(action)
}
