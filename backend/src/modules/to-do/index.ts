import { Router } from "express";
import toDoController from "./to-do.controller";
import toDoValidation from "./to-do.validation";
import { validate } from "../../middlewares/validation.middleware";

const router = Router();

router.post(
  "/",
  validate({
    body: toDoValidation.createTodoSchema,
  }),
  toDoController.create
);

router.patch(
  "/:id",
  validate({
    body: toDoValidation.updateTodoSchema,
  }),
  toDoController.update
);

router.delete("/:id", toDoController.deleteTodo);

router.get("/", toDoController.fetchTodo);

router.put("/:id", toDoController.changeStatus);

router.get(
  "/search",
  validate({ query: toDoValidation.searchQuerySchema }),
  toDoController.searchByTitle
);

router.patch(
  "/add-deadline/:id",
  validate({ body: toDoValidation.addDeadlineSchema }),
  toDoController.addDeadline
);

export const toDoRoutes = router;
