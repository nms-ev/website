import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://api.nms-ev.org/graphql': {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  },
  documents: ['./src/**/*.gql'],
  generates: {
    'src/lib/graphql/gen.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        useTypeImports: true,
        immutableTypes: true,
        dedupeFragments: true,
      },
    },
    '.schema.gql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config
