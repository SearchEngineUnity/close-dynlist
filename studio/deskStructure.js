import S from '@sanity/desk-tool/structure-builder';
import { AiOutlineGlobal } from 'react-icons/ai';
import { ImQuotesRight } from 'react-icons/im';

export default () =>
  S.list()
    .title('CL Dynlist Subdomain')
    .items([
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([S.documentTypeListItem('dynlistPage').title('Quotes Dynlist Pages')]),
        ),
      S.listItem()
        .title('Quotes List')
        .icon(ImQuotesRight)
        .child(
          S.list()
            .title('List')
            .items([
              S.documentTypeListItem('quote').title('Quotes'),
              S.divider(),
              S.documentTypeListItem('categorySet').title('Category Sets'),
              S.documentTypeListItem('category').title('Categories'),
            ]),
        ),
      S.documentTypeListItem('redirect').title('Redirects'),
    ]);
