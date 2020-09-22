import React from 'react';
import { cursor } from '@airtable/blocks';
import {
  useRecords,
  Button,
  Box,
  useLoadable,
  useWatchable,
  useGlobalConfig,
} from '@airtable/blocks/ui';
import { postToSanity, deleteSelectedMutations } from '../lib/postAndCrudFunctions';

const createAndUpdateMutations = (records, table, baseId, tableId, categoryTableId, cb) => {
  const recordsList = records.map((record) => {
    const id = `${baseId}-${tableId}-${record.id}`;
    console.log(record.getCellValue('Primary')[0]);
    console.log(`${baseId}-${categoryTableId}-${record.getCellValue('Primary')[0].id}`);

    const secondarySet = record.getCellValue('Secondary').map((rec) => {
      const setId = `${baseId}-${categoryTableId}-${rec.id}`;
      const setValue = {
        _ref: setId,
        _type: 'reference',
        _key: rec.id,
      };

      return setValue;
    });

    const qualifyingSet = record.getCellValue('Qualifying').map((rec) => {
      const setId = `${baseId}-${categoryTableId}-${rec.id}`;
      const setValue = {
        _ref: setId,
        _type: 'reference',
        _key: rec.id,
      };

      return setValue;
    });

    return {
      createOrReplace: {
        _id: id,
        _type: 'quote',
        text: record.getCellValueAsString('Quote text'),
        source: record.getCellValueAsString('Source') || 'Unknown',
        youtube: record.getCellValueAsString('Youtube'),
        primary: {
          _ref: `${baseId}-${categoryTableId}-${record.getCellValue('Primary')[0].id}`,
          _type: 'reference',
        },
        secondary: secondarySet,
        qualifying: qualifyingSet,
      },
    };
  });

  // const mutations = recordsList.map((r) => removeEmpty(r));

  recordsList.forEach((el) => {
    cb([el], table);
  });
};

const QuoteToSanity = (props) => {
  const { base } = props;
  const baseId = base.id;
  // const tableId = table.id;
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get('activeTableId');
  const table = base.getTableById(tableId);
  const categoryTableId = base.getTableByName('category').id;
  const records = useRecords(table);

  // cursor is for listening to single record change - no currently set up
  useLoadable(cursor);
  useWatchable(cursor, ['selectedRecordIds']);

  const { selectedRecordIds } = cursor;

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
      <Button
        variant="primary"
        onClick={() => {
          createAndUpdateMutations(records, table, baseId, tableId, categoryTableId, postToSanity);
        }}
        icon="edit"
      >
        Create or Replace ALL QUOTE Records in Sanity
      </Button>
      <br />
      <Button
        variant="primary"
        onClick={() => {
          deleteSelectedMutations(selectedRecordIds, table, baseId, tableId, postToSanity);
        }}
        icon="edit"
      >
        Delete SELECTED QUOTE Record(s) from Sanity
      </Button>
    </Box>
  );
};

export default QuoteToSanity;
