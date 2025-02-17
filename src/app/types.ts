
interface ApiThing {
    id: number
    name: string
    slug: string
}  
 
  interface ThingsResponse {
    count: number
    next: string
    previous: string
    results: ApiThing[]
  }
  

  export enum CollectionLayoutStyle {
    icons = 'icons',
    table = 'table'
}

export type {
    ApiThing,
    ThingsResponse
}