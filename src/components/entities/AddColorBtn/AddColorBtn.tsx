import { Button } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addColor } from "../../../store/slices/paletteSlice";

const AddColorBtn: FC = () => {
   const dispatch = useDispatch();

   const handleAddColor = () => {
      dispatch(addColor());
   };

   return (
      <Button onClick={handleAddColor} type="primary">
         Добавить цвет
      </Button>
   );
};

export default AddColorBtn;
