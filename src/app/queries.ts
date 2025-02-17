import axios from 'axios'
import type {ApiThing,
  ThingsResponse  
} from './types.ts'

export function fetchThings(page: number): Promise<ThingsResponse> {
  return axios.get(`/api/thing?page=${page}`).then((response) => {
    return response.data
  })
}

export function fetchThing(thingId: string): Promise<ApiThing> {
    return axios.get(`/api/thing/${thingId}/`).then((response) => {
      return response.data
    })
  }
