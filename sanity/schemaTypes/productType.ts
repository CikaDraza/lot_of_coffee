import { TrolleyIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType ({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required()   
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()   
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true
      }  
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent", 
    }),
    defineField({
      name: "prices",
      title: "Prices",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "size",
              title: "Size",
              type: "string",
              options: {
                list: [
                  { title: "Small", value: "small" },
                  { title: "Medium", value: "medium" },
                  { title: "Large", value: "large" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],   
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0)   
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      prices: "prices",
    },
    prepare({ title, media, prices }) {
      const firstPrice = prices?.[0];
      return {
        title: title,
        subtitle: firstPrice
        ? `$${firstPrice.price} - ${firstPrice.size.toUpperCase()}`
        : "No price available",
        media: media
      }
    }
  }
})