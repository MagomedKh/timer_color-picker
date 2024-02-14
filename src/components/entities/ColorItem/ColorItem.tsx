import { Button, ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
import { FC, useDeferredValue, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteColor, editColor } from "../../../store/slices/paletteSlice";
import { PaletteColor } from "../../../types/Palette";
import styles from "./ColorItem.module.scss";

interface IColorItem {
   color: PaletteColor;
}

const ColorItem: FC<IColorItem> = ({ color }) => {
   const dispatch = useDispatch();

   const [open, setOpen] = useState(false);
   const [currentColor, setCurrentColor] = useState(color.hex || "#1677ff");

   const deferredColor = useDeferredValue(currentColor);

   useEffect(() => {
      if (deferredColor) {
         const editedColor: PaletteColor = { hex: deferredColor, id: color.id };

         dispatch(editColor(editedColor));
      }
   }, [deferredColor]);

   useEffect(() => {
      if (color._isNew) {
         setOpen(true);

         const notNewColor: PaletteColor = { hex: currentColor, id: color.id, _isNew: false };
         dispatch(editColor(notNewColor));
      }
   }, []);

   const handleChange = (color: Color) => {
      setCurrentColor(color.toHexString());
   };

   const handleDelete = () => {
      dispatch(deleteColor(color.id));
   };

   return (
      <div className={styles.paletteItem}>
         <ColorPicker
            value={currentColor}
            onChange={handleChange}
            onOpenChange={setOpen}
            open={open}
            size="large"
         />

         <Button onClick={handleDelete} className={styles.closeBtn} type="text" size="small" />
      </div>
   );
};

export default ColorItem;
