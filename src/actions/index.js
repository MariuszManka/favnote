export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

// const dummyArticle = {
//     id: 1,
//     title: 'Wake me up when Vue ends',
//     content:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nulla qui excepturi necessitatibus unde! Reiciendis magnam earum adipisci repellat minima minus vel ratione laborum perspiciatis dignissimos. Earum vitae iusto minima Repellendus, ducimus quia a labore saepe rem excepturi quidem praesentium nostrum, error consequuntur et totam doloribus, nobis reiciendis nisi iusto laboriosam quis? Iste quaerat incidunt hic nesciunt molestias corporis obcaecati! Eaque odio quis vero ratione error expedita, numquam excepturi aliquam voluptate saepe quisquam beatae asperiores nostrum laborum ex mollitia odit. Sit aut quo error cupiditate corrupti aliquam repellendus officia voluptatum.',
//     twitterName: 'hello_roman',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '1 day',
//   };
