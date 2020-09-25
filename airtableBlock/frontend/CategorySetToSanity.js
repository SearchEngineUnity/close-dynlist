import React from 'react';
import { useRecords, Button, Box, useGlobalConfig } from '@airtable/blocks/ui';
import { asyncLoop } from '../lib/helperFunctions';
import { postToSanity, deleteSelectedMutations } from '../lib/postAndCrudFunctions';

const createAndUpdateMutations = async (recordIds, table, baseId, tableId, categoryTableId, cb) => {
  const allRecords = table.selectRecords();
  const selectedRecords = recordIds.map((id) => allRecords.getRecordById(id));

  const recordsList = selectedRecords.map((record) => {
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

    return [
      {
        createOrReplace: {
          _id: id,
          _type: 'categorySet',
          title: record.getCellValueAsString('ID'),
          name: record.getCellValueAsString('Full Name'),
          set: setArray,
        },
      },
    ];
  });

  await asyncLoop(recordsList, table, cb);
};

const CategorySetToSanity = (props) => {
  const globalConfig = useGlobalConfig();
  const { base, cursor } = props;
  const baseId = base.id;
  const tableId = globalConfig.get('activeTableId');
  const table = base.getTableById(tableId);
  const categoryTableId = base.getTableByName('category').id;
  // must keep useRecords(table) though not using the records values
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
          createAndUpdateMutations(
            selectedRecordIds,
            table,
            baseId,
            tableId,
            categoryTableId,
            postToSanity,
          );
        }}
        icon="edit"
      >
        Create or Replace SELECTED CATEGORY-SET Records in Sanity
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
