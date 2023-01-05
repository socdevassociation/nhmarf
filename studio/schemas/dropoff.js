export default {
  name: "dropoff",
  type: "document",
  title: "Drop Off Info",
  fields: [
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
