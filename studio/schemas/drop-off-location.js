export default {
  name: "dropOffLocation",
  type: "document",
  title: "Drop Off Location",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
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
    {
      name: "region",
      type: "reference",
      title: "Region",
      to: [{ type: "region" }],
    },
  ],
};
