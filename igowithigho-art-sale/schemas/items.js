export default {
    name: "items",
    title: "Items",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image"
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "price",
            title: "Price in $",
            type: "number"
        },
        {
            name: "rating",
            title: "Rating",
            type: "number"
        }
    ]
}