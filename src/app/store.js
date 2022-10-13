import { configureStore } from '@reduxjs/toolkit'
import slice from '../app/redux/slice'
export default configureStore({
    reducer: {
     nobi:slice
  },
})