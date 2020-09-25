import React from 'react';
import { cursor, globalConfig } from '@airtable/blocks';
import { initializeBlock, useBase, Box, useLoadable, useWatchable } from '@airtable/blocks/ui';
import QuoteToSanity from './QuoteToSanity';
import CategorySetToSanity from './CategorySetToSanity';
import CategoryToSanity from './CategoryToSanity';

const App = () => {
  const base = useBase();

  useLoadable(cursor);
  useWatchable(cursor, ['activeTableId', 'selectedRecordIds'], () => {
    globalConfig.setAsync('activeTableId', cursor.activeTableId);
  });

  const activeTableId = globalConfig.get('activeTableId')
    ? globalConfig.get('activeTableId')
    : 'No table selected';

  switch (activeTableId) {
    case 'tbl7BbubgVEMD5Kje':
      return <QuoteToSanity base={base} cursor={cursor} />;

    case 'tblnrE5rwDtBeZeUE':
      return <CategoryToSanity base={base} cursor={cursor} />;

    case 'tbluLD9PD6Gujv3m3':
      return <CategorySetToSanity base={base} cursor={cursor} />;

    default:
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="default"
          backgroundColor="white"
          padding="20px"
          width="100vw"
          height="100vh"
          overflow="hidden"
        >
          <h3>
            Please select the &apos;quote&apos;, &apos;category&apos;, or &apos;categorySet&apos;
            table to start
          </h3>
        </Box>
      );
  }
};

initializeBlock(() => <App />);
