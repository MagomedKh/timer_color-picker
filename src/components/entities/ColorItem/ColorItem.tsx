import { Button, ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
import { FC, useDeferredValue, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteColor, editColor } from "../../../store/slices/paletteSlice";
import { PaletteColor } from "../../../types/Palette";
import styles from "./ColorItem.module.scss";

interface IColorItem {
   colorId: string;
   isLastEl: boolean;
}

const ColorItem: FC<IColorItem> = ({ colorId, isLastEl }) => {
   const dispatch = useDispatch();

   const [currentColor, setCurrentColor] = useState("#1677ff");
   const [open, setOpen] = useState(false);

   const isLastMountedRef = useRef(isLastEl);
   const deferredColor = useDeferredValue(currentColor);

   useEffect(() => {
      if (deferredColor) {
         const editedColor: PaletteColor = { hex: deferredColor, id: colorId };

         dispatch(editColor(editedColor));
      }
   }, [deferredColor]);

   useEffect(() => {
      if (isLastEl) {
         setOpen(isLastMountedRef.current);
      } else {
         isLastMountedRef.current = false;
      }
   }, [isLastEl]);

   const handleChange = (color: Color) => {
      setCurrentColor(color.toHexString());
   };

   const handleDelete = () => {
      dispatch(deleteColor(colorId));
   };

   return (
      <div className={styles.paletteItem}>
         <ColorPicker
            value={currentColor}
            onChange={handleChange}
            onOpenChange={setOpen}
            open={open || undefined}
            size="large"
         />

         <Button onClick={handleDelete} className={styles.closeBtn} type="text" size="small" />
      </div>
   );
};

export default ColorItem;
