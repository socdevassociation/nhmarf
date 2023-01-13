export default {
  name: "storeLocation",
  type: "document",
  title: "Store Location",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
