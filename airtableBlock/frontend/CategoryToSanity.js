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

const createAndUpdateMutations = async (records, table, baseId, tableId, cb) => {
  const recordsList = records.map((record) => {
    const id = `${baseId}-${tableId}-${record.id}`;

    return {
      createOrReplace: {
        _id: id,
        _type: 'category',
        title: record.getCellValueAsString('ID'),
        name: record.getCellValueAsString('Full Name'),
      },
    };
  });

  (async () => {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < recordsList.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      const result = await cb([recordsList[index]], table);

      console.log(result);
    }
  })();
};

const CategoryToSanity = (props) => {
  const { base } = props;
  const baseId = base.id;
  // const tableId = table.id;
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get('activeTableId');
  const table = base.getTableById(tableId);
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
          createAndUpdateMutations(records, table, baseId, tableId, postToSanity);
        }}
        icon="edit"
      >
        Create or Replace ALL CATEGORY Records in Sanity
      </Button>
      <br />
      <Button
        variant="primary"
        onClick={() => {
          deleteSelectedMutations(selectedRecordIds, table, baseId, tableId, postToSanity);
        }}
        icon="edit"
      >
        Delete SELECTED CATEGROY Record(s) from Sanity
      </Button>
    </Box>
  );
};

export default CategoryToSanity;
