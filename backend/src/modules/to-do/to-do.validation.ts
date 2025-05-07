import Joi from "joi";

const idSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/)
    .messages({
      "string.pattern.base": "ID must be a valid MongoDB ObjectId",
      "any.required": "ID is required",
    }),
});

const createTodoSchema = Joi.object({
  title: Joi.string().required().min(3).messages({
    "string.min": "Title must be at least {#limit} characters long",
    "any.required": "Title is required",
  }),
  description: Joi.string().allow("").optional(),
});

const updateTodoSchema = Joi.object({
  title: Joi.string().min(3).messages({
    "string.min": "Title must be at least {#limit} characters long",
  }),
  description: Joi.string().allow("").optional(),
})
  .min(1)
  .messages({
    "object.min": "At least one field must be provided for update",
  });

const searchQuerySchema = Joi.object({
  title: Joi.string().allow("").optional(),
});

const addDeadlineSchema = Joi.object({
  date: Joi.string()
    .required()
    .pattern(/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z)?$/)
    .messages({
      "string.pattern.base":
        "Date must be in ISO format (YYYY-MM-DD or YYYY-MM-DDThh:mm:ss.sssZ)",
      "any.required": "Date is required",
    }),
});

export default {
  idSchema,
  createTodoSchema,
  updateTodoSchema,
  searchQuerySchema,
  addDeadlineSchema,
};
