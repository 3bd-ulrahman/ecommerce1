import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, stats, clearRefinements, refinementList, pagination } from 'instantsearch.js/es/widgets';
import { connectConfigure, connectInfiniteHits } from 'instantsearch.js/es/connectors';


/* Pagination */
// const search = instantsearch({
//     indexName: 'products',
//     searchClient: algoliasearch(
//         'FDB4OZA1C8',
//         'e2086080818827346a4333eec474b31e'
//     ),
// });

// const customConfigure = connectConfigure();
// search.addWidgets([
//     customConfigure({
//         container: document.querySelector('#configure'),
//         searchParameters: {
//           hitsPerPage: 9,
//         },
//     }),
//     searchBox({
//         container: '#searchbox',
//     }),
//     stats({
//         container: '#stats',
//         templates: {
//             text: `
//             {{#areHitsSorted}}
//                 {{#hasNoSortedResults}}No relevant results{{/hasNoSortedResults}}
//                 {{#hasOneSortedResults}}1 relevant result{{/hasOneSortedResults}}
//                 {{#hasManySortedResults}}{{#helpers.formatNumber}}{{nbSortedHits}}{{/helpers.formatNumber}} relevant results{{/hasManySortedResults}}
//                 sorted out of {{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}
//             {{/areHitsSorted}}
//             {{^areHitsSorted}}
//                 {{#hasNoResults}}<div style="font-size: 1.5rem;">No results for {{ query }}</div>{{/hasNoResults}}
//                 {{#hasOneResult}}1 result found in {{processingTimeMS}}ms{{/hasOneResult}}
//                 {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results found in {{processingTimeMS}}ms{{/hasManyResults}}
//             {{/areHitsSorted}}

//             `,
//         },
//     }),
//     clearRefinements({
//         container: '#clear-refinements',
//     }),
//     refinementList({
//         container: '#brand-list',
//         attribute: 'categories',
//     }),
//     hits({
//         container: '#hits',
//         templates: {
//         item: `
//             <div onclick="window.location.href = window.location.origin + '/shop/{{slug}}'">
//               <div class="hit-name">
//                   {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
//               </div>
//               <img src="{{image}}" align="left" alt="{{name}}" />
//               <div class="hit-description">
//                   {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
//               </div>
//               <div class="hit-price">\${{price}}</div>
//             </div>
//         `,
//         empty: '',
//         },
//     }),
//     pagination({
//         container: '#pagination',
//     }),
// ]);

// search.start();



/* infinte scroll */
let lastRenderArgs;

const infiniteHits = connectInfiniteHits(
  (renderArgs, isFirstRender) => {
    const { hits, showMore, widgetParams } = renderArgs;
    const { container } = widgetParams;

    lastRenderArgs = renderArgs;

    if (isFirstRender) {
      const sentinel = document.createElement('div');
      container.appendChild(document.createElement('ul'));
      container.appendChild(sentinel);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinel);

      return;
    }

    container.querySelector('ul').innerHTML = hits
      .map(
        hit =>
          `<li onclick="window.location.href = window.location.origin + '/shop/${hit.slug}'">
            <div class="ais-Hits-item">
              <header class="hit-name">
                ${instantsearch.highlight({ attribute: 'name', hit })}
              </header>
              <img src="${hit.image}" align="left" />
              <p class="hit-description">
                ${instantsearch.highlight({ attribute: 'description', hit })}
              </p>
              <p class="hit-price" style="margin-top: 10px;">
                Price: $${hit.price}
              </p>
            </div>
          </li>`,
      )
      .join('');
  }
);

const searchClient = algoliasearch(
  'FDB4OZA1C8',
  'e2086080818827346a4333eec474b31e'
);

const search = instantsearch({
  indexName: 'products',
  searchClient,
});

const customConfigure = connectConfigure();
search.addWidgets([
  customConfigure({
    container: document.querySelector('#configure'),
    searchParameters: {
      hitsPerPage: 9,
    },
  }),
  searchBox({
    container: '#searchbox',
  }),
  stats({
    container: '#stats',
    templates: {
        text: `
        {{#areHitsSorted}}
            {{#hasNoSortedResults}}No relevant results{{/hasNoSortedResults}}
            {{#hasOneSortedResults}}1 relevant result{{/hasOneSortedResults}}
            {{#hasManySortedResults}}{{#helpers.formatNumber}}{{nbSortedHits}}{{/helpers.formatNumber}} relevant results{{/hasManySortedResults}}
            sorted out of {{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}
        {{/areHitsSorted}}
        {{^areHitsSorted}}
            {{#hasNoResults}}<div style="font-size: 1.5rem;">No results for {{ query }}</div>{{/hasNoResults}}
            {{#hasOneResult}}1 result found in {{processingTimeMS}}ms{{/hasOneResult}}
            {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results found in {{processingTimeMS}}ms{{/hasManyResults}}
        {{/areHitsSorted}}

        `,
    },
  }),
  refinementList({
    container: '#brand-list',
    attribute: 'categories',
  }),
  clearRefinements({
    container: '#clear-refinements',
  }),
  infiniteHits({
    container: document.querySelector('#hits'),
  }),
]);

search.start();
