import { Modal } from "../vibes";
import { ExpenseForm } from "./ExpenseForm";
import { CategoryForm } from "./CategoryForm";
import { Category, CategoryFormData, ExpenseFormData } from "../types";

export type ModalComponentProps =
  | {
      type: "expenses";
      isOpen: boolean;
      onSubmit: (data: ExpenseFormData) => Promise<void>;
      onClose: () => void;
      categories: Category[];
    }
  | {
      type: "categories";
      isOpen: boolean;
      onSubmit: (data: CategoryFormData) => Promise<void>;
      onClose: () => void;
    };

function ModalComponent(props: ModalComponentProps) {
  const { type, isOpen, onSubmit, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {type == "expenses" ? (
        <ExpenseForm
          onSubmit={onSubmit}
          onCancel={onClose}
          categories={props.categories}
        />
      ) : (
        <CategoryForm
          onSubmit={onSubmit}
          onCancel={onClose}
          submitLabel="Add Category"
        />
      )}
    </Modal>
  );
}

export default ModalComponent;
