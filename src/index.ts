import universities from './list.json' with { type: 'json' }
import { University } from './types'


export { RawUniversity, University } from './types'

export default universities as University[]
