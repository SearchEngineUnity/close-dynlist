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
    const setArray = record.getCellValue('Set').map((rec) => {
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
        _type: 'categorySet',
        title: record.getCellValueAsString('ID') || null,
        name: record.getCellValueAsString('Full Name') || null,
        set: setArray,
      },
    };
  });

  recordsList.forEach((el) => {
    cb([el], table);
  });
};

const CategorySetToSanity = (props) => {
  const globalConfig = useGlobalConfig();
  const { base } = props;
  const baseId = base.id;
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
        Create or Replace ALL CATEGORY-SET Records in Sanity
      </Button>
      <br />
      <Button
        variant="primary"
        onClick={() => {
          deleteSelectedMutations(selectedRecordIds, table, baseId, tableId, postToSanity);
        }}
        icon="edit"
      >
        Delete SELECTED CATEGROY-SET Record(s) from Sanity
      </Button>
    </Box>
  );
};

export default CategorySetToSanity;
