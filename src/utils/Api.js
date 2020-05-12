import { APP_ACCESS_KEY } from 'react-native-dotenv'

export const getPhotos = async (id,page=1) => {
  try {
    const res = await
      fetch(`https://api.unsplash.com/collections/${id}/photos?page=${page}&client_id=${APP_ACCESS_KEY}`)
    const response = await res.json()
    return response
  } catch (e) {
    console.error(e)
  }

}