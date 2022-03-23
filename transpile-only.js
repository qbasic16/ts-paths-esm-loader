import { resolve as resolveTs } from 'ts-node/esm/transpile-only'
import { resolverFactory } from './resolverFactory.js'

export const resolve = resolverFactory(resolveTs)

export { getFormat, load, transformSource } from 'ts-node/esm/transpile-only'
