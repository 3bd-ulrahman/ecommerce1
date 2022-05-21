import algoliasearch from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';

import '@algolia/autocomplete-theme-classic';

const searchClient = algoliasearch(
    'FDB4OZA1C8',
    'e2086080818827346a4333eec474b31e'
);

autocomplete({
  container: '#autocomplete',
  debug: true,
  placeholder: 'Search for products',
  getSources({ query }) {
    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'products',
                query,
                params: {
                  hitsPerPage: 5,
                  attributesToSnippet: ['name:10', 'description:35'],
                  snippetEllipsisText: '…',
                },
              },
            ],
          });
        },
        templates: {
          item({ item, components, html }) {
            return html`<div class="aa-ItemWrapper">
              <div class="aa-ItemContent">
                <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                  <img
                    src="${item.image}"
                    alt="${item.name}"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="aa-ItemContentBody">
                  <div class="aa-ItemContentTitle">
                    ${components.Highlight({
                      hit: item,
                      attribute: 'name',
                    })}
                  </div>
                  <div class="aa-ItemContentDescription">
                    ${components.Snippet({
                      hit: item,
                      attribute: 'details',
                    })}
                  </div>
                </div>
                <div class="aa-ItemActions" style="position: absolute; right: 0;">
                </div>
              </div>
            </div>`;
          },
        },
        onSelect({ item }) {
          return window.location.href = window.location.origin + '/shop/' + item.slug;
        },
      },
    ];
  },
  renderNoResults({ render, html, state }, root) {
      render(
        html`
          <div class="aa-PanelLayout aa-Panel--scrollable">
            No results for "${state.query}".
          </div>
        `,
        root
      )
  },
});

