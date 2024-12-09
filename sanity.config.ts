// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { singletonTools } from 'sanity-plugin-singleton-tools';

import {
  singletonDocumentListItem,
  singletonDocumentListItems,
  filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';
import { PlugIcon } from '@sanity/icons';

export default defineConfig({
  name: 'default',
  title: 'MNL',

  projectId: '4nqt8ymh',
  dataset: 'production',

  plugins: [singletonTools(), structureTool({
    structure: (S, context) =>
      S.list()
        .title('Sanity Love Content')
        .items([
          ...singletonDocumentListItems({ S, context }),
          S.divider(),
          ...filteredDocumentListItems({ S, context }),
        ])
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },

})
