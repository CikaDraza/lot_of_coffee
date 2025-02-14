import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Sale Description",
      type: "text"
    }),
    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Amount off in percentage or fixed vaule"
    }),
    defineField({
      name: "couponCode",
      title: "Cuopon Code",
      type: "string"
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime"
    }),
    defineField({
      name: "validUnitl",
      title: "Valid Until",
      type: "datetime"
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Toggle to active/deactive the sale",
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive"
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? "Active" : "Inactive";
      return {
        title,
        subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`
      }
    }
  }
})