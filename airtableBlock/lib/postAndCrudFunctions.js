// posting all crud
// If a document is being referenced by Sanity it can not be deleted will likely result in 409 error.
export const postToSanity = (mutations, table, records) => {
  const url = 'https://hhd5q8cp.api.sanity.io/v1/data/mutate/production';

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization:
        'Bearer ' +
        'skCGs2ZAU36V7b2pHd4YVPeIejfBHgEJQRsUUXOaAmg2YfQh0h5nWzJzrL9LBLwXuqlFGAk5vRofr1kDGL7Dp9HPFeWakjTHNTSsvOzuaGaldT8qAp2U0PD96mSusgLJLMe4SPcc7hC11eyBYW8WlxcDluavQ8L5w5DajBnho4QJ7NNG6Qdg',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mutations }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.results[0].operation === 'delete') {
        // blow were code for delete all
        // records.forEach((record) => {
        //   table.updateRecordAsync(record, {
        //     'Exist in Sanity': false,
        //   });
        // });
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
    })
    .catch((error) => console.error(error));
};

// delete all function
export const deleteMutations = (records, table, type, cb) => {
  const mutations = [{ delete: { query: `*[_type == '${type}']` } }];

  cb(mutations, table, records);
};

// delete selected function
export const deleteSelectedMutations = (recordIds, table, baseId, tableId, cb) => {
  if (recordIds.length === 0) {
    alert('No record seleted');
  }
  const mutations = recordIds.map((recordId) => {
    const id = `${baseId}-${tableId}-${recordId}`;

    return {
      delete: {
        id,
      },
    };
  });

  mutations.forEach((el) => {
    cb([el], table);
  });
};
