import React from 'react';
import { useRecords, Button, Box, useGlobalConfig } from '@airtable/blocks/ui';
import { asyncLoop } from '../lib/helperFunctions';
import { postToSanity, deleteSelectedMutations } from '../lib/postAndCrudFunctions';

const createAndUpdateMutations = async (recordIds, table, baseId, tableId, cb) => {
  const allRecords = table.selectRecords();
  const selectedRecords = recordIds.map((id) => allRecords.getRecordById(id));

  const recordsList = selectedRecords.map((record) => {
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

  await asyncLoop(recordsList, table, cb);
};

const CategoryToSanity = (props) => {
  const { base, cursor } = props;
  const baseId = base.id;
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get('activeTableId');
  const table = base.getTableById(tableId);
  // must run useRecords fo this to work...
  const records = useRecords(table);
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
          createAndUpdateMutations(selectedRecordIds, table, baseId, tableId, postToSanity);
        }}
        icon="edit"
      >
        Create or Replace SELECTED CATEGORY Records in Sanity
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
