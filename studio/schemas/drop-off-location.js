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
      name: "address",
      description: "Navigable address of the drop off location",
      type: "string",
    },
    {
      name: "region",
      type: "reference",
      title: "Region",
      to: [{ type: "region" }],
    },
  ],
};
