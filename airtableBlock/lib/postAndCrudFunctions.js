// posting all crud
// If a document is being referenced by Sanity it can not be deleted will likely result in 409 error.

import { asyncLoop, updateExistInSanityField } from './helperFunctions';

// eslint-disable-next-line consistent-return
export const postToSanity = async (mutations, table) => {
  const url = 'https://hhd5q8cp.api.sanity.io/v1/data/mutate/production';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer ' +
          'skCGs2ZAU36V7b2pHd4YVPeIejfBHgEJQRsUUXOaAmg2YfQh0h5nWzJzrL9LBLwXuqlFGAk5vRofr1kDGL7Dp9HPFeWakjTHNTSsvOzuaGaldT8qAp2U0PD96mSusgLJLMe4SPcc7hC11eyBYW8WlxcDluavQ8L5w5DajBnho4QJ7NNG6Qdg',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mutations }),
    });

    if (response.ok) {
      const result = await response.json();
      updateExistInSanityField(result, mutations, table);
      return 'Success!';
    }
  } catch (error) {
    // should write better error handling especially for a 409 error
    // 409 error (conflict) is usually caused by one trying to delete a document being used as a reference
    console.log(error);
    return 'Failure';
  }
};

// delete selected function
export const deleteSelectedMutations = async (recordIds, table, baseId, tableId, cb) => {
  if (recordIds.length === 0) {
    alert('No record seleted');
  }
  const mutations = recordIds.map((recordId) => {
    const id = `${baseId}-${tableId}-${recordId}`;

    return [
      {
        delete: {
          id,
        },
      },
    ];
  });

  await asyncLoop(mutations, table, cb);
};
