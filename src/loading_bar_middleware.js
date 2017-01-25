import { showLoading, hideLoading } from './loading_bar_ducks'

export default function loadingBarMiddleware(config = {}) {
  const promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypeSuffixes

  return ({ dispatch }) => next => (action) => {
    if (action.meta) {

      if (action.meta.loading === true) {
        dispatch(showLoading())
      } else if (action.meta.loading === false) {
        dispatch(hideLoading())
      }
    }

    return next(action)
  }
}
