export const removeEmpty = (obj) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => v !== null)
      .map(([k, v]) => (typeof v === 'object' ? [k, removeEmpty(v)] : [k, v]))
      .filter(([k, v]) => Object.keys(v).length !== 0),
  );

// this function posts to sanity (cb) and updates the exist in sanity field in airtable (cb2)
export const asyncLoop = async (array, table, cb) => {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    const result = await cb([array[index]], table);
    console.log(result);

    if (index === array.length - 1) {
      alert('Update complete');
    }
  }
};

export const updateExistInSanityField = (result, mutations, table) => {
  if (!result.results[0].operation) {
    console.log('Something has gone wrong and not caught by error handler.');
  }

  if (result.results[0].operation === 'delete') {
    const selectedAirtableRecordId = mutations[0].delete.id.split('-')[2];
    table.updateRecordsAsync([
      {
        id: selectedAirtableRecordId,
        fields: {
          'Exist in Sanity': false,
        },
      },
    ]);
  }

  const airtableRecordId = mutations[0].createOrReplace._id.split('-')[2];
  table.updateRecordsAsync([
    {
      id: airtableRecordId,
      fields: {
        'Exist in Sanity': true,
      },
    },
  ]);
};
